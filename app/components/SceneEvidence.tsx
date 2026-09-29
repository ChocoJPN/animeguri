import Image from "next/image";
import type {
  EvidenceImage,
  SceneEvidence as SceneEvidenceData,
} from "@/lib/location-details";

interface SceneEvidenceProps {
  evidence?: SceneEvidenceData[];
}

interface EvidencePhotoProps {
  image: EvidenceImage;
  attributionLabel?: string;
  fit?: "cover" | "contain";
}

function EvidencePhoto({
  image,
  attributionLabel = "撮影・提供",
  fit = "cover",
}: EvidencePhotoProps) {
  const hasAttribution = image.credit || image.license;

  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={fit === "contain" ? "object-contain" : "object-cover"}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
      {hasAttribution && (
        <figcaption className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          {attributionLabel}：
          {image.credit && image.sourceUrl ? (
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-300 underline-offset-2 hover:text-primary"
            >
              {image.credit}
            </a>
          ) : (
            image.credit
          )}
          {image.credit && image.license ? " / " : ""}
          {image.license && image.licenseUrl ? (
            <a
              href={image.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-300 underline-offset-2 hover:text-primary"
            >
              {image.license}
            </a>
          ) : (
            image.license
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default function SceneEvidence({ evidence }: SceneEvidenceProps) {
  if (!evidence?.length) {
    return (
      <section aria-labelledby="scene-evidence-title">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2
            id="scene-evidence-title"
            className="text-xl font-bold text-gray-900 dark:text-gray-100"
          >
            作中登場の根拠
          </h2>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
            未検証
          </span>
        </div>
        <div className="border-l-4 border-amber-400 bg-amber-50 px-4 py-4 text-sm leading-relaxed text-amber-950 dark:bg-amber-950/40 dark:text-amber-100">
          作中の登場話数や場面を確認できる資料がまだ登録されていません。確認が完了するまでは聖地候補として扱います。
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="scene-evidence-title">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2
            id="scene-evidence-title"
            className="text-xl font-bold text-gray-900 dark:text-gray-100"
          >
            作中登場の根拠
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            話数・場面・確認元を照合した記録です。
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          資料あり
        </span>
      </div>

      <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
        {evidence.map((item, index) => (
          <article key={`${item.episode}-${index}`} className="py-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-gray-900 px-2 py-1 text-xs font-semibold text-white dark:bg-gray-100 dark:text-gray-900">
                {item.episode}
              </span>
              <span
                className={`rounded px-2 py-1 text-xs font-semibold ${
                  item.verification === "verified"
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    : "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300"
                }`}
              >
                {item.verification === "verified" ? "公式・公的資料" : "複数資料で確認"}
              </span>
            </div>

            <p className="mt-3 leading-relaxed text-gray-800 dark:text-gray-200">
              {item.description}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {item.verificationNote}
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  作中シーン
                </h3>
                {item.animeImage ? (
                  <EvidencePhoto
                    image={item.animeImage}
                    attributionLabel="画像提供"
                    fit="contain"
                  />
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-gray-300 bg-gray-50 px-6 text-center dark:border-gray-700 dark:bg-gray-900">
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        作中画像は未掲載
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                        権利者の許諾または利用条件を確認できた画像のみ掲載します。
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  現地写真
                </h3>
                {item.realImage ? (
                  <EvidencePhoto image={item.realImage} />
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-gray-300 bg-gray-50 px-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                    現地写真は未登録です。
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                確認元
              </h3>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {item.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      {source.label} <span aria-hidden="true">&nearr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
