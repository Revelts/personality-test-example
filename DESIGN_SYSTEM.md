# Futuristic Q&A Design System

## 🎯 Design Philosophy

**Pure Question & Answer Experience**
- No progress indicators
- No step counters
- No distractions
- Dialog-like, not form-like
- One question fills the screen
- Complete focus on answering

---

## 🎨 Visual Language

### Color Palette

```css
/* Background */
--slate-950: #020617  /* Primary dark */
--slate-900: #0f172a  /* Secondary dark */

/* Accents */
--cyan-500: #06b6d4   /* Primary accent */
--cyan-400: #22d3ee   /* Hover state */
--violet-900: #4c1d95 /* Subtle accent */

/* Text */
--white: #ffffff      /* Question text */
--slate-100: #f1f5f9  /* Answer text */
--slate-700: #334155  /* Borders */
```

### Typography

**Font Family**: System sans-serif (Inter fallback)

```css
/* Question */
font-size: 3xl-5xl (1.875rem - 3rem)
font-weight: bold (700)
line-height: tight (1.25)
letter-spacing: tight (-0.025em)

/* Answer Options */
font-size: base-lg (1rem - 1.125rem)
font-weight: medium (500)
line-height: relaxed (1.625)
```

### Spacing & Layout

```css
/* Container */
padding: 1rem (mobile), 3rem (desktop)
max-width: 56rem (896px)

/* Question */
margin-bottom: 3rem-4rem

/* Answer gaps */
gap: 1rem between options
```

### Shapes & Borders

```css
/* Rounded corners */
border-radius: 1rem (16px)

/* Borders */
border-width: 1px
border-color: slate-700/50 (50% opacity)
hover: cyan-500/50
```

### Shadows & Effects

```css
/* Glow on hover */
box-shadow: 0 0 20px rgba(6, 182, 212, 0.3)

/* Backdrop blur */
backdrop-filter: blur(12px)

/* Subtle gradients */
background: gradient from slate-800/60 to slate-900/60
```

---

## 🎬 Animation Principles

### Core Rules
1. **Subtle Only** - No flashy animations
2. **Purposeful** - Feedback and transitions only
3. **Fast** - 200-300ms max
4. **Smooth** - Ease-out curves
5. **Respectful** - Obey prefers-reduced-motion

### Animation Timings

```javascript
// Question enter/exit
duration: 300ms
easing: cubic-bezier(0.4, 0, 0.2, 1)

// Answer stagger
delay: 80ms per item

// Hover scale
scale: 1.02
duration: 200ms

// Click feedback
scale: 0.98
duration: 100ms
```

### Framer Motion Variants

```typescript
// Question entrance
{
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

// Answer options
{
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
}
```

---

## 📐 Component Structure

### FuturisticQuestion
```
<div> (fullscreen container)
  ├─ <h1> Question Text
  └─ <div> Answer Options Container
       ├─ <button> Answer Option 1
       ├─ <button> Answer Option 2
       ├─ <button> Answer Option 3
       └─ <button> Answer Option 4
```

### Answer Button Anatomy
```
<button> (relative container)
  ├─ <div> Glow overlay (absolute)
  ├─ <span> Answer text (relative)
  └─ <div> Indicator dot (absolute right)
```

---

## 🎭 Interaction States

### Default State
```css
background: slate-800/60 to slate-900/60
border: slate-700/50
opacity: 100%
```

### Hover State
```css
scale: 1.02
border: cyan-500/50
box-shadow: 0 0 20px cyan-500/30
glow overlay: opacity 100%
```

### Active/Click State
```css
scale: 0.98
(momentary, returns to hover)
```

### Disabled State
```css
opacity: 50%
cursor: not-allowed
(during transition to next question)
```

### Focus State
```css
outline: none
ring: 2px cyan-500/50
```

---

## 📱 Responsive Behavior

### Mobile (<768px)
```css
padding: 1rem
question: text-3xl
answer: text-base, py-5
```

### Tablet (768px-1024px)
```css
padding: 2rem
question: text-4xl
answer: text-lg, py-6
```

### Desktop (>1024px)
```css
padding: 3rem
question: text-5xl
answer: text-lg, py-6
```

---

## ♿ Accessibility

### Keyboard Navigation
- ✅ Tab through answer options
- ✅ Enter/Space to select
- ✅ Visible focus rings

### Screen Readers
- ✅ Semantic HTML (h1, button)
- ✅ Descriptive text content
- ✅ Disabled state announced

### Motion Preferences
```typescript
const reducedMotion = useReducedMotion();

// If true:
// - No scale animations
// - No y-axis movement
// - Instant transitions
```

---

## 🚀 Performance

### Optimization Techniques
1. **GPU Acceleration**: transform, opacity only
2. **No Layout Shift**: fixed sizes
3. **Lazy Loading**: AnimatePresence mode="wait"
4. **Minimal Reflows**: Framer Motion optimizations

### Bundle Impact
- Framer Motion: ~30KB (already included)
- New component: ~2KB
- Total increase: ~2KB

---

## 🎯 UX Flow

### Question Display
1. Page loads with fade + slide up
2. Question appears first (400ms)
3. Answers stagger in (80ms delay each)
4. User reads and considers

### Answer Selection
1. User hovers → glow + scale feedback
2. User clicks → scale down (click feedback)
3. Lock all inputs (prevent double-click)
4. Wait 300ms (animation complete)
5. Fade out current question
6. Next question fades in

### Completion
1. Last answer selected
2. Same exit animation
3. Redirect to result page
4. No "completion" state shown

---

## 🔧 Technical Details

### Key Dependencies
- Next.js 14+
- Framer Motion
- Tailwind CSS
- TypeScript

### Files Structure
```
components/
  └─ FuturisticQuestion.tsx  (Main Q&A component)

app/
  └─ test/
      └─ page.tsx             (Test flow logic)

hooks/
  └─ useReducedMotion.ts      (Accessibility hook)
```

### Props Interface
```typescript
interface FuturisticQuestionProps {
  question: Question;
  onSelectAnswer: (answerId: string) => void;
  isTransitioning?: boolean;
}
```

---

## 🎨 Background Effects

### Gradient Layers
1. **Base**: Dark slate gradient (950 → 900 → 950)
2. **Radial Top-Right**: Cyan accent (900/10 opacity)
3. **Radial Bottom-Left**: Violet accent (900/10 opacity)
4. **Noise Texture**: SVG noise (1.5% opacity)

### CSS Implementation
```css
/* Radial gradient */
background: radial-gradient(
  ellipse at top right,
  rgb(22 78 99 / 0.1) 0%,
  transparent 50%
);

/* Noise */
background-image: url('data:image/svg+xml...');
opacity: 0.015;
```

---

## ✨ Unique Features

1. **Fullscreen Immersion**: Question takes entire viewport
2. **No Clutter**: Zero UI elements except Q&A
3. **Subtle Glow**: Hover feedback feels tactile
4. **Smooth Transitions**: Never jarring
5. **Focus-First**: No distractions from answering

---

## 📊 Before vs After

| Feature | Old Design | New Design |
|---------|-----------|------------|
| Progress Bar | ✅ Visible | ❌ Removed |
| Step Counter | ✅ Shown | ❌ Removed |
| Break Sessions | ✅ Included | ❌ Removed |
| Background | Light gradient | Dark futuristic |
| Animations | Multiple types | Subtle feedback only |
| Layout | Card-based | Fullscreen immersive |
| Focus | Multi-element | Pure Q&A |

---

**Design Status**: ✅ Complete  
**Last Updated**: 2026-01-29  
**Purpose**: Pure, distraction-free Q&A experience  
**Style**: Futuristic, clean, focused
