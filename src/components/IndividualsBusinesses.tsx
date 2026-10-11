import React, { useState } from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { Flag } from './ui/Flags';
import { coreFeatures, sampleTransfers } from '../data/features';
import { useToast } from './ui/Toast';

export const IndividualsBusinesses: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('core-1');
  const { showToast } = useToast();

  const toggleFeature = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="individuals-businesses" className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Accordion Features */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Eyebrow>[ Core Features ]</Eyebrow>

            <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] text-[#080D16] mt-4 leading-[0.95] tracking-wide">
              Built for Individuals <span className="accent-blue">and Businesses</span>
            </h2>

            {/* Accordion Feature Rows */}
            <div className="w-full mt-8 space-y-3">
              {coreFeatures.map((feat) => {
                const isOpen = expandedId === feat.id;
                return (
                  <div
                    key={feat.id}
                    className="border-b border-slate-200/80 pb-3 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      aria-expanded={isOpen}
                      className="w-full py-2 flex items-center justify-between text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-500 rounded"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-[#0B77B0] font-semibold group-hover:bg-[#129FE3] group-hover:text-white transition-colors">
                          {feat.id === 'core-1' ? '👤' : feat.id === 'core-2' ? '⚡' : '🔒'}
                        </span>
                        <span className="font-sans font-semibold text-base sm:text-lg text-[#080D16]">
                          {feat.title}
                        </span>
                      </div>
                      <span className="text-slate-400 group-hover:text-[#080D16] transition-transform duration-200 text-lg">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="mt-1.5 pl-9 text-xs sm:text-sm text-[#5B6470] leading-relaxed animate-in fade-in duration-200">
                        {feat.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dark Action Pill */}
            <button
              onClick={() => showToast('Exploring core features')}
              className="mt-8 bg-[#080D16] text-white hover:bg-black text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              Explore More ↗
            </button>
          </div>

          {/* Right Column: Blue-outlined Mockup with Transfers Table + Floating Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl p-5 sm:p-7 md:p-8 border-2 border-[#129FE3]/35 bg-gradient-to-b from-[#EBF5FB] via-[#F4F9FD] to-white shadow-lg overflow-hidden">
              {/* Header inside Mockup */}
              <div className="flex items-center justify-between pb-5 border-b border-sky-100/80">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-sky-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0B77B0]">
                    Recent Invoices & Transfers
                  </span>
                </div>
                <span className="text-xs font-medium text-[#5B6470] bg-white/80 px-2.5 py-1 rounded-full border border-sky-100">
                  Global Batch #2026
                </span>
              </div>

              {/* Transfers Table Rows */}
              <div className="mt-5 space-y-3">
                {sampleTransfers.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white shadow-xs border border-slate-100 hover:border-sky-200 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <Flag code={item.flagCode} size={28} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base font-semibold text-[#080D16] truncate">
                            {item.country}
                          </span>
                          {item.status && (
                            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              {item.status}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#5B6470] flex items-center gap-1.5 mt-0.5">
                          <span>{item.invoice}</span>
                          <span>•</span>
                          <span>{item.currency}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-3">
                      <span className="font-display text-xl sm:text-2xl text-[#080D16]">
                        {item.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating White Card with Lime Outline: Performance Analytics */}
            {/* Positioned safely offset so country names remain 100% visible */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-4 md:-left-6 z-20 w-64 p-4 rounded-2xl bg-white shadow-xl border-2 border-[#D8FF4F] text-[#080D16] transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between text-xs font-semibold text-[#5B6470] mb-2">
                <span>Performance analytics</span>
                <span className="text-emerald-600 font-bold">35% ↑</span>
              </div>

              {/* Sparkline SVG */}
              <div className="h-10 w-full mb-2">
                <svg viewBox="0 0 160 40" className="w-full h-full overflow-visible" fill="none">
                  <path
                    d="M 0 35 Q 30 15, 60 28 T 110 12 T 160 5"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="160" cy="5" r="3.5" fill="#16a34a" />
                </svg>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                <span className="text-[#5B6470]">Insights</span>
                <span className="font-semibold text-[#0B77B0]">Best Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
