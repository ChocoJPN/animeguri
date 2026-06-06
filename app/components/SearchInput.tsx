"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import AnimeCard from "./AnimeCard";
import type { AnimeWithLocations } from "@/lib/types";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AnimeWithLocations[]>([]);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const search = useCallback(async (q: string) => {
    const trimmedQuery = q.trim();
    setLoading(true);
    try {
      const url = trimmedQuery
        ? `/api/search?q=${encodeURIComponent(trimmedQuery)}`
        : "/api/search";
      const res = await fetch(url);
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

      {loading && <p className="mt-4 text-sm text-gray-500">検索中...</p>}

      {!loading && query.trim() && results.length === 0 && (
        <p className="mt-4 text-sm text-gray-500">
          「{query}」に一致するアニメが見つかりませんでした
        </p>
      )}

      {results.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {results.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
}
