import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
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
  const initial = anime.title.charAt(0);

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
      <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:flex">
        <div className="relative aspect-[3/4] w-full shrink-0 bg-gray-100 dark:bg-gray-800 sm:w-56 md:w-64">
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

        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
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
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          聖地一覧
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {locations.map((location) => (
            <li
              key={location.id}
              className="rounded-md bg-gray-50 dark:bg-gray-800"
            >
              <a
                href={`#map-location-${location.id}`}
                className="block px-3 py-2 text-gray-700 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              >
                {location.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <SacredPlaceMap locations={mapLocations} />
    </div>
  );
}
