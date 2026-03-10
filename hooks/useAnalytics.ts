/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  MarketplacePlatform,
  trackClickMarketplace,
  trackPlayFinish,
  trackPlayStart,
  trackShareClick,
} from '@/lib/analytics';

export function useAnalytics() {
  return {
    startPlay: () => trackPlayStart(),
    finishPlay: () => trackPlayFinish(),
    clickMarketplace: (platform: MarketplacePlatform) => trackClickMarketplace(platform),
    share: () => trackShareClick(),
  };
}

