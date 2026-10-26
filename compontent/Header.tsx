import logoImg from "@/app/assets/papas_inov_logo.webp";
import React from "react";

export default function Header(){
    const REPO_URL = "https://github.com/RaidenNet/PapasInvo-application-releasee"
    return (
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
                  Beta
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
    )
}