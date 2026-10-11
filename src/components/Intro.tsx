import React from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { Logo } from './ui/Logo';

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Top metadata row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-8 sm:pb-12 border-b border-slate-100">
          <Eyebrow>[ About Finexa ]</Eyebrow>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-[#5B6470]">
            <span className="font-semibold text-[#080D16]">© 2026</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
            <span className="max-w-md text-right">
              Empowering smarter financial decisions for individuals and businesses worldwide.
            </span>
          </div>
        </div>

        {/* Large Editorial Statement */}
        <div className="pt-8 sm:pt-12 max-w-5xl">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.3] tracking-tight">
            <span className="inline-block align-middle mr-2">
              <Logo variant="inline" />
            </span>
            <span className="text-[#303640]">
              is an AI-powered finance platform designed to simplify how you manage, move, and grow your money.{' '}
            </span>
            <span className="text-[#5B6470]">
              From everyday transactions to advanced financial insights, we turn complex processes into seamless experiences.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
