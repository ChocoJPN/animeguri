import { getAreaLabel } from "@/lib/areas";

export interface MapLocationInput {
  name: string;
  prefecture: string;
}

const locationQueryHints: Record<string, string> = {
  "旭川第七師団跡": "旭川市 第七師団跡",
  羽幌高校: "北海道 羽幌高校",
  羽幌橋: "北海道 羽幌町 羽幌橋",
  朝日大橋: "北海道 羽幌町 朝日大橋",
  "ジェノヴァ（ライデンシャフトリヒの街のイメージ）": "Genoa Italy",
  "サン・レオ（カリオストロ公国の城下町モデル）": "San Leo Italy",
  "サン・レオ城": "Forte di San Leo Italy",
};

export function buildMapQuery(location: MapLocationInput) {
  const areaName = getAreaLabel(location.prefecture);
  return locationQueryHints[location.name] || `${areaName} ${location.name}`;
}

export function buildGoogleMapsUrls(location: MapLocationInput) {
  const query = buildMapQuery(location);
  const encodedQuery = encodeURIComponent(query);

  return {
    query,
    embedUrl: `https://www.google.com/maps?q=${encodedQuery}&z=15&output=embed`,
    openUrl: `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`,
  };
}
