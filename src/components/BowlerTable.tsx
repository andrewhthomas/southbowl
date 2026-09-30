import { useMemo, useState } from 'react';
import type { Bowler } from '../data/types';
import { cn, toSlug } from '../lib/utils';

interface Props {
  bowlers: Bowler[];
  /** Season URL prefix: "" for the current season, "/<id>" for an archived one. */
  base: string;
}

type SortKey = keyof Pick<
  Bowler,
  'name' | 'team' | 'games' | 'pins' | 'average' | 'highGame' | 'highSeries' | 'handicap'
>;

interface Column {
  key: SortKey;
  label: string;
  align: 'left' | 'center' | 'right';
  numeric: boolean;
}

const COLUMNS: Column[] = [
  { key: 'name', label: 'Bowler', align: 'left', numeric: false },
  { key: 'team', label: 'Team', align: 'left', numeric: false },
  { key: 'games', label: 'Games', align: 'center', numeric: true },
  { key: 'pins', label: 'Pins', align: 'right', numeric: true },
  { key: 'average', label: 'Average', align: 'right', numeric: true },
  { key: 'highGame', label: 'High Game', align: 'right', numeric: true },
  { key: 'highSeries', label: 'High Series', align: 'right', numeric: true },
  { key: 'handicap', label: 'Handicap', align: 'right', numeric: true },
];

// Matches the badge colours the static table used
function avgClass(average: number): string {
  if (average >= 180) return 'bg-green-500/20 text-green-400';
  if (average >= 150) return 'bg-blue-500/20 text-blue-400';
  return 'bg-muted text-muted-foreground';
}

const profileIcon = (
  <svg
    className="w-3.5 h-3.5 inline-block opacity-50 group-hover:opacity-100 transition-opacity"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export default function BowlerTable({ bowlers, base }: Props) {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('average');
  const [descending, setDescending] = useState(true);

  const href = (name: string) => `${base}/bowlers/${toSlug(name)}`;

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = needle
      ? bowlers.filter(
          b => b.name.toLowerCase().includes(needle) || b.team.toLowerCase().includes(needle)
        )
      : bowlers;

    return filtered.slice().sort((a, b) => {
      const left = a[sortKey];
      const right = b[sortKey];
      const cmp =
        typeof left === 'number' && typeof right === 'number'
          ? left - right
          : String(left).localeCompare(String(right));
      return descending ? -cmp : cmp;
    });
  }, [bowlers, query, sortKey, descending]);

  // New column: start numbers high-to-low and names A-to-Z. Same column: flip.
  function sortBy(column: Column) {
    if (column.key === sortKey) {
      setDescending(d => !d);
    } else {
      setSortKey(column.key);
      setDescending(column.numeric);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search bowlers or teams"
          aria-label="Search bowlers or teams"
          className="flex-1 min-w-48 max-w-xs bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {rows.length} of {bowlers.length} bowlers
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="bg-card border border-border rounded-lg px-4 py-8 text-center text-sm text-muted-foreground">
          No bowler or team matches &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-card border border-border rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-xs uppercase">
                  {COLUMNS.map(column => {
                    const active = column.key === sortKey;
                    return (
                      <th
                        key={column.key}
                        aria-sort={active ? (descending ? 'descending' : 'ascending') : 'none'}
                        className={cn(
                          'px-4 py-3 font-medium',
                          column.align === 'left' && 'text-left',
                          column.align === 'center' && 'text-center',
                          column.align === 'right' && 'text-right'
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => sortBy(column)}
                          className={cn(
                            'inline-flex items-center gap-1 uppercase hover:text-foreground transition-colors',
                            active && 'text-foreground'
                          )}
                        >
                          {column.label}
                          <span aria-hidden="true" className={cn('text-[9px]', !active && 'opacity-0')}>
                            {descending ? '▼' : '▲'}
                          </span>
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map(b => (
                  <tr
                    key={b.name}
                    className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium">
                      <a
                        href={href(b.name)}
                        className="group inline-flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        {b.name}
                        {profileIcon}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{b.team}</td>
                    <td className="px-4 py-3 text-center font-mono">{b.games}</td>
                    <td className="px-4 py-3 text-right font-mono">{b.pins.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className={cn(
                          'inline-block px-2 py-0.5 rounded text-xs font-bold font-mono',
                          avgClass(b.average)
                        )}
                      >
                        {b.average}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono">{b.highGame}</td>
                    <td className="px-4 py-3 text-right font-mono">{b.highSeries || '--'}</td>
                    <td className="px-4 py-3 text-right font-mono text-muted-foreground">
                      {b.handicap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-2">
            {rows.map(b => (
              <div key={b.name} className="bg-card border border-border rounded-lg px-4 py-3">
                <div className="flex items-center justify-between mb-1">
                  <a
                    href={href(b.name)}
                    className="group inline-flex items-center gap-1 font-medium text-sm hover:text-primary transition-colors"
                  >
                    {b.name}
                    {profileIcon}
                  </a>
                  <span
                    className={cn(
                      'inline-block px-2 py-0.5 rounded text-xs font-bold font-mono',
                      avgClass(b.average)
                    )}
                  >
                    {b.average} avg
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{b.team}</p>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground block">Gm</span>
                    <span className="font-mono">{b.games}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">HG</span>
                    <span className="font-mono">{b.highGame}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">HS</span>
                    <span className="font-mono">{b.highSeries || '--'}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Hcp</span>
                    <span className="font-mono">{b.handicap}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
