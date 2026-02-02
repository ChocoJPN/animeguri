import Link from "next/link";
import Image from "next/image";
import type { Anime } from "@/lib/types";

export default function AnimeCard({ anime }: { anime: Anime }) {
  const initial = anime.title.charAt(0);

  return (
    <Link
      href={`/anime/${anime.slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-md dark:border-gray-800"
    >
      {/* サムネイル画像 */}
      <div className="relative h-32 w-full">
        {anime.image ? (
          <Image
            src={anime.image}
            alt={anime.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500">
            <span className="text-3xl font-bold text-white/80">{initial}</span>
          </div>
        )}
      </div>

      <div className="p-4">
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
      </div>
    </Link>
  );
}
