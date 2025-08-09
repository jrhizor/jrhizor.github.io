import { ImageResponse } from "next/og";
import * as React from "react";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  console.error("url", url);
  const css = await (await fetch(url)).text();
  const regex = /src: url\((.+)\) format\('(opentype|truetype)'\)/;
  const match = regex.exec(css);

  if (match) {
    // @ts-expect-error - Response type is unknown
    const response = await fetch(match[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error(`failed to load font data ${url}`);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text") ?? "jrhizor.dev";

  return new ImageResponse(
    <div
      style={{
        fontSize: 96,
        color: "black",
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <svg viewBox="0 0 64 64" style={{ width: "120px", height: "120px" }}>
        <rect x="0" y="32" width="9.1" height="32" fill="#3B82F6"></rect>
        <rect x="18.2" y="0" width="9.1" height="64" fill="#06B6D4"></rect>
        <rect x="36.4" y="0" width="9.1" height="64" fill="#F97316"></rect>
        <rect x="54.6" y="0" width="9.1" height="32" fill="#EF4444"></rect>
      </svg>
      <div
        style={{
          fontFamily: "Source Sans 3",
          textWrap: "balance",
          fontWeight: 700,
        }}
      >
        {text}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Source Sans 3",
          data: await loadGoogleFont("Source Sans 3", text),
          style: "normal",
        },
      ],
    }
  );
}
