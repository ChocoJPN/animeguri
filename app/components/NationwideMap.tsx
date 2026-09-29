"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getAreaLabel } from "@/lib/areas";
import { buildGoogleMapsUrls } from "@/lib/location-map";

export interface NationwideMapLocation {
  id: number;
  name: string;
  prefecture: string;
  animeTitle: string;
  animeSlug: string;
}

interface NationwideMapProps {
  locations: NationwideMapLocation[];
}

const PAGE_SIZE = 100;

export default function NationwideMap({ locations }: NationwideMapProps) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");
  const [animeSlug, setAnimeSlug] = useState("");
  const [visibleLimit, setVisibleLimit] = useState(PAGE_SIZE);
  const [selectedId, setSelectedId] = useState<number | null>(
    locations[0]?.id ?? null
  );

  const areaOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const location of locations) {
      counts.set(location.prefecture, (counts.get(location.prefecture) ?? 0) + 1);
    }

    return [...counts.entries()].sort(([a], [b]) =>
      getAreaLabel(a).localeCompare(getAreaLabel(b), "ja")
    );
  }, [locations]);

  const animeOptions = useMemo(() => {
    const titles = new Map<string, string>();
    for (const location of locations) {
      titles.set(location.animeSlug, location.animeTitle);
    }

    return [...titles.entries()].sort(([, a], [, b]) =>
      a.localeCompare(b, "ja")
    );
  }, [locations]);

  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ja");

    return locations.filter((location) => {
      if (area && location.prefecture !== area) return false;
      if (animeSlug && location.animeSlug !== animeSlug) return false;
      if (!normalizedQuery) return true;

      const target = `${location.name} ${location.animeTitle} ${getAreaLabel(
        location.prefecture
      )}`.toLocaleLowerCase("ja");
      return target.includes(normalizedQuery);
    });
  }, [animeSlug, area, locations, query]);

  const selectedLocation =
    filteredLocations.find((location) => location.id === selectedId) ??
    filteredLocations[0] ??
    null;
  const mapUrls = selectedLocation
    ? buildGoogleMapsUrls(selectedLocation)
    : null;
  const visibleLocations = filteredLocations.slice(0, visibleLimit);

  const resetFilters = () => {
    setQuery("");
    setArea("");
    setAnimeSlug("");
    setVisibleLimit(PAGE_SIZE);
  };

  return (
    <div>
      <section
        aria-label="地図の検索条件"
        className="border-y border-gray-200 py-4 dark:border-gray-800"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">
              スポット・作品名
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例：下北沢、君の名は。"
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-900"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">
              都道府県・地域
            </span>
            <select
              value={area}
              onChange={(event) => setArea(event.target.value)}
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-900"
            >
              <option value="">すべての地域</option>
              {areaOptions.map(([slug, count]) => (
                <option key={slug} value={slug}>
                  {getAreaLabel(slug)}（{count}）
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">
              作品
            </span>
            <select
              value={animeSlug}
              onChange={(event) => setAnimeSlug(event.target.value)}
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-900"
            >
              <option value="">すべての作品</option>
              {animeOptions.map(([slug, title]) => (
                <option key={slug} value={slug}>
                  {title}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={resetFilters}
            disabled={!query && !area && !animeSlug}
            className="h-10 self-end rounded-md border border-gray-300 px-4 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300"
          >
            条件をクリア
          </button>
        </div>
      </section>

      <div className="mt-5 grid items-start gap-5 lg:grid-cols-[340px_minmax(0,1fr)]">
        <aside className="order-2 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:order-1">
          <div className="flex h-12 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">
              聖地一覧
            </h2>
            <span
              className="text-sm tabular-nums text-gray-500 dark:text-gray-400"
              aria-live="polite"
            >
              {filteredLocations.length}件
            </span>
          </div>

          {filteredLocations.length > 0 ? (
            <div className="max-h-[620px] divide-y divide-gray-100 overflow-y-auto dark:divide-gray-800">
              {visibleLocations.map((location) => {
                const selected = location.id === selectedLocation?.id;

                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setSelectedId(location.id)}
                    aria-pressed={selected}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      selected
                        ? "bg-primary/10"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800/70"
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                          selected ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                      <span className="min-w-0">
                        <span className="block font-medium text-gray-900 dark:text-gray-100">
                          {location.name}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                          {getAreaLabel(location.prefecture)} / {location.animeTitle}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
              {visibleLocations.length < filteredLocations.length && (
                <div className="p-3">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit((limit) => limit + PAGE_SIZE)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-300"
                  >
                    さらに表示（残り
                    {filteredLocations.length - visibleLocations.length}件）
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="px-5 py-12 text-center">
              <p className="font-medium text-gray-800 dark:text-gray-200">
                該当する聖地がありません
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-3 text-sm font-medium text-primary hover:underline"
              >
                検索条件をクリア
              </button>
            </div>
          )}
        </aside>

        <section className="order-1 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:sticky lg:top-20 lg:order-2">
          {selectedLocation && mapUrls ? (
            <>
              <div className="flex min-h-20 flex-col justify-between gap-3 border-b border-gray-200 px-4 py-3 dark:border-gray-800 sm:flex-row sm:items-center">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-primary">
                    {getAreaLabel(selectedLocation.prefecture)} / {selectedLocation.animeTitle}
                  </p>
                  <h2 className="mt-1 font-bold text-gray-900 dark:text-gray-100">
                    {selectedLocation.name}
                  </h2>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-sm font-medium">
                  <Link
                    href={`/locations/${selectedLocation.id}`}
                    className="text-primary hover:underline"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href={mapUrls.openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-300"
                  >
                    Googleマップ
                  </a>
                </div>
              </div>
              <div className="h-[360px] bg-gray-100 dark:bg-gray-800 sm:h-[460px] lg:h-[620px]">
                <iframe
                  key={selectedLocation.id}
                  src={mapUrls.embedUrl}
                  title={`${selectedLocation.name}の地図`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </>
          ) : (
            <div className="flex h-[360px] items-center justify-center px-6 text-center text-sm text-gray-500 dark:text-gray-400 sm:h-[460px] lg:h-[620px]">
              条件を変更して、地図に表示する聖地を選んでください。
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
