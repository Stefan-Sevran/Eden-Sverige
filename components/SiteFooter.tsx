export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 py-6 text-sm text-neutral-400">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Eden Sverige</p>
        <p>Made with love in Sweden & Thailand.</p>
      </div>
    </footer>
  );
}

