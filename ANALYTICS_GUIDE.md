# 📊 Complete Analytics Implementation Guide

## 🎯 Architecture Overview

```
Next.js App
    ↓
window.dataLayer (Client-side)
    ↓
Google Tag Manager (GTM)
    ├─→ Google Analytics 4 (GA4)
    └─→ Meta Pixel (Facebook)
```

### Why GTM as Single Source of Truth?

✅ **Centralized Management**: Semua tracking di satu tempat
✅ **No Code Deploy**: Update tracking tanpa deploy ulang app
✅ **Version Control**: GTM punya version history
✅ **Multiple Tags**: GA4, Meta Pixel, dst. dari satu implementation
✅ **Easy Testing**: GTM Preview Mode
✅ **Team Collaboration**: Marketing bisa manage sendiri

---

## 📦 1. Installation & Setup

### Install Dependencies

```bash
# No additional packages needed! 
# We use Next.js built-in Script component
```

### Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GTM_ENABLED=false  # true untuk test di development
```

---

## 🔧 2. Implementation in Next.js

### App Router Implementation

**File: `app/layout.tsx`**

```typescript
import GoogleTagManager from '@/components/GoogleTagManager';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="id">
      <head>
        {/* GTM must be in <head> */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### Pages Router Implementation (Alternative)

**File: `pages/_app.tsx`**

```typescript
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { trackPageView, initializeDataLayer } from '@/lib/analytics';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    initializeDataLayer();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url, 'page');
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
```

**File: `pages/_document.tsx`**

```typescript
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <Html>
      <Head>
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </Head>
      <body>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

---

## 📋 3. Standard dataLayer Structure

### Complete Event Schema

```typescript
interface DataLayerEvent {
  event: string;                  // Required: event name
  page_name?: string;             // Human-readable page name
  page_path?: string;             // URL path
  page_type?: string;             // landing | test | result
  page_url?: string;              // Full URL
  page_referrer?: string;         // Referrer URL
  user_id?: string;               // User identifier (optional)
  user_name?: string;             // User name
  test_id?: string;               // Test session ID
  personality_type?: string;      // Result type
  question_number?: number;       // Current question
  answer_id?: string;             // Selected answer
  trait?: string;                 // Personality trait
  value?: number;                 // Conversion value
  currency?: string;              // Currency code
  timestamp?: string;             // ISO timestamp
  [key: string]: any;             // Additional properties
}
```

### Example dataLayer Pushes

**1. Page View**
```javascript
window.dataLayer.push({
  event: 'page_view',
  page_name: 'Landing Page',
  page_path: '/',
  page_type: 'landing',
  page_url: 'https://yoursite.com/',
  page_referrer: 'https://google.com',
  timestamp: '2026-01-27T10:00:00.000Z'
});
```

**2. Test Started**
```javascript
window.dataLayer.push({
  event: 'test_start',
  page_name: 'Test Start',
  page_type: 'test',
  user_name: 'Budi',
  timestamp: '2026-01-27T10:01:00.000Z'
});
```

**3. Question Answered**
```javascript
window.dataLayer.push({
  event: 'question_answered',
  page_name: 'Question 5',
  page_type: 'test',
  question_number: 5,
  question_text: 'Cara kamu ambil keputusan penting biasanya:',
  answer_id: '5a',
  answer_text: 'Bikin pro-cons list dulu',
  trait: 'logical',
  timestamp: '2026-01-27T10:02:00.000Z'
});
```

**4. Test Completed**
```javascript
window.dataLayer.push({
  event: 'test_complete',
  page_name: 'Test Complete',
  page_type: 'result',
  user_name: 'Budi',
  personality_type: 'the-mastermind',
  test_id: 'abc123xyz',
  logical_score: 12,
  creative_score: 5,
  empathetic_score: 2,
  leader_score: 1,
  adventurer_score: 0,
  timestamp: '2026-01-27T10:10:00.000Z'
});
```

**5. Share Button**
```javascript
window.dataLayer.push({
  event: 'share',
  page_name: 'Result Share',
  page_type: 'result',
  share_method: 'copy_link',
  personality_type: 'the-mastermind',
  test_id: 'abc123xyz',
  timestamp: '2026-01-27T10:11:00.000Z'
});
```

---

## 🎬 4. Event Tracking Implementation

### Component Example: Landing Page

```typescript
'use client';

import { trackButtonClick, trackFormSubmit } from '@/lib/analytics';

export default function LandingPage() {
  const handleStartTest = (name: string) => {
    // Track form submission
    trackFormSubmit('name_input', {
      user_name: name,
      form_location: 'landing_page'
    });

    // Navigate to test
    router.push('/test');
  };

  return (
    <button
      onClick={handleStartTest}
      // ... other props
    >
      Mulai Tes Sekarang
    </button>
  );
}
```

### Component Example: Test Page

```typescript
'use client';

import { useEffect } from 'react';
import { 
  trackTestStart, 
  trackQuestionAnswer,
  trackTestComplete 
} from '@/lib/analytics';

export default function TestPage() {
  const [userName, setUserName] = useState('');

  // Track test start
  useEffect(() => {
    if (userName) {
      trackTestStart(userName);
    }
  }, [userName]);

  // Track question answer
  const handleSelectAnswer = (answerId: string) => {
    const answer = currentQuestion.answers.find(a => a.id === answerId);
    
    if (answer) {
      trackQuestionAnswer(
        currentQuestion.id,
        currentQuestion.text,
        answer.id,
        answer.text,
        answer.trait
      );
    }
  };

  // Track test completion
  const handleTestComplete = () => {
    const personality = calculatePersonality(scores);
    const testId = generateTestId();

    trackTestComplete(
      userName,
      personality.id,
      testId,
      scores
    );

    router.push(`/result/${testId}`);
  };

  return (
    // ... component JSX
  );
}
```

### Component Example: Result Page

```typescript
'use client';

import { useEffect } from 'react';
import { 
  trackResultView,
  trackShare,
  trackScreenshot 
} from '@/lib/analytics';

export default function ResultPage({ params }: { params: { id: string } }) {
  // Track result view
  useEffect(() => {
    if (result && userName) {
      trackResultView(result.id, params.id, userName);
    }
  }, [result, userName, params.id]);

  // Track share
  const handleShare = async () => {
    await copyToClipboard(shareUrl);
    trackShare('copy_link', result.id, params.id);
  };

  // Track screenshot
  const handleScreenshot = async () => {
    await captureScreenshot();
    trackScreenshot(result.id, params.id);
  };

  return (
    // ... component JSX
  );
}
```

---

## ⚙️ 5. Google Tag Manager Configuration

### Step 1: Create GTM Account

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Create Account → Create Container
3. Choose "Web" as target platform
4. Copy GTM ID (format: GTM-XXXXXXX)

### Step 2: Data Layer Variables

Create variables in GTM → Variables → User-Defined Variables:

**Built-in Variables** (Enable these):
- Page URL
- Page Path
- Page Hostname
- Referrer

**Data Layer Variables** (Create these):
```
Variable Name         | Data Layer Variable Name | Default Value
---------------------|--------------------------|---------------
DLV - Event          | event                    | (none)
DLV - Page Name      | page_name                | (none)
DLV - Page Type      | page_type                | (none)
DLV - User Name      | user_name                | (none)
DLV - Personality    | personality_type         | (none)
DLV - Test ID        | test_id                  | (none)
DLV - Question Number| question_number          | 0
DLV - Answer ID      | answer_id                | (none)
DLV - Trait          | trait                    | (none)
DLV - Share Method   | share_method             | (none)
```

### Step 3: Triggers

**Trigger 1: All Pages (Page View)**
```
Trigger Type: Page View
Trigger Name: All Pages
Fires on: All Page Views
```

**Trigger 2: Test Start**
```
Trigger Type: Custom Event
Event name: test_start
Fires on: All Custom Events
```

**Trigger 3: Question Answered**
```
Trigger Type: Custom Event
Event name: question_answered
Fires on: All Custom Events
```

**Trigger 4: Test Complete**
```
Trigger Type: Custom Event
Event name: test_complete
Fires on: All Custom Events
```

**Trigger 5: Share**
```
Trigger Type: Custom Event
Event name: share
Fires on: All Custom Events
```

**Trigger 6: Screenshot**
```
Trigger Type: Custom Event
Event name: screenshot_download
Fires on: All Custom Events
```

### Step 4: Tags - Google Analytics 4

**Tag 1: GA4 Configuration**
```
Tag Type: Google Analytics: GA4 Configuration
Tag Name: GA4 - Config
Measurement ID: G-XXXXXXXXXX (your GA4 ID)
Configuration Settings:
  - send_page_view: false (handled manually)
Triggering: All Pages
```

**Tag 2: GA4 Event - Page View**
```
Tag Type: Google Analytics: GA4 Event
Tag Name: GA4 - Page View
Configuration Tag: GA4 - Config
Event Name: page_view
Event Parameters:
  - page_name: {{DLV - Page Name}}
  - page_type: {{DLV - Page Type}}
Triggering: All Pages
```

**Tag 3: GA4 Event - Test Start**
```
Tag Type: Google Analytics: GA4 Event
Tag Name: GA4 - Test Start
Configuration Tag: GA4 - Config
Event Name: test_start
Event Parameters:
  - user_name: {{DLV - User Name}}
Triggering: Test Start (custom event)
```

**Tag 4: GA4 Event - Question Answered**
```
Tag Type: Google Analytics: GA4 Event
Tag Name: GA4 - Question Answered
Configuration Tag: GA4 - Config
Event Name: question_answered
Event Parameters:
  - question_number: {{DLV - Question Number}}
  - answer_id: {{DLV - Answer ID}}
  - trait: {{DLV - Trait}}
Triggering: Question Answered (custom event)
```

**Tag 5: GA4 Event - Test Complete**
```
Tag Type: Google Analytics: GA4 Event
Tag Name: GA4 - Test Complete
Configuration Tag: GA4 - Config
Event Name: test_complete
Event Parameters:
  - personality_type: {{DLV - Personality}}
  - test_id: {{DLV - Test ID}}
  - user_name: {{DLV - User Name}}
Triggering: Test Complete (custom event)
```

### Step 5: Tags - Meta Pixel

**Tag 1: Meta Pixel Base Code**
```
Tag Type: Custom HTML
Tag Name: Meta Pixel - Base Code
HTML:
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
Triggering: All Pages
```

**Tag 2: Meta Pixel - Test Start**
```
Tag Type: Custom HTML
Tag Name: Meta Pixel - Test Start
HTML:
<script>
fbq('track', 'Lead', {
  content_name: 'Test Started',
  content_category: 'Personality Test'
});
</script>
Triggering: Test Start (custom event)
```

**Tag 3: Meta Pixel - Test Complete (Conversion)**
```
Tag Type: Custom HTML
Tag Name: Meta Pixel - Test Complete
HTML:
<script>
fbq('track', 'CompleteRegistration', {
  content_name: 'Test Completed',
  content_category: {{DLV - Personality}},
  status: 'completed'
});
</script>
Triggering: Test Complete (custom event)
```

---

## 🎯 6. Best Practices for Next.js

### Handling SPA Navigation

```typescript
// components/GoogleTagManager.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

export default function GoogleTagManager({ gtmId }: { gtmId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on client-side navigation
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname, 'page');
    }
  }, [pathname, searchParams]);

  return <Script id="gtm" ... />;
}
```

### Prevent Duplicate Events

```typescript
// Use useRef to track if event was already fired
const hasFiredRef = useRef(false);

useEffect(() => {
  if (!hasFiredRef.current && someCondition) {
    trackEvent('event_name', data);
    hasFiredRef.current = true;
  }
}, [someCondition]);
```

### SSR vs Client-side Tracking

```typescript
// Always check for window object
export const trackEvent = (data: any) => {
  if (typeof window === 'undefined') return; // SSR guard
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};
```

### Lazy Loading

```typescript
// Load GTM after initial page load
<Script
  id="gtm"
  strategy="afterInteractive"  // or "lazyOnload"
  ...
/>
```

---

## 🐛 7. Debugging & Validation

### GTM Preview Mode

1. Open GTM → Workspace
2. Click "Preview" button (top right)
3. Enter your website URL
4. Check "Tag Assistant" panel
5. Verify:
   - ✅ Tags firing correctly
   - ✅ Variables populated
   - ✅ Triggers activating

### GA4 DebugView

1. Open GA4 → Configure → DebugView
2. Add `?debug_mode=true` to URL
3. Check events in real-time
4. Verify:
   - ✅ Events received
   - ✅ Parameters correct
   - ✅ User properties set

### Meta Pixel Helper (Chrome Extension)

1. Install "Meta Pixel Helper" extension
2. Visit your website
3. Check popup for:
   - ✅ Pixel loaded
   - ✅ Events fired
   - ✅ No errors

### Testing on Localhost

**GTM**: Works on localhost ✅
**GA4**: Works on localhost ✅  
**Meta Pixel**: Works on localhost ✅

No domain needed for testing!

### Console Debugging

```typescript
// Enable in development
if (process.env.NODE_ENV === 'development') {
  window.dataLayer?.forEach(event => {
    console.log('📊 DataLayer:', event);
  });
}
```

---

## 🔒 8. Privacy & Future Proofing

### Consent-Ready Structure

```typescript
// lib/analytics.ts
let consentGiven = true; // Default for now

export const setTrackingConsent = (consent: boolean) => {
  consentGiven = consent;
  
  // Update GTM consent
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update',
      analytics_storage: consent ? 'granted' : 'denied',
      ad_storage: consent ? 'granted' : 'denied',
    });
  }
};

export const pushToDataLayer = (data: any) => {
  if (!consentGiven) return; // Respect consent
  
  // ... rest of code
};
```

### Easy Cookie Banner Integration

```typescript
// Future implementation
import CookieConsent from 'react-cookie-consent';
import { setTrackingConsent } from '@/lib/analytics';

export default function ConsentBanner() {
  return (
    <CookieConsent
      onAccept={() => setTrackingConsent(true)}
      onDecline={() => setTrackingConsent(false)}
    >
      Cookie consent message...
    </CookieConsent>
  );
}
```

### GDPR / PDPL Tips

✅ **Anonymize IP** in GA4 settings
✅ **Data Retention** limit (14 months default)
✅ **Consent Mode** ready structure
✅ **No PII** in dataLayer (names OK if disclosed)
✅ **Privacy Policy** mention tracking tools

---

## 📚 9. Naming Convention & Best Practices

### Event Naming Convention

```
Format: {action}_{object}
Examples:
  - page_view
  - test_start
  - test_complete
  - question_answered
  - button_click
  - form_submit
  - share
  - screenshot_download
```

### Folder Structure

```
project/
├── lib/
│   └── analytics.ts           # All tracking functions
├── components/
│   └── GoogleTagManager.tsx   # GTM component
├── app/
│   ├── layout.tsx             # GTM integration
│   └── page.tsx               # Track events
└── env.example                # Environment variables
```

### Helper Function Pattern

```typescript
// ✅ Good: Specific function
export const trackTestStart = (userName: string) => {
  pushToDataLayer({
    event: 'test_start',
    user_name: userName,
  });
};

// ❌ Bad: Too generic
export const track = (data: any) => {
  window.dataLayer.push(data);
};
```

---

## 🚀 Quick Start Checklist

- [ ] Install GTM ID in environment variables
- [ ] Add GoogleTagManager component to layout
- [ ] Import tracking functions in components
- [ ] Test in GTM Preview Mode
- [ ] Set up GA4 in GTM
- [ ] Set up Meta Pixel in GTM
- [ ] Test all events firing
- [ ] Verify in GA4 DebugView
- [ ] Verify with Meta Pixel Helper
- [ ] Deploy and test in production

---

## 📈 Expected Results

### DataLayer Events (per user session):
1. `page_view` (Landing)
2. `test_start`
3. `question_answered` (x20)
4. `test_complete`
5. `page_view` (Result)
6. `result_view`
7. `share` (optional)
8. `screenshot_download` (optional)

### GA4 Reports:
- Real-time events
- User engagement
- Conversion tracking
- Custom reports

### Meta Pixel:
- PageView events
- Lead events (test start)
- CompleteRegistration events (test complete)
- Custom audiences for remarketing

---

**Implementation Status: COMPLETE ✅**
**Maintenance Level: LOW 🟢**
**Scalability: HIGH 📈**
