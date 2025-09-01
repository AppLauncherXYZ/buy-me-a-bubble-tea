'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CreatorPage } from '@/components/CreatorPage';
import { getMockCreator } from '@/lib/mock';
import { CreatorProfile } from '@/lib/types';

export default function DynamicCreatorPage() {
  const params = useParams();
  const username = params.username as string;

  const [profile, setProfile] = useState<CreatorProfile | null>(null);

  useEffect(() => {
    if (username) {
      const creatorProfile = getMockCreator(username);
      setProfile(creatorProfile);
    }
  }, [username]);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[var(--fg)]">Loading...</div>
      </div>
    );
  }

  return <CreatorPage profile={profile} />;
}
