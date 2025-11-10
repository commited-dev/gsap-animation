# Nova Bar - GSAP Animation Portfolio

A sophisticated, animated cocktail bar website showcasing premium cocktails with extensive GSAP-powered scroll animations and interactions. This project demonstrates professional web animation techniques for a modern hospitality brand.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-cyan)

## Features

### Interactive Scroll Animations

- **Hero Section**: Character-by-character text entrance with scroll-controlled video playback
- **Parallax Effects**: Dynamic leaf animations that move at different speeds
- **Text Splitting**: Word and character animations using GSAP SplitText
- **Image Reveals**: Staggered grid animations with mask effects
- **Carousel Menu**: Interactive cocktail selector with smooth slide transitions
- **Navbar Blur**: Scroll-triggered frosted glass effect

### Sections

1. **Hero** - Full-screen landing with animated video background
2. **Cocktails** - Showcase of popular and loved cocktails with parallax
3. **About** - Brand story with animated image grid
4. **Art** - Artistic showcase with complex mask animations
5. **Menu** - Interactive cocktail carousel with recipes
6. **Contact** - Footer with contact information and opening hours

## Technologies

### Core

- **React** (19.1.1) - UI library with hooks
- **Vite** (7.1.7) - Build tool and dev server
- **Tailwind CSS** (4.1.16) - Utility-first CSS framework

### Animation

- **GSAP** (3.13.0) - Professional animation library
  - ScrollTrigger - Scroll-based animations
  - SplitText - Text splitting for character/word animations
- **@gsap/react** (2.1.2) - React hooks for GSAP

### Utilities

- **react-responsive** (10.0.1) - Media query hooks for responsive behavior

## Project Structure

```
gsap-animation/
├── src/
│   ├── components/
│   │   ├── About.jsx         # About section with grid animations
│   │   ├── Art.jsx           # Art showcase with mask animations
│   │   ├── Cocktails.jsx     # Cocktail list with parallax
│   │   ├── Contact.jsx       # Footer with contact info
│   │   ├── Hero.jsx          # Hero section with video & text
│   │   ├── Menu.jsx          # Interactive menu carousel
│   │   └── Navbar.jsx        # Navigation bar with blur effect
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React root initialization
│   └── index.css             # Global styles & Tailwind config
├── constants/
│   └── index.js              # Static data & constants
├── public/
│   ├── images/               # Image assets (~35 files)
│   ├── videos/               # Video assets
│   │   └── cocktail.mp4
│   └── fonts/
│       └── Modern Negra Demo.ttf
├── index.html                # HTML entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint rules
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gsap-animation
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## GSAP Animation Techniques

### 1. Text Splitting & Character Animation

```javascript
const heroSplit = new SplitText("#hero .title", { type: "chars, words" });
gsap.from(heroSplit.chars, {
  yPercent: 100,
  duration: 1.8,
  ease: "expo.out",
  stagger: 0.05,
});
```

### 2. Scroll-Triggered Animations

```javascript
gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
```

### 3. Parallax Effects

```javascript
.to("#hero .right-leaf", { yPercent: 200 }, 0)
.to("#hero .left-leaf", { yPercent: -200 }, 0)
```

### 4. Video Playback Control

```javascript
videoTimeline.to(videoRef.current, {
  currentTime: videoRef.current.duration,
});
```

### 5. Mask Animations

```javascript
.to(".masked-img", {
  scale: 1.3,
  maskPosition: "center",
  maskSize: "400%",
  duration: 1,
  ease: "power1.inOut",
})
```

## Responsive Design

The application is fully responsive with breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Device-specific animation triggers ensure optimal performance across all screen sizes.

## Custom Utilities

The project includes custom CSS utilities defined in [index.css](src/index.css):

- `.flex-center` - Flexbox center alignment
- `.col-center` - Column center layout
- `.abs-center` - Absolute center positioning
- `.text-gradient` - Gradient text effect
- `.masked-img` - Mask image effects

## Fonts

- **Mona Sans** - Primary UI font (Google Fonts)
- **Modern Negra** - Display font for headings
- **DM Serif Text** - Serif font for elegant text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Optimized video loading with preload attributes
- Lazy animation registration with useGSAP
- ScrollTrigger optimization with appropriate scrub values
- Image optimization with proper sizing

## Acknowledgments

- GSAP for the powerful animation library
- React team for the excellent framework
- Tailwind CSS for the utility-first approach
- All the open-source contributors

## License

This project is for portfolio demonstration purposes.
