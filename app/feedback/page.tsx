import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ご意見等 - Animeguri",
  description: "Animeguriへのご意見・ご要望・フィードバックをお寄せください",
};

export default function FeedbackPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        ご意見等
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Animeguriへのご意見・ご要望・不具合の報告など、お気軽にお寄せください。
      </p>
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf5kJS6furL41IE9oVZlvaxoI9cRW_yfatsNjWFAYWpjYXnUg/viewform?embedded=true"
          width="100%"
          height="800"
          className="border-0"
          title="フィードバックフォーム"
        >
          読み込んでいます…
        </iframe>
      </div>
    </div>
  );
}
