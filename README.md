# Interactive Personality Test 🎯

A modern, interactive personality test website built with Next.js 14, featuring smooth animations, micro-interactions, and shareable results.

## ✨ Features

- **20 Engaging Questions**: Multiple-choice questions with 4 options each
- **Micro-Interactions**: Fun jokes and quotes after every answer to keep users engaged
- **Real-time Progress Tracking**: Visual progress bar showing completion status
- **8 Personality Types**: Comprehensive personality analysis with traits and strengths
- **Shareable Results**: Generate unique shareable links with encoded data
- **Screenshot Feature**: Save results as images optimized for social media
- **Responsive Design**: Perfect experience on both mobile and desktop
- **Smooth Animations**: Built with Framer Motion for fluid transitions
- **Modern UI/UX**: Clean, playful design with excellent user experience
- **100% Client-Side**: No backend needed - pure static site with localStorage

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Screenshot**: html-to-image
- **Deployment**: Vercel-ready (serverless)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interactive-web-test
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
interactive-web-test/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Landing page
│   ├── test/page.tsx           # Quiz page
│   ├── result/[id]/page.tsx    # Result page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/                  # Reusable React components
│   ├── ProgressBar.tsx         # Progress indicator
│   ├── QuestionCard.tsx        # Question display
│   ├── MicroInteraction.tsx    # Joke/quote overlay
│   ├── ResultCard.tsx          # Result display
│   ├── ShareButton.tsx         # Share functionality
│   └── ScreenshotButton.tsx    # Screenshot capture
├── lib/                         # Business logic and data
│   ├── questions.ts            # 20 questions with scoring
│   ├── jokes.ts                # Context-aware jokes/quotes
│   ├── results.ts              # Personality types & calculation
│   └── storage.ts              # Client-side storage utilities
├── public/                      # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Personality Types

The test evaluates four core dimensions:
- **Analytical**: Logical thinking and data-driven approach
- **Creative**: Innovation and artistic expression
- **Social**: Empathy and interpersonal skills
- **Practical**: Execution and results-oriented

Based on your answers, you'll be matched to one of 8 personality types:
1. **The Analyst** 🧠 - Logic and systematic thinking
2. **The Creator** 🎨 - Innovation and creativity
3. **The Connector** 🤝 - Empathy and relationships
4. **The Executor** ⚡ - Action and results
5. **The Visionary** 🚀 - Strategic innovation
6. **The Harmonizer** 🌟 - Creative empathy
7. **The Architect** 🏗️ - Systematic practicality
8. **The Catalyst** 🔥 - Practical leadership

## 🔧 Configuration

### Customizing Questions

Edit `lib/questions.ts` to modify questions, answers, or scoring logic:

```typescript
{
  id: 1,
  text: "Your question here?",
  answers: [
    {
      id: "1a",
      text: "Answer option",
      scores: { analytical: 3, creative: 0, social: 0, practical: 1 }
    },
    // ... more answers
  ]
}
```

### Customizing Jokes

Edit `lib/jokes.ts` to add context-aware humor:

```typescript
"1a": { 
  joke: "Your funny comment here!",
  emoji: "🎉"
}
```

### Customizing Personality Types

Edit `lib/results.ts` to modify personality types and calculation logic.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click!

The app is **100% static** - no server needed! It can be deployed anywhere:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- Any static hosting

### Environment Variables

**None required!** The app is fully client-side with no backend dependencies.

## 📱 Features in Detail

### Micro-Interactions
After each question, users see a contextual joke or quote based on their answer. This creates engagement and gives a mental break between questions.

### Progress Tracking
A visual progress bar at the top shows completion percentage and current question number, providing clear feedback on test progress.

### Shareable Results
Each result gets a unique ID and shareable link with URL-encoded data. Anyone with the link can view the result without taking the test. Results are stored client-side in localStorage and encoded in the share URL for maximum portability.

### Screenshot Feature
Users can download their results as a PNG image, optimized for sharing on social media platforms like Instagram Stories and WhatsApp.

### Responsive Design
Mobile-first design ensures perfect experience on all devices, from phones to desktop computers.

## 🎯 Performance

- **Fast Load Time**: Optimized bundle size
- **Smooth Animations**: 60 FPS animations with Framer Motion
- **Accessible**: WCAG compliant with proper contrast and font sizes
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more questions
- Create new personality types
- Improve animations
- Enhance accessibility
- Fix bugs

## 📧 Support

For questions or issues, please open an issue on GitHub.

---

**Made with ❤️ using Next.js and TypeScript**

Enjoy discovering your personality type! 🎉
# personality-test-example
