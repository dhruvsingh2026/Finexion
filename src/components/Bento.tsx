import React from 'react';
import { LogoMark } from './ui/Logo';
import { Avatar } from './ui/Avatar';
import { useToast } from './ui/Toast';

export const Bento: React.FC = () => {
  const { showToast } = useToast();

  const satisfiedClients = [
    { name: 'Sarah Williams' },
    { name: 'Marcus Chen' },
    { name: 'Elena Vance' },
    { name: 'David Carter' },
  ];

  return (
    <section id="proof" className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card A: Photo of person with phone + metrics panel */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-5 shadow-sm group">
            {/* Background image */}
            <img
              src="/images/person-phone.jpg"
              alt="Professional using Finexa mobile app outdoors"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient shadow for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating White Panel */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/60">
              <div className="font-display text-4xl sm:text-5xl text-[#080D16] leading-none mb-1">
                50+
              </div>
              <p className="text-xs sm:text-sm text-[#5B6470] leading-snug">
                Trusted by individuals and businesses across 50+ countries to manage their finances.
              </p>
            </div>
          </div>

          {/* Card B: Light-gray Client Satisfaction card */}
          <div className="rounded-3xl bg-[#F5F6F7] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/60 shadow-xs">
            <div>
              <div className="text-xs font-semibold text-[#5B6470] uppercase tracking-wider mb-2">
                Client satisfaction
              </div>
              <div className="font-display text-5xl sm:text-6xl text-[#080D16] leading-none">
                100%
              </div>

              {/* Overlapping avatar circles */}
              <div className="flex items-center -space-x-2.5 mt-5">
                {satisfiedClients.map((client, idx) => (
                  <Avatar key={idx} name={client.name} size="sm" className="ring-2 ring-[#F5F6F7]" />
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <p className="text-sm sm:text-base text-[#303640] font-medium italic leading-relaxed">
                “Having everything in one place makes managing my finances simple and stress-free.”
              </p>
              <span className="block mt-2 text-xs text-[#5B6470] font-normal not-italic">
                Verified Customer Feedback
              </span>
            </div>
          </div>

          {/* Card C: Split card with Earnings & Navy CTA Strip */}
          <div className="rounded-3xl overflow-hidden flex flex-col border border-slate-200/60 shadow-xs">
            {/* Upper Light-Gray Section */}
            <div className="bg-[#F5F6F7] p-6 sm:p-7 flex-1 flex flex-col justify-between">
              {/* Top bar with Logo & arrow button */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <LogoMark size={24} />
                  <span className="font-sans font-semibold text-sm text-[#080D16]">Finexa</span>
                </div>
                <button
                  onClick={() => showToast('View financial reports')}
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#080D16] transition-transform hover:scale-105 cursor-pointer shadow-xs"
                  aria-label="View report"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>

              {/* Metric & Arc Chart */}
              <div className="my-5 flex items-end justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#5B6470] uppercase tracking-wider mb-1">
                    Earnings
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl text-[#080D16] leading-none">
                      $750M+
                    </span>
                    <span className="bg-[#D8FF4F] text-[#080D16] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      +6k
                    </span>
                  </div>
                </div>

                {/* Lime Semi-circle Arc Chart */}
                <div className="relative w-20 h-12 overflow-hidden shrink-0">
                  <svg viewBox="0 0 100 55" className="w-full h-full">
                    {/* Background track */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    {/* Lime active arc */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 75 20"
                      fill="none"
                      stroke="#D8FF4F"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Lower Navy Strip */}
            <div className="bg-[#080D16] p-5 sm:p-6 flex items-center justify-between text-white">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/60 font-medium">Total Volume</div>
                <div className="font-display text-3xl sm:text-4xl text-white leading-none mt-0.5">
                  $2.5B+
                </div>
              </div>
              <button
                onClick={() => showToast('Opening Free Trial registration')}
                className="bg-[#D8FF4F] hover:bg-[#cbf738] text-[#080D16] text-xs font-semibold px-4 py-2 rounded-full transition-all hover:scale-105 cursor-pointer shadow-sm flex items-center gap-1"
              >
                Start Free Trial ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
