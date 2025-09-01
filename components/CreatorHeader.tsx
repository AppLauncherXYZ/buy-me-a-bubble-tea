import React, { useState } from 'react';
import Image from 'next/image';
import { CreatorProfile } from '@/lib/types';
import { Skeleton } from '@/components/ui/Skeleton';

interface CreatorHeaderProps {
  profile: CreatorProfile;
}

export function CreatorHeader({ profile }: CreatorHeaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="text-center mb-8">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[var(--accent)] relative">
        {!imageLoaded && (
          <Skeleton
            variant="circular"
            className="w-full h-full absolute inset-0"
          />
        )}
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name}'s avatar`}
          width={96}
          height={96}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          priority
        />
      </div>

      <div className="space-y-2">
        {!imageLoaded ? (
          <>
            <Skeleton variant="text" className="w-48 h-8 mx-auto" />
            <Skeleton variant="text" className="w-64 h-4 mx-auto" />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-[var(--fg)] mb-2 animate-in slide-in-from-bottom-2 duration-500">
              {profile.name}
            </h1>
            <p className="text-gray-400 text-sm max-w-xs mx-auto animate-in slide-in-from-bottom-2 duration-500 delay-100">
              {profile.tagline}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
