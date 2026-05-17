import { prefectureBySlug } from "@/lib/prefectures";

export interface SacredPlaceMapLocation {
  id: number;
  name: string;
  prefecture: string;
}

const locationQueryHints: Record<string, string> = {
  旭川第七師団跡: "旭川市 第七師団跡",
  羽幌高校: "北海道羽幌高等学校",
  羽幌橋: "北海道 羽幌町 羽幌橋",
  朝日大橋: "北海道 羽幌町 朝日大橋",
};

function buildMapQuery(location: SacredPlaceMapLocation) {
  const prefectureName =
    prefectureBySlug.get(location.prefecture)?.nameJa || location.prefecture;
  return locationQueryHints[location.name] || `${prefectureName} ${location.name}`;
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
          const query = buildMapQuery(location);
          const encodedQuery = encodeURIComponent(query);
          const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&z=15&output=embed`;
          const openUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

          return (
            <article
              key={location.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {location.name}
                </h3>
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
