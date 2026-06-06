import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import type { Anime, Location, AnimeWithLocations } from "@/lib/types";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();

  const db = await getDB();
  const animeQuery = q
    ? db
        .prepare("SELECT * FROM anime WHERE title LIKE ? ORDER BY title LIMIT 20")
        .bind(`%${q}%`)
    : db.prepare("SELECT * FROM anime ORDER BY title");

  const animeRows = await animeQuery.all<Anime>();

  const results: AnimeWithLocations[] = [];

  for (const anime of animeRows.results) {
    const locationRows = await db
      .prepare("SELECT * FROM location WHERE anime_id = ?")
      .bind(anime.id)
      .all<Location>();

    results.push({
      ...anime,
      locations: locationRows.results,
    });
  }

  return NextResponse.json(results);
}
