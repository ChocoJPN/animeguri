import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SceneEvidence from "@/app/components/SceneEvidence";
import LocationVerificationBadge from "@/app/components/LocationVerificationBadge";
import { getAreaLabel } from "@/lib/areas";
import { getDB } from "@/lib/db";
import { getLocationDetail } from "@/lib/location-details";
import { buildGoogleMapsUrls } from "@/lib/location-map";

interface Props {
  params: Promise<{ id: string }>;
}

interface LocationWithAnime {
  id: number;
  name: string;
  prefecture: string;
  anime_id: number;
  animeTitle: string;
  animeSlug: string;
  animeYear: number | null;
  animeDescription: string | null;
  animeImage: string | null;
}

export const dynamic = "force-dynamic";

async function getLocation(id: string) {
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId <= 0) return null;

  const db = await getDB();
  return db
    .prepare(
      `SELECT
        l.id,
        l.name,
        l.prefecture,
        l.anime_id,
        a.title AS animeTitle,
        a.slug AS animeSlug,
        a.year AS animeYear,
        a.description AS animeDescription,
        a.image AS animeImage
       FROM location l
       JOIN anime a ON a.id = l.anime_id
       WHERE l.id = ?`
    )
    .bind(numericId)
    .first<LocationWithAnime>();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const location = await getLocation(id);

  if (!location) return { title: "見つかりません" };

  const detail = getLocationDetail(location.animeSlug, location.name);
  const hasEvidence = Boolean(detail?.evidence?.length);

  return {
    title: `${location.name} - ${location.animeTitle}の聖地 | Animeguri`,
    description: hasEvidence
      ? `${location.name}は${location.animeTitle}に登場する${getAreaLabel(location.prefecture)}の聖地です。登場場面と確認元を掲載しています。`
      : `${location.name}は${location.animeTitle}の${getAreaLabel(location.prefecture)}にある聖地候補です。作中登場の確認資料を募集中です。`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { id } = await params;
  const location = await getLocation(id);
  if (!location) notFound();

  const detail = getLocationDetail(location.animeSlug, location.name);
  const hasEvidence = Boolean(detail?.evidence?.length);
  const { embedUrl, openUrl, query } = buildGoogleMapsUrls(location);
  const areaLabel = getAreaLabel(location.prefecture);

  const db = await getDB();
  const relatedRows = await db
    .prepare(
      `SELECT id, name, prefecture
       FROM location
       WHERE anime_id = ? AND id != ?
       ORDER BY prefecture, id
       LIMIT 8`
    )
    .bind(location.anime_id, location.id)
    .all<Pick<LocationWithAnime, "id" | "name" | "prefecture">>();

  const relatedLocations = relatedRows.results;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <Link
          href={`/anime/${location.animeSlug}`}
          className="text-gray-500 hover:text-primary dark:text-gray-400"
        >
          &larr; 作品ページへ
        </Link>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <Link
          href={`/prefecture/${location.prefecture}`}
          className="text-gray-500 hover:text-primary dark:text-gray-400"
        >
          {areaLabel}の一覧
        </Link>
      </div>

      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 md:grid md:grid-cols-[240px_1fr]">
        <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800 md:aspect-auto">
          {location.animeImage ? (
            <Image
              src={location.animeImage}
              alt={location.animeTitle}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 240px"
              priority
            />
          ) : (
            <div className="flex h-full min-h-64 items-center justify-center bg-gradient-to-br from-indigo-400 to-amber-400">
              <span className="text-7xl font-bold text-white/80">
                {location.animeTitle.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-sm font-medium text-primary">
            {location.animeTitle}
            {location.animeYear ? ` / ${location.animeYear}年` : ""}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              {location.name}
            </h1>
            <LocationVerificationBadge verified={hasEvidence} />
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {areaLabel}
            {detail?.address ? ` / ${detail.address}` : ""}
          </p>

          <p className="mt-5 leading-relaxed text-gray-700 dark:text-gray-300">
            {hasEvidence
              ? detail?.scene
              : `${location.name}は「${location.animeTitle}」の聖地候補として登録されています。Animeguriでは作中登場を確認できる資料がまだ登録されていないため、確認が完了するまでは候補地として扱います。`}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Googleマップで開く
              <span className="text-xs text-white/70">&nearr;</span>
            </a>
            <Link
              href={`/anime/${location.animeSlug}`}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              作品の聖地一覧
            </Link>
          </div>
        </div>
      </section>

      <SceneEvidence evidence={detail?.evidence} />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">
            確認状況
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {hasEvidence
              ? "作中の登場場面と確認元を照合済みです。上の記録から参照できます。"
              : "作品内での具体的な話数・場面を確認できる資料は未登録です。"}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">
            巡礼メモ
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {detail?.visitTip ||
              "写真撮影や長時間の滞在は、施設・店舗・近隣の迷惑にならない範囲で楽しみましょう。"}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">
            アクセス
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {detail?.accessHint ||
              `Googleマップでは「${query}」として検索できます。`}
          </p>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            地図
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Googleマップで位置を確認できます。
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="aspect-[16/9] w-full bg-gray-100 dark:bg-gray-800">
            <iframe
              src={embedUrl}
              title={`${location.name}の地図`}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {relatedLocations.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
            同じ作品の聖地
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {relatedLocations.map((related) => (
              <Link
                key={related.id}
                href={`/locations/${related.id}`}
                className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition-colors hover:border-primary hover:text-primary dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="block font-medium">{related.name}</span>
                <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                  {getAreaLabel(related.prefecture)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
