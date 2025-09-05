import Link from "next/link";

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaHref,
  altCtaText,
  altCtaHref,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  altCtaText: string;
  altCtaHref: string;
}) {
  return (
    <section className="pt-8">
      <p className="mb-2 text-sm uppercase tracking-widest text-neutral-400">{eyebrow}</p>
      <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-neutral-300">{subtitle}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={ctaHref} className="rounded-xl bg-white px-4 py-2 text-black">{ctaText}</Link>
        <Link href={altCtaHref} className="rounded-xl border border-white/20 px-4 py-2 text-white">
          {altCtaText}
        </Link>
      </div>
    </section>
  );
}

