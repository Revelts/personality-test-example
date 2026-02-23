# TechShift Challenge: Never Fear Full - Landing Page

## Overview

Immersive campaign landing page created at route `/techshiftchallenge` featuring smooth scroll animations and scroll-based reveal effects.

## Page Structure

### 1. Hero Section (Full Viewport Height)
- **Background**: Cyber-grid pattern with gradient overlay and grain texture
- **Content**:
  - SanDisk logo
  - Main headline: "TECHSHIFT CHALLENGE: NEVER FEAR FULL" (gradient text)
  - Subheadline: "Rekam momen aksimu, menangkan iPhone 17"
  - Real-time countdown timer to challenge end date (configurable)
  - Primary CTA button "JOIN NOW" (scrolls to submission guide)
  - Animated scroll indicator
- **Animations**: Fade-in with upward motion on load, parallax effect on scroll

### 2. The Two Worlds (Challenge Categories)
- **Layout**: 2-column grid (responsive: stacked on mobile)
- **Categories**:
  - **STUNT**: "Buktikan nyalimu. Rekam aksi paling gila tanpa takut memori penuh."
  - **CORE**: "Simpan memori paling berharga. Tangkap momen 'Core' yang tak terlupakan."
- **Interactions**: 
  - Hover scale effect on desktop
  - Scroll-based fade + translate reveal animation
  - Color-coded borders and glows (red for STUNT, cyan for CORE)

### 3. Live Social Wall
- **Layout**: 3x3 responsive grid (2 columns on mobile)
- **Content**: Mock posts with static placeholder data
- **Features**:
  - Category badges (STUNT/CORE)
  - Like counts
  - Hover overlay with username and stats
  - Simple modal preview on click
- **Ready for Integration**: Structure prepared for Instagram API

### 4. Grand Prize Section
- **Main Prize**: iPhone 17 with floating animation effect
- **Runner-Up Prizes**: 3-column grid (stacked on mobile)
  - SanDisk Phone Drive
  - Phone SSD
  - Exclusive Merch
- **Animations**: Subtle scroll reveal with scale effect

### 5. Submission Guide (4 Steps)
- **Visual Style**: Vertical stepper with numbered circles
- **Steps**:
  1. **PILIH VIBE** - Choose category (Stunt or Core)
  2. **RECORD** - Capture video matching your category
  3. **UPLOAD** - Post to Instagram with hashtags: #TechShiftChallenge #NeverFearFull
  4. **TAG** - Mention @SanDiskID and 3 friends
- **Animations**: Progressive reveal as user scrolls
- **CTA**: "SUBMIT NOW" button at bottom

### 6. Rules & FAQ
- **Component**: Expandable accordion
- **Content**:
  - Minimum age requirement (17+)
  - Video duration (15-90 seconds)
  - Quality requirement (720p minimum)
  - Submission deadline (March 31, 2026)
  - Judging criteria (creativity 40%, theme 30%, engagement 20%, quality 10%)
  - Winner announcement timeline
  - Multiple submissions allowed
  - Free to enter
- **Animations**: Smooth expand/collapse with height transitions

### 7. Footer
- **Simple layout** with:
  - SanDisk logo
  - Campaign name
  - Links: Terms & Conditions, Privacy Policy, Contact Us
  - Copyright notice

## Components Created

### Main Page Component
- `/app/techshiftchallenge/page.tsx` - Main landing page with all sections

### Reusable Components
All located in `/app/techshiftchallenge/components/`:

1. **CountdownTimer.tsx**
   - Real-time countdown display
   - Configurable end date via props
   - Shows days, hours, minutes, seconds
   - Responsive design with card layout

2. **CategoryCard.tsx**
   - Challenge category display (STUNT/CORE)
   - Color-coded styling (red/cyan)
   - Hover scale effect
   - Decorative corner gradients

3. **PrizeCard.tsx**
   - Prize display cards
   - Icon, title, description
   - Hover animations
   - Uses existing card component styling

4. **StepItem.tsx**
   - Submission guide step display
   - Numbered circle indicator
   - Progressive reveal animation
   - Connecting lines between steps

5. **FAQAccordion.tsx**
   - Expandable FAQ items
   - Smooth height animations
   - 8 pre-configured Q&A items
   - Click to expand/collapse

6. **SocialWall.tsx**
   - 3x3 grid of mock posts
   - Modal preview on click
   - Category badges and like counts
   - Ready for Instagram API integration

## Design System Compliance

✅ **Reused existing design tokens:**
- Colors: Brand red, accent cyan, background colors, text colors
- Typography: Existing font scale (Pilat Extended)
- Spacing: 8px base scale
- Animations: Existing motion utilities
- Components: Card, button variants from globals.css

✅ **No new fonts introduced**
✅ **No global style modifications**
✅ **Follows existing Tailwind configuration**
✅ **Uses existing PixelDecoration component**
✅ **Uses existing useReducedMotion hook for accessibility**

## Technical Features

### Performance
- Lazy-loaded sections via Intersection Observer (framer-motion viewport)
- Optimized image loading (Next.js Image component ready)
- Reduced motion support for accessibility
- Responsive at all breakpoints (mobile-first approach)

### Animations
- Scroll-based parallax in hero section
- Progressive reveal for sections
- Smooth scroll navigation
- Hover effects on interactive elements
- Floating animation for main prize
- Real-time countdown animation

### Responsiveness
- Mobile: Single column, stacked layout
- Tablet: 2-column grids
- Desktop: Full multi-column layouts
- Tested breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Accessibility
- Semantic HTML headings
- ARIA labels where needed
- Reduced motion support via useReducedMotion hook
- Keyboard navigation support
- Focus visible states

## Configuration

### Countdown Timer End Date
Located in `/app/techshiftchallenge/page.tsx`:

```typescript
<CountdownTimer endDate="2026-03-31T23:59:59" />
```

Change the `endDate` prop to modify the challenge deadline.

### FAQ Items
Located in `/app/techshiftchallenge/components/FAQAccordion.tsx`:

Modify the `faqData` array to add/edit FAQ items.

### Mock Social Posts
Located in `/app/techshiftchallenge/components/SocialWall.tsx`:

The `mockPosts` array contains placeholder data. Replace with Instagram API integration when ready.

## Development

### Running Locally
```bash
npm run dev
```
Visit: http://localhost:3000/techshiftchallenge

### Building for Production
```bash
npm run build
npm start
```

## Future Enhancements

### Instagram API Integration
The SocialWall component is ready for integration:
1. Replace `mockPosts` array with API fetch
2. Update `imageUrl` to use actual Instagram image URLs
3. Add pagination/infinite scroll if needed
4. Implement real-time updates

### Video Background (Optional)
If video background is desired for hero section:
1. Add video file to `/public/videos/`
2. Replace the background div in hero section with:
```tsx
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

### Analytics Integration
Add tracking to:
- CTA button clicks
- Section scroll depth
- FAQ interactions
- Social wall modal views

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari (optimized for mobile Safari quirks)
- Graceful degradation for older browsers

## Performance Metrics
- Fully responsive
- No layout shift (CLS)
- Smooth 60fps animations
- Fast page load with Next.js optimization
