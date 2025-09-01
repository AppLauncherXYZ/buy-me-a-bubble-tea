import React from 'react';
import Image from 'next/image';
import { CreatorProfile } from '@/lib/types';

interface CreatorHeaderProps {
  profile: CreatorProfile;
}

export function CreatorHeader({ profile }: CreatorHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[var(--accent)]">
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name}'s avatar`}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold text-[var(--fg)] mb-2">
        {profile.name}
      </h1>
      <p className="text-gray-400 text-sm max-w-xs mx-auto">
        {profile.tagline}
      </p>
    </div>
  );
}
