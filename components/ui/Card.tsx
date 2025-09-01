import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'transparent';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseClasses = 'rounded-xl border transition-all duration-200';
  const variantClasses = {
    default: 'glass-dark border-gray-600 p-6 hover:scale-[1.02] smooth-transform',
    transparent: 'bg-transparent border-transparent p-0'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
