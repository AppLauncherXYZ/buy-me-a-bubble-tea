// src/lib/types.ts
export type ThemeKey = "bubbleTea" | "padThai" | "mangoStickyRice" | "animeBoba";

export type DonationTier = { label: string; amountTHB: number; emoji: string };

export type CreatorProfile = {
  username: string;
  name: string;
  tagline: string;
  avatarUrl: string;
  theme: ThemeKey;
  tiers: DonationTier[];
  promptpayQRUrl: string; // static image/url for MVP
};

export type Supporter = {
  id: string;
  name: string;
  count: number;          // number of "teas" purchased
  message?: string;
  sticker?: string;       // path to sticker asset in /public/stickers
  timeAgo: string;        // e.g., "3m", "1h"
};
