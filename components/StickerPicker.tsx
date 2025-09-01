import React from 'react';

interface StickerPickerProps {
  value?: string;
  onChange: (path: string) => void;
}

const STICKERS = [
  { path: '/stickers/heart.svg', emoji: '❤️' },
  { path: '/stickers/frog.svg', emoji: '🐸' },
];

export function StickerPicker({ value, onChange }: StickerPickerProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {STICKERS.map((sticker) => (
        <button
          key={sticker.path}
          onClick={() => onChange(value === sticker.path ? '' : sticker.path)}
          className={`p-3 rounded-lg border-2 transition-all ${
            value === sticker.path
              ? 'border-[var(--accent)] bg-[var(--accent)] bg-opacity-20'
              : 'border-gray-600 hover:border-gray-500'
          }`}
          aria-label={`Select ${sticker.emoji} sticker`}
        >
          <span className="text-2xl">{sticker.emoji}</span>
        </button>
      ))}
    </div>
  );
}
