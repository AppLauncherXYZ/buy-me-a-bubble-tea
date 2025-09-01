// src/lib/i18n.ts
export const STRINGS = {
  en: {
    buyButton: "Buy",
    submitButton: "Send Message",
    messagePlaceholder: "Leave a message...",
    recentSupporters: "Recent Supporters",
    studioTitle: "Creator Studio",
    previewTitle: "Live Preview",
    themeLabel: "Theme",
    nameLabel: "Name",
    taglineLabel: "Tagline",
    qrLabel: "QR Code URL",
    copyLink: "Copy Link",
    share: "Share",
    close: "Close",
    chooseSticker: "Choose a sticker",
    languageToggle: "EN/TH"
  },
  th: {
    buyButton: "ซื้อ",
    submitButton: "ส่งข้อความ",
    messagePlaceholder: "เขียนข้อความ...",
    recentSupporters: "ผู้สนับสนุนล่าสุด",
    studioTitle: "สตูดิโอครีเอเตอร์",
    previewTitle: "แสดงตัวอย่าง",
    themeLabel: "ธีม",
    nameLabel: "ชื่อ",
    taglineLabel: "คำอธิบาย",
    qrLabel: "ลิงก์ QR Code",
    copyLink: "คัดลอกลิงก์",
    share: "แชร์",
    close: "ปิด",
    chooseSticker: "เลือกสติกเกอร์",
    languageToggle: "EN/TH"
  }
};

export type Language = keyof typeof STRINGS;
