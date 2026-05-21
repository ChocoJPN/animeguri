import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getDB } from "@/lib/db";
import { prefectureBySlug } from "@/lib/prefectures";
import type { Anime, Location } from "@/lib/types";
import SacredPlaceMap, {
  type SacredPlaceMapLocation,
} from "@/app/components/SacredPlaceMap";

interface Props {
  params: Promise<{ prefecture: string; slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture, slug } = await params;
  const pref = prefectureBySlug.get(prefecture);
  if (!pref) return { title: "見つかりません" };

  const db = await getDB();
  const anime = await db
    .prepare(
      `SELECT DISTINCT a.title
       FROM anime a
       JOIN location l ON a.id = l.anime_id
       WHERE l.prefecture = ? AND a.slug = ?`
    )
    .bind(prefecture, slug)
    .first<Pick<Anime, "title">>();

  if (!anime) return { title: "見つかりません" };

  return {
    title: `${anime.title}の${pref.nameJa}聖地マップ - Animeguri`,
    description: `${anime.title}の${pref.nameJa}にある聖地とGoogleマップ`,
  };
}

export default async function PrefectureAnimeMapPage({ params }: Props) {
  const { prefecture, slug } = await params;
  const pref = prefectureBySlug.get(prefecture);
  if (!pref) notFound();

  const db = await getDB();
  const anime = await db
    .prepare(
      `SELECT DISTINCT a.*
       FROM anime a
       JOIN location l ON a.id = l.anime_id
       WHERE l.prefecture = ? AND a.slug = ?`
    )
    .bind(prefecture, slug)
    .first<Anime>();

  if (!anime) notFound();

  const locationRows = await db
    .prepare(
      `SELECT id, prefecture, anime_id, name
       FROM location
       WHERE prefecture = ? AND anime_id = ?
       ORDER BY id ASC`
    )
    .bind(prefecture, anime.id)
    .all<Location>();

  const locations = locationRows.results;
  if (locations.length === 0) notFound();

  const mapLocations: SacredPlaceMapLocation[] = locations.map((location) => ({
    id: location.id,
    name: location.name,
    prefecture: location.prefecture,
  }));

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <Link
          href={`/prefecture/${prefecture}`}
          className="text-gray-500 hover:text-primary dark:text-gray-400"
        >
          &larr; {pref.nameJa}のアニメ一覧に戻る
        </Link>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <Link
          href={`/anime/${anime.slug}`}
          className="text-gray-500 hover:text-primary dark:text-gray-400"
        >
          作品詳細へ
        </Link>
      </div>

      <p className="text-sm font-medium text-primary">{pref.nameJa}の聖地</p>
      <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        {anime.title}
      </h1>
      {anime.description && (
        <p className="mt-4 max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
          {anime.description}
        </p>
      )}

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          聖地一覧
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {locations.map((location) => (
            <li
              key={location.id}
              className="rounded-md bg-gray-50 px-3 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {location.name}
            </li>
          ))}
        </ul>
      </section>

      <SacredPlaceMap locations={mapLocations} />
    </div>
  );
}
