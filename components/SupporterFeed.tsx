import React from 'react';
import Image from 'next/image';
import { Supporter } from '@/lib/types';
import { STRINGS } from '@/lib/i18n';

interface SupporterFeedProps {
  items: Supporter[];
}

export function SupporterFeed({ items }: SupporterFeedProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No supporters yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[var(--fg)]">
        {STRINGS.en.recentSupporters}
      </h3>
      <div className="space-y-3">
        {items.map((supporter) => (
          <div key={supporter.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[var(--fg)]">{supporter.name}</span>
                <span className="text-sm text-gray-400">bought {supporter.count} 🥤</span>
              </div>
              <span className="text-xs text-gray-500">{supporter.timeAgo}</span>
            </div>
            {supporter.message && (
              <p className="text-gray-300 text-sm mb-2">{supporter.message}</p>
            )}
            {supporter.sticker && (
              <div className="flex justify-end">
                <Image
                  src={supporter.sticker}
                  alt="Sticker"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
