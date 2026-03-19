"use client";

import { TAILWIND_COLORS } from "~/lib/tailwind-color-utils";

type ComparisonRow = {
  input: string;
  rgbMatch: string;
  oklabMatch: string;
};

const OKLCH_WINS: ComparisonRow[] = [
  { input: "#9c5eb2", rgbMatch: "mauve-400", oklabMatch: "fuchsia-700" },
  { input: "#60b252", rgbMatch: "olive-500", oklabMatch: "green-500" },
  { input: "#00ea00", rgbMatch: "green-600", oklabMatch: "lime-400" },
  { input: "#46a2a8", rgbMatch: "emerald-400", oklabMatch: "cyan-600" },
  { input: "#42a482", rgbMatch: "emerald-400", oklabMatch: "emerald-600" },
  { input: "#b36392", rgbMatch: "taupe-400", oklabMatch: "pink-600" },
];

const RGB_WINS: ComparisonRow[] = [
  { input: "#9ea846", rgbMatch: "lime-400", oklabMatch: "yellow-600" },
  { input: "#a0b25c", rgbMatch: "lime-400", oklabMatch: "olive-400" },
  { input: "#ba6676", rgbMatch: "red-400", oklabMatch: "mauve-500" },
  { input: "#00fc78", rgbMatch: "emerald-500", oklabMatch: "lime-400" },
];

function MatchCell({
  inputHex,
  matchHex,
  matchName,
}: {
  inputHex: string;
  matchHex: string;
  matchName: string;
}) {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <span
        className="w-5 h-5 rounded border border-black/10 shrink-0"
        style={{ backgroundColor: inputHex }}
      />
      <span className="text-muted-foreground text-xs">→</span>
      <span
        className="w-5 h-5 rounded border border-black/10 shrink-0"
        style={{ backgroundColor: matchHex }}
      />
      <span className="font-mono text-xs truncate">{matchName}</span>
    </div>
  );
}

function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="not-prose my-8 max-w-2xl">
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/60 text-left">
                <th className="px-3 py-2 font-medium text-xs">Color</th>
                <th className="px-3 py-2 font-medium text-xs">Closest RGB</th>
                <th className="px-3 py-2 font-medium text-xs">Closest OKLAB</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const rgbHex = TAILWIND_COLORS[row.rgbMatch] ?? "#000";
                const okHex = TAILWIND_COLORS[row.oklabMatch] ?? "#000";
                return (
                  <tr key={row.input} className="border-t border-border">
                    <td className="px-3 py-2">
                      <span className="font-mono text-xs">{row.input}</span>
                    </td>
                    <td className="px-3 py-2">
                      <MatchCell
                        inputHex={row.input}
                        matchHex={rgbHex}
                        matchName={row.rgbMatch}
                      />
                    </td>
                    <td className="px-3 py-2">
                      <MatchCell
                        inputHex={row.input}
                        matchHex={okHex}
                        matchName={row.oklabMatch}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function WorstOffendersTable() {
  return <ComparisonTable rows={OKLCH_WINS} />;
}

export function RgbWinsTable() {
  return <ComparisonTable rows={RGB_WINS} />;
}
