import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href = '#',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-full';

  const sizeClasses = {
    sm: 'text-xs sm:text-sm px-4 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 gap-2',
    lg: 'text-base sm:text-lg px-7 py-3.5 sm:px-8 sm:py-4 gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#D8FF4F] text-[#080D16] hover:bg-[#cbf738] shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-[#D8FF4F]',
    secondary:
      'bg-white text-[#080D16] hover:bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow hover:-translate-y-0.5 focus-visible:outline-slate-400',
    dark:
      'bg-[#080D16] text-white hover:bg-black shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-[#080D16]',
    outline:
      'bg-transparent border border-[#080D16]/20 text-[#080D16] hover:bg-[#080D16]/5 focus-visible:outline-[#080D16]',
    ghost:
      'bg-transparent text-[#080D16] hover:bg-slate-100 focus-visible:outline-[#080D16]',
  }[variant];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (asLink) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
