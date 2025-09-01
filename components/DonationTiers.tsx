import React from 'react';
import { DonationTier } from '@/lib/types';
import { Button } from '@/components/ui/Button';

interface DonationTiersProps {
  tiers: DonationTier[];
  onSelectTier?: (tier: DonationTier) => void;
  qrUrl?: string;
}

export function DonationTiers({ tiers, onSelectTier, qrUrl }: DonationTiersProps) {
  const handleTierClick = (tier: DonationTier) => {
    if (onSelectTier) {
      onSelectTier(tier);
    } else if (qrUrl) {
      // If no onSelectTier provided but qrUrl exists, open modal internally
      // This would typically be handled by a parent component with modal state
      console.log('Opening QR for tier:', tier);
    }
  };

  return (
    <div className="space-y-3">
      {tiers.map((tier, index) => (
        <div
          key={tier.amountTHB}
          className="animate-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full justify-between glass hover:scale-105 transition-all duration-200 smooth-transform group"
            onClick={() => handleTierClick(tier)}
            aria-label={`Buy ${tier.label} for ${tier.amountTHB} THB`}
          >
            <span className="flex items-center gap-2">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {tier.emoji}
              </span>
              <span className="font-medium">{tier.label}</span>
            </span>
            <span className="text-[var(--accent)] font-bold text-lg">
              ฿{tier.amountTHB}
            </span>
          </Button>
        </div>
      ))}
    </div>
  );
}
