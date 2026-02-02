export interface Anime {
  id: number;
  title: string;
  slug: string;
  year: number | null;
  xurl: string | null;
  officialurl: string | null;
  description: string | null;
  image: string | null;
}

export interface Location {
  id: number;
  prefecture: string;
  anime_id: number;
  name: string;
}

export interface AnimeWithLocations extends Anime {
  locations: Location[];
}

export interface PrefectureAnimeCount {
  prefecture: string;
  count: number;
}
