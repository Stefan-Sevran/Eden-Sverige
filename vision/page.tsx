import { Section } from "@/components/Section";
import Link from "next/link";

export default function Vision() {
  return (
    <>
      <Section title="Vision">
        <p className="text-neutral-300">
          Sweden can lead with beauty, health and technology—without ideological
          noise. We propose small, friendly pilots that neighbours love, with
          dashboards anyone can inspect.
        </p>
      </Section>
      <Section title="Design DNA">
        <ul className="space-y-2 text-neutral-300">
          <li>• Human-scale streets and squares</li>
          <li>• Timeless architecture (public taste measured via open voting)</li>
          <li>• Clean energy, water, and air as basic infrastructure</li>
          <li>• Digital tools that reduce friction, not increase surveillance</li>
        </ul>
      </Section>
      <div className="mt-8">
        <Link href="/pilots" className="rounded-xl bg-white px-4 py-2 text-black">
          See Pilots →
        </Link>
      </div>
    </>
  );
}

