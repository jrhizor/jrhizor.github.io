"use client";

import { useMemo } from "react";
import type { RGB } from "~/lib/tailwind-color-utils";
import {
  findClosestAdaptive,
  hexToRgb,
  TAILWIND_COLORS,
} from "~/lib/tailwind-color-utils";

type InputRow = {
  input: string;
  rgbMatch: string;
  oklabMatch: string;
};

type Row = InputRow & { adaptiveMatch: string };

const HARD_CASES: InputRow[] = [
  { input: "#9c5eb2", rgbMatch: "mauve-400", oklabMatch: "fuchsia-700" },
  { input: "#60b252", rgbMatch: "olive-500", oklabMatch: "green-500" },
  { input: "#00ea00", rgbMatch: "green-600", oklabMatch: "lime-400" },
  { input: "#46a2a8", rgbMatch: "emerald-400", oklabMatch: "cyan-600" },
  { input: "#42a482", rgbMatch: "emerald-400", oklabMatch: "emerald-600" },
  { input: "#b36392", rgbMatch: "taupe-400", oklabMatch: "pink-600" },
  { input: "#9ea846", rgbMatch: "lime-400", oklabMatch: "yellow-600" },
  { input: "#a0b25c", rgbMatch: "lime-400", oklabMatch: "olive-400" },
  { input: "#ba6676", rgbMatch: "red-400", oklabMatch: "mauve-500" },
  { input: "#00fc78", rgbMatch: "emerald-500", oklabMatch: "lime-400" },
];

const RANDOM_SAMPLE: InputRow[] = [
  { input: "#88c0b0", rgbMatch: "mist-400", oklabMatch: "olive-400" },
  { input: "#505098", rgbMatch: "indigo-800", oklabMatch: "sky-800" },
  { input: "#683848", rgbMatch: "taupe-600", oklabMatch: "mauve-600" },
  { input: "#989868", rgbMatch: "olive-500", oklabMatch: "taupe-400" },
  { input: "#b07878", rgbMatch: "taupe-400", oklabMatch: "olive-500" },
  { input: "#7088b8", rgbMatch: "slate-400", oklabMatch: "cyan-600" },
  { input: "#d8a088", rgbMatch: "red-300", oklabMatch: "olive-400" },
  { input: "#b07060", rgbMatch: "taupe-500", oklabMatch: "olive-500" },
  { input: "#38b068", rgbMatch: "green-500", oklabMatch: "emerald-500" },
  { input: "#10e030", rgbMatch: "green-500", oklabMatch: "lime-500" },
  { input: "#b84848", rgbMatch: "pink-700", oklabMatch: "orange-700" },
  { input: "#b060b0", rgbMatch: "mauve-400", oklabMatch: "pink-500" },
  { input: "#2060b8", rgbMatch: "blue-800", oklabMatch: "sky-700" },
  { input: "#d07848", rgbMatch: "orange-400", oklabMatch: "amber-600" },
  { input: "#381818", rgbMatch: "taupe-800", oklabMatch: "orange-950" },
  { input: "#202038", rgbMatch: "gray-800", oklabMatch: "slate-800" },
  { input: "#082048", rgbMatch: "sky-950", oklabMatch: "indigo-950" },
  { input: "#182818", rgbMatch: "olive-900", oklabMatch: "emerald-950" },
];

function computeAdaptive(rows: InputRow[]): Row[] {
  return rows.map((row) => {
    const rgb = hexToRgb(row.input) as RGB;
    return { ...row, adaptiveMatch: findClosestAdaptive(rgb).name };
  });
}

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
    <div className="flex items-center gap-1 min-w-0">
      <span
        className="w-4 h-4 sm:w-5 sm:h-5 rounded border border-black/10 shrink-0"
        style={{ backgroundColor: inputHex }}
      />
      <span className="text-muted-foreground text-[10px]">→</span>
      <span
        className="w-4 h-4 sm:w-5 sm:h-5 rounded border border-black/10 shrink-0"
        style={{ backgroundColor: matchHex }}
      />
      <span className="font-mono text-[11px] truncate">{matchName}</span>
    </div>
  );
}

function ComparisonSection({
  title,
  rows,
}: {
  title: string;
  rows: Row[];
}) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">{title}</h4>
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/60 text-left">
                <th className="px-2 sm:px-3 py-2 font-medium text-xs">Color</th>
                <th className="px-2 sm:px-3 py-2 font-medium text-xs">RGB</th>
                <th className="px-2 sm:px-3 py-2 font-medium text-xs">OKLAB</th>
                <th className="px-2 sm:px-3 py-2 font-medium text-xs">Adaptive</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const rgbHex = TAILWIND_COLORS[row.rgbMatch] ?? "#000";
                const okHex = TAILWIND_COLORS[row.oklabMatch] ?? "#000";
                const adHex = TAILWIND_COLORS[row.adaptiveMatch] ?? "#000";
                return (
                  <tr key={row.input} className="border-t border-border">
                    <td className="px-2 sm:px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded border border-black/10 shrink-0"
                          style={{ backgroundColor: row.input }}
                        />
                        <span className="font-mono text-[11px]">
                          {row.input}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-3 py-2">
                      <MatchCell
                        inputHex={row.input}
                        matchHex={rgbHex}
                        matchName={row.rgbMatch}
                      />
                    </td>
                    <td className="px-2 sm:px-3 py-2">
                      <MatchCell
                        inputHex={row.input}
                        matchHex={okHex}
                        matchName={row.oklabMatch}
                      />
                    </td>
                    <td className="px-2 sm:px-3 py-2">
                      <MatchCell
                        inputHex={row.input}
                        matchHex={adHex}
                        matchName={row.adaptiveMatch}
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

export default function ThreeWayComparisonTable() {
  const hardRows = useMemo(() => computeAdaptive(HARD_CASES), []);
  const randomRows = useMemo(() => computeAdaptive(RANDOM_SAMPLE), []);

  return (
    <div className="not-prose my-8 max-w-3xl space-y-6">
      <ComparisonSection title="Hard cases" rows={hardRows} />
      <ComparisonSection
        title="Random sample where the adaptive method differs"
        rows={randomRows}
      />
    </div>
  );
}
