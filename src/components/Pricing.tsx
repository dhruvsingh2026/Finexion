import React, { useState } from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { pricingPlans } from '../data/pricing';
import { useToast } from './ui/Toast';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const { showToast } = useToast();

  const handleSelectPlan = (planName: string) => {
    showToast(`Demo only — no checkout required for ${planName} plan`);
  };

  return (
    <section id="pricing" className="w-full bg-[#F5F6F7] py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <Eyebrow>[ Pricing Plan ]</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] text-[#080D16] mt-4 leading-[0.95] tracking-wide">
            Simple and <span className="accent-blue">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5B6470] leading-relaxed">
            Choose a plan that fits your financial journey.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-slate-200/80 shadow-inner">
            <button
              type="button"
              aria-pressed={billingCycle === 'monthly'}
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#080D16] text-white shadow-sm'
                  : 'text-[#303640] hover:text-[#080D16]'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={billingCycle === 'yearly'}
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-[#080D16] text-white shadow-sm'
                  : 'text-[#303640] hover:text-[#080D16]'
              }`}
            >
              <span>Yearly</span>
              <span className="text-[10px] bg-[#D8FF4F] text-[#080D16] font-bold px-1.5 py-0.5 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                  isPro
                    ? 'bg-white border-2 border-[#D8FF4F] shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-slate-200/80 shadow-sm'
                }`}
              >
                {/* Popular Pill Badge */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#D8FF4F] text-[#080D16] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                      {plan.badge || 'Most Popular'}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <h3 className="font-sans font-bold text-xl text-[#080D16] mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6470] min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Row */}
                  <div className="my-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl sm:text-5xl text-[#080D16]">
                        ${price}
                      </span>
                      <span className="text-xs text-[#5B6470] font-medium">/month</span>
                    </div>
                    {billingCycle === 'yearly' && price > 0 && (
                      <span className="text-[11px] text-[#0B77B0] font-medium mt-1 block">
                        billed ${price * 12} yearly
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-[#080D16] uppercase tracking-wider block mb-2">
                      What's included:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#303640]">
                        <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-4">
                  {isPro ? (
                    <button
                      onClick={() => handleSelectPlan(plan.name)}
                      className="w-full py-3.5 rounded-full bg-[#D8FF4F] hover:bg-[#cbf738] text-[#080D16] font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      {plan.ctaLabel}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSelectPlan(plan.name)}
                      className="w-full py-3.5 rounded-full border border-slate-300 hover:border-[#080D16] text-[#080D16] font-semibold text-sm transition-all hover:bg-slate-50 cursor-pointer"
                    >
                      {plan.ctaLabel}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
