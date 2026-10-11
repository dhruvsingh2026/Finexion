import React, { useState } from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { testimonialsData, fictionalBrands } from '../data/testimonials';
import { useToast } from './ui/Toast';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { showToast } = useToast();

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(testimonialsData.length - 1, prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer Testimonials"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <Eyebrow>[ Testimonials ]</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] text-[#080D16] mt-4 leading-[0.95] tracking-wide">
              Real Stories Shared <span className="accent-blue">by Our Customers</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#5B6470] leading-relaxed">
            Hear directly from investors, traders, and professionals who use our platform daily to manage finances and grow wealth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonialsData.map((item, index) => {
              // On mobile, show only activeIndex. On desktop, show 2 cards based on activeIndex window
              const isVisibleOnMobile = index === activeIndex;
              const isVisibleOnDesktop =
                index >= Math.min(activeIndex, testimonialsData.length - 2) &&
                index < Math.min(activeIndex, testimonialsData.length - 2) + 2;

              return (
                <div
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${testimonialsData.length}`}
                  className={`rounded-3xl bg-[#F5F6F7] border border-slate-200/70 p-6 sm:p-8 flex flex-col-reverse sm:flex-row justify-between gap-6 transition-all duration-300 ${
                    isVisibleOnMobile ? 'flex' : 'hidden sm:hidden'
                  } ${isVisibleOnDesktop ? 'md:flex' : 'md:hidden'}`}
                >
                  {/* Left Column: Quote & Author */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Quote mark icon */}
                      <span className="text-4xl text-[#080D16] font-serif leading-none block mb-3 opacity-30 select-none">
                        “
                      </span>
                      <blockquote className="text-sm sm:text-base text-[#303640] font-medium leading-relaxed">
                        “{item.quote}”
                      </blockquote>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[#080D16]">{item.name}</div>
                        <div className="text-xs text-[#5B6470]">{item.role}, {item.company}</div>
                      </div>
                      <button
                        onClick={() => showToast(`Read complete case study for ${item.name}`)}
                        className="text-xs font-semibold text-[#0B77B0] hover:underline cursor-pointer"
                      >
                        Read more ›
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Sky Portrait Photo */}
                  <div className="w-full sm:w-44 md:w-48 aspect-[4/5] rounded-2xl overflow-hidden shrink-0 shadow-sm relative">
                    <img
                      src={item.image}
                      alt={`Portrait of ${item.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 pt-4">
            <span className="text-xs text-[#5B6470] italic">
              Sample testimonials for demonstration purposes.
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-[#080D16] hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex >= testimonialsData.length - 1}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-[#080D16] text-white flex items-center justify-center hover:bg-black disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-sm"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Fictional Brand Wordmarks Row */}
        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-around gap-6 sm:gap-10 opacity-60">
          {fictionalBrands.map((brand) => (
            <span
              key={brand}
              className="font-sans font-bold text-sm sm:text-base tracking-wider text-slate-500 uppercase select-none hover:opacity-100 transition-opacity"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
