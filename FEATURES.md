# Feature Documentation - Personalized Experience

## 🆕 New Feature: Name Input & Personalization

### Overview
User sekarang **wajib** mengisi nama mereka sebelum memulai tes. Nama ini akan muncul di hasil tes untuk membuat experience lebih personal dan engaging.

---

## 🎯 User Flow

### 1. Landing Page (`/`)

**Before:**
```
[Landing Page]
  ↓
[Tombol: Mulai Tes Sekarang]
  ↓
[Test Page]
```

**After:**
```
[Landing Page]
  ↓
[Input: Siapa nama kamu? *]
  ↓
[Tombol: Mulai Tes Sekarang] (disabled jika nama kosong)
  ↓
[Test Page]
```

### 2. Input Validation

**Requirements:**
- ✅ Nama wajib diisi (tidak boleh kosong)
- ✅ Minimal 2 karakter
- ✅ Maksimal 50 karakter
- ✅ Tombol disabled sampai nama valid

**Error Messages:**
- Nama kosong: "Nama wajib diisi ya! 😊"
- Nama terlalu pendek: "Nama terlalu pendek. Minimal 2 karakter ya!"

**UX Features:**
- Real-time validation
- Error message dengan animasi
- Enter key support (tekan Enter untuk mulai)
- Auto-clear error saat user mengetik
- Helper text: "Nama kamu akan muncul di hasil tes"

### 3. Name Storage

**localStorage Key:** `test_taker_name`

```javascript
// Saat user klik "Mulai Tes Sekarang"
localStorage.setItem('test_taker_name', trimmedName);

// Di Test Page
const name = localStorage.getItem('test_taker_name');
if (!name) {
  router.push('/'); // Redirect ke home jika nama tidak ada
}
```

### 4. Result Page Integration

**Where Name Appears:**

1. **Top of Result Page:**
```
Halo, [Nama]! 👋
Hasil Tes Kepribadian Kamu
```

2. **Inside Result Card:**
```
[Emoji Personality]
[Nama], kamu adalah...
Si Mastermind
"Mikir Dalam, Action Smart"
```

---

## 💾 Data Structure

### StoredResult Interface (Updated)

```typescript
export interface StoredResult {
  personality: PersonalityResult;
  scores: {
    logical: number;
    creative: number;
    empathetic: number;
    leader: number;
    adventurer: number;
  };
  userName?: string;  // 🆕 NEW!
  timestamp: number;
}
```

### localStorage Data

**Key:** `personality_result_${id}`

**Value:**
```json
{
  "personality": {
    "id": "the-mastermind",
    "title": "Si Mastermind",
    "description": "...",
    "traits": [...],
    "strengths": [...],
    "tagline": "...",
    "emoji": "🧠",
    "color": "..."
  },
  "scores": {
    "logical": 12,
    "creative": 5,
    "empathetic": 2,
    "leader": 1,
    "adventurer": 0
  },
  "userName": "Budi",  // 🆕 NEW!
  "timestamp": 1705747200000
}
```

---

## 🎨 UI Components

### Landing Page Input Field

**Design Specs:**
```css
- Width: Full width (max-w-md)
- Height: 48px (py-3)
- Border: 2px solid
- Border Color: 
  - Normal: gray-300 / gray-600 (dark)
  - Focus: indigo-500
  - Error: red-500
- Border Radius: 8px (rounded-lg)
- Font Size: 16px (default)
- Placeholder: "Masukkan nama kamu..."
- Label: "Siapa nama kamu?" with red asterisk
```

**States:**
1. **Default:** Gray border, placeholder visible
2. **Focus:** Indigo border with ring effect
3. **Error:** Red border, error message below
4. **Filled:** User input visible

**Button States:**
1. **Disabled (no name):**
   - Background: Gray (300/700)
   - Text: Gray (500/400)
   - Cursor: not-allowed
   - No hover effect

2. **Enabled (name valid):**
   - Background: Gradient (indigo-500 to purple-600)
   - Text: White
   - Cursor: pointer
   - Hover: Scale 1.05 + enhanced shadow

### Result Page Personalization

**Greeting Section:**
```jsx
<p className="text-xl text-indigo-600 font-semibold">
  Halo, {userName}! 👋
</p>
```

**Result Card Header:**
```jsx
<p className="text-lg opacity-90">
  {userName}, kamu adalah...
</p>
<h1 className="text-5xl font-bold">
  Si Mastermind
</h1>
```

---

## 🔒 Security & Privacy

### Data Storage
- ✅ **Local only:** Semua data disimpan di browser user
- ✅ **No server:** Tidak ada data yang dikirim ke server
- ✅ **User control:** User bisa clear localStorage kapan saja
- ✅ **No tracking:** Tidak ada analytics pada nama user

### Privacy Features
- Nama hanya disimpan locally
- Nama tidak included dalam URL sharing (optional)
- User bisa refresh untuk clear nama
- No personal data collection

---

## 🧪 Testing Scenarios

### Happy Path
1. User buka landing page
2. Input nama "Budi"
3. Klik "Mulai Tes Sekarang"
4. Complete 20 questions
5. Hasil muncul dengan "Halo, Budi! 👋"

### Edge Cases

**Test Case 1: Empty Name**
```
Input: ""
Expected: Button disabled
Action: Click button
Result: Nothing happens (button disabled)
```

**Test Case 2: Too Short**
```
Input: "A"
Expected: Error message
Action: Click button
Result: Error: "Nama terlalu pendek..."
```

**Test Case 3: Whitespace Only**
```
Input: "   "
Expected: Treated as empty
Result: Error: "Nama wajib diisi ya!"
```

**Test Case 4: Maximum Length**
```
Input: 50 characters
Expected: Accepted
Input: 51 characters
Expected: Blocked at input level (maxLength=50)
```

**Test Case 5: Special Characters**
```
Input: "Budi 123 ❤️"
Expected: Accepted (all characters allowed)
```

**Test Case 6: Direct Test Page Access**
```
Action: Navigate to /test directly
Condition: No name in localStorage
Expected: Auto-redirect to /
```

---

## 📱 Responsive Design

### Mobile (< 768px)
- Input full width
- Font size: 16px (prevent zoom on iOS)
- Touch-friendly button size
- Error message clearly visible

### Desktop (≥ 768px)
- Input max-width: 28rem (448px)
- Larger button with hover effects
- Smooth animations

---

## ♿ Accessibility

### Keyboard Navigation
- ✅ Tab to focus input
- ✅ Type name
- ✅ Tab to button
- ✅ Enter to submit (from input OR button)
- ✅ Focus indicators visible

### Screen Readers
- ✅ Label properly associated with input
- ✅ Required field indicated with asterisk
- ✅ Error messages announced
- ✅ Helper text accessible

### ARIA Attributes
```html
<label htmlFor="name">Siapa nama kamu? *</label>
<input
  id="name"
  type="text"
  aria-required="true"
  aria-invalid={error ? "true" : "false"}
  aria-describedby="name-helper name-error"
/>
```

---

## 🎯 Benefits

### User Engagement
- ✅ More personal experience
- ✅ Higher emotional connection
- ✅ Increased shareability
- ✅ Better retention

### UX Quality
- ✅ Clear call-to-action
- ✅ Validation prevents errors
- ✅ Smooth user flow
- ✅ Professional feel

### Technical Quality
- ✅ Clean implementation
- ✅ Type-safe
- ✅ No breaking changes
- ✅ Backward compatible (userName optional)

---

## 🚀 Future Enhancements

### Potential Improvements
- [ ] Social share includes name in image
- [ ] Nickname support (display name vs full name)
- [ ] Name stored in URL for easier sharing
- [ ] "Remember me" option
- [ ] Custom greeting based on time of day
- [ ] Name animation on result page
- [ ] Compare results with friends by name
- [ ] Leaderboard (optional feature)

---

## 🐛 Known Limitations

1. **localStorage only:** Clearing browser data clears name
2. **No sync:** Name doesn't sync across devices
3. **Single user:** One name per browser
4. **No edit:** Can't edit name after test starts (must restart)

### Workarounds
- To change name: Clear localStorage or use incognito
- To test multiple names: Use different browsers
- For permanent storage: Future enhancement with backend

---

**Last Updated:** January 2026
**Feature Version:** 2.1
**Status:** ✅ Implemented & Tested
