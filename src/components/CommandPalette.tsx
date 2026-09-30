import { useEffect, useMemo, useRef, useState } from 'react';
import { navigate } from 'astro:transitions/client';
import { cn } from '../lib/utils';

export interface PaletteItem {
  group: string;
  label: string;
  sub?: string;
  href: string;
}

interface Props {
  items: PaletteItem[];
}

const MAX_RESULTS = 40;

/** -1 means no match; lower is a better hit. */
function score(item: PaletteItem, needle: string): number {
  const label = item.label.toLowerCase();
  if (label.startsWith(needle)) return 0;
  if (label.includes(needle)) return 1;
  if ((item.sub ?? '').toLowerCase().includes(needle)) return 2;
  return -1;
}

export default function CommandPalette({ items }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      // Nothing typed yet: the things worth jumping to blind.
      return items.filter(i => i.group === 'Pages' || i.group === 'Seasons').slice(0, MAX_RESULTS);
    }
    return items
      .map((item, index) => ({ item, index, rank: score(item, needle) }))
      .filter(hit => hit.rank >= 0)
      .sort((a, b) => a.rank - b.rank || a.index - b.index)
      .slice(0, MAX_RESULTS)
      .map(hit => hit.item);
  }, [items, query]);

  // Open on Cmd/Ctrl+K from anywhere, or when the header buttons ask.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(o => !o);
      }
    }
    function onOpen() {
      setOpen(true);
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('palette:open', onOpen);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('palette:open', onOpen);
    };
  }, []);

  // Reset and focus each time it opens; lock the page behind it.
  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    inputRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  // Keep the highlighted row in view when arrowing past the fold.
  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  function go(item: PaletteItem) {
    setOpen(false);
    navigate(item.href);
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      setOpen(false);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive(i => (results.length ? (i + 1) % results.length : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive(i => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (event.key === 'Enter' && results[active]) {
      event.preventDefault();
      go(results[active]);
    }
  }

  if (!open) return null;

  let lastGroup = '';

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[10vh] bg-background/80 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the league"
        className="w-full max-w-lg bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
        onClick={event => event.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-4 border-b border-border">
          <svg
            className="w-4 h-4 text-muted-foreground shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Search bowlers, teams, weeks, pages"
            aria-label="Search bowlers, teams, weeks, pages"
            className="flex-1 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <kbd className="hidden sm:block text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>

        <ul ref={listRef} className="max-h-80 overflow-y-auto py-1">
          {results.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-muted-foreground">No matches.</li>
          )}
          {results.map((item, index) => {
            const newGroup = item.group !== lastGroup;
            lastGroup = item.group;
            return (
              <li key={`${item.group}-${item.href}-${item.label}`}>
                {newGroup && (
                  <p className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    {item.group}
                  </p>
                )}
                <button
                  type="button"
                  data-active={index === active}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => go(item)}
                  className={cn(
                    'w-full flex items-center justify-between gap-3 px-4 py-2 text-left text-sm transition-colors',
                    index === active ? 'bg-secondary text-foreground' : 'text-muted-foreground'
                  )}
                >
                  <span className="truncate font-medium">{item.label}</span>
                  {item.sub && <span className="shrink-0 text-xs opacity-70">{item.sub}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
