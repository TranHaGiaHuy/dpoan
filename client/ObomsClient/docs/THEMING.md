# Theming System Documentation

## Overview
The theming system provides a comprehensive solution for managing light and dark modes, with smooth transitions and system preference detection.

## Theme Context

### Implementation
```jsx
// Location: src/context/ThemeContext.jsx

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  systemPreference: 'light',
});

export const ThemeProvider = ({ children }) => {
  // Theme state management
  // System preference detection
  // Theme persistence
  return <ThemeContext.Provider value={...}>{children}</ThemeContext.Provider>;
};
```

## Theme Configuration

### Color Palette
```css
:root {
  /* Light Theme Colors */
  --color-background-primary-light: #ffffff;
  --color-text-primary-light: #111827;
  --color-text-secondary-light: #4b5563;
  --color-accent-light: #3b82f6;

  /* Dark Theme Colors */
  --color-background-primary-dark: #111827;
  --color-text-primary-dark: #f9fafb;
  --color-text-secondary-dark: #d1d5db;
  --color-accent-dark: #60a5fa;
}
```

### Transition Configuration
```css
/* Theme Transitions */
.theme-transition {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Disable transitions temporarily */
.transition-none * {
  transition: none !important;
}
```

## Usage Examples

### Component Implementation
```jsx
// Example component using theme
const ThemedComponent = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
      theme-transition
    `}>
      Content
    </div>
  );
};
```

### Theme Toggle Implementation
```jsx
// Theme toggle component
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-transition"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
```

## Theme Utilities

### Hook Usage
```jsx
// Custom theme hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

### System Preference Detection
```javascript
// System preference detection utility
const getSystemPreference = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};
```

## Theme Classes

### Base Classes
```css
/* Base theme classes */
.light {
  --bg-primary: var(--color-background-primary-light);
  --text-primary: var(--color-text-primary-light);
  /* ... other variables */
}

.dark {
  --bg-primary: var(--color-background-primary-dark);
  --text-primary: var(--color-text-primary-dark);
  /* ... other variables */
}
```

### Component-Specific Classes
```css
/* Component theme classes */
.themed-card {
  @apply bg-white dark:bg-gray-800
         text-gray-900 dark:text-white
         shadow-lg dark:shadow-gray-900/30
         theme-transition;
}

.themed-button {
  @apply bg-blue-500 dark:bg-blue-600
         text-white
         hover:bg-blue-600 dark:hover:bg-blue-700
         theme-transition;
}
```

## Best Practices

### Theme Implementation
1. Use CSS variables for theme values
2. Implement smooth transitions
3. Provide fallback values
4. Use semantic color names

### Performance
1. Minimize theme switches
2. Use efficient selectors
3. Optimize transitions
4. Batch theme updates

### Accessibility
1. Maintain proper contrast ratios
2. Test with screen readers
3. Support reduced motion
4. Provide visual indicators

## Theme Integration

### App Setup
```jsx
// App.jsx
const App = () => {
  return (
    <ThemeProvider>
      <div className="theme-transition">
        <Router>
          {/* App content */}
        </Router>
      </div>
    </ThemeProvider>
  );
};
```

### Component Integration
```jsx
// Example of theme integration in components
const ThemedLayout = () => {
  const { theme } = useTheme();
  
  return (
    <main className={`
      min-h-screen
      ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}
      theme-transition
    `}>
      {/* Layout content */}
    </main>
  );
};
```

## Testing

### Theme Testing
```javascript
// Theme testing examples
describe('Theme System', () => {
  it('should switch themes correctly', () => {
    // Test implementation
  });

  it('should persist theme preference', () => {
    // Test implementation
  });

  it('should detect system preference', () => {
    // Test implementation
  });
});
```

## Troubleshooting

### Common Issues
1. Flickering during theme switch
2. Inconsistent transitions
3. System preference conflicts
4. Performance issues

### Solutions
1. Use transition-none class
2. Implement proper state management
3. Add fallback values
4. Optimize transition timing

## Future Improvements

### Planned Features
1. Multiple theme support
2. Custom theme creation
3. Theme presets
4. Animation customization

### Optimization Goals
1. Reduce bundle size
2. Improve transition performance
3. Enhance accessibility
4. Add theme analytics
``` 