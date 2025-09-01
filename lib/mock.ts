// src/lib/mock.ts
import { CreatorProfile, Supporter } from "./types";

export const getMockCreator = (username: string): CreatorProfile => ({
  username,
  name: username === "ploy" ? "Ploy 🌸" : username,
  tagline: "Buy me a bubble tea and I'll keep making TikToks 🍹",
  avatarUrl: "/themes/avatar-demo.svg",
  theme: "bubbleTea",
  tiers: [
    { label: "Buy 1 🍹", amountTHB: 50,  emoji: "🥤" },
    { label: "Buy 3 🍹", amountTHB: 150, emoji: "🧋" },
    { label: "Buy 5 🍹", amountTHB: 250, emoji: "💖" },
  ],
  promptpayQRUrl: "/themes/promptpay-qr-placeholder.svg",
});

export const getMockSupporters = (): Supporter[] => ([
  { id:"1", name:"Mint",  count:2, message:"ขอบคุณงับ!", sticker:"/stickers/frog.svg", timeAgo:"3m" },
  { id:"2", name:"James", count:5, message:"Keep going!",  sticker:"/stickers/heart.svg", timeAgo:"1h" },
]);
