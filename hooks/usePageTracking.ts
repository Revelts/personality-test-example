'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';
import { trackTechShiftPageView } from '@/lib/techshift-analytics';

interface PageMeta {
  pageName: string;
  pageType: string;
  trackFn?: () => void;
}

const getPageMeta = (pathname: string | null): PageMeta => {
  if (!pathname) {
    return { pageName: 'Unknown', pageType: 'default' };
  }

  if (pathname === '/') {
    return { pageName: 'Landing Page', pageType: 'landing' };
  }

  if (pathname === '/test') {
    return { pageName: 'Personality Test', pageType: 'test' };
  }

  if (pathname === '/prologue') {
    return { pageName: 'Prologue', pageType: 'prologue' };
  }

  if (pathname.startsWith('/result/')) {
    return { pageName: 'Test Result', pageType: 'result' };
  }

  if (pathname.startsWith('/techshiftchallenge')) {
    return {
      pageName: 'TechShift Challenge',
      pageType: 'campaign',
      trackFn: () => trackTechShiftPageView(),
    };
  }

  return { pageName: pathname, pageType: 'page' };
};

export const usePageTracking = (): void => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const { pageName, pageType, trackFn } = getPageMeta(pathname);
    if (trackFn) {
      trackFn();
    } else {
      trackPageView(pageName, pageType);
    }
  }, [pathname]);
};

