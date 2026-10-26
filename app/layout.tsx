import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/compontent/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papa's Invo",
  description: "Access papa's invo application and related product",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 font-mono selection:bg-yellow-400 selection:text-black">
      <Header />
      <div className="flex-1 flex flex-col">{children}</div>
      <footer className="w-full border-t border-neutral-800/80 py-8 text-center text-xs text-neutral-500 uppercase tracking-widest">
        <p>Papa&#39;s Invo — Dependable software for real shop owners.</p>
      </footer>
      </body>
      </html>
  );
}