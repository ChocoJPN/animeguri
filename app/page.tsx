import { getDB } from "@/lib/db";
import Link from "next/link";
import { modelCourses } from "@/lib/courses";
import type { PrefectureAnimeCount } from "@/lib/types";
import JapanMap from "./components/JapanMap";
import PrefectureList from "./components/PrefectureList";

export const dynamic = "force-dynamic";

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
        <Link
          href="/map"
          className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          全国聖地マップを開く
        </Link>
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

      <section className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              モデルコースから探す
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              順路と所要時間を見ながら聖地を巡れます。
            </p>
          </div>
          <Link
            href="/courses"
            className="shrink-0 text-sm font-medium text-primary hover:underline"
          >
            すべて見る
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {modelCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="rounded-md border border-gray-200 bg-white p-4 transition-colors hover:border-primary dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="block text-xs font-medium text-primary">
                {course.animeTitle}
              </span>
              <span className="mt-1 block font-semibold text-gray-900 dark:text-gray-100">
                {course.title}
              </span>
              <span className="mt-2 block text-xs text-gray-500 dark:text-gray-400">
                {course.duration} / {course.stops.length}地点
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
