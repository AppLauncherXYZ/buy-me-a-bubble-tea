import React from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';

interface QRModalProps {
  open: boolean;
  onClose: () => void;
  qrUrl: string;
}

export function QRModal({ open, onClose, qrUrl }: QRModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Scan to Pay">
      <div className="text-center">
        <div className="bg-white p-4 rounded-lg mb-4 inline-block">
          <Image
            src={qrUrl}
            alt="PromptPay QR Code"
            width={192}
            height={192}
            className="w-48 h-48 object-contain"
          />
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Scan this QR code with your banking app to make a payment
        </p>
        <p className="text-xs text-gray-500">
          PromptPay • Secure • Instant
        </p>
      </div>
    </Modal>
  );
}
