import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackType?: 'sky' | 'avatar' | 'card';
  fallbackText?: string;
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackType = 'sky',
  fallbackText,
  aspectRatio,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallbackType === 'avatar') {
      return (
        <div
          className={`flex items-center justify-center bg-gradient-to-br from-[#129FE3] to-[#0B77B0] text-white font-semibold text-xs sm:text-sm select-none ${className}`}
          style={{ aspectRatio: aspectRatio || '1/1' }}
          aria-label={alt}
        >
          {fallbackText || alt.slice(0, 2).toUpperCase()}
        </div>
      );
    }

    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-b from-[#129FE3] via-[#75cbf3] to-[#86efac] flex items-end justify-center ${className}`}
        style={{ aspectRatio: aspectRatio || '16/9' }}
        role="img"
        aria-label={alt}
      >
        {/* Abstract clouds and grass fallback */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <ellipse cx="100" cy="80" rx="60" ry="25" fill="#ffffff" fillOpacity="0.4" />
          <ellipse cx="280" cy="110" rx="90" ry="30" fill="#ffffff" fillOpacity="0.3" />
        </svg>
        <div className="w-full h-1/4 bg-gradient-to-t from-[#22c55e] to-transparent opacity-80" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      style={aspectRatio ? { aspectRatio, ...props.style } : props.style}
      {...props}
    />
  );
};
