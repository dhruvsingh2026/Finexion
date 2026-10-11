import React from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { useToast } from './ui/Toast';

export const Steps: React.FC = () => {
  const { showToast } = useToast();

  return (
    <section id="steps" className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <Eyebrow>[ How it works ]</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] text-[#080D16] mt-4 leading-[0.95] tracking-wide">
              Simple Steps to <span className="accent-blue">Smarter Finance</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#5B6470] leading-relaxed">
            Automate your financial operations, track performance in real time, and make confident decisions backed by clear insights.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Step 1: Smart Wallet Overview */}
          <div className="rounded-3xl bg-[#F5F6F7] p-6 sm:p-7 flex flex-col justify-between border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow">
            {/* Top Mockup */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#129FE3]/30 shadow-xs mb-6">
              <div className="flex items-center justify-between text-xs text-[#5B6470] mb-2">
                <span className="font-semibold text-[#0B77B0]">Finexa Cash</span>
                <span className="text-[10px] bg-sky-50 px-2 py-0.5 rounded text-[#0B77B0] font-mono">VISA VIRTUAL</span>
              </div>
              <div className="text-[11px] text-[#5B6470]">Main Balance</div>
              <div className="font-display text-3xl text-[#080D16] mt-0.5">$1,389.00</div>
              <div className="mt-2 text-[11px] font-mono text-slate-400">•••• •••• •••• 4821</div>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
                <button
                  onClick={() => showToast('Wallet transfer initiated')}
                  className="py-1.5 px-3 rounded-xl bg-[#080D16] text-white text-xs font-semibold hover:bg-black transition-colors"
                >
                  Transfer
                </button>
                <button
                  onClick={() => showToast('Wallet withdraw initiated')}
                  className="py-1.5 px-3 rounded-xl bg-slate-100 text-[#080D16] text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Withdraw
                </button>
              </div>
            </div>

            {/* Step Copy */}
            <div>
              <span className="text-xs font-bold text-[#0B77B0] uppercase tracking-wider block mb-1">
                Step 01
              </span>
              <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#080D16]">
                Smart Wallet Overview
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5B6470] leading-relaxed">
                Track balance, rewards, and transfers in one secure place.
              </p>
            </div>
          </div>

          {/* Step 2: Financial Performance Insights */}
          <div className="rounded-3xl bg-[#F5F6F7] p-6 sm:p-7 flex flex-col justify-between border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow">
            {/* Top Mockup: Statistics chart */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs mb-6">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-[#080D16]">Statistics</span>
                <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">+24.8%</span>
              </div>
              <div className="text-[11px] text-[#5B6470] mb-3">This Week Growth</div>

              {/* Multi-line SVG chart */}
              <div className="h-24 w-full">
                <svg viewBox="0 0 240 80" className="w-full h-full overflow-visible" fill="none">
                  {/* Subtle grid lines */}
                  <line x1="0" y1="20" x2="240" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="50" x2="240" y2="50" stroke="#f1f5f9" strokeWidth="1" />

                  {/* Gray secondary trend */}
                  <path
                    d="M 10 65 Q 60 45, 110 55 T 180 40 T 230 45"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Vibrant lime/green primary trend */}
                  <path
                    d="M 10 55 Q 60 25, 110 40 T 170 15 T 230 10"
                    stroke="#84cc16"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="230" cy="10" r="4" fill="#84cc16" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#5B6470] pt-2 border-t border-slate-100">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Step Copy */}
            <div>
              <span className="text-xs font-bold text-[#0B77B0] uppercase tracking-wider block mb-1">
                Step 02
              </span>
              <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#080D16]">
                Financial Performance Insights
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5B6470] leading-relaxed">
                Monitor trends and make smarter financial decisions.
              </p>
            </div>
          </div>

          {/* Step 3: Flexible Pricing Plans */}
          <div className="rounded-3xl bg-[#F5F6F7] p-6 sm:p-7 flex flex-col justify-between border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow">
            {/* Top Mockup: Plan picker */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs mb-6 space-y-2.5">
              <div className="text-xs font-semibold text-[#080D16] mb-1">Select Tier</div>

              {/* Starter Row */}
              <div className="p-2.5 rounded-xl border border-slate-200 flex items-center justify-between bg-slate-50/50">
                <span className="text-xs font-medium text-[#303640]">Starter</span>
                <span className="font-display text-base text-[#080D16]">$0</span>
              </div>

              {/* Pro Row (Highlighted) */}
              <div className="p-2.5 rounded-xl border-2 border-[#D8FF4F] bg-lime-50/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#080D16]">Pro</span>
                  <span className="text-[9px] bg-[#D8FF4F] text-[#080D16] font-bold px-1.5 py-0.2 rounded">POPULAR</span>
                </div>
                <span className="font-display text-base text-[#080D16]">$99</span>
              </div>

              {/* Choose button */}
              <button
                onClick={() => {
                  const el = document.getElementById('pricing');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-2 py-2 rounded-xl bg-[#D8FF4F] hover:bg-[#cbf738] text-xs font-semibold text-[#080D16] transition-colors shadow-xs"
              >
                Choose Pro
              </button>
            </div>

            {/* Step Copy */}
            <div>
              <span className="text-xs font-bold text-[#0B77B0] uppercase tracking-wider block mb-1">
                Step 03
              </span>
              <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#080D16]">
                Flexible Pricing Plans
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5B6470] leading-relaxed">
                Pick the right plan with clear, transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
