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
  const baseClasses = 'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';

  const variantClasses = {
    primary: 'bg-[var(--accent)] text-white hover:bg-opacity-90 focus:ring-[var(--accent)]',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus:ring-[var(--accent)]'
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
