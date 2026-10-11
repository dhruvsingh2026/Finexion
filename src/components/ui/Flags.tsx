import React from 'react';

interface FlagProps {
  code: 'us' | 'fr' | 'uk' | 'uae' | 'eu';
  size?: number;
  className?: string;
}

export const Flag: React.FC<FlagProps> = ({ code, size = 20, className = '' }) => {
  const common = `shrink-0 rounded-full overflow-hidden shadow-xs border border-black/10 inline-block ${className}`;

  if (code === 'us') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
        aria-label="United States flag"
      >
        <rect width="24" height="24" fill="#B22234" />
        <path d="M0 3.7h24M0 7.4h24M0 11.1h24M0 14.8h24M0 18.5h24M0 22.2h24" stroke="#FFFFFF" strokeWidth="1.8" />
        <rect width="11" height="11" fill="#3C3B6E" />
        <circle cx="3" cy="3" r="0.8" fill="#FFFFFF" />
        <circle cx="8" cy="3" r="0.8" fill="#FFFFFF" />
        <circle cx="5.5" cy="5.5" r="0.8" fill="#FFFFFF" />
        <circle cx="3" cy="8" r="0.8" fill="#FFFFFF" />
        <circle cx="8" cy="8" r="0.8" fill="#FFFFFF" />
      </svg>
    );
  }

  if (code === 'fr') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
        aria-label="France flag"
      >
        <rect width="8" height="24" fill="#002395" />
        <rect x="8" width="8" height="24" fill="#FFFFFF" />
        <rect x="16" width="8" height="24" fill="#ED2939" />
      </svg>
    );
  }

  if (code === 'uk') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
        aria-label="United Kingdom flag"
      >
        <rect width="24" height="24" fill="#012169" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="3.5" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="1.5" />
        <path d="M12 0V24M0 12H24" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="3" />
      </svg>
    );
  }

  if (code === 'uae') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={common}
        aria-label="United Arab Emirates flag"
      >
        <rect width="24" height="8" fill="#00732F" />
        <rect y="8" width="24" height="8" fill="#FFFFFF" />
        <rect y="16" width="24" height="8" fill="#000000" />
        <rect width="7" height="24" fill="#FF0000" />
      </svg>
    );
  }

  // EU fallback
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={common}
      aria-label="European Union flag"
    >
      <rect width="24" height="24" fill="#003399" />
      <circle cx="12" cy="5" r="0.8" fill="#FFCC00" />
      <circle cx="12" cy="19" r="0.8" fill="#FFCC00" />
      <circle cx="5" cy="12" r="0.8" fill="#FFCC00" />
      <circle cx="19" cy="12" r="0.8" fill="#FFCC00" />
      <circle cx="7" cy="7" r="0.8" fill="#FFCC00" />
      <circle cx="17" cy="17" r="0.8" fill="#FFCC00" />
      <circle cx="17" cy="7" r="0.8" fill="#FFCC00" />
      <circle cx="7" cy="17" r="0.8" fill="#FFCC00" />
    </svg>
  );
};
