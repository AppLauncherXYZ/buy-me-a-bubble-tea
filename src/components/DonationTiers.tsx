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
      {tiers.map((tier) => (
        <Button
          key={tier.amountTHB}
          variant="outline"
          size="lg"
          className="w-full justify-between"
          onClick={() => handleTierClick(tier)}
          aria-label={`Buy ${tier.label} for ${tier.amountTHB} THB`}
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">{tier.emoji}</span>
            {tier.label}
          </span>
          <span className="text-[var(--accent)] font-semibold">
            ฿{tier.amountTHB}
          </span>
        </Button>
      ))}
    </div>
  );
}
