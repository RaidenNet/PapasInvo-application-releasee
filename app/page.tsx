import React from 'react';

import logoImg from './assets/papas_inov_logo.webp'
import shopImg from './assets/shop.webp'
import inventoryImg from './assets/inventory.webp'
import accountImg from './assets/account.webp'

export default function Home() {
  const REPO_URL = "https://github.com/RaidenNet/PapasInvo-application-releasee";

  return (
      <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 font-mono selection:bg-yellow-400 selection:text-black">

        {/* Top Banner / Header */}
        <header className="w-full border-b-2 border-yellow-500/30 bg-neutral-900/90 py-6 px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

            {/* Logo & Tagline */}
            <div className="flex items-center gap-5">
              <img
                  src={logoImg.src}
                  alt="Papa's Invo Logo"
                  className="h-20 w-auto object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-black tracking-wider uppercase text-yellow-400">
                    Papa&#39;s Invo
                  </h1>
                  <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-widest bg-yellow-400 text-black rounded-sm">
                  Alpha
                </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">
                  Store things on familiar place
                </p>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                  href={`${REPO_URL}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial text-center px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold uppercase text-xs tracking-wider transition-all duration-150 border-2 border-yellow-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              >
                Get Latest Release
              </a>
              <a
                  href={`${REPO_URL}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial text-center px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-yellow-400 font-bold uppercase text-xs tracking-wider border-2 border-yellow-500/40 transition-colors"
              >
                Feedback
              </a>
            </div>

          </div>
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">

          {/* Hero Pitch */}
          <section className="bg-neutral-900 border-2 border-yellow-500/20 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rotate-45 transform translate-x-12 -translate-y-12 pointer-events-none" />
            <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-sans font-medium max-w-3xl">
              A practical, no-nonsense inventory management tool built for local physical stores and workshops. Built to stay out of your way while keeping your daily operations, stock, and accounts crystal clear.
            </p>
          </section>

          {/* Core Pillars Section */}
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-3 border-b-2 border-yellow-500/40 pb-3">
              <span className="text-yellow-400 font-black text-xl">🕷️</span>
              <h2 className="text-xl font-extrabold uppercase tracking-widest text-neutral-100">
                Core Application Pillars
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Pillar 1: Shop POS */}
              <div className="bg-neutral-900 border border-neutral-800 hover:border-yellow-500/60 transition-all flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden border-b border-neutral-800">
                  <img
                      src={shopImg.src}
                      alt="Shop POS Operations"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 border border-yellow-500/50 px-2 py-0.5 text-[10px] uppercase font-bold text-yellow-400">
                    01 / Front Desk
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-yellow-400 uppercase tracking-wider">
                    Shop Operations
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Fast in-store checkout system designed for seamless daily point-of-sale transactions without unnecessary clicks.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Inventory */}
              <div className="bg-neutral-900 border border-neutral-800 hover:border-yellow-500/60 transition-all flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden border-b border-neutral-800">
                  <img
                      src={inventoryImg.src}
                      alt="Garage & Inventory Storage"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 border border-yellow-500/50 px-2 py-0.5 text-[10px] uppercase font-bold text-yellow-400">
                    02 / Stock Floor
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-yellow-400 uppercase tracking-wider">
                    Inventory Control
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Keep exact track of items, parts, and stock levels. Store things in their familiar places and eliminate missing stock.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Accounts */}
              <div className="bg-neutral-900 border border-neutral-800 hover:border-yellow-500/60 transition-all flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden border-b border-neutral-800">
                  <img
                      src={accountImg.src}
                      alt="Accounts and Reports"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 border border-yellow-500/50 px-2 py-0.5 text-[10px] uppercase font-bold text-yellow-400">
                    03 / Back Office
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-yellow-400 uppercase tracking-wider">
                    Accounts & Tax
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Clear record-keeping for cash flow, daily valuation, estimated tax summaries, and business growth tracking.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Roadmap Grid */}
          <section className="bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
              Development Status & Progress
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="border-l-2 border-yellow-400 pl-4 py-1">
                <p className="font-bold text-neutral-200 uppercase font-mono">Current Alpha</p>
                <p className="text-neutral-400 mt-1">Item entry, stock viewing, and desktop runtime packaging.</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4 py-1">
                <p className="font-bold text-neutral-200 uppercase font-mono">Upcoming Milestone</p>
                <p className="text-neutral-400 mt-1">POS checkout interface, stock aging valuation, and sales metrics.</p>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="w-full border-t border-neutral-800/80 py-8 text-center text-xs text-neutral-500 uppercase tracking-widest">
          <p>Papa&#39;s Invo — Dependable software for real shop owners.</p>
        </footer>
      </div>
  );
}