import React, { useState } from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { faqItems } from '../data/faq';
import { useToast } from './ui/Toast';

export const FAQ: React.FC = () => {
  // Item 02 expanded by default as specified
  const [openId, setOpenId] = useState<string>('faq-2');
  const { showToast } = useToast();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading + Support Box */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Eyebrow>[ FAQ ]</Eyebrow>
              <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] text-[#080D16] mt-4 leading-[0.95] tracking-wide">
                Frequently Asked <span className="accent-blue">Questions</span>
              </h2>
            </div>

            {/* Support Card Box */}
            <div className="mt-10 sm:mt-14 p-6 sm:p-7 rounded-3xl bg-[#F5F6F7] border border-slate-200/80">
              <h3 className="font-sans font-bold text-lg text-[#080D16] mb-1">
                Still have a question?
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6470] mb-5 leading-relaxed">
                Our team is happy to help with anything about Finexa.
              </p>
              <button
                onClick={() => showToast('Connecting to Finexa support team')}
                className="bg-[#080D16] text-white hover:bg-black text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                Contact Us ↗
              </button>
            </div>
          </div>

          {/* Right Column: 5 Accordion Panels */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              const headingId = `faq-heading-${item.id}`;
              const panelId = `faq-panel-${item.id}`;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl sm:rounded-3xl bg-[#F5F6F7] border border-slate-200/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-500"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="text-xs font-mono font-bold text-[#0B77B0] shrink-0">
                        {item.number}
                      </span>
                      <span className="font-sans font-semibold text-sm sm:text-base text-[#080D16] leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#080D16] shrink-0 shadow-xs">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5B6470] leading-relaxed border-t border-slate-200/50 animate-in fade-in duration-200 pl-11 sm:pl-14"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
