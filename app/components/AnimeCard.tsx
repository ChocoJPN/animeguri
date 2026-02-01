import Link from "next/link";
import type { Anime } from "@/lib/types";

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <Link
      href={`/anime/${anime.slug}`}
      className="group block rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md dark:border-gray-800"
    >
      <h3 className="font-semibold text-gray-900 group-hover:text-primary dark:text-gray-100">
        {anime.title}
      </h3>
      {anime.year && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {anime.year}年
        </p>
      )}
      {anime.description && (
        <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {anime.description}
        </p>
      )}
    </Link>
  );
}
