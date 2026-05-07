import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hazel Home",
  description: "Furniture for people who take couches seriously",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 min-h-screen">
        <header className="border-b border-stone-200 px-8 py-5">
          <h1 className="text-xl font-semibold tracking-tight">Hazel Home</h1>
        </header>
        <main className="px-8 py-10 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
