import { CreatorPage } from '@/components/CreatorPage';

export default function HomePage() {
  // 🎨 EDIT THIS OBJECT TO CUSTOMIZE YOUR PAGE
  const demoProfile = {
    username: "yourusername",           // Your username handle
    name: "Your Name",                  // Your display name
    tagline: "Buy me a bubble tea and I'll keep making awesome content! 🧋", // Your tagline
    avatarUrl: "/themes/avatar-demo.svg", // Replace with your avatar
    theme: "bubbleTea" as const,        // Options: bubbleTea, padThai, mangoStickyRice, animeBoba
    tiers: [
      { label: "Buy 1 🍹", amountTHB: 50, emoji: "🥤" },   // Edit amounts and labels
      { label: "Buy 3 🍹", amountTHB: 150, emoji: "🧋" },  // Add/remove tiers as needed
      { label: "Buy 5 🍹", amountTHB: 250, emoji: "💖" },
    ],
    promptpayQRUrl: "/themes/promptpay-qr-placeholder.svg", // Replace with your QR code
  };

  return <CreatorPage profile={demoProfile} />;
}