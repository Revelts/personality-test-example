/**
 * TechShift Challenge Analytics
 * All events from /techshiftchallenge route use the techshiftchallenge_ prefix
 * to distinguish them from personality test events in GTM/GA4.
 */

import { pushToDataLayer, trackEvent } from '@/lib/analytics';

export type TechShiftCapcutTemplate = 'aksi_stunt' | 'momen_random';
export type TechShiftMarketplace = 'lazada' | 'shopee' | 'tiktok_shop';
export type TechShiftSocial = 'instagram' | 'facebook' | 'tiktok';

export const trackTechShiftPageView = (): void => {
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : '';
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pageReferrer = typeof document !== 'undefined' ? document.referrer : '';
  const pageTitle = typeof document !== 'undefined' ? document.title : undefined;

  pushToDataLayer({
    event: 'techshiftchallenge_page_view',
    page_name: 'TechShift Challenge',
    page_type: 'campaign',
    page_path: pagePath,
    page_url: pageUrl,
    page_referrer: pageReferrer,
    page_title: pageTitle,
  });
};

export const trackTechShiftCtaClick = (): void => {
  trackEvent('techshiftchallenge_cta_click', {
    button_name: 'ikut_sekarang',
  });
};

export const trackTechShiftHowSlideNav = (
  direction: 'prev' | 'next' | 'swipe_prev' | 'swipe_next',
  slideIndex: number
): void => {
  trackEvent('techshiftchallenge_how_slide_nav', {
    direction,
    slide_index: slideIndex,
  });
};

export const trackTechShiftPrizeNav = (
  direction: 'prev' | 'next',
  prizeIndex: number
): void => {
  trackEvent('techshiftchallenge_prize_nav', {
    direction,
    prize_index: prizeIndex,
  });
};

export const trackTechShiftFaqToggle = (
  action: 'open' | 'close',
  questionIndex: number,
  questionText: string
): void => {
  trackEvent('techshiftchallenge_faq_toggle', {
    action,
    question_index: questionIndex,
    question_text: questionText,
  });
};

export const trackTechShiftCapcutClick = (template: TechShiftCapcutTemplate): void => {
  trackEvent('techshiftchallenge_capcut_click', { template });
};

export const trackTechShiftTncClick = (): void => {
  trackEvent('techshiftchallenge_tnc_click');
};

export const trackTechShiftMarketplaceClick = (platform: TechShiftMarketplace): void => {
  trackEvent('techshiftchallenge_marketplace_click', { platform });
};

export const trackTechShiftSocialClick = (platform: TechShiftSocial): void => {
  trackEvent('techshiftchallenge_social_click', { platform });
};

export const trackTechShiftBackToTop = (): void => {
  trackEvent('techshiftchallenge_back_to_top');
};
