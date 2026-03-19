"use client";

import { useEffect, useRef, useState } from "react";
import {
  hslToRgb,
  rgbToOklab,
  TAILWIND_OKLAB,
} from "~/lib/tailwind-color-utils";

const WIDTH = 360;
const HEIGHT = 150;
const BG = 18;
const N = TAILWIND_OKLAB.length;

const palRgb = new Float64Array(N * 3);
const palLab = new Float64Array(N * 3);
for (let i = 0; i < N; i++) {
  const e = TAILWIND_OKLAB[i] as (typeof TAILWIND_OKLAB)[number];
  palRgb[i * 3] = e.rgb[0];
  palRgb[i * 3 + 1] = e.rgb[1];
  palRgb[i * 3 + 2] = e.rgb[2];
  palLab[i * 3] = e.lab[0];
  palLab[i * 3 + 1] = e.lab[1];
  palLab[i * 3 + 2] = e.lab[2];
}

function renderAll(
  allCanvas: HTMLCanvasElement | null,
  sameCanvas: HTMLCanvasElement | null,
  diffCanvas: HTMLCanvasElement | null,
  saturation: number
) {
  if (!allCanvas || !sameCanvas || !diffCanvas) return;
  const ctxAll = allCanvas.getContext("2d");
  const ctxSame = sameCanvas.getContext("2d");
  const ctxDiff = diffCanvas.getContext("2d");
  if (!ctxAll || !ctxSame || !ctxDiff) return;

  const imgAll = ctxAll.createImageData(WIDTH, HEIGHT);
  const imgSame = ctxSame.createImageData(WIDTH, HEIGHT);
  const imgDiff = ctxDiff.createImageData(WIDTH, HEIGHT);
  const dAll = imgAll.data;
  const dSame = imgSame.data;
  const dDiff = imgDiff.data;

  for (let y = 0; y < HEIGHT; y++) {
    const lightness = 95 - (y / (HEIGHT - 1)) * 90;

    for (let x = 0; x < WIDTH; x++) {
      const rgb = hslToRgb(x, saturation, lightness);
      const r = rgb[0];
      const g = rgb[1];
      const b = rgb[2];

      let bestRi = 0;
      let bestRd = 1e18;
      for (let i = 0; i < N; i++) {
        const j = i * 3;
        const dr = r - (palRgb[j] as number);
        const dg = g - (palRgb[j + 1] as number);
        const db = b - (palRgb[j + 2] as number);
        const d = dr * dr + dg * dg + db * db;
        if (d < bestRd) {
          bestRd = d;
          bestRi = i;
        }
      }

      const lab = rgbToOklab(r, g, b);
      const L = lab[0];
      const a = lab[1];
      const bv = lab[2];
      let bestOi = 0;
      let bestOd = 1e18;
      for (let i = 0; i < N; i++) {
        const j = i * 3;
        const dl = L - (palLab[j] as number);
        const da = a - (palLab[j + 1] as number);
        const dbv = bv - (palLab[j + 2] as number);
        const d = dl * dl + da * da + dbv * dbv;
        if (d < bestOd) {
          bestOd = d;
          bestOi = i;
        }
      }

      const idx = (y * WIDTH + x) * 4;
      const agree = bestRi === bestOi;

      dAll[idx] = r;
      dAll[idx + 1] = g;
      dAll[idx + 2] = b;
      dAll[idx + 3] = 255;

      if (agree) {
        dSame[idx] = r;
        dSame[idx + 1] = g;
        dSame[idx + 2] = b;
      } else {
        dSame[idx] = BG;
        dSame[idx + 1] = BG;
        dSame[idx + 2] = BG;
      }
      dSame[idx + 3] = 255;

      if (!agree) {
        dDiff[idx] = r;
        dDiff[idx + 1] = g;
        dDiff[idx + 2] = b;
      } else {
        dDiff[idx] = BG;
        dDiff[idx + 1] = BG;
        dDiff[idx + 2] = BG;
      }
      dDiff[idx + 3] = 255;
    }
  }

  ctxAll.putImageData(imgAll, 0, 0);
  ctxSame.putImageData(imgSame, 0, 0);
  ctxDiff.putImageData(imgDiff, 0, 0);
}

export default function ColorSpaceComparison() {
  const allRef = useRef<HTMLCanvasElement>(null);
  const sameRef = useRef<HTMLCanvasElement>(null);
  const diffRef = useRef<HTMLCanvasElement>(null);
  const [saturation, setSaturation] = useState(100);
  const rafRef = useRef(0);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      renderAll(allRef.current, sameRef.current, diffRef.current, saturation);
    });
    return () => cancelAnimationFrame(rafRef.current);
  }, [saturation]);

  return (
    <div className="not-prose my-8 max-w-2xl">
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        <div>
          <div className="text-[10px] sm:text-xs font-medium text-center mb-1">
            All colors
          </div>
          <canvas
            ref={allRef}
            width={WIDTH}
            height={HEIGHT}
            className="w-full rounded border border-border"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <div>
          <div className="text-[10px] sm:text-xs font-medium text-center mb-1">
            Same Closest Tailwind Color
          </div>
          <canvas
            ref={sameRef}
            width={WIDTH}
            height={HEIGHT}
            className="w-full rounded border border-border"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <div>
          <div className="text-[10px] sm:text-xs font-medium text-center mb-1">
            Different Closest Tailwind Color
          </div>
          <canvas
            ref={diffRef}
            width={WIDTH}
            height={HEIGHT}
            className="w-full rounded border border-border"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <label
          htmlFor="sat-slider"
          className="text-xs font-medium whitespace-nowrap"
        >
          Saturation: {saturation}%
        </label>
        <input
          id="sat-slider"
          type="range"
          min={0}
          max={100}
          value={saturation}
          onChange={(e) => setSaturation(Number(e.target.value))}
          className="flex-1 h-1.5 accent-foreground"
        />
      </div>
    </div>
  );
}
