"use client";

import { useMemo, useState } from "react";
import type { RGB } from "~/lib/tailwind-color-utils";
import {
  findClosestAdaptive,
  hexToRgb,
  oklabToOklch,
  parseColorInput,
  rgbToHex,
  rgbToHsl,
  rgbToOklab,
} from "~/lib/tailwind-color-utils";

function CopyButton({
  value,
  label,
  copiedKey,
  copyKey,
  onCopy,
}: {
  value: string;
  label: string;
  copiedKey: string | null;
  copyKey: string;
  onCopy: (text: string, key: string) => void;
}) {
  const isCopied = copiedKey === copyKey;
  return (
    <button
      type="button"
      onClick={() => onCopy(value, copyKey)}
      className="flex flex-col items-start p-2.5 rounded-lg border border-border hover:bg-muted/80 transition-colors text-left group"
    >
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <span className="font-mono text-xs truncate w-full">
        {isCopied ? "✓ Copied!" : value}
      </span>
    </button>
  );
}

export default function ClosestTailwindColor() {
  const [inputText, setInputText] = useState("#8f3190");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const result = useMemo(() => {
    const rgb = parseColorInput(inputText);
    if (!rgb) return null;

    const oklabMatch = findClosestAdaptive(rgb);
    const hex = rgbToHex(...rgb);
    const lab = rgbToOklab(...rgb);
    const lch = oklabToOklch(...lab);
    const hsl = rgbToHsl(...rgb);

    const mRgb = hexToRgb(oklabMatch.hex) as RGB;
    const mLab = rgbToOklab(...mRgb);
    const mLch = oklabToOklch(...mLab);
    const mHsl = rgbToHsl(...mRgb);

    return {
      inputRgb: rgb,
      inputHex: hex,
      inputHsl: hsl,
      inputOklch: lch,
      oklabMatch,
      matchHsl: mHsl,
      matchLch: mLch,
    };
  }, [inputText]);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const colorPickerHex = result?.inputHex || "#000000";

  return (
    <div className="not-prose my-8 space-y-5 max-w-2xl">
      <div className="space-y-2">
        <label htmlFor="color-input" className="sr-only">
          Enter any color
        </label>
        <div className="flex gap-2 items-center">
          <input
            id="color-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="#hex, rgb(), or hsl()"
            className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
          <input
            type="color"
            value={colorPickerHex}
            onChange={(e) => setInputText(e.target.value)}
            className="w-11 h-11 rounded-lg border border-border cursor-pointer p-0 overflow-hidden [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-moz-color-swatch]:border-none"
            aria-label="Color picker"
          />
        </div>
      </div>

      {result ? (
        <>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="flex">
              <div
                className="flex-1 h-28 sm:h-32"
                style={{ backgroundColor: result.inputHex }}
              />
              <div
                className="flex-1 h-28 sm:h-32"
                style={{ backgroundColor: result.oklabMatch.hex }}
              />
            </div>
            <div className="flex border-t border-border">
              <div className="flex-1 p-3 border-r border-border">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                  Your color
                </div>
                <div className="font-mono text-sm">{result.inputHex}</div>
              </div>
              <div className="flex-1 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                  Closest match
                </div>
                <div className="font-semibold text-sm">
                  {result.oklabMatch.name}
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {result.oklabMatch.hex}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Copy as:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <CopyButton
                label="Tailwind Class"
                value={`bg-${result.oklabMatch.name}`}
                copyKey="class"
                copiedKey={copiedKey}
                onCopy={copy}
              />
              <CopyButton
                label="Hex"
                value={result.oklabMatch.hex}
                copyKey="hex"
                copiedKey={copiedKey}
                onCopy={copy}
              />
              <CopyButton
                label="RGB"
                value={`rgb(${result.oklabMatch.rgb.join(", ")})`}
                copyKey="rgb"
                copiedKey={copiedKey}
                onCopy={copy}
              />
              <CopyButton
                label="HSL"
                value={`hsl(${result.matchHsl[0]}, ${result.matchHsl[1]}%, ${result.matchHsl[2]}%)`}
                copyKey="hsl"
                copiedKey={copiedKey}
                onCopy={copy}
              />
              <CopyButton
                label="OKLCH"
                value={`oklch(${result.matchLch[0].toFixed(3)} ${result.matchLch[1].toFixed(3)} ${result.matchLch[2].toFixed(1)})`}
                copyKey="oklch"
                copiedKey={copiedKey}
                onCopy={copy}
              />
              <CopyButton
                label="Color Name"
                value={result.oklabMatch.name}
                copyKey="name"
                copiedKey={copiedKey}
                onCopy={copy}
              />
            </div>
          </div>
        </>
      ) : (
        inputText.length > 0 && (
          <div className="rounded-xl border border-border p-8 text-center text-muted-foreground text-sm">
            Enter a valid color (hex, rgb, or hsl) to find the closest Tailwind
            match
          </div>
        )
      )}
    </div>
  );
}
