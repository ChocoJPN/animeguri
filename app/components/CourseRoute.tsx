"use client";

import Link from "next/link";
import { useState } from "react";
import { buildGoogleMapsUrls } from "@/lib/location-map";

export interface CourseRouteStop {
  id: number;
  name: string;
  prefecture: string;
  title: string;
  stayMinutes: number;
  note: string;
}

interface CourseRouteProps {
  stops: CourseRouteStop[];
  directionsUrl: string;
}

export default function CourseRoute({ stops, directionsUrl }: CourseRouteProps) {
  const [selectedId, setSelectedId] = useState(stops[0]?.id ?? null);
  const selectedStop =
    stops.find((stop) => stop.id === selectedId) ?? stops[0] ?? null;
  const mapUrls = selectedStop ? buildGoogleMapsUrls(selectedStop) : null;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(380px,1.15fr)]">
      <section aria-labelledby="course-stops-title">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2
            id="course-stops-title"
            className="text-xl font-bold text-gray-900 dark:text-gray-100"
          >
            コース順路
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            全{stops.length}地点
          </span>
        </div>

        <ol className="border-y border-gray-200 dark:border-gray-800">
          {stops.map((stop, index) => {
            const selected = selectedStop?.id === stop.id;

            return (
              <li
                key={stop.id}
                className="border-b border-gray-200 last:border-b-0 dark:border-gray-800"
              >
                <div
                  className={`grid grid-cols-[1fr_auto] items-stretch transition-colors ${
                    selected ? "bg-primary/5" : "hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedId(stop.id)}
                    aria-pressed={selected}
                    className="flex min-w-0 gap-3 px-3 py-4 text-left"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        selected
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-gray-900 dark:text-gray-100">
                        {stop.title}
                      </span>
                      <span className="mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        {stop.name} / 滞在目安 {stop.stayMinutes}分
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {stop.note}
                      </span>
                    </span>
                  </button>
                  <Link
                    href={`/locations/${stop.id}`}
                    className="flex items-center px-3 text-sm font-medium text-primary hover:underline"
                  >
                    詳細
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:sticky lg:top-20">
        {selectedStop && mapUrls && (
          <>
            <div className="flex flex-col justify-between gap-3 border-b border-gray-200 px-4 py-3 dark:border-gray-800 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-primary">
                  選択中のスポット
                </p>
                <h2 className="mt-1 font-bold text-gray-900 dark:text-gray-100">
                  {selectedStop.name}
                </h2>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                徒歩経路を開く
              </a>
            </div>
            <div className="h-[380px] bg-gray-100 dark:bg-gray-800 lg:h-[600px]">
              <iframe
                key={selectedStop.id}
                src={mapUrls.embedUrl}
                title={`${selectedStop.name}の地図`}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
}
