import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { STRINGS } from '@/lib/i18n';

interface MessageFormProps {
  username: string;
  onSubmit?: (message: { text?: string; sticker?: string }) => void;
}

export function MessageForm({ username, onSubmit }: MessageFormProps) {
  const [text, setText] = useState('');
  const [selectedSticker, setSelectedSticker] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && (text.trim() || selectedSticker)) {
      onSubmit({ text: text.trim() || undefined, sticker: selectedSticker });
      setText('');
      setSelectedSticker(undefined);
    }
  };

  return (
    <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-500">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--fg)] mb-2">
            Leave a message for {username}
          </label>
          <textarea
            id="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={STRINGS.en.messagePlaceholder}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none glass transition-all duration-200"
            rows={3}
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-400">
              {text.length}/280 characters
            </span>
            {text.length > 250 && (
              <span className="text-xs text-orange-400">
                {280 - text.length} remaining
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setSelectedSticker(selectedSticker === '/stickers/heart.svg' ? undefined : '/stickers/heart.svg')}
            className={`p-3 rounded-xl border-2 transition-all duration-200 smooth-transform hover:scale-110 ${
              selectedSticker === '/stickers/heart.svg'
                ? 'border-[var(--accent)] bg-[var(--accent)] bg-opacity-20 shadow-lg'
                : 'border-gray-600 hover:border-gray-500 glass'
            }`}
            aria-label="Select heart sticker"
          >
            <span className="text-2xl">❤️</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedSticker(selectedSticker === '/stickers/frog.svg' ? undefined : '/stickers/frog.svg')}
            className={`p-3 rounded-xl border-2 transition-all duration-200 smooth-transform hover:scale-110 ${
              selectedSticker === '/stickers/frog.svg'
                ? 'border-[var(--accent)] bg-[var(--accent)] bg-opacity-20 shadow-lg'
                : 'border-gray-600 hover:border-gray-500 glass'
            }`}
            aria-label="Select frog sticker"
          >
            <span className="text-2xl">🐸</span>
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full hover:scale-105 transition-all duration-200 smooth-transform"
        >
          {STRINGS.en.submitButton}
        </Button>
      </form>
    </div>
  );
}
