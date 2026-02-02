import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDB } from "@/lib/db";
import { prefectureBySlug } from "@/lib/prefectures";
import type { Anime } from "@/lib/types";
import AnimeCard from "@/app/components/AnimeCard";
import Link from "next/link";

interface Props {
  params: Promise<{ prefecture: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture } = await params;
  const pref = prefectureBySlug.get(prefecture);
  if (!pref) return { title: "見つかりません" };
  return {
    title: `${pref.nameJa}のアニメ聖地 - Animeguri`,
    description: `${pref.nameJa}を舞台にしたアニメ作品と聖地巡礼スポットの一覧`,
  };
}

export default async function PrefecturePage({ params }: Props) {
  const { prefecture } = await params;
  const pref = prefectureBySlug.get(prefecture);
  if (!pref) notFound();

  const db = await getDB();
  const rows = await db
    .prepare(
      `SELECT DISTINCT a.id, a.title, a.slug, a.year, a.description, a.image
       FROM anime a
       JOIN location l ON a.id = l.anime_id
       WHERE l.prefecture = ?
       ORDER BY a.year DESC`
    )
    .bind(prefecture)
    .all<Anime>();

  const animeList: Anime[] = rows.results;

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

      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        {pref!.nameJa}のアニメ聖地
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        {animeList.length} 作品が見つかりました
      </p>

      {animeList.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          この都道府県にはまだアニメ聖地が登録されていません。
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
}
