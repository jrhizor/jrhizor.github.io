export type RGB = [number, number, number];
export type Lab = [number, number, number];

export interface ColorEntry {
  name: string;
  hex: string;
  rgb: RGB;
  lab: Lab;
}

export interface MatchResult {
  name: string;
  hex: string;
  distance: number;
  rgb: RGB;
}

export const TAILWIND_COLORS: Record<string, string> = {
  "red-50": "#fef2f2",
  "red-100": "#fee2e2",
  "red-200": "#fecaca",
  "red-300": "#fca5a5",
  "red-400": "#f87171",
  "red-500": "#ef4444",
  "red-600": "#dc2626",
  "red-700": "#b91c1c",
  "red-800": "#991b1b",
  "red-900": "#7f1d1d",
  "red-950": "#450a0a",
  "orange-50": "#fff7ed",
  "orange-100": "#ffedd5",
  "orange-200": "#fed7aa",
  "orange-300": "#fdba74",
  "orange-400": "#fb923c",
  "orange-500": "#f97316",
  "orange-600": "#ea580c",
  "orange-700": "#c2410c",
  "orange-800": "#9a3412",
  "orange-900": "#7c2d12",
  "orange-950": "#431407",
  "amber-50": "#fffbeb",
  "amber-100": "#fef3c7",
  "amber-200": "#fde68a",
  "amber-300": "#fcd34d",
  "amber-400": "#fbbf24",
  "amber-500": "#f59e0b",
  "amber-600": "#d97706",
  "amber-700": "#b45309",
  "amber-800": "#92400e",
  "amber-900": "#78350f",
  "amber-950": "#451a03",
  "yellow-50": "#fefce8",
  "yellow-100": "#fef9c3",
  "yellow-200": "#fef08a",
  "yellow-300": "#fde047",
  "yellow-400": "#facc15",
  "yellow-500": "#eab308",
  "yellow-600": "#ca8a04",
  "yellow-700": "#a16207",
  "yellow-800": "#854d0e",
  "yellow-900": "#713f12",
  "yellow-950": "#422006",
  "lime-50": "#f7fee7",
  "lime-100": "#ecfccb",
  "lime-200": "#d9f99d",
  "lime-300": "#bef264",
  "lime-400": "#a3e635",
  "lime-500": "#84cc16",
  "lime-600": "#65a30d",
  "lime-700": "#4d7c0f",
  "lime-800": "#3f6212",
  "lime-900": "#365314",
  "lime-950": "#1a2e05",
  "green-50": "#f0fdf4",
  "green-100": "#dcfce7",
  "green-200": "#bbf7d0",
  "green-300": "#86efac",
  "green-400": "#4ade80",
  "green-500": "#22c55e",
  "green-600": "#16a34a",
  "green-700": "#15803d",
  "green-800": "#166534",
  "green-900": "#14532d",
  "green-950": "#052e16",
  "emerald-50": "#ecfdf5",
  "emerald-100": "#d1fae5",
  "emerald-200": "#a7f3d0",
  "emerald-300": "#6ee7b7",
  "emerald-400": "#34d399",
  "emerald-500": "#10b981",
  "emerald-600": "#059669",
  "emerald-700": "#047857",
  "emerald-800": "#065f46",
  "emerald-900": "#064e3b",
  "emerald-950": "#022c22",
  "teal-50": "#f0fdfa",
  "teal-100": "#ccfbf1",
  "teal-200": "#99f6e4",
  "teal-300": "#5eead4",
  "teal-400": "#2dd4bf",
  "teal-500": "#14b8a6",
  "teal-600": "#0d9488",
  "teal-700": "#0f766e",
  "teal-800": "#115e59",
  "teal-900": "#134e4a",
  "teal-950": "#042f2e",
  "cyan-50": "#ecfeff",
  "cyan-100": "#cffafe",
  "cyan-200": "#a5f3fc",
  "cyan-300": "#67e8f9",
  "cyan-400": "#22d3ee",
  "cyan-500": "#06b6d4",
  "cyan-600": "#0891b2",
  "cyan-700": "#0e7490",
  "cyan-800": "#155e75",
  "cyan-900": "#164e63",
  "cyan-950": "#083344",
  "sky-50": "#f0f9ff",
  "sky-100": "#e0f2fe",
  "sky-200": "#bae6fd",
  "sky-300": "#7dd3fc",
  "sky-400": "#38bdf8",
  "sky-500": "#0ea5e9",
  "sky-600": "#0284c7",
  "sky-700": "#0369a1",
  "sky-800": "#075985",
  "sky-900": "#0c4a6e",
  "sky-950": "#082f49",
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "blue-300": "#93c5fd",
  "blue-400": "#60a5fa",
  "blue-500": "#3b82f6",
  "blue-600": "#2563eb",
  "blue-700": "#1d4ed8",
  "blue-800": "#1e40af",
  "blue-900": "#1e3a8a",
  "blue-950": "#172554",
  "indigo-50": "#eef2ff",
  "indigo-100": "#e0e7ff",
  "indigo-200": "#c7d2fe",
  "indigo-300": "#a5b4fc",
  "indigo-400": "#818cf8",
  "indigo-500": "#6366f1",
  "indigo-600": "#4f46e5",
  "indigo-700": "#4338ca",
  "indigo-800": "#3730a3",
  "indigo-900": "#312e81",
  "indigo-950": "#1e1b4b",
  "violet-50": "#f5f3ff",
  "violet-100": "#ede9fe",
  "violet-200": "#ddd6fe",
  "violet-300": "#c4b5fd",
  "violet-400": "#a78bfa",
  "violet-500": "#8b5cf6",
  "violet-600": "#7c3aed",
  "violet-700": "#6d28d9",
  "violet-800": "#5b21b6",
  "violet-900": "#4c1d95",
  "violet-950": "#2e1065",
  "purple-50": "#faf5ff",
  "purple-100": "#f3e8ff",
  "purple-200": "#e9d5ff",
  "purple-300": "#d8b4fe",
  "purple-400": "#c084fc",
  "purple-500": "#a855f7",
  "purple-600": "#9333ea",
  "purple-700": "#7e22ce",
  "purple-800": "#6b21a8",
  "purple-900": "#581c87",
  "purple-950": "#3b0764",
  "fuchsia-50": "#fdf4ff",
  "fuchsia-100": "#fae8ff",
  "fuchsia-200": "#f5d0fe",
  "fuchsia-300": "#f0abfc",
  "fuchsia-400": "#e879f9",
  "fuchsia-500": "#d946ef",
  "fuchsia-600": "#c026d3",
  "fuchsia-700": "#a21caf",
  "fuchsia-800": "#86198f",
  "fuchsia-900": "#701a75",
  "fuchsia-950": "#4a044e",
  "pink-50": "#fdf2f8",
  "pink-100": "#fce7f3",
  "pink-200": "#fbcfe8",
  "pink-300": "#f9a8d4",
  "pink-400": "#f472b6",
  "pink-500": "#ec4899",
  "pink-600": "#db2777",
  "pink-700": "#be185d",
  "pink-800": "#9d174d",
  "pink-900": "#831843",
  "pink-950": "#500724",
  "rose-50": "#fff1f2",
  "rose-100": "#ffe4e6",
  "rose-200": "#fecdd3",
  "rose-300": "#fda4af",
  "rose-400": "#fb7185",
  "rose-500": "#f43f5e",
  "rose-600": "#e11d48",
  "rose-700": "#be123c",
  "rose-800": "#9f1239",
  "rose-900": "#881337",
  "rose-950": "#4c0519",
  "slate-50": "#f8fafc",
  "slate-100": "#f1f5f9",
  "slate-200": "#e2e8f0",
  "slate-300": "#cbd5e1",
  "slate-400": "#94a3b8",
  "slate-500": "#64748b",
  "slate-600": "#475569",
  "slate-700": "#334155",
  "slate-800": "#1e293b",
  "slate-900": "#0f172a",
  "slate-950": "#020617",
  "gray-50": "#f9fafb",
  "gray-100": "#f3f4f6",
  "gray-200": "#e5e7eb",
  "gray-300": "#d1d5db",
  "gray-400": "#9ca3af",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
  "gray-950": "#030712",
  "zinc-50": "#fafafa",
  "zinc-100": "#f4f4f5",
  "zinc-200": "#e4e4e7",
  "zinc-300": "#d4d4d8",
  "zinc-400": "#a1a1aa",
  "zinc-500": "#71717a",
  "zinc-600": "#52525b",
  "zinc-700": "#3f3f46",
  "zinc-800": "#27272a",
  "zinc-900": "#18181b",
  "zinc-950": "#09090b",
  "neutral-50": "#fafafa",
  "neutral-100": "#f5f5f5",
  "neutral-200": "#e5e5e5",
  "neutral-300": "#d4d4d4",
  "neutral-400": "#a3a3a3",
  "neutral-500": "#737373",
  "neutral-600": "#525252",
  "neutral-700": "#404040",
  "neutral-800": "#262626",
  "neutral-900": "#171717",
  "neutral-950": "#0a0a0a",
  "stone-50": "#fafaf9",
  "stone-100": "#f5f5f4",
  "stone-200": "#e7e5e4",
  "stone-300": "#d6d3d1",
  "stone-400": "#a8a29e",
  "stone-500": "#78716c",
  "stone-600": "#57534e",
  "stone-700": "#44403c",
  "stone-800": "#292524",
  "stone-900": "#1c1917",
  "stone-950": "#0c0a09",
  "mauve-50": "#fafafa",
  "mauve-100": "#f3f1f3",
  "mauve-200": "#e7e4e7",
  "mauve-300": "#d7d0d7",
  "mauve-400": "#a89ea9",
  "mauve-500": "#79697b",
  "mauve-600": "#594c5b",
  "mauve-700": "#463947",
  "mauve-800": "#2a212c",
  "mauve-900": "#1d161e",
  "mauve-950": "#0c090c",
  "olive-50": "#fbfbf9",
  "olive-100": "#f4f4f0",
  "olive-200": "#e8e8e3",
  "olive-300": "#d8d8d0",
  "olive-400": "#abab9c",
  "olive-500": "#7c7c67",
  "olive-600": "#5b5b4b",
  "olive-700": "#474739",
  "olive-800": "#2b2b22",
  "olive-900": "#1d1d16",
  "olive-950": "#0c0c09",
  "mist-50": "#f9fbfb",
  "mist-100": "#f1f3f3",
  "mist-200": "#e3e7e8",
  "mist-300": "#d0d6d8",
  "mist-400": "#9ca8ab",
  "mist-500": "#67787c",
  "mist-600": "#4b585b",
  "mist-700": "#394447",
  "mist-800": "#22292b",
  "mist-900": "#161b1d",
  "mist-950": "#090b0c",
  "taupe-50": "#fbfaf9",
  "taupe-100": "#f3f1f1",
  "taupe-200": "#e8e4e3",
  "taupe-300": "#d8d2d0",
  "taupe-400": "#aba09c",
  "taupe-500": "#7c6d67",
  "taupe-600": "#5b4f4b",
  "taupe-700": "#473c39",
  "taupe-800": "#2b2422",
  "taupe-900": "#1d1816",
  "taupe-950": "#0c0a09",
  black: "#000000",
  white: "#ffffff",
};

export function hexToRgb(hex: string): RGB | null {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    const [a, b, c] = [hex[0], hex[1], hex[2]];
    hex = `${a}${a}${b}${b}${c}${c}`;
  }
  if (hex.length !== 6) return null;
  const n = Number.parseInt(hex, 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function hslToRgb(h: number, s: number, l: number): RGB {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
}

export function parseColorInput(input: string): RGB | null {
  const s = input.trim().toLowerCase();
  if (!s) return null;

  if (s.startsWith("#") || /^[0-9a-f]{3,6}$/i.test(s)) {
    return hexToRgb(s.startsWith("#") ? s : `#${s}`);
  }

  const rgbMatch = s.match(
    /^rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})/
  );
  if (rgbMatch?.[1] && rgbMatch[2] && rgbMatch[3]) {
    const r = Number.parseInt(rgbMatch[1], 10);
    const g = Number.parseInt(rgbMatch[2], 10);
    const b = Number.parseInt(rgbMatch[3], 10);
    if (r <= 255 && g <= 255 && b <= 255) return [r, g, b];
  }

  const hslMatch = s.match(
    /^hsla?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})%?\s*[,\s]\s*(\d{1,3})%?/
  );
  if (hslMatch?.[1] && hslMatch[2] && hslMatch[3]) {
    return hslToRgb(
      Number.parseInt(hslMatch[1], 10),
      Number.parseInt(hslMatch[2], 10),
      Number.parseInt(hslMatch[3], 10)
    );
  }

  return null;
}

function srgbToLinear(c: number): number {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

export function rgbToOklab(r: number, g: number, b: number): Lab {
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);

  let l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  let m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  let s = 0.0883024619 * lr + 0.2220049173 * lg + 0.6796926208 * lb;

  l = Math.cbrt(l);
  m = Math.cbrt(m);
  s = Math.cbrt(s);

  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

export function oklabToOklch(
  L: number,
  a: number,
  b: number
): [number, number, number] {
  const C = Math.sqrt(a * a + b * b);
  let h = Math.atan2(b, a) * (180 / Math.PI);
  if (h < 0) h += 360;
  return [L, C, h];
}

export function deltaEOK(lab1: Lab, lab2: Lab): number {
  return Math.sqrt(
    (lab1[0] - lab2[0]) ** 2 +
      (lab1[1] - lab2[1]) ** 2 +
      (lab1[2] - lab2[2]) ** 2
  );
}

export function rgbEuclidean(a: RGB, b: RGB): number {
  return Math.sqrt(
    (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
  );
}

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

export function rgbToHsl(
  r: number,
  g: number,
  b: number
): [number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
  else if (max === gn) h = ((bn - rn) / d + 2) / 6;
  else h = ((rn - gn) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export const TAILWIND_OKLAB: ColorEntry[] = Object.entries(TAILWIND_COLORS).map(
  ([name, hex]) => {
    const rgb = hexToRgb(hex) as RGB;
    const lab = rgbToOklab(...rgb);
    return { name, hex, rgb, lab };
  }
);

export function findClosestOklab(rgb: RGB): MatchResult {
  const lab = rgbToOklab(...rgb);
  let best: ColorEntry = TAILWIND_OKLAB[0] as ColorEntry;
  let bestDist = deltaEOK(lab, best.lab);

  for (let i = 1; i < TAILWIND_OKLAB.length; i++) {
    const entry = TAILWIND_OKLAB[i] as ColorEntry;
    const dist = deltaEOK(lab, entry.lab);
    if (dist < bestDist) {
      bestDist = dist;
      best = entry;
    }
  }

  return { name: best.name, hex: best.hex, distance: bestDist, rgb: best.rgb };
}

export function findClosestRgb(rgb: RGB): MatchResult {
  let bestName = "";
  let bestHex = "";
  let bestDist = Number.POSITIVE_INFINITY;
  let bestRgb: RGB = [0, 0, 0];

  for (const entry of TAILWIND_OKLAB) {
    const dist = rgbEuclidean(rgb, entry.rgb);
    if (dist < bestDist) {
      bestDist = dist;
      bestName = entry.name;
      bestHex = entry.hex;
      bestRgb = entry.rgb;
    }
  }

  return { name: bestName, hex: bestHex, distance: bestDist, rgb: bestRgb };
}

export function findClosestOklabIdx(rgb: RGB): number {
  const lab = rgbToOklab(...rgb);
  let bestIdx = 0;
  let bestDist = deltaEOK(lab, (TAILWIND_OKLAB[0] as ColorEntry).lab);

  for (let i = 1; i < TAILWIND_OKLAB.length; i++) {
    const dist = deltaEOK(lab, (TAILWIND_OKLAB[i] as ColorEntry).lab);
    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = i;
    }
  }
  return bestIdx;
}

// --- Zone-adaptive OKLCH matching ---

type ZoneParams = {
  wL: number;
  wC: number;
  wH: number;
  wFC: number;
  cf: number;
};

function getZoneParams(lch: [number, number, number]): ZoneParams {
  const [, C, h] = lch;
  if (C < 0.04) return { wL: 1, wC: 1, wH: 0.15, wFC: 0, cf: 0 };
  if (h >= 280 && h < 335)
    return { wL: 0.15, wC: 0.3, wH: 1.2, wFC: 0, cf: 0.15 };
  if (h >= 100 && h < 195)
    return { wL: 0.3, wC: 0.05, wH: 4, wFC: 0, cf: 0.3 };
  if (h >= 335 || h <= 40)
    return { wL: 0.15, wC: 0.2, wH: 1, wFC: 0, cf: 0.1 };
  if (h >= 220 && h < 280)
    return { wL: 0.3, wC: 0.1, wH: 1.5, wFC: 0, cf: 0.1 };
  return { wL: 0.5, wC: 0.05, wH: 1, wFC: 0.1, cf: 0.1 };
}

function hueDiff(h1: number, h2: number): number {
  const d = Math.abs(h1 - h2);
  return Math.min(d, 360 - d);
}

type OklchEntry = ColorEntry & {
  lch: [number, number, number];
  family: string;
};

const TAILWIND_OKLCH: OklchEntry[] = TAILWIND_OKLAB.map((entry) => {
  const lch = oklabToOklch(...entry.lab);
  const family = entry.name.includes("-")
    ? entry.name.split("-")[0]!
    : entry.name;
  return { ...entry, lch, family };
});

const familyChromaMap: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  const fams = [...new Set(TAILWIND_OKLCH.map((e) => e.family))];
  for (const fam of fams) {
    const shades = TAILWIND_OKLCH.filter(
      (e) =>
        e.family === fam &&
        ["400", "500", "600"].some((s) => e.name === `${fam}-${s}`),
    );
    if (shades.length > 0) {
      map[fam] =
        shades.reduce((sum, e) => sum + e.lch[1], 0) / shades.length;
    } else {
      const all = TAILWIND_OKLCH.filter((e) => e.family === fam);
      map[fam] =
        all.reduce((sum, e) => sum + e.lch[1], 0) / Math.max(1, all.length);
    }
  }
  return map;
})();

export function findClosestAdaptive(rgb: RGB): MatchResult {
  const lab = rgbToOklab(...rgb);
  const lch = oklabToOklch(...lab);
  const [iL, iC, iH] = lch;
  const { wL, wC, wH, wFC, cf } = getZoneParams(lch);
  const chromaThreshold = iC > 0.05 ? iC * cf : 0;

  let best: OklchEntry = TAILWIND_OKLCH[0] as OklchEntry;
  let bestDist = Infinity;

  for (const entry of TAILWIND_OKLCH) {
    if (chromaThreshold > 0 && entry.lch[1] < chromaThreshold) continue;

    const [eL, eC, eH] = entry.lch;
    const dL = iL - eL;
    const dC = iC - eC;
    const dH = hueDiff(iH, eH) / 360;

    let dist = Math.sqrt(wL * dL * dL + wC * dC * dC + wH * dH * dH);

    if (wFC > 0) {
      const famChroma = familyChromaMap[entry.family] ?? 0;
      dist += (wFC * Math.abs(famChroma - iC)) / 0.3;
    }

    if (dist < bestDist) {
      bestDist = dist;
      best = entry;
    }
  }

  return { name: best.name, hex: best.hex, distance: bestDist, rgb: best.rgb };
}

export function findClosestRgbIdx(rgb: RGB): number {
  let bestIdx = 0;
  let bestDist = rgbEuclidean(rgb, (TAILWIND_OKLAB[0] as ColorEntry).rgb);

  for (let i = 1; i < TAILWIND_OKLAB.length; i++) {
    const dist = rgbEuclidean(rgb, (TAILWIND_OKLAB[i] as ColorEntry).rgb);
    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = i;
    }
  }
  return bestIdx;
}
