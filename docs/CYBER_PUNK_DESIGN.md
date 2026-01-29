# Cyber-Punk Design System

## Overview

Complete redesign dengan **Space Grotesk** (Neo-Grotesk typography) dan **Semi Cyber-Punk aesthetic** untuk SanDisk Brand Campaign Personality Test.

---

## 🎨 Design Philosophy

### **Neo-Grotesk + Cyber-Tech**
- **Typography**: Space Grotesk - Modern, geometric, sharp
- **Visual Language**: Semi cyber-punk, industrial tech
- **Color System**: Dark backgrounds + Neon red accents
- **Shapes**: Sharp corners, geometric precision, angled cuts
- **Effects**: Glow, scan lines, neon accents

### **Key Principles**
1. **High Contrast** - Deep blacks, bright whites
2. **Sharp Edges** - Minimal border radius (2-8px)
3. **Neon Accents** - Red glow for interactions
4. **Geometric Precision** - Clean lines, structured layouts
5. **Tech-Forward** - Futuristic but functional

---

## 📝 Typography

### **Space Grotesk Font**

```typescript
font-family: 'Space Grotesk'
weights: 300, 400, 500, 600, 700
letter-spacing: -0.01em (tighter, more tech)
font-features: 'ss01', 'ss02' (stylistic sets)
```

### **Type Scale**

| Class | Size | Line Height | Letter Spacing | Weight | Use Case |
|-------|------|-------------|----------------|--------|----------|
| `text-display` | 3.5rem | 1.05 | -0.03em | 700 | Hero headlines |
| `text-h1` | 2.5rem | 1.15 | -0.02em | 700 | Page titles |
| `text-h2` | 2rem | 1.25 | -0.015em | 600 | Section headers |
| `text-h3` | 1.5rem | 1.35 | -0.01em | 600 | Subsections |
| `text-body-lg` | 1.125rem | 1.55 | -0.005em | 400 | Large body |
| `text-body` | 1rem | 1.6 | 0 | 400 | Default text |
| `text-body-sm` | 0.875rem | 1.5 | 0.01em | 400 | Small text |
| `text-caption` | 0.75rem | 1.4 | 0.02em | 500 | Labels, captions |

**Note:** Negative letter-spacing for display sizes creates tighter, more modern look.

---

## 🎨 Color System

### **Background Colors**

```css
--bg-primary: #0A0A0C      /* Deep black base */
--bg-secondary: #111113    /* Dark charcoal */
--bg-surface: #18181B      /* Cards, panels */
--bg-elevated: #1F1F23     /* Elevated elements */
```

### **Brand Colors (SanDisk Red + Neon)**

```css
--brand-red: #E10600       /* Primary red */
--brand-red-light: #FF1F0F /* Hover state */
--brand-red-dark: #B80500  /* Active state */
--brand-red-neon: #FF0F0F  /* Neon accent */
```

### **Accent Colors (Cyber-Punk)**

```css
--accent-cyan: #00F0FF     /* Neon cyan */
--accent-purple: #B026FF   /* Neon purple */
--accent-yellow: #FFE500   /* Neon yellow */
```

### **Text Colors**

```css
--text-primary: #F5F5F5    /* Bright white */
--text-secondary: #9E9E9E  /* Muted gray */
--text-tertiary: #5A5A5A   /* Disabled */
```

### **Border Colors**

```css
--border-default: #2A2A2E
--border-subtle: #1A1A1E
--border-glow: rgba(225, 6, 0, 0.3)
```

---

## 🔲 Components

### **1. Buttons (Cyber-Tech Style)**

#### **Primary Button**
```css
- Background: Linear gradient (red)
- Border radius: 2px (sharp)
- Clip-path: Angled corners (cyber aesthetic)
- Shadow: Multi-layer glow
- Hover: Neon glow + lift
- Active: Darker + press
- Before: Shimmer effect on hover
```

**Visual:**
```
┌─────────────────┐
│  [BUTTON TEXT]  │  ← Angled corners (8px cut)
└─────────────────┘
     ↑ Red glow on hover
```

#### **Secondary Button**
```css
- Background: Transparent
- Border: 2px solid border-default
- Hover: Red border + subtle glow
- Clip-path: Same angled corners
```

#### **Ghost Button**
```css
- Background: Transparent
- Hover: Subtle bg + border appear
```

### **2. Cards**

```css
- Background: Gradient (surface → secondary)
- Border: 1px solid
- Border radius: 4px
- Shadow: Elevation + inner glow
- Hover: Red border + lift + top line glow
```

**Effects:**
- `::before` - Top gradient line (appears on hover)
- Transform on hover (-2px lift)
- Smooth transitions (0.3s)

### **3. Input Fields**

```css
- Background: Semi-transparent with backdrop-blur
- Border: 2px solid
- Border radius: 2px (sharp)
- Focus: Red border + multi-layer glow
- Font: Medium weight, tight spacing
```

---

## ✨ Effects & Animations

### **1. Glow Effects**

```css
/* Red Glow (primary) */
box-shadow:
  0 0 0 1px rgba(225, 6, 0, 0.3),      /* Inner ring */
  0 0 20px rgba(225, 6, 0, 0.4),       /* Primary glow */
  0 0 40px rgba(225, 6, 0, 0.2);       /* Outer glow */

/* Glow Pulse (animated) */
@keyframes glowPulse {
  0%, 100%: shadow 10px
  50%: shadow 20px + 40px
}
```

### **2. Scan Line Effect**

```css
@keyframes scanLine {
  0%: translateY(-100%)
  100%: translateY(100%)
}

/* Usage */
.scan-line-overlay::after {
  - 2px height gradient line
  - Animated top to bottom
  - Infinite loop (3s)
  - Subtle opacity (0.5)
}
```

### **3. Glitch Effect**

```css
@keyframes glitch {
  0%, 100%: translate(0)
  20%: translate(-2px, 2px)
  40%: translate(-2px, -2px)
  60%: translate(2px, 2px)
  80%: translate(2px, -2px)
}
```

### **4. Neon Flicker**

```css
@keyframes neonFlicker {
  0%, 100%: opacity 1
  50%: opacity 0.8
}
```

### **5. Shimmer (Button Hover)**

```css
.btn::before {
  - 45deg gradient (transparent → white 10% → transparent)
  - Slides left to right on hover
  - Duration: 0.6s
}
```

---

## 🎯 Usage Examples

### **Button Classes**

```html
<!-- Primary CTA -->
<button class="btn btn-primary">
  START TEST
</button>

<!-- Secondary action -->
<button class="btn btn-secondary">
  Learn More
</button>

<!-- Ghost/tertiary -->
<button class="btn btn-ghost">
  Skip
</button>
```

### **Card with Hover Effect**

```html
<div class="card card-interactive">
  <h3>Card Title</h3>
  <p>Content here...</p>
</div>
```

### **Input Field**

```html
<input 
  type="text" 
  class="input" 
  placeholder="Enter your name"
/>
```

### **Scan Line Overlay**

```html
<div class="scan-line-overlay">
  <!-- Your content -->
</div>
```

### **Cyber Grid Background**

```html
<div class="cyber-grid">
  <!-- Content with grid overlay -->
</div>
```

---

## 🔧 Tailwind Classes

### **New Utility Classes**

```css
/* Backgrounds */
.bg-bg-primary
.bg-bg-secondary
.bg-bg-surface
.bg-bg-elevated

/* Text */
.text-text-primary
.text-text-secondary
.text-text-tertiary

/* Borders */
.border-border
.border-border-subtle
.border-brand-red

/* Shadows/Glow */
.shadow-glow-red
.shadow-glow-red-sm
.shadow-elevation-md

/* Animations */
.animate-glow-pulse
.animate-scan-line
.animate-glitch
.animate-neon-flicker
```

---

## 📐 Spacing & Layout

### **Border Radius**
```
none: 0
sm: 2px    ← Sharp, minimal
md: 6px
lg: 8px
xl: 12px
```

**Philosophy:** Sharp corners for cyber-tech aesthetic, not soft/rounded.

### **Shadows**
```
elevation-sm: 0 2px 8px rgba(0,0,0,0.5)
elevation-md: 0 4px 16px rgba(0,0,0,0.6)
elevation-lg: 0 8px 32px rgba(0,0,0,0.7)
```

**Philosophy:** Deeper shadows for higher contrast.

---

## 🚀 Implementation Checklist

✅ **Font:** Space Grotesk installed (Google Fonts)  
✅ **Colors:** Updated to darker, higher contrast  
✅ **Typography:** Tighter letter-spacing, optimized line-heights  
✅ **Buttons:** Angled corners, gradient bg, multi-layer glow  
✅ **Cards:** Gradient bg, hover effects, top line accent  
✅ **Inputs:** Backdrop blur, sharp corners, focus glow  
✅ **Animations:** Glow pulse, scan line, glitch, shimmer  
✅ **Tailwind Config:** All tokens updated  
✅ **Global CSS:** Cyber-punk component styles  

---

## 🎨 Before vs After

### **Typography**
```
Before: Inter (standard, neutral)
After:  Space Grotesk (modern, geometric, tech)
```

### **Button Corners**
```
Before: rounded-lg (16px)
After:  clip-path angled (8px cuts)
```

### **Color Darkness**
```
Before: #0E0E10 (bg-primary)
After:  #0A0A0C (deeper black)
```

### **Border Radius**
```
Before: 8-16px (soft rounded)
After:  2-8px (sharp cyber)
```

### **Glow Effects**
```
Before: Single shadow layer
After:  Multi-layer (ring + primary + outer)
```

---

## 📱 Responsive Behavior

All components maintain cyber-punk aesthetic across devices:
- **Mobile:** Smaller spacing, adjusted font sizes
- **Tablet:** Medium spacing
- **Desktop:** Full effects, larger text

Typography scales using `sm:` and `md:` breakpoints while maintaining character.

---

## 🎯 Key Differentiators

What makes this **Semi Cyber-Punk** (not full cyber-punk):

✅ **Included:**
- Neo-grotesk typography
- Sharp corners & geometric shapes
- Neon glow accents (red)
- Scan line effects
- High contrast
- Tech-forward aesthetics

❌ **Excluded (too much):**
- Glitch effects on all elements
- Multiple neon colors everywhere
- Distressed/broken text
- Matrix-style effects
- Overuse of grid overlays

**Balance:** Professional tech aesthetic with futuristic touches, not overwhelming.

---

## 🔍 Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ `clip-path` for angled corners
- ✅ `backdrop-filter` for input blur
- ✅ `font-feature-settings` for typography
- ✅ CSS animations & transitions
- ✅ Multi-layer box-shadow

**Fallbacks:** Basic borders/corners if `clip-path` unsupported.

---

## 📝 Notes

- **Performance:** All effects use CSS (no JS overhead)
- **Accessibility:** Maintained focus states, contrast ratios
- **Reduced Motion:** Respects `prefers-reduced-motion`
- **Mobile-First:** Optimized for touch interactions

---

## 🎉 Summary

Complete transformation from standard industrial design to **Semi Cyber-Punk Tech Aesthetic** with:
- Modern Neo-Grotesk typography (Space Grotesk)
- Sharp geometric shapes & angled corners
- Neon red glow effects
- High-contrast dark theme
- Futuristic but functional

**Result:** Fast, solid, reliable tech aesthetic with personality! 🚀
