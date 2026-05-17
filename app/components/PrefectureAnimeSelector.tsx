"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Anime, Location } from "@/lib/types";
import SacredPlaceMap, {
  type SacredPlaceMapLocation,
} from "@/app/components/SacredPlaceMap";

export interface PrefectureAnime extends Anime {
  locations: Location[];
}

export default function PrefectureAnimeSelector({
  animeList,
}: {
  animeList: PrefectureAnime[];
}) {
  const [selectedSlug, setSelectedSlug] = useState(animeList[0]?.slug ?? "");

  const selectedAnime = useMemo(
    () => animeList.find((anime) => anime.slug === selectedSlug) ?? animeList[0],
    [animeList, selectedSlug]
  );

  const mapLocations: SacredPlaceMapLocation[] =
    selectedAnime?.locations.map((location) => ({
      id: location.id,
      name: location.name,
      prefecture: location.prefecture,
    })) ?? [];

  if (animeList.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        この都道府県にはまだアニメ聖地が登録されていません。
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {animeList.map((anime) => {
          const selected = anime.slug === selectedAnime?.slug;
          const initial = anime.title.charAt(0);

          return (
            <button
              key={anime.id}
              type="button"
              onClick={() => setSelectedSlug(anime.slug)}
              aria-pressed={selected}
              className={`group overflow-hidden rounded-lg border bg-white text-left transition hover:shadow-md dark:bg-gray-900 ${
                selected
                  ? "border-primary shadow-md ring-2 ring-primary/25"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <div className="relative aspect-[3/4] w-full bg-gray-100 dark:bg-gray-800">
                {anime.image ? (
                  <Image
                    src={anime.image}
                    alt={anime.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500">
                    <span className="text-5xl font-bold text-white/80">
                      {initial}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-3">
                <h3 className="truncate font-semibold text-gray-900 group-hover:text-primary dark:text-gray-100">
                  {anime.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {anime.locations.length}件の聖地
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedAnime && (
        <section>
          <div className="flex flex-wrap items-start justify-between gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
            <div>
              <p className="text-sm font-medium text-primary">選択中のアニメ</p>
              <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {selectedAnime.title}
              </h2>
              {selectedAnime.description && (
                <p className="mt-3 max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
                  {selectedAnime.description}
                </p>
              )}
            </div>
            <Link
              href={`/anime/${selectedAnime.slug}`}
              className="inline-flex rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              作品詳細へ
            </Link>
          </div>

          <div className="mt-5">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              聖地一覧
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {selectedAnime.locations.map((location) => (
                <li
                  key={location.id}
                  className="rounded-md bg-gray-50 px-3 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {location.name}
                </li>
              ))}
            </ul>
          </div>

          <SacredPlaceMap locations={mapLocations} />
        </section>
      )}
    </div>
  );
}
