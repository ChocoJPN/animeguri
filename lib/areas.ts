import { prefectureBySlug, prefectures } from "@/lib/prefectures";

export interface OverseasArea {
  slug: string;
  nameJa: string;
  nameEn: string;
  region: string;
  mapX: number;
  mapY: number;
}

export const overseasAreas: OverseasArea[] = [
  {
    slug: "italy",
    nameJa: "イタリア",
    nameEn: "Italy",
    region: "海外",
    mapX: 52,
    mapY: 40,
  },
  {
    slug: "greece",
    nameJa: "ギリシャ",
    nameEn: "Greece",
    region: "海外",
    mapX: 55,
    mapY: 44,
  },
  {
    slug: "germany",
    nameJa: "ドイツ",
    nameEn: "Germany",
    region: "海外",
    mapX: 51,
    mapY: 34,
  },
  {
    slug: "netherlands",
    nameJa: "オランダ",
    nameEn: "Netherlands",
    region: "海外",
    mapX: 49,
    mapY: 32,
  },
  {
    slug: "france",
    nameJa: "フランス",
    nameEn: "France",
    region: "海外",
    mapX: 48,
    mapY: 38,
  },
  {
    slug: "thailand",
    nameJa: "タイ",
    nameEn: "Thailand",
    region: "海外",
    mapX: 73,
    mapY: 57,
  },
];

export const overseasAreaBySlug = new Map(
  overseasAreas.map((area) => [area.slug, area])
);

export function getAreaBySlug(slug: string) {
  return prefectureBySlug.get(slug) || overseasAreaBySlug.get(slug);
}

export function getAreaLabel(slug: string) {
  return getAreaBySlug(slug)?.nameJa || slug;
}

export function isPrefectureSlug(slug: string) {
  return prefectureBySlug.has(slug);
}

export const allAreaSlugs = [
  ...prefectures.map((prefecture) => prefecture.slug),
  ...overseasAreas.map((area) => area.slug),
];
