import React, { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { Skeleton } from '@/components/ui/Skeleton';

interface QRModalProps {
  open: boolean;
  onClose: () => void;
  qrUrl: string;
}

export function QRModal({ open, onClose, qrUrl }: QRModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Modal open={open} onClose={onClose} title="Scan to Pay">
      <div className="text-center space-y-4">
        <div className="glass-dark p-6 rounded-2xl inline-block relative">
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              className="w-48 h-48 absolute inset-6 rounded-lg"
            />
          )}
          <Image
            src={qrUrl}
            alt="PromptPay QR Code"
            width={192}
            height={192}
            className={`w-48 h-48 object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="animate-in slide-in-from-bottom-2 duration-500 space-y-2">
          <p className="text-sm text-gray-300">
            Scan this QR code with your banking app to make a payment
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>PromptPay</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Secure</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Instant</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
