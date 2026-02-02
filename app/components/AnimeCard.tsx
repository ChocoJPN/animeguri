import Link from "next/link";
import Image from "next/image";
import type { Anime } from "@/lib/types";

export default function AnimeCard({ anime }: { anime: Anime }) {
  const initial = anime.title.charAt(0);

  return (
    <Link
      href={`/anime/${anime.slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      {/* ポスター画像（3:4 縦長） */}
      <div className="relative aspect-[3/4] w-full">
        {anime.image ? (
          <Image
            src={anime.image}
            alt={anime.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500">
            <span className="text-5xl font-bold text-white/80">{initial}</span>
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="truncate font-semibold text-gray-900 group-hover:text-primary dark:text-gray-100">
          {anime.title}
        </h3>
        {anime.year && (
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            {anime.year}年
          </p>
        )}
        {anime.description && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
            {anime.description}
          </p>
        )}
      </div>
    </Link>
  );
}
