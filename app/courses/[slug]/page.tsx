import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CourseRoute, {
  type CourseRouteStop,
} from "@/app/components/CourseRoute";
import { getModelCourse } from "@/lib/courses";
import { getDB } from "@/lib/db";
import { buildGoogleMapsDirectionsUrl } from "@/lib/location-map";
import type { Location } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getModelCourse(slug);
  if (!course) return { title: "見つかりません" };

  return {
    title: `${course.title} - ${course.animeTitle}モデルコース | Animeguri`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getModelCourse(slug);
  if (!course) notFound();

  const db = await getDB();
  const rows = await db
    .prepare(
      `SELECT l.id, l.name, l.prefecture, l.anime_id
       FROM location l
       JOIN anime a ON a.id = l.anime_id
       WHERE a.slug = ? AND l.prefecture = ?`
    )
    .bind(course.animeSlug, course.prefecture)
    .all<Location>();

  const locationByName = new Map(
    rows.results.map((location) => [location.name, location])
  );
  const stops = course.stops.flatMap<CourseRouteStop>((definition) => {
    const location = locationByName.get(definition.locationName);
    if (!location) return [];

    return [
      {
        id: location.id,
        name: location.name,
        prefecture: location.prefecture,
        title: definition.title,
        stayMinutes: definition.stayMinutes,
        note: definition.note,
      },
    ];
  });
  if (stops.length === 0) notFound();

  const directionsUrl = buildGoogleMapsDirectionsUrl(stops);

  return (
    <div className="space-y-8">
      <Link
        href="/courses"
        className="inline-block text-sm text-gray-500 hover:text-primary dark:text-gray-400"
      >
        &larr; モデルコース一覧へ
      </Link>

      <section className="overflow-hidden border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:grid md:grid-cols-[280px_1fr]">
        <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800 md:aspect-auto">
          <Image
            src={course.image}
            alt={course.animeTitle}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
            priority
          />
        </div>
        <div className="py-5 md:px-6 md:py-7">
          <p className="text-sm font-medium text-primary">
            {course.animeTitle} / {course.areaLabel}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            {course.title}
          </h1>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
            {course.description}
          </p>
          <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-gray-200 pt-4 text-sm dark:border-gray-800">
            <div>
              <dt className="text-xs text-gray-500 dark:text-gray-400">所要時間</dt>
              <dd className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                {course.duration}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 dark:text-gray-400">距離</dt>
              <dd className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                {course.distance}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 dark:text-gray-400">移動</dt>
              <dd className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                {course.transport}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <CourseRoute stops={stops} directionsUrl={directionsUrl} />

      <section className="border-t border-gray-200 pt-6 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          巡礼時のお願い
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          所要時間は徒歩移動と各地点の滞在目安を合わせた参考値です。店舗や施設の営業情報を事前に確認し、私有地への立ち入り、通路をふさぐ撮影、大声での会話は避けて巡りましょう。
        </p>
      </section>
    </div>
  );
}
