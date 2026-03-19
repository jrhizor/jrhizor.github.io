"use client";

import { TAILWIND_COLORS } from "~/lib/tailwind-color-utils";

type LlmRow = {
  input: string;
  opusGuess: string;
  sonnetGuess: string;
};

const LLM_ROWS: LlmRow[] = [
  { input: "#9c5eb2", opusGuess: "purple-500", sonnetGuess: "purple-600" },
  { input: "#60b252", opusGuess: "green-500", sonnetGuess: "green-500" },
  { input: "#00ea00", opusGuess: "green-400", sonnetGuess: "green-400" },
  { input: "#46a2a8", opusGuess: "teal-500", sonnetGuess: "teal-500" },
  { input: "#42a482", opusGuess: "emerald-500", sonnetGuess: "emerald-500" },
  { input: "#b36392", opusGuess: "pink-500", sonnetGuess: "pink-500" },
  { input: "#9ea846", opusGuess: "lime-500", sonnetGuess: "lime-500" },
  { input: "#a0b25c", opusGuess: "lime-400", sonnetGuess: "lime-400" },
  { input: "#ba6676", opusGuess: "rose-400", sonnetGuess: "rose-400" },
  { input: "#00fc78", opusGuess: "emerald-400", sonnetGuess: "emerald-400" },
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

export default function LlmComparisonTable() {
  return (
    <div className="not-prose my-8 max-w-2xl">
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/60 text-left">
                <th className="px-3 py-2 font-medium text-xs">Color</th>
                <th className="px-3 py-2 font-medium text-xs">Opus 4.6</th>
                <th className="px-3 py-2 font-medium text-xs">Sonnet 4.6</th>
              </tr>
            </thead>
            <tbody>
              {LLM_ROWS.map((row) => {
                const opusHex = TAILWIND_COLORS[row.opusGuess] ?? "#000";
                const sonnetHex = TAILWIND_COLORS[row.sonnetGuess] ?? "#000";
                return (
                  <tr key={row.input} className="border-t border-border">
                    <td className="px-3 py-2">
                      <span className="font-mono text-xs">{row.input}</span>
                    </td>
                    <td className="px-3 py-2">
                      <MatchCell
                        inputHex={row.input}
                        matchHex={opusHex}
                        matchName={row.opusGuess}
                      />
                    </td>
                    <td className="px-3 py-2">
                      <MatchCell
                        inputHex={row.input}
                        matchHex={sonnetHex}
                        matchName={row.sonnetGuess}
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
