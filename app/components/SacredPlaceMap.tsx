import { getAreaLabel } from "@/lib/areas";
import Link from "next/link";
import { buildGoogleMapsUrls } from "@/lib/location-map";
import LocationVerificationBadge from "@/app/components/LocationVerificationBadge";

export interface SacredPlaceMapLocation {
  id: number;
  name: string;
  prefecture: string;
  isVerified: boolean;
}

export default function SacredPlaceMap({
  locations,
}: {
  locations: SacredPlaceMapLocation[];
}) {
  if (locations.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            聖地マップ
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {locations.length} 件
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {locations.map((location) => {
          const { embedUrl, openUrl } = buildGoogleMapsUrls(location);

          return (
            <article
              id={`map-location-${location.id}`}
              key={location.id}
              className="scroll-mt-20 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-800">
                <iframe
                  src={embedUrl}
                  title={`${location.name}の地図`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {getAreaLabel(location.prefecture)}
                  </p>
                  <LocationVerificationBadge
                    verified={location.isVerified}
                    compact
                  />
                </div>
                <Link
                  href={`/locations/${location.id}`}
                  className="block font-semibold text-gray-900 transition-colors hover:text-primary dark:text-gray-100"
                >
                  {location.name}
                </Link>
                <a
                  href={openUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Googleマップで開く
                  <span className="text-xs text-gray-400">&nearr;</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
