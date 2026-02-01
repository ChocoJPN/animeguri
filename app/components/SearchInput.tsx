"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { prefectureBySlug } from "@/lib/prefectures";
import type { AnimeWithLocations } from "@/lib/types";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AnimeWithLocations[]>([]);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const search = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data: AnimeWithLocations[] = await res.json();
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => search(query), 300);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, search]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="アニメ名を入力..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        autoFocus
      />

      {loading && (
        <p className="mt-4 text-sm text-gray-500">検索中...</p>
      )}

      {!loading && query.trim() && results.length === 0 && (
        <p className="mt-4 text-sm text-gray-500">
          「{query}」に一致するアニメが見つかりませんでした
        </p>
      )}

      {results.length > 0 && (
        <div className="mt-4 space-y-4">
          {results.map((anime) => (
            <div
              key={anime.id}
              className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
            >
              <Link
                href={`/anime/${anime.slug}`}
                className="text-lg font-semibold text-gray-900 hover:text-primary dark:text-gray-100"
              >
                {anime.title}
              </Link>
              {anime.year && (
                <span className="ml-2 text-sm text-gray-500">{anime.year}年</span>
              )}
              {anime.description && (
                <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {anime.description}
                </p>
              )}
              {anime.locations.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {[...new Set(anime.locations.map((l) => l.prefecture))].map(
                    (slug) => {
                      const pref = prefectureBySlug.get(slug);
                      return (
                        <Link
                          key={slug}
                          href={`/prefecture/${slug}`}
                          className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 hover:bg-primary/10 hover:text-primary dark:bg-gray-800 dark:text-gray-300"
                        >
                          {pref?.nameJa || slug}
                        </Link>
                      );
                    }
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
