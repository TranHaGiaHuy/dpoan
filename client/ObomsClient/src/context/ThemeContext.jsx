import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  SYSTEM_DARK_THEME,
  getPreferredTheme,
  applyTheme,
  storeTheme,
  clearStoredTheme,
  isSystemDarkMode,
} from '../utils/theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia(SYSTEM_DARK_THEME);

    // Apply theme changes
    applyTheme(theme);
    storeTheme(theme);

    // Handle system theme changes
    function handleSystemThemeChange(event) {
      if (!localStorage.getItem('theme')) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
    toggleTheme: () => setTheme(prev => prev === 'dark' ? 'light' : 'dark'),
    isDark: theme === 'dark',
    isSystemDark: isSystemDarkMode(),
    useSystemTheme: () => {
      clearStoredTheme();
      setTheme(isSystemDarkMode() ? 'dark' : 'light');
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 