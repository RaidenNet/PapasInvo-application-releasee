import React from 'react';

import shopImg from '@/app/assets/shop.webp'
import inventoryImg from '@/app/assets/inventory.webp'
import accountImg from '@/app/assets/account.webp'
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

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

        <section className="bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col gap-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
            Recover the Account
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-xs font-sans items-center">
            <div className="py-1">
              <p className="font-bold text-neutral-200 uppercase font-mono">Locked out?</p>
              <p className="text-neutral-400 mt-1">
                Forgot your password? Reset it and get back to your shop.
              </p>
            </div>
            <Link
                href="/account"
                className="text-center px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold uppercase text-xs tracking-wider transition-all duration-150 border-2 border-yellow-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 sm:w-1/2"
            >
              Forgot Password
            </Link>
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
  )
}