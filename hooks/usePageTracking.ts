'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

const getPageMeta = (pathname: string | null): { pageName: string; pageType: string } => {
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
    return { pageName: 'TechShift Challenge', pageType: 'campaign' };
  }

  return { pageName: pathname, pageType: 'page' };
};

export const usePageTracking = (): void => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const { pageName, pageType } = getPageMeta(pathname);
    trackPageView(pageName, pageType);
  }, [pathname, searchParams]);
};

