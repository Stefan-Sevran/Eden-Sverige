import { Section } from "@/components/Section";

export default function Pilots() {
  const pilots = [
    { name: "Clean Street Block", detail: "Solar + air quality + greenery + safe walking." },
    { name: "Water Hub", detail: "Rain capture + filtration + sensors → public dashboard." },
    { name: "Mobility Loop", detail: "Quiet e-shuttle + bike lane + parking swap." },
  ];

  return (
    <>
      <Section title="Pilot candidates (90-day builds)">
        <div className="grid gap-4 sm:grid-cols-2">
          {pilots.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 p-5">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-neutral-300">{p.detail}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

