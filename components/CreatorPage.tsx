'use client';

import { useState, useEffect } from 'react';
import { CreatorHeader } from '@/components/CreatorHeader';
import { DonationTiers } from '@/components/DonationTiers';
import { QRModal } from '@/components/QRModal';
import { MessageForm } from '@/components/MessageForm';
import { SupporterFeed } from '@/components/SupporterFeed';
import { getMockSupporters } from '@/lib/mock';
import { CreatorProfile, Supporter } from '@/lib/types';
import { THEMES } from '@/lib/themes';

interface CreatorPageProps {
  profile: CreatorProfile;
}

export function CreatorPage({ profile }: CreatorPageProps) {
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  useEffect(() => {
    // Load mock supporters
    setSupporters(getMockSupporters());

    // Apply theme CSS variables
    const themeVars = THEMES[profile.theme];
    if (themeVars) {
      Object.entries(themeVars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  }, [profile.theme]);

  const handleTierSelect = () => {
    setQrModalOpen(true);
  };

  const handleMessageSubmit = (message: { text?: string; sticker?: string }) => {
    const newSupporter: Supporter = {
      id: Date.now().toString(),
      name: 'Anonymous Fan',
      count: 1,
      message: message.text,
      sticker: message.sticker,
      timeAgo: 'now'
    };
    setSupporters(prev => [newSupporter, ...prev]);
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        <CreatorHeader profile={profile} />

        <div className="space-y-6">
          <DonationTiers
            tiers={profile.tiers}
            onSelectTier={handleTierSelect}
            qrUrl={profile.promptpayQRUrl}
          />

          <MessageForm
            username={profile.username}
            onSubmit={handleMessageSubmit}
          />

          <SupporterFeed items={supporters} />
        </div>

        <QRModal
          open={qrModalOpen}
          onClose={() => setQrModalOpen(false)}
          qrUrl={profile.promptpayQRUrl}
        />
      </div>
    </div>
  );
}
