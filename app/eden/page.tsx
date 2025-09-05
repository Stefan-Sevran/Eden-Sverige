import { pillars } from "@/data/pillars";
import { Section } from "@/components/Section";

export default function Eden() {
  return (
    <>
      <Section title="Eden Sverige – 8 Pillars">
        <p className="mb-6 text-neutral-300">
          A full-stack, people-first upgrade. Start anywhere—measure results—iterate.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 p-5">
              <div className="text-3xl">{p.emoji}</div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-neutral-300">{p.blurb}</p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-400 list-disc pl-5">
                {p.actions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

