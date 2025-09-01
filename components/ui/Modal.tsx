import React, { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ open, onClose, children, title }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative glass-dark rounded-2xl border border-gray-600 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 smooth-transform">
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-600">
            <h3 className="text-xl font-semibold text-[var(--fg)]">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
