# Instagram Integration Guide - TechShift Challenge

## Overview
Galeri Aksi section kini menggunakan `InstagramSocialWall` component yang siap untuk menampilkan post Instagram dengan hashtag **#techshiftchallenge**.

## File Location
```
app/techshiftchallenge/components/InstagramSocialWall.tsx
```

---

## Setup Options

### ⭐ OPTION 1: SnapWidget (RECOMMENDED - Paling Mudah & Gratis)

**Kenapa SnapWidget?**
- ✅ Gratis untuk basic plan
- ✅ Tidak perlu Instagram API atau Facebook App
- ✅ Setup 5 menit
- ✅ Auto-update real-time
- ✅ Responsive design

**Setup Steps:**

1. **Buat Account SnapWidget**
   - Kunjungi: https://snapwidget.com/
   - Sign up gratis (email + password)

2. **Create Widget**
   - Click "Create New Widget"
   - Pilih **"Hashtag Widget"**

3. **Configure Widget**
   ```
   Hashtag: techshiftchallenge (tanpa #)
   Layout: Grid
   Columns: 3 (desktop), 2 (mobile) - auto responsive
   Number of Posts: 9 atau 12
   ```

4. **Customize Style (Optional)**
   - Border radius: 8px (sesuai design system)
   - Spacing: 16px
   - Show username: Yes
   - Show date: Optional
   - Hover effect: Enable

5. **Copy Embed Code**
   - Click "Get Widget"
   - Copy semua code yang diberikan
   - Biasanya format:
   ```html
   <script src="https://snapwidget.com/js/snapwidget.js"></script>
   <iframe src="https://snapwidget.com/embed/XXXXX" 
           class="snapwidget-widget" 
           allowtransparency="true" 
           frameborder="0" 
           scrolling="no" 
           style="border:none; overflow:hidden; width:100%;">
   </iframe>
   ```

6. **Paste di Code**
   - Buka: `app/techshiftchallenge/components/InstagramSocialWall.tsx`
   - Cari section: `OPTION 1: SNAPWIDGET EMBED`
   - Replace placeholder dengan code dari SnapWidget
   - Hapus div fallback/placeholder

**Example Implementation:**

```tsx
// In InstagramSocialWall.tsx, replace the placeholder section:

<div className="instagram-feed-widget" style={{ minHeight: '600px' }}>
  <script src="https://snapwidget.com/js/snapwidget.js"></script>
  <iframe 
    src="https://snapwidget.com/embed/1234567" 
    className="snapwidget-widget" 
    allowTransparency={true}
    style={{ border: 'none', overflow: 'hidden', width: '100%' }}
  />
</div>
```

---

### OPTION 2: EmbedSocial (Alternative - Lebih Powerful)

**Kenapa EmbedSocial?**
- ✅ Advanced moderation tools
- ✅ Multiple social platforms
- ✅ Analytics dashboard
- ❌ Free plan terbatas (paid untuk full features)

**Setup Steps:**

1. **Create Account**
   - Visit: https://embedsocial.com/
   - Sign up (14-day free trial)

2. **Connect Instagram**
   - Dashboard → Sources → Add Instagram
   - Login dengan Instagram Business Account
   - Authorize access

3. **Create Feed**
   - Create New Feed → Instagram Hashtag Feed
   - Enter: `#techshiftchallenge`
   - Customize design (colors, layout, spacing)

4. **Generate Code**
   - Click "Embed" 
   - Copy embed code

5. **Implementation**
   ```tsx
   // In InstagramSocialWall.tsx, uncomment OPTION 2 section:
   
   <div className="embedsocial-hashtag" data-ref="YOUR_REF_ID"></div>
   <Script 
     src="https://embedsocial.com/cdn/ht.js" 
     strategy="lazyOnload"
   />
   ```

---

### OPTION 3: Curator.io (Enterprise Option)

**Kenapa Curator?**
- ✅ Best moderation features
- ✅ Multiple source aggregation
- ✅ Rights management
- ❌ Paid only (starts $19/month)

**Setup Steps:**

1. Visit: https://curator.io/
2. Create account
3. Add Source → Instagram → Hashtag: `techshiftchallenge`
4. Design feed layout
5. Get embed code
6. Paste in OPTION 3 section

---

## Styling & Customization

### Match SanDisk Design System

Tambahkan custom CSS untuk match dengan design:

```tsx
// In InstagramSocialWall.tsx, add this style tag:

<style jsx global>{`
  .snapwidget-widget,
  .embedsocial-hashtag,
  #curator-feed-default-feed-layout {
    /* Card styling to match design system */
    background: transparent !important;
  }
  
  .snapwidget-widget iframe,
  .embedsocial-hashtag .es-post-item,
  #curator-feed-default-feed-layout .crt-post {
    border-radius: 8px !important;
    background: linear-gradient(135deg, #18181B 0%, #111113 100%) !important;
    border: 1px solid #2A2A2E !important;
    transition: all 0.3s ease !important;
  }
  
  .snapwidget-widget iframe:hover,
  .embedsocial-hashtag .es-post-item:hover,
  #curator-feed-default-feed-layout .crt-post:hover {
    border-color: rgba(225, 6, 0, 0.5) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 16px rgba(225, 6, 0, 0.15) !important;
  }
`}</style>
```

---

## Alternative: Custom Instagram API (Advanced)

Jika Anda ingin kontrol penuh, gunakan **Instagram Graph API**:

### Requirements:
- Facebook Developer Account
- Instagram Business Account
- Facebook App dengan Instagram Basic Display API
- Access Token

### Implementation Steps:

1. **Create Facebook App**
   - https://developers.facebook.com/apps/
   - Create App → Type: Business
   - Add Instagram Graph API

2. **Get Access Token**
   ```bash
   # User Token (expires in 60 days)
   curl -X GET "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=YOUR_TOKEN"
   ```

3. **Create API Route in Next.js**
   ```typescript
   // app/api/instagram-feed/route.ts
   
   export async function GET() {
     const token = process.env.INSTAGRAM_ACCESS_TOKEN;
     const response = await fetch(
       `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${token}`
     );
     const data = await response.json();
     
     // Filter by hashtag
     const filtered = data.data.filter((post: any) => 
       post.caption?.includes('#techshiftchallenge')
     );
     
     return Response.json(filtered);
   }
   ```

4. **Update Component**
   ```tsx
   // Fetch posts from your API
   const [posts, setPosts] = useState([]);
   
   useEffect(() => {
     fetch('/api/instagram-feed')
       .then(res => res.json())
       .then(data => setPosts(data));
   }, []);
   ```

---

## Testing

1. **Development**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000/techshiftchallenge

2. **Check Widget Loading**
   - Open browser DevTools (F12)
   - Check Console for errors
   - Check Network tab for widget script loading

3. **Test Responsive**
   - Mobile: 2 columns
   - Tablet: 2-3 columns
   - Desktop: 3 columns

---

## Troubleshooting

### Widget Tidak Muncul
- ✅ Cek apakah embed code sudah di-paste dengan benar
- ✅ Cek browser console untuk error
- ✅ Pastikan hashtag ada posts (test dengan post dummy)

### Layout Rusak
- ✅ Tambahkan `min-height` pada container
- ✅ Pastikan iframe/widget punya `width: 100%`

### CORS Error (untuk custom API)
- ✅ Setup proper headers di API route
- ✅ Gunakan server-side fetching di Next.js

---

## Recommendation

Untuk kemudahan dan hasil terbaik, **gunakan SnapWidget (Option 1)**:
- ✅ Setup tercepat (5 menit)
- ✅ Gratis
- ✅ Reliable
- ✅ Auto-update
- ✅ Tidak perlu maintain API tokens

---

## Support

Untuk bantuan lebih lanjut:
- SnapWidget docs: https://snapwidget.com/support
- EmbedSocial docs: https://help.embedsocial.com/
- Instagram API: https://developers.facebook.com/docs/instagram-api
