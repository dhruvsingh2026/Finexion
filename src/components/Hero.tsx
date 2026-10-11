import React from 'react';
import { Header } from './Header';
import { Button } from './ui/Button';
import { PhoneMockup } from './PhoneMockup';
import { useToast } from './ui/Toast';

export const Hero: React.FC = () => {
  const { showToast } = useToast();

  return (
    <section id="home" className="relative p-2.5 sm:p-4 md:p-6 bg-[#F8F9FA]">
      <div className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#129FE3] min-h-[820px] sm:min-h-[880px] lg:min-h-[920px] flex flex-col justify-between shadow-sm">
        {/* Background Image: Vivid sky & lush meadow */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-sky.jpg"
            alt="Vivid blue sky with wispy clouds and lush meadow grass"
            fetchPriority="high"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Subtle dark gradient overlay for AA contrast on text */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#061E32]/45 via-[#061E32]/25 to-transparent pointer-events-none" />
        </div>

        {/* Top Header Capsule */}
        <Header />

        {/* Center Content: Badge, Headline, Paragraph, CTAs */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-8 sm:pt-12 md:pt-14 pb-4 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#080D16] text-xs sm:text-sm font-semibold shadow-sm mb-5 sm:mb-6 border border-white/60">
            <svg className="w-3.5 h-3.5 text-[#129FE3]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2Z" />
            </svg>
            <span>AI-Powered Personal Finance</span>
          </div>

          {/* Bebas Display Headline */}
          <h1 className="font-display text-white text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.2rem] leading-[0.92] tracking-wide text-balance">
            Manage Your <span className="accent-white">Money Smarter,</span>
            <br />
            Powered by Real Insights
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="mt-5 sm:mt-6 text-white/95 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed text-balance">
            Finexa brings your balances, transactions and goals into one place, with AI-driven insights that help you spend, save and plan with more confidence.
          </p>

          {/* CTAs */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => showToast('Opening Free Trial registration modal')}
            >
              Start Free Trial ↗
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => showToast('Playing Finexa demo walkthrough video')}
              icon={
                <svg className="w-4 h-4 fill-current text-[#080D16]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              }
              iconPosition="left"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Lower Hero: Centered Phone Mockup + Floating Cards */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-6 sm:mt-8 pb-0">
          <div className="relative flex justify-center items-end">
            {/* Left Floating Card: My Savings Plan */}
            <div className="hidden md:block absolute left-2 lg:left-6 bottom-14 z-20 w-64 lg:w-72 p-4 lg:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 text-[#080D16] transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#5B6470] uppercase tracking-wider">My Savings Plan</span>
                <span className="w-2 h-2 rounded-full bg-[#129FE3]" />
              </div>

              {/* Goal 1 */}
              <div className="mb-3.5">
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className="flex items-center gap-1.5 text-[#080D16]">
                    <span className="text-amber-500">🎯</span> Investment Goal
                  </span>
                  <span className="font-semibold text-[#0B77B0]">82%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#129FE3] rounded-full" style={{ width: '82%' }} />
                </div>
                <div className="text-[11px] text-[#5B6470] mt-1 font-medium">$19,935 / $25,000</div>
              </div>

              {/* Goal 2 */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className="flex items-center gap-1.5 text-[#080D16]">
                    <span className="text-emerald-500">🛡️</span> Emergency Fund
                  </span>
                  <span className="font-semibold text-emerald-600">60%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '60%' }} />
                </div>
                <div className="text-[11px] text-[#5B6470] mt-1 font-medium">$12,000 / $20,000</div>
              </div>
            </div>

            {/* Central Phone Mockup - bottom edge intentionally cropped */}
            <div className="translate-y-8 sm:translate-y-10">
              <PhoneMockup />
            </div>

            {/* Right Floating Card: Transaction History */}
            <div className="hidden md:block absolute right-2 lg:right-6 bottom-14 z-20 w-64 lg:w-72 p-4 lg:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 text-[#080D16] transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#5B6470] uppercase tracking-wider">Transaction History</span>
                <svg className="w-3.5 h-3.5 text-[#5B6470]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="space-y-2.5">
                {/* Spotify */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                      ♫
                    </div>
                    <div>
                      <div className="font-semibold text-[#080D16]">Spotify Premium</div>
                      <div className="text-[10px] text-[#5B6470]">Subscription</div>
                    </div>
                  </div>
                  <span className="font-semibold text-[#080D16]">−$15.99</span>
                </div>

                {/* PayPal */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#129FE3] text-xs font-bold">
                      P
                    </div>
                    <div>
                      <div className="font-semibold text-[#080D16]">PayPal Transfer</div>
                      <div className="text-[10px] text-[#5B6470]">From Client</div>
                    </div>
                  </div>
                  <span className="font-semibold text-emerald-600">+$120.00</span>
                </div>

                {/* Payroll */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-lime-100 flex items-center justify-center text-slate-900 text-xs font-bold">
                      $
                    </div>
                    <div>
                      <div className="font-semibold text-[#080D16]">Payroll Income</div>
                      <div className="text-[10px] text-[#5B6470]">Direct Deposit</div>
                    </div>
                  </div>
                  <span className="font-semibold text-emerald-600">+$650.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
