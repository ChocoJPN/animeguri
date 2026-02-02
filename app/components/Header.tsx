import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          Animeguri
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
          >
            ホーム
          </Link>
          <Link
            href="/search"
            className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
          >
            検索
          </Link>
        </nav>
      </div>
    </header>
  );
}
