import React, { useState } from 'react';
import { Eyebrow } from './ui/Eyebrow';
import { WorldMap } from './WorldMap';
import { Flag } from './ui/Flags';
import { useToast } from './ui/Toast';

export const GlobalFinance: React.FC = () => {
  const [fromAmount, setFromAmount] = useState<string>('1000.00');
  const [selectedDay, setSelectedDay] = useState<number>(0); // 0 = Sun (Dec 6)
  const { showToast } = useToast();

  const exchangeRate = 0.9214;
  const numFrom = parseFloat(fromAmount) || 0;
  const convertedTo = (numFrom * exchangeRate).toFixed(2);

  const daysOfWeek = [
    { name: 'Sun', date: '6' },
    { name: 'Mon', date: '7' },
    { name: 'Tue', date: '8' },
    { name: 'Wed', date: '9' },
    { name: 'Thu', date: '10' },
    { name: 'Fri', date: '11' },
    { name: 'Sat', date: '12' },
  ];

  const handleExchange = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Demo — no real exchange is processed');
  };

  return (
    <section id="global-finance" className="relative w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Dotted Map */}
      <WorldMap />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Eyebrow>[ Financial Growth ]</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] text-[#080D16] mt-4 leading-[0.95] tracking-wide">
            Achieve Your Financial <span className="accent-blue">Goals With Confidence</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5B6470] leading-relaxed max-w-2xl mx-auto">
            Monitor progress, forecast future expenses, and make informed decisions using real-time analytics powered by AI.
          </p>
        </div>

        {/* 2-Column Grid: Left Currency Converter, Right Stats & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Real-Time Conversion Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/80">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-sans font-semibold text-lg text-[#080D16]">
                Real-Time Conversion
              </h3>
              <span className="w-2 h-2 rounded-full bg-[#129FE3]" />
            </div>
            <p className="text-xs text-[#5B6470] mb-5">Live exchange rates instantly</p>

            <form onSubmit={handleExchange} className="space-y-4">
              {/* From Input */}
              <div className="p-3.5 rounded-2xl bg-[#F5F6F7] border border-slate-200/80">
                <div className="flex items-center justify-between text-xs text-[#5B6470] mb-1">
                  <span>You send</span>
                  <span>Balance: $14,200.00</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <input
                    type="number"
                    step="any"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="w-full bg-transparent font-display text-2xl sm:text-3xl text-[#080D16] focus:outline-none"
                    aria-label="Amount to convert from USD"
                  />
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl shadow-xs border border-slate-200 shrink-0">
                    <Flag code="us" size={20} />
                    <span className="text-xs font-bold text-[#080D16]">USD</span>
                  </div>
                </div>
              </div>

              {/* Conversion Middle Info */}
              <div className="flex items-center justify-between px-2 text-[11px] text-[#5B6470]">
                <span>Sample rate: 1 USD ≈ {exchangeRate} EUR</span>
                <span>Network fees: 2.09 USD</span>
              </div>

              {/* To Input (Calculated) */}
              <div className="p-3.5 rounded-2xl bg-[#F5F6F7] border border-slate-200/80">
                <div className="flex items-center justify-between text-xs text-[#5B6470] mb-1">
                  <span>Recipient gets</span>
                  <span>Guaranteed rate (demo)</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-2xl sm:text-3xl text-[#080D16]">
                    {convertedTo}
                  </span>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl shadow-xs border border-slate-200 shrink-0">
                    <Flag code="eu" size={20} />
                    <span className="text-xs font-bold text-[#080D16]">EUR</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#080D16] text-white hover:bg-black font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Exchange Money
              </button>
            </form>
          </div>

          {/* Right Panels: Metrics Card + Schedule Widget */}
          <div className="lg:col-span-7 space-y-6">
            {/* Daily Active Users Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#5B6470] uppercase tracking-wider block mb-1">
                  Daily active users
                </span>
                <span className="font-display text-4xl sm:text-5xl md:text-6xl text-[#080D16] leading-none">
                  450M+
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block bg-[#D8FF4F] text-[#080D16] text-xs font-bold px-3 py-1 rounded-full mb-1">
                  Global Reach
                </span>
                <p className="text-xs text-[#5B6470]">Cross-border automated settlement</p>
              </div>
            </div>

            {/* Schedule Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-sans font-semibold text-base sm:text-lg text-[#080D16]">
                    Schedule
                  </h4>
                  <p className="text-xs text-[#5B6470]">Employee salary, payments</p>
                </div>
                <button
                  onClick={() => showToast('Schedule new automated transaction')}
                  className="text-xs font-semibold text-[#0B77B0] hover:underline cursor-pointer"
                >
                  + Add New
                </button>
              </div>

              {/* Week Calendar Strip */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-6">
                {daysOfWeek.map((day, idx) => {
                  const isSelected = selectedDay === idx;
                  return (
                    <button
                      key={day.name}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedDay(idx)}
                      className={`flex flex-col items-center py-2.5 rounded-2xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#080D16] text-white shadow-md'
                          : 'bg-[#F5F6F7] text-[#303640] hover:bg-slate-200/60'
                      }`}
                    >
                      <span className="text-[11px] font-medium opacity-80">{day.name}</span>
                      <span className="text-sm sm:text-base font-bold mt-0.5">{day.date}</span>
                    </button>
                  );
                })}
              </div>

              {/* Scheduled Timeline Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F5F6F7] border border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#080D16]">Send to Kamal</div>
                      <div className="text-[11px] text-[#5B6470]">Dec 6, 2026, 9:40 PM • Salary Payout</div>
                    </div>
                  </div>
                  <span className="font-display text-lg text-[#080D16]">$3,400.00</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F5F6F7] border border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-[#0B77B0] flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#080D16]">Receive from Jacqueline</div>
                      <div className="text-[11px] text-[#5B6470]">Dec 6, 2026, 10:30 PM • Client Retainer</div>
                    </div>
                  </div>
                  <span className="font-display text-lg text-emerald-600">+$2,850.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
