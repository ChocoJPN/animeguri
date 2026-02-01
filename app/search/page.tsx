import type { Metadata } from "next";
import SearchInput from "@/app/components/SearchInput";

export const metadata: Metadata = {
  title: "検索 - アニメグリ",
  description: "アニメ名で聖地巡礼スポットを検索",
};

export default function SearchPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        アニメ検索
      </h1>
      <SearchInput />
    </div>
  );
}
