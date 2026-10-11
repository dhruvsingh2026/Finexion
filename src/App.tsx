import React from 'react';
import { ToastProvider } from './components/ui/Toast';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Bento } from './components/Bento';
import { IndividualsBusinesses } from './components/IndividualsBusinesses';
import { GlobalFinance } from './components/GlobalFinance';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ToastProvider>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#080D16] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-[#F8F9FA] text-[#303640] flex flex-col font-sans selection:bg-[#D8FF4F] selection:text-[#080D16]">
        {/* Section 1: Header + Hero */}
        <Hero />

        {/* Main Content Landmark */}
        <main id="main-content">
          {/* Section 2: Brand Introduction */}
          <Intro />

          {/* Section 3: Three-card Bento */}
          <Bento />

          {/* Section 4: Built for Individuals and Businesses */}
          <IndividualsBusinesses />

          {/* Section 5: Achieve Your Financial Goals With Confidence */}
          <GlobalFinance />

          {/* Section 6: Simple Steps to Smarter Finance */}
          <Steps />

          {/* Section 7: Real Stories Shared by Our Customers */}
          <Testimonials />

          {/* Section 8: Simple and Transparent Pricing */}
          <Pricing />

          {/* Section 9: Frequently Asked Questions */}
          <FAQ />

          {/* Section 10: Final Conversion CTA */}
          <FinalCTA />
        </main>

        {/* Section 11: Dark Footer */}
        <Footer />
      </div>
    </ToastProvider>
  );
}
