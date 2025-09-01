# Buy Me a Bubble Tea

A beautiful, mobile-first template for creator support pages inspired by "Buy Me a Coffee" but designed for Thai creators and their bubble tea addiction! 🧋

## ✨ Features

- **4 Beautiful Themes**: Bubble Tea, Pad Thai, Mango Sticky Rice, Anime Boba
- **Mobile-First Design**: Optimized for mobile with responsive layout
- **PromptPay Integration**: Ready for Thai payment system
- **Interactive Components**: QR modals, message forms, sticker support
- **Dark Mode Only**: Clean, modern aesthetic
- **TypeScript**: Fully typed for better developer experience

## 🚀 Quick Start

The template comes with demo data ready to edit. Simply modify the `demoProfile` object in `src/app/page.tsx`:

```typescript
const demoProfile = {
  username: "yourusername",           // Your username
  name: "Your Name",                  // Display name
  tagline: "Your awesome tagline!",   // What supporters see
  avatarUrl: "/themes/avatar-demo.svg", // Your avatar image
  theme: "bubbleTea",                 // Choose: bubbleTea, padThai, mangoStickyRice, animeBoba
  tiers: [
    { label: "Buy 1 🍹", amountTHB: 50, emoji: "🥤" },
    { label: "Buy 3 🍹", amountTHB: 150, emoji: "🧋" },
    { label: "Buy 5 🍹", amountTHB: 250, emoji: "💖" },
  ],
  promptpayQRUrl: "/themes/promptpay-qr-placeholder.svg", // Your QR code
};
```

## 🎨 Customization

### Changing Themes
Available themes: `bubbleTea`, `padThai`, `mangoStickyRice`, `animeBoba`

### Adding Donation Tiers
Modify the `tiers` array to add/remove/change donation amounts and labels.

### Custom Assets
Replace the placeholder files in `/public/themes/`:
- `avatar-demo.svg` - Your profile picture
- `promptpay-qr-placeholder.svg` - Your PromptPay QR code

### Adding Stickers
Add new sticker SVGs to `/public/stickers/` and update the `STICKERS` array in `StickerPicker.tsx`.

## 📱 Components

- **CreatorHeader**: Avatar, name, and tagline
- **DonationTiers**: Interactive donation buttons
- **QRModal**: Displays payment QR code
- **MessageForm**: Support messages with stickers
- **SupporterFeed**: Recent supporter activity

## 🎯 For v0 Users

This template is designed to be easily editable in v0:
1. All text, images, and settings are in one place (`src/app/page.tsx`)
2. Components are modular and reusable
3. Fully responsive and accessible
4. Ready for backend integration

## 🛠️ Development

```bash
npm install
npm run dev
```

## 📄 License

MIT License - feel free to use and modify for your projects!
