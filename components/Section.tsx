export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

