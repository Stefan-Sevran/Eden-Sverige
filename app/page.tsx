import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Eden Sverige"
        title="Beauty. Health. Prosperity. For everyone."
        subtitle="A calm, actionable roadmap—pilot-first—so Sweden can demo world-class living: clean energy, clean water, clean air, and people-centric design."
        ctaText="See the Vision"
        ctaHref="/vision"
        altCtaText="Explore Pilots"
        altCtaHref="/pilots"
      />

      <Section title="What this is">
        <p className="text-neutral-300">
          A lightweight, non-political initiative to help municipalities and
          citizens test proven upgrades quickly. Start with one pilot block →
          show results → scale.
        </p>
      </Section>

      <Section title="How we work">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Pilot first, data always",
            "Transparent budgets & dashboards",
            "Local jobs & vocational training",
            "Public feedback + open voting",
          ].map((t) => (
            <li key={t} className="rounded-2xl border border-white/10 p-4">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <div className="mt-8 flex gap-3">
        <Link className="rounded-xl bg-white px-4 py-2 text-black" href="/eden">
          See the 8 Pillars →
        </Link>
      </div>
    </>
  );
}

