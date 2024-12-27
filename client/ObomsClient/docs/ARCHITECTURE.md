# OBOMS - Online Booking & Management System

## Architecture Documentation

### Project Overview
OBOMS is a modern web application built with React and Vite, designed for managing bookings and operations for restaurants, cafés, and billiard clubs. The application features a responsive design, dark/light mode support, and modern animations.

### Directory Structure
```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── context/           # React context providers
├── store/             # Redux store and slices
├── utils/             # Utility functions
├── lib/              # Third-party library configurations
├── routes/           # Routing configuration
└── ui/               # Page-specific UI components
```

### Core Technologies
- **React**: Frontend library
- **Vite**: Build tool
- **Redux Toolkit**: State management
- **React Router**: Routing
- **TailwindCSS**: Styling
- **Framer Motion**: Animations
- **React Query**: Server state management
- **Supabase**: Backend services

### Key Components

#### 1. Theme System
- `ThemeContext.jsx`: Context provider for theme management
- `ThemeToggle.jsx`: Theme switching component
- Features:
  - System preference detection
  - Persistent theme storage
  - Smooth transitions
  - Dark/light mode support

#### 2. Landing Page
- `LandingPage.jsx`: Main landing page component
- Features:
  - Hero section with animated elements
  - Features showcase
  - Responsive image grid
  - CTA section with gradient effects

#### 3. Features Section
- `FeaturesSection.jsx`: Interactive features showcase
- Features:
  - Scrolling navigation
  - Animated transitions
  - Metric displays
  - Responsive layout

#### 4. Navigation
- `LandingNavbar.jsx`: Main navigation component
- Features:
  - Responsive design
  - Theme toggle integration
  - Smooth animations

### State Management

#### Redux Store
```javascript
store/
├── index.js          # Store configuration
├── slices/
    ├── authSlice.js  # Authentication state
    └── uiSlice.js    # UI state management
```

#### Context Providers
- `ThemeContext`: Theme state and utilities
- Features:
  - Theme persistence
  - System preference sync
  - Transition management

### Routing System
```javascript
routes/
├── index.jsx         # Route definitions
├── ProtectedRoute.jsx # Authentication guard
└── PublicRoute.jsx   # Public access routes
```

### Styling System

#### TailwindCSS Configuration
- Custom color schemes
- Dark mode support
- Custom animations
- Responsive breakpoints

#### Design Tokens
```css
:root {
  /* Brand Colors */
  --color-brand-primary: #3b82f6;
  --color-brand-secondary: #6366f1;
  --color-brand-accent: #8b5cf6;

  /* Theme-specific colors */
  --color-background-primary: #ffffff;
  --color-text-primary: #111827;
  /* ... other tokens */
}
```

### Performance Optimizations
1. **Code Splitting**
   - Lazy loading of routes
   - Component-level code splitting
   - Dynamic imports

2. **Image Optimization**
   - `OptimizedImage` component
   - Lazy loading
   - Proper sizing
   - Format optimization

3. **Animation Performance**
   - Hardware acceleration
   - Debounced event handlers
   - RAF for smooth animations

### Security Measures
1. **Authentication**
   - Protected routes
   - Token management
   - Secure storage

2. **Environment Variables**
   - Secure configuration
   - Environment-specific settings
   - API key management

### Development Workflow
1. **Setup**
   ```bash
   pnpm install
   pnpm dev
   ```

2. **Build**
   ```bash
   pnpm build
   pnpm preview
   ```

3. **Environment Configuration**
   - `.env.development`
   - `.env.production`
   - `.env.example`

### Best Practices
1. **Component Structure**
   - Single responsibility
   - Proper prop types
   - Error boundaries
   - Performance optimization

2. **State Management**
   - Centralized store
   - Context for theme/UI
   - Local state when appropriate

3. **Styling**
   - TailwindCSS utilities
   - CSS variables for theming
   - Responsive design
   - Accessibility

4. **Performance**
   - Code splitting
   - Lazy loading
   - Memoization
   - Bundle optimization

### Future Considerations
1. **Scalability**
   - Modular architecture
   - Component library
   - Design system
   - Documentation

2. **Features**
   - Advanced booking system
   - Analytics dashboard
   - Real-time updates
   - Mobile optimization

3. **Performance**
   - Server-side rendering
   - Progressive enhancement
   - Cache optimization
   - Bundle analysis

### Contributing
1. Fork the repository
2. Create feature branch
3. Follow coding standards
4. Submit pull request

### Resources
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion) 