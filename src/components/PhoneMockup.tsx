import React from 'react';
import { Avatar } from './ui/Avatar';
import { useToast } from './ui/Toast';

export const PhoneMockup: React.FC = () => {
  const { showToast } = useToast();

  const contacts = [
    { name: 'Elena Vance', label: 'Elena' },
    { name: 'Marcus Chen', label: 'Marcus' },
    { name: 'Sarah Miller', label: 'Sarah' },
    { name: 'David Ross', label: 'David' },
    { name: 'Priya Patel', label: 'Priya' },
  ];

  return (
    <div className="relative mx-auto w-[290px] sm:w-[330px] md:w-[360px] select-none">
      {/* Phone Hardware Shell */}
      <div className="relative rounded-[40px] sm:rounded-[44px] p-2 sm:p-2.5 bg-[#080D16] shadow-2xl ring-1 ring-white/20">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#080D16] rounded-full z-30 flex items-center justify-end pr-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 ring-1 ring-slate-700/50" />
        </div>

        {/* Screen Content */}
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#0E1E2D] overflow-hidden text-white flex flex-col pt-3 pb-8 shadow-inner">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-1 text-[11px] font-medium text-white/80 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
              </svg>
              <div className="w-4 h-2 rounded-xs border border-white/80 p-0.5 flex items-center">
                <div className="w-full h-full bg-white rounded-xs" />
              </div>
            </div>
          </div>

          {/* Sky-gradient card header within the app */}
          <div className="mt-3 mx-3 p-4 rounded-2xl bg-gradient-to-b from-[#129FE3] to-[#0B77B0] shadow-md relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/80 font-medium">Good morning</span>
                <h4 className="text-sm font-semibold text-white">Alex Reynolds</h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-xs font-bold text-white">
                AR
              </div>
            </div>

            {/* Total Balance */}
            <div className="mt-3">
              <div className="text-[11px] text-white/80">Total Balance</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-display text-3xl sm:text-4xl text-white tracking-wide leading-none">
                  $56,893.30
                </span>
                <span className="bg-[#D8FF4F] text-[#080D16] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  +14.2%
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-3.5">
              <button
                onClick={() => showToast('Deposit action initiated')}
                className="py-1.5 px-3 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-semibold backdrop-blur-sm text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span className="text-sm">+</span> Deposit
              </button>
              <button
                onClick={() => showToast('Transfer action initiated')}
                className="py-1.5 px-3 rounded-xl bg-[#D8FF4F] hover:bg-[#cbf738] text-xs font-semibold text-[#080D16] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>↗</span> Transfer
              </button>
            </div>
          </div>

          {/* Mini chart card */}
          <div className="mx-3 mt-3 p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-white/70 font-medium">Weekly Flow</span>
              <span className="text-[#D8FF4F] text-[11px] font-semibold">+ $2,420.00</span>
            </div>
            {/* SVG Wave */}
            <svg viewBox="0 0 280 45" className="w-full h-10 overflow-visible" fill="none">
              <defs>
                <linearGradient id="phoneWave" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#129FE3" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#129FE3" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,32 C40,10 70,35 110,18 C150,2 190,26 230,12 C255,4 270,16 280,14"
                stroke="#D8FF4F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M0,32 C40,10 70,35 110,18 C150,2 190,26 230,12 C255,4 270,16 280,14 L280,45 L0,45 Z"
                fill="url(#phoneWave)"
              />
              <circle cx="230" cy="12" r="3.5" fill="#D8FF4F" stroke="#080D16" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Recent Contacts */}
          <div className="mx-3 mt-3 p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-[11px] text-white/70 font-medium mb-2">Recent Contacts</div>
            <div className="flex items-center justify-between">
              {contacts.map((contact) => (
                <button
                  key={contact.name}
                  onClick={() => showToast(`Send quick payment to ${contact.label}`)}
                  className="flex flex-col items-center gap-1 group cursor-pointer focus-visible:outline-none"
                  title={`Send to ${contact.name}`}
                >
                  <Avatar name={contact.name} size="sm" className="group-hover:scale-105 transition-transform" />
                  <span className="text-[9px] text-white/75 group-hover:text-white transition-colors">
                    {contact.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
