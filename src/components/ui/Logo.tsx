import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'dark' | 'light' | 'markOnly' | 'inline';
}

export const LogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 rounded-lg shadow-sm ${className}`}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="7.5" fill="#D8FF4F" />
    <path
      d="M10 22L22 10M22 10H13.5M22 10V18.5"
      stroke="#080D16"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  const markSize = size === 'sm' ? 22 : size === 'lg' ? 36 : size === 'hero' ? 44 : 28;
  const textSize =
    size === 'sm'
      ? 'text-lg'
      : size === 'lg'
      ? 'text-2xl'
      : size === 'hero'
      ? 'text-3xl'
      : 'text-xl';
  const textColor = variant === 'light' ? 'text-white' : 'text-[#080D16]';

  if (variant === 'markOnly') {
    return <LogoMark size={markSize} className={className} />;
  }

  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-2 align-middle font-semibold text-[#080D16] ${className}`}>
        <LogoMark size={28} />
        <span className="font-sans font-semibold tracking-tight text-[1.05em]">Finexa</span>
      </span>
    );
  }

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-2.5 font-sans font-semibold tracking-tight transition-opacity hover:opacity-90 ${textColor} ${textSize} ${className}`}
      aria-label="Finexa home"
    >
      <LogoMark size={markSize} />
      <span className="font-sans font-semibold tracking-tight">Finexa</span>
    </a>
  );
};
