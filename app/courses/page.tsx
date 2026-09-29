import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { modelCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "聖地巡礼モデルコース - Animeguri",
  description: "作品ごとのアニメ聖地を順番に巡れる徒歩モデルコースです。",
};

export default function CoursesPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-medium text-primary">順路から探す</p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          聖地巡礼モデルコース
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          作品の聖地を、歩きやすい順番と滞在時間の目安に沿って巡れます。
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {modelCourses.map((course) => (
          <article
            key={course.slug}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
          >
            <Link href={`/courses/${course.slug}`} className="group block">
              <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800">
                <Image
                  src={course.image}
                  alt={course.animeTitle}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-primary">
                  {course.animeTitle} / {course.areaLabel}
                </p>
                <h2 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-primary dark:text-gray-100">
                  {course.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {course.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>{course.duration}</span>
                  <span>{course.distance}</span>
                  <span>{course.stops.length}地点</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
