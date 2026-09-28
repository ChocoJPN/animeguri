"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { overseasAreas } from "@/lib/areas";

interface WorldMapProps {
  animeCounts: Record<string, number>;
}

export default function WorldMap({ animeCounts }: WorldMapProps) {
  const router = useRouter();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="relative aspect-[2/1] w-full bg-sky-50 dark:bg-slate-950">
        <svg
          viewBox="0 0 100 50"
          className="h-full w-full"
          role="img"
          aria-label="海外の聖地マップ"
        >
          <rect width="100" height="50" fill="currentColor" className="text-sky-50 dark:text-slate-950" />
          <path
            d="M10 17 C15 10 25 9 31 15 C35 19 34 26 28 29 C21 33 13 29 9 23 Z"
            className="fill-gray-200 dark:fill-gray-800"
          />
          <path
            d="M38 10 C46 5 56 7 62 13 C68 20 64 29 56 31 C48 34 39 29 36 21 Z"
            className="fill-gray-200 dark:fill-gray-800"
          />
          <path
            d="M58 18 C66 13 79 15 88 22 C93 26 91 35 82 38 C72 41 60 35 56 27 Z"
            className="fill-gray-200 dark:fill-gray-800"
          />
          <path
            d="M32 31 C38 30 45 34 46 39 C47 44 42 48 36 46 C31 44 28 37 32 31 Z"
            className="fill-gray-200 dark:fill-gray-800"
          />
          <path
            d="M71 37 C77 35 86 37 91 42 C86 47 76 48 70 44 Z"
            className="fill-gray-200 dark:fill-gray-800"
          />

          {overseasAreas.map((area) => {
            const count = animeCounts[area.slug] || 0;
            const isHovered = hoveredArea === area.slug;
            return (
              <g
                key={area.slug}
                className="cursor-pointer"
                onClick={() => router.push(`/prefecture/${area.slug}`)}
                onMouseEnter={() => setHoveredArea(area.slug)}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <circle
                  cx={area.mapX}
                  cy={area.mapY}
                  r={isHovered ? 2.8 : 2.3}
                  className={
                    count > 0
                      ? "fill-primary stroke-white stroke-[0.7] transition-all dark:stroke-slate-950"
                      : "fill-gray-400 stroke-white stroke-[0.7] transition-all dark:fill-gray-600 dark:stroke-slate-950"
                  }
                />
                <circle
                  cx={area.mapX}
                  cy={area.mapY}
                  r={isHovered ? 5.5 : 4.6}
                  className={
                    count > 0
                      ? "fill-primary/20 transition-all"
                      : "fill-gray-300/40 transition-all dark:fill-gray-700/40"
                  }
                />
                <text
                  x={area.mapX + 3.8}
                  y={area.mapY + 1.2}
                  className="select-none fill-gray-800 text-[3px] font-semibold dark:fill-gray-100"
                >
                  {area.nameJa}
                </text>
              </g>
            );
          })}
        </svg>

        {hoveredArea && (
          <div className="absolute bottom-3 left-3 rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg">
            <div className="font-semibold">
              {overseasAreas.find((area) => area.slug === hoveredArea)?.nameJa ||
                hoveredArea}
            </div>
            <div className="text-gray-300">
              {animeCounts[hoveredArea] || 0} 作品
            </div>
          </div>
        )}
      </div>

      <div className="grid border-t border-gray-200 dark:border-gray-800 sm:grid-cols-2">
        {overseasAreas.map((area) => (
          <button
            key={area.slug}
            type="button"
            onClick={() => router.push(`/prefecture/${area.slug}`)}
            className="flex items-center justify-between px-4 py-3 text-left text-sm transition-colors hover:bg-primary/5"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {area.nameJa}
            </span>
            {(animeCounts[area.slug] || 0) > 0 && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {animeCounts[area.slug]} 作品
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
