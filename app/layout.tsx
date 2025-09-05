import "./globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Eden Sverige",
  description:
    "A living vision for a more beautiful, healthy, and prosperous Sweden.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <div className="relative mx-auto max-w-6xl px-4">
          <SiteHeader />
          <main className="py-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

