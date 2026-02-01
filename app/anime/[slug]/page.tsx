import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
    title: `${anime.title} - アニメグリ`,
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

      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        {anime.title}
      </h1>

      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        {anime.year && <span>{anime.year}年</span>}
        {anime.officialurl && (
          <a
            href={anime.officialurl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            公式サイト
          </a>
        )}
        {anime.xurl && (
          <a
            href={anime.xurl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            X (Twitter)
          </a>
        )}
      </div>

      {anime.description && (
        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
          {anime.description}
        </p>
      )}

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
