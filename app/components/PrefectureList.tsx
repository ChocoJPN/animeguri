import Link from "next/link";
import { prefectures } from "@/lib/prefectures";

interface Props {
  animeCounts: Record<string, number>;
}

export default function PrefectureList({ animeCounts }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
      {prefectures.map((pref) => {
        const count = animeCounts[pref.slug] || 0;
        return (
          <Link
            key={pref.slug}
            href={`/prefecture/${pref.slug}`}
            className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-primary/5 dark:border-gray-800 dark:hover:border-primary"
          >
            <span className="text-gray-800 dark:text-gray-200">{pref.nameJa}</span>
            {count > 0 && (
              <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                {count}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
