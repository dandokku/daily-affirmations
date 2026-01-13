# Daily Affirm

A beautiful, calming web application that delivers one powerful positive affirmation per day to improve your mood and mindset. Built with modern web technologies for a premium, Apple-like user experience.

## Features

### Core Functionality
- **Daily Affirmations**: Receive a new positive affirmation every day
- **Persistent Experience**: Same affirmation stays throughout the day unless manually refreshed
- **Smooth Animations**: Beautiful fade transitions and micro-interactions
- **Responsive Design**: Perfect experience on mobile, tablet, and desktop

### Affirmation Categories
Choose from 6 carefully curated categories:
- **Confidence** - Build self-assurance and inner strength
- **Focus** - Enhance concentration and mental clarity
- **Success** - Attract opportunities and achievement
- **Peace** - Find calm and emotional balance
- **Discipline** - Develop habits and self-control
- **Self-Love** - Nurture compassion and acceptance

### User Experience
- **Dark/Light Mode**: Automatic system detection with manual toggle
- **Animation Controls**: Enable/disable smooth transitions
- **Affirmation History**: Track all affirmations you've encountered
- **Share Feature**: Copy affirmations to clipboard for sharing
- **Premium Design**: Glassmorphism effects, soft gradients, and elegant typography

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/danokku/daily-affirmations-client.git
   cd daily-affirmations-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Theme Management**: next-themes
- **Deployment**: Netlify-ready
- **State Management**: React hooks + localStorage

## Project Structure

```
daily-affirmations-client/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main affirmation page
│   │   ├── history/
│   │   │   └── page.tsx        # History page
│   │   └── settings/
│   │       └── page.tsx        # Settings page
│   ├── components/
│   │   ├── AffirmationCard.tsx # Main affirmation display
│   │   ├── HistoryList.tsx     # History component
│   │   ├── SettingsPanel.tsx   # Settings component
│   │   ├── ThemeToggle.tsx     # Theme switcher
│   │   └── Nav.tsx             # Navigation header
│   └── data/
│       └── affirmations.ts     # Affirmation data and types
├── public/                     # Static assets
├── package.json
├── tailwind.config.js
├── next.config.ts
└── README.md
```

## Design Philosophy

Daily Affirm follows Apple's design principles with a focus on:

- **Simplicity**: Clean interfaces with minimal distractions
- **Emotional Impact**: Large, readable typography that centers the affirmation
- **Premium Feel**: Glassmorphism, soft gradients, and smooth animations
- **Accessibility**: High contrast ratios and keyboard navigation
- **Performance**: Optimized loading and smooth interactions

## Customization

### Adding New Affirmations

Edit `src/data/affirmations.ts`:

```typescript
export const affirmations: Affirmation[] = [
  // Add new affirmations
  { text: "Your new affirmation here", category: "confidence" },
  // ...
];
```

### Modifying Categories

Update the categories array in `src/data/affirmations.ts`:

```typescript
export const categories = ["all", "confidence", "focus", "success", "peace", "discipline", "self-love", "new-category"];
```

### Styling Changes

The app uses TailwindCSS. Key design tokens:

- **Colors**: Blue to purple gradients for primary actions
- **Typography**: Geist font family with light weights
- **Spacing**: Generous padding and margins for breathing room
- **Effects**: Backdrop blur and subtle shadows for depth

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Environment variables** (optional):
   - None required for basic functionality

### Vercel

1. **Import your project** on Vercel
2. **Deploy** - automatic detection of Next.js

### Other Platforms

The app is built with Next.js and can be deployed to any platform supporting Node.js applications.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Acknowledgments

- **Affirmations**: Carefully curated from various mindfulness and positive psychology sources
- **Design Inspiration**: Apple, Calm, and Headspace apps
- **Icons**: Custom SVG icons and emoji for accessibility

## Support

If you have questions or need help:

- Open an issue on GitHub
- Check the documentation
- Review the code comments

