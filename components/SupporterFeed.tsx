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
      <h3 className="text-lg font-semibold text-[var(--fg)] animate-in slide-in-from-bottom-2 duration-500">
        {STRINGS.en.recentSupporters}
      </h3>
      <div className="space-y-3">
        {items.map((supporter, index) => (
          <div
            key={supporter.id}
            className="bg-gray-800 rounded-xl p-4 border border-gray-700 glass animate-in slide-in-from-bottom-4 duration-500 hover:scale-[1.02] transition-all duration-200 smooth-transform"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent)] to-purple-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {supporter.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="font-medium text-[var(--fg)] block">{supporter.name}</span>
                  <span className="text-sm text-gray-400">bought {supporter.count} 🥤</span>
                </div>
              </div>
              <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                {supporter.timeAgo}
              </span>
            </div>
            {supporter.message && (
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">{supporter.message}</p>
            )}
            {supporter.sticker && (
              <div className="flex justify-end">
                <div className="bg-gray-700 rounded-full p-2 animate-in zoom-in-50 duration-300">
                  <Image
                    src={supporter.sticker}
                    alt="Sticker"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
