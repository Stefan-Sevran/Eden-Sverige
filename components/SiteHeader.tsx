import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 -mx-4 border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight">Eden Sverige</Link>
        <nav className="flex items-center gap-4 text-sm text-neutral-300">
          <Link href="/vision" className="hover:text-white">Vision</Link>
          <Link href="/pilots" className="hover:text-white">Pilots</Link>
          <Link href="/eden" className="rounded-xl bg-white px-3 py-1 text-black">8 Pillars</Link>
        </nav>
      </div>
    </header>
  );
}

