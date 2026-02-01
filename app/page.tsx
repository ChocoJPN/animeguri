import { getDB } from "@/lib/db";
import type { PrefectureAnimeCount } from "@/lib/types";
import JapanMap from "./components/JapanMap";
import PrefectureList from "./components/PrefectureList";

export default async function Home() {
  const db = await getDB();
  const rows = await db
    .prepare(
      "SELECT prefecture, COUNT(DISTINCT anime_id) as count FROM location GROUP BY prefecture"
    )
    .all<PrefectureAnimeCount>();

  const animeCounts: Record<string, number> = {};
  for (const row of rows.results) {
    animeCounts[row.prefecture] = row.count;
  }

  return (
    <div>
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
          日本全国のアニメ聖地を探そう
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          都道府県をクリックして、アニメの聖地巡礼スポットを見つけよう
        </p>
      </section>

      <section className="mb-12">
        <JapanMap animeCounts={animeCounts} />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          都道府県から探す
        </h2>
        <PrefectureList animeCounts={animeCounts} />
      </section>
    </div>
  );
}
