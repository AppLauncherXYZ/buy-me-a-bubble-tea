import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 smooth-transform hover:scale-105 active:scale-95';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[var(--accent)] to-purple-600 text-white hover:from-purple-600 hover:to-[var(--accent)] focus:ring-[var(--accent)] shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus:ring-[var(--accent)] hover:shadow-lg'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
