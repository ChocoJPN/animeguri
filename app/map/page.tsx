import type { Metadata } from "next";
import NationwideMap, {
  type NationwideMapLocation,
} from "@/app/components/NationwideMap";
import { getDB } from "@/lib/db";
import { isLocationVerified } from "@/lib/location-details";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "全国聖地マップ - Animeguri",
  description: "日本全国と海外のアニメ聖地を地図で横断検索できます。",
};

export default async function MapPage() {
  const db = await getDB();
  const rows = await db
    .prepare(
      `SELECT
        l.id,
        l.name,
        l.prefecture,
        a.title AS animeTitle,
        a.slug AS animeSlug
       FROM location l
       JOIN anime a ON a.id = l.anime_id
       ORDER BY l.prefecture, a.title, l.name`
    )
    .all<Omit<NationwideMapLocation, "isVerified">>();

  const locations: NationwideMapLocation[] = rows.results.map((location) => ({
    ...location,
    isVerified: isLocationVerified(location.animeSlug, location.name),
  }));

  return (
    <div>
      <div className="mb-5">
        <p className="text-sm font-medium text-primary">全国・海外</p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          全国聖地マップ
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          登録されている聖地を作品名や地域で絞り込み、地図上で確認できます。
        </p>
      </div>

      <NationwideMap locations={locations} />
    </div>
  );
}
