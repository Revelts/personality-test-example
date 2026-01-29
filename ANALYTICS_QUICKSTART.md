# 🚀 Analytics Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Get GTM ID (2 minutes)

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Create Account → Create Container
3. Copy GTM ID (format: `GTM-XXXXXXX`)

### Step 2: Add Environment Variable (30 seconds)

Create `.env.local` file:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GTM_ENABLED=true
```

### Step 3: Test Local (1 minute)

```bash
npm run dev
```

Open console and see:
```
📊 DataLayer Push: { event: 'page_view', ... }
```

### Step 4: Verify (1 minute)

1. Open GTM → Preview
2. Enter `http://localhost:3000`
3. See events firing in Tag Assistant

---

## 📊 Events Already Tracked

| Event | When | Data Tracked |
|-------|------|--------------|
| `page_view` | Every page load | page_name, page_type |
| `form_submit` | Name input | user_name |
| `test_start` | Start test | user_name |
| `question_answered` | Each question | question #, answer, trait |
| `test_complete` | Finish test | personality_type, scores |
| `result_view` | View result | personality_type, test_id |
| `share` | Copy link | share_method, personality |
| `screenshot_download` | Download image | personality_type |

---

## 🎯 GTM Setup (10 minutes)

### Create These Variables:

```
DLV - Page Name       → page_name
DLV - Page Type       → page_type
DLV - User Name       → user_name
DLV - Personality     → personality_type
DLV - Test ID         → test_id
```

### Create These Triggers:

```
All Pages            → Page View
Test Start           → Custom Event: test_start
Question Answered    → Custom Event: question_answered
Test Complete        → Custom Event: test_complete
Share                → Custom Event: share
```

### Add GA4 Tags:

```
GA4 Config           → Measurement ID: G-XXXXXXXXXX
GA4 - Page View      → Event: page_view
GA4 - Test Start     → Event: test_start
GA4 - Test Complete  → Event: test_complete
```

---

## 🐛 Troubleshooting

### No events in console?

```bash
# Check environment variable
echo $NEXT_PUBLIC_GTM_ID

# Enable development mode
NEXT_PUBLIC_GTM_ENABLED=true npm run dev
```

### GTM not loading?

- Check GTM ID format: `GTM-XXXXXXX`
- Check browser console for errors
- Try incognito mode

### Events not in GA4?

- Wait 24 hours for processing
- Or use DebugView (real-time)
- Add `?debug_mode=true` to URL

---

## 📚 Full Documentation

See `ANALYTICS_GUIDE.md` for complete implementation details.

---

**You're all set! 🎉**

Analytics is now tracking all user interactions automatically.
