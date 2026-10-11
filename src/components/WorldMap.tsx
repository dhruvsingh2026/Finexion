import React from 'react';
import { Flag } from './ui/Flags';

export const WorldMap: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-35 sm:opacity-45">
      {/* Soft blue glow centered behind map */}
      <div className="absolute w-[500px] h-[300px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Dotted Map Projection */}
      <div className="relative w-full max-w-4xl h-[340px] sm:h-[400px]">
        <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-400/50 fill-current">
          <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#0B77B0" fillOpacity="0.35" />
          </pattern>

          {/* Simplified continents dot fills */}
          {/* North America */}
          <ellipse cx="230" cy="160" rx="130" ry="80" fill="url(#dotPattern)" />
          {/* South America */}
          <ellipse cx="320" cy="330" rx="80" ry="110" fill="url(#dotPattern)" />
          {/* Europe */}
          <ellipse cx="510" cy="140" rx="80" ry="60" fill="url(#dotPattern)" />
          {/* Africa */}
          <ellipse cx="530" cy="280" rx="95" ry="100" fill="url(#dotPattern)" />
          {/* Asia */}
          <ellipse cx="710" cy="170" rx="160" ry="90" fill="url(#dotPattern)" />
          {/* Australia */}
          <ellipse cx="820" cy="360" rx="70" ry="55" fill="url(#dotPattern)" />

          {/* Curved connecting transfer lines */}
          <path
            d="M 230 150 Q 370 70, 520 190"
            fill="none"
            stroke="#129FE3"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-70 animate-pulse"
          />
          <path
            d="M 520 190 Q 610 140, 700 230"
            fill="none"
            stroke="#129FE3"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-70"
          />
        </svg>

        {/* Pin 1: United States */}
        <div className="absolute top-[30%] left-[23%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full shadow-md border border-slate-200 hover:scale-110 transition-transform">
            <Flag code="us" size={18} />
            <span className="text-[10px] font-semibold text-[#080D16] pr-1.5 hidden sm:inline">USA</span>
          </div>
        </div>

        {/* Pin 2: UAE */}
        <div className="absolute top-[44%] left-[64%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full shadow-md border border-slate-200 hover:scale-110 transition-transform">
            <Flag code="uae" size={18} />
            <span className="text-[10px] font-semibold text-[#080D16] pr-1.5 hidden sm:inline">UAE</span>
          </div>
        </div>

        {/* Pin 3: Red Pulse Dot (e.g. Hong Kong / Asia Pacific) */}
        <div className="absolute top-[38%] left-[76%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-4 h-4 rounded-full bg-rose-500/40 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
