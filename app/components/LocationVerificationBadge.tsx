interface LocationVerificationBadgeProps {
  verified: boolean;
  compact?: boolean;
}

export default function LocationVerificationBadge({
  verified,
  compact = false,
}: LocationVerificationBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full font-semibold ${
        compact ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs"
      } ${
        verified
          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
          : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
      }`}
    >
      {verified ? "根拠確認済み" : "確認中"}
    </span>
  );
}
