import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'avatar';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer';

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    avatar: 'rounded-full'
  };

  const defaultSizes = {
    text: { height: '1rem', width: '100%' },
    circular: { width: '2.5rem', height: '2.5rem' },
    rectangular: { width: '100%', height: '8rem' },
    avatar: { width: '6rem', height: '6rem' }
  };

  const size = defaultSizes[variant];
  const finalWidth = width || size.width;
  const finalHeight = height || size.height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
        height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight
      }}
    />
  );
}

// Compound component for common patterns
export function SkeletonCard() {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton variant="avatar" className="w-16 h-16" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" className="w-3/4 h-5" />
          <Skeleton variant="text" className="w-1/2 h-4" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="w-full h-4" />
        <Skeleton variant="text" className="w-4/5 h-4" />
      </div>
    </div>
  );
}

export function SkeletonButton() {
  return (
    <Skeleton variant="rectangular" className="w-full h-12" />
  );
}
