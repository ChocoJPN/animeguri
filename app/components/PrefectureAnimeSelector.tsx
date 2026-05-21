import Image from "next/image";
import Link from "next/link";
import type { Anime, Location } from "@/lib/types";

export interface PrefectureAnime extends Anime {
  locations: Location[];
}

export default function PrefectureAnimeSelector({
  animeList,
  prefecture,
}: {
  animeList: PrefectureAnime[];
  prefecture: string;
}) {
  if (animeList.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        この都道府県にはまだアニメ聖地が登録されていません。
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-lg border border-dashed border-gray-300 px-4 py-5 text-center dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          アニメを選択してください
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          アニメを押すと、その作品の聖地一覧とGoogleマップを別ページで開きます。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {animeList.map((anime) => {
          const initial = anime.title.charAt(0);

          return (
            <Link
              key={anime.id}
              href={`/prefecture/${prefecture}/anime/${anime.slug}`}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white text-left transition hover:border-primary hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
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
                  {anime.locations.length}件の聖地マップを開く
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
