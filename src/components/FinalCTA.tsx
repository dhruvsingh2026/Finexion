import React from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { Avatar } from './ui/Avatar';
import { useToast } from './ui/Toast';

export const FinalCTA: React.FC = () => {
  const { showToast } = useToast();

  const handleStoreClick = (store: string) => {
    showToast(`Finexa ${store} build is coming soon! Registration recorded.`);
  };

  return (
    <section id="download" className="relative p-2.5 sm:p-4 md:p-6 bg-[#F8F9FA]">
      <div className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#129FE3] min-h-[620px] lg:min-h-[660px] shadow-sm">
        {/* Background Image: Vivid sky & lush meadow */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-sky.jpg"
            alt="Sunny meadow and blue sky"
            loading="lazy"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Subtle dark gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061E32]/60 via-[#061E32]/35 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Text & Store Buttons */}
          <div className="max-w-xl text-left">
            <Eyebrow theme="light">[ Download App For Free ]</Eyebrow>

            <h2 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[0.95] tracking-wide mt-4">
              Achieve Your Financial <span className="accent-white">Goals With Confidence</span>
            </h2>

            <p className="mt-5 text-white/95 text-base sm:text-lg font-normal leading-relaxed">
              Track your money, review insights and plan your goals from one app — available soon on iOS and Android.
            </p>

            {/* Store Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* App Store */}
              <button
                type="button"
                onClick={() => handleStoreClick('App Store')}
                className="bg-[#080D16] hover:bg-black text-white px-5 py-3 rounded-2xl flex items-center gap-3 transition-transform hover:-translate-y-0.5 shadow-md cursor-pointer border border-white/10"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.82.93-2.87-1 .04-2.17.67-2.85 1.46-.57.65-1.07 1.72-.94 2.74 1.12.09 2.23-.57 2.86-1.33z" />
                </svg>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider block opacity-70">Download on the</span>
                  <span className="text-xs font-bold leading-none block">App Store</span>
                </div>
              </button>

              {/* Google Play */}
              <button
                type="button"
                onClick={() => handleStoreClick('Google Play')}
                className="bg-[#080D16] hover:bg-black text-white px-5 py-3 rounded-2xl flex items-center gap-3 transition-transform hover:-translate-y-0.5 shadow-md cursor-pointer border border-white/10"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.347-.373-.559-.904-.559-1.539V3.353c0-.635.212-1.166.558-1.539zm11.233 11.234l2.128 2.128-11.83 6.83 9.702-8.958zm2.128-2.128l-2.128 2.128-9.702-8.958 11.83 6.83zm1.18 1.18l3.187 1.84c.883.51.883 1.35 0 1.86l-3.187 1.84-2.228-2.228 2.228-2.312z" />
                </svg>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider block opacity-70">GET IT ON</span>
                  <span className="text-xs font-bold leading-none block">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Phone Mockup bleeding off right/bottom edge */}
          <div className="w-full lg:w-auto relative flex justify-center lg:justify-end translate-y-6 sm:translate-y-10 lg:translate-x-12">
            <div className="relative">
              {/* Overlapping Floating "Right Now" Widget */}
              <div className="absolute -top-6 -left-6 z-20 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 text-[#080D16] w-48 hidden sm:block">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#5B6470] mb-2">
                  <span>Right Now</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#5B6470]">Income</span>
                  <span className="font-bold text-emerald-600">+$4,250</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5B6470]">Spending</span>
                  <span className="font-bold text-[#080D16]">-$1,180</span>
                </div>
              </div>

              {/* Phone Frame */}
              <div className="w-[280px] sm:w-[320px] rounded-[40px] p-2.5 bg-[#080D16] shadow-2xl border border-white/20">
                <div className="rounded-[32px] bg-[#0E1E2D] p-4 text-white overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-3">
                    <span>Active Wallet</span>
                    <span className="text-[#D8FF4F] font-bold">PRO</span>
                  </div>

                  <div className="font-display text-4xl text-white leading-none mb-1">
                    $56,893.30
                  </div>
                  <div className="text-[11px] text-white/60 mb-4">Total Assets Protected</div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button
                      onClick={() => showToast('Deposit action')}
                      className="py-1.5 px-3 rounded-xl bg-white/20 text-xs font-semibold text-white cursor-pointer"
                    >
                      + Deposit
                    </button>
                    <button
                      onClick={() => showToast('Transfer action')}
                      className="py-1.5 px-3 rounded-xl bg-[#D8FF4F] text-[#080D16] text-xs font-bold cursor-pointer"
                    >
                      ↗ Transfer
                    </button>
                  </div>

                  {/* Contacts strip */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between text-[11px] text-white/70 mb-2">
                      <span>Quick Contacts</span>
                      <span className="text-[#129FE3]">Manage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar name="Sarah Williams" size="sm" />
                      <Avatar name="David Carter" size="sm" />
                      <Avatar name="Priya Nair" size="sm" />
                      <div className="w-8 h-8 rounded-full border border-dashed border-white/30 flex items-center justify-center text-xs text-white/60">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
