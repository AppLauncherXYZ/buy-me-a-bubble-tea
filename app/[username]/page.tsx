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
      <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-md mx-auto space-y-8">
          {/* Header Skeleton */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer"></div>
            <div className="h-8 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer rounded w-48 mx-auto mb-2"></div>
            <div className="h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer rounded w-64 mx-auto"></div>
          </div>

          {/* Tiers Skeleton */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded-lg border border-gray-700"></div>
            ))}
          </div>

          {/* Form Skeleton */}
          <div className="space-y-4">
            <div className="h-24 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded-lg"></div>
            <div className="h-12 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded-lg"></div>
          </div>

          {/* Feed Skeleton */}
          <div className="space-y-3">
            <div className="h-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded w-48 mb-4"></div>
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-4 border border-gray-700 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer rounded w-3/4"></div>
                    <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer rounded w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <CreatorPage profile={profile} />;
}
