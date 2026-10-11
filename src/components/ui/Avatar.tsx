import React from 'react';

interface AvatarProps {
  src?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  }[size];

  const getInitials = (n: string) => {
    const parts = n.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return n.slice(0, 2).toUpperCase();
  };

  // Generate deterministic gentle background color based on name
  const bgColors = [
    'bg-sky-500',
    'bg-emerald-500',
    'bg-amber-500',
    'bg-indigo-500',
    'bg-rose-500',
    'bg-teal-500',
  ];
  const colorIndex = (name.charCodeAt(0) + (name.charCodeAt(1) || 0)) % bgColors.length;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden border-2 border-white shadow-sm font-semibold select-none ${sizeClasses} ${bgColors[colorIndex]} text-white ${className}`}
      title={name}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // fallback to initials
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      ) : null}
      <span className="leading-none">{getInitials(name)}</span>
    </div>
  );
};
