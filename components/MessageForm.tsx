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
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--fg)] mb-1">
            Leave a message for {username}
          </label>
          <textarea
            id="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={STRINGS.en.messagePlaceholder}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none"
            rows={3}
          />
        </div>

        <div className="flex gap-2">
          {/* Simple sticker selection - in real app this would be a proper StickerPicker */}
          <button
            type="button"
            onClick={() => setSelectedSticker(selectedSticker === '/stickers/heart.svg' ? undefined : '/stickers/heart.svg')}
            className={`p-2 rounded-md border-2 transition-colors ${
              selectedSticker === '/stickers/heart.svg'
                ? 'border-[var(--accent)] bg-[var(--accent)] bg-opacity-20'
                : 'border-gray-600 hover:border-gray-500'
            }`}
            aria-label="Select heart sticker"
          >
            ❤️
          </button>
          <button
            type="button"
            onClick={() => setSelectedSticker(selectedSticker === '/stickers/frog.svg' ? undefined : '/stickers/frog.svg')}
            className={`p-2 rounded-md border-2 transition-colors ${
              selectedSticker === '/stickers/frog.svg'
                ? 'border-[var(--accent)] bg-[var(--accent)] bg-opacity-20'
                : 'border-gray-600 hover:border-gray-500'
            }`}
            aria-label="Select frog sticker"
          >
            🐸
          </button>
        </div>

        <Button type="submit" variant="primary" className="w-full">
          {STRINGS.en.submitButton}
        </Button>
      </form>
    </div>
  );
}
