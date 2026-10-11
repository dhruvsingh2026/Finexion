import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light' | 'sky';
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className = '',
  theme = 'dark',
}) => {
  const themeClasses =
    theme === 'light'
      ? 'text-white/80'
      : theme === 'sky'
      ? 'text-[#0B77B0]'
      : 'text-[#5B6470]';

  return (
    <div
      className={`inline-flex items-center text-xs sm:text-sm font-medium tracking-wide uppercase font-sans ${themeClasses} ${className}`}
    >
      <span>[</span>
      <span className="px-1">{children}</span>
      <span>]</span>
    </div>
  );
};
