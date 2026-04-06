# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Run production server
npm run lint       # ESLint check
npm run type-check # TypeScript validation (tsc --noEmit)
```

## Architecture

**Next.js 14 App Router** — fully client-side, no backend. All data lives in `localStorage`; results are shared via base64-encoded URL params.

### User Flow
`/` (name input + video) → `/prologue` (typewriter intro) → `/test` (20 questions, auto-saved) → `/result/[id]` (personality result, shareable/exportable)

`/techshiftchallenge` is a separate marketing campaign landing page with its own components in `app/techshiftchallenge/components/`.

### Key Directories
- `app/` — Next.js App Router pages and layouts
- `components/` — Shared React components
- `lib/` — Business logic: `questions.ts` (quiz data), `results.ts` (scoring + 8 personality types), `progressStorage.ts` (localStorage auto-save), `analytics.ts` (GA4/GTM dataLayer)
- `hooks/` — `useAnalytics`, `usePageTracking`, `useReducedMotion`
- `public/fonts/` — Pilat Extended font family (SanDisk branding, 4 weights)
- `public/video/` — `horizontal_vid.mp4` (desktop), `vertical_vid.mp4` (mobile), `header-video.mp4` (campaign)

### Design System
Tailwind with a custom cyber-punk palette defined in `tailwind.config.ts`:
- Brand red: `#E10600`, neon cyan: `#00F0FF`, deep black bg: `#0A0A0C`
- Custom animations: `scanLine` (CRT effect), `glitch`, `neonFlicker`, `glowPulse`
- Primary font: Pilat Extended; fallback: Space Grotesk

### Analytics
GTM (GTM-5323NFPL) + GA4 (G-PH28648C02) via `AnalyticsProvider` context. All tracking goes through `lib/analytics.ts` → `pushToDataLayer()`.

### Campaign Feature Flags
`app/techshiftchallenge/config.ts` contains `WINNERS_ENABLED` toggle for the leaderboard/hall-of-fame sections.
