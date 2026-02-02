import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDB } from "@/lib/db";
import { prefectureBySlug } from "@/lib/prefectures";
import type { Anime, Location } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const db = await getDB();
  const anime = await db
    .prepare("SELECT title, description FROM anime WHERE slug = ?")
    .bind(slug)
    .first<Anime>();
  if (!anime) return { title: "見つかりません" };
  return {
    title: `${anime.title} - Animeguri`,
    description: anime.description || `${anime.title}の聖地巡礼情報`,
  };
}

export default async function AnimePage({ params }: Props) {
  const { slug } = await params;
  const db = await getDB();

  const anime = await db
    .prepare("SELECT * FROM anime WHERE slug = ?")
    .bind(slug)
    .first<Anime>();

  if (!anime) notFound();

  const locationRows = await db
    .prepare("SELECT * FROM location WHERE anime_id = ? ORDER BY prefecture")
    .bind(anime.id)
    .all<Location>();

  const locations = locationRows.results;

  const locationsByPrefecture = new Map<string, Location[]>();
  for (const loc of locations) {
    const existing = locationsByPrefecture.get(loc.prefecture) || [];
    existing.push(loc);
    locationsByPrefecture.set(loc.prefecture, existing);
  }

  const initial = anime.title.charAt(0);

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
        >
          &larr; ホームに戻る
        </Link>
      </div>

      {/* メインカード: モバイル縦積み / デスクトップ横並び */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:flex">
        {/* ポスター画像 */}
        <div className="relative aspect-[3/4] w-full shrink-0 sm:w-56 md:w-64">
          {anime.image ? (
            <Image
              src={anime.image}
              alt={anime.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 256px"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500">
              <span className="text-7xl font-bold text-white/80">
                {initial}
              </span>
            </div>
          )}
        </div>

        {/* テキストエリア */}
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              {anime.title}
            </h1>

            {anime.year && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {anime.year}年
              </p>
            )}

            {anime.description && (
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                {anime.description}
              </p>
            )}
          </div>

          {/* 外部リンク */}
          <div className="mt-5 flex flex-wrap gap-3">
            {anime.officialurl && (
              <a
                href={anime.officialurl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                公式サイト
                <span className="text-xs text-gray-400">&nearr;</span>
              </a>
            )}
            {anime.xurl && (
              <a
                href={anime.xurl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                X (Twitter)
                <span className="text-xs text-gray-400">&nearr;</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 聖地一覧 */}
      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          聖地一覧
        </h2>

        {locations.length === 0 ? (
          <p className="text-gray-500">聖地情報はまだ登録されていません。</p>
        ) : (
          <div className="space-y-4">
            {[...locationsByPrefecture.entries()].map(([prefSlug, locs]) => {
              const pref = prefectureBySlug.get(prefSlug);
              return (
                <div
                  key={prefSlug}
                  className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                >
                  <Link
                    href={`/prefecture/${prefSlug}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    {pref?.nameJa || prefSlug}
                  </Link>
                  <ul className="mt-2 space-y-1">
                    {locs.map((loc) => (
                      <li
                        key={loc.id}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {loc.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
