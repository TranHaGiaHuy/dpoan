// Theme-related constants
export const STORAGE_KEY = 'theme';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';
export const SYSTEM_DARK_THEME = '(prefers-color-scheme: dark)';

/**
 * Get the user's preferred theme
 * @returns {string} 'dark' or 'light'
 */
export function getPreferredTheme() {
  // Check for stored preference
  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme) {
    return storedTheme;
  }
  
  // Check system preference
  return window.matchMedia(SYSTEM_DARK_THEME).matches ? DARK_THEME : LIGHT_THEME;
}

/**
 * Apply theme to document
 * @param {string} theme 'dark' or 'light'
 */
export function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove(DARK_THEME, LIGHT_THEME);
  root.classList.add(theme);
}

/**
 * Store theme preference
 * @param {string} theme 'dark' or 'light'
 */
export function storeTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}

/**
 * Clear stored theme preference
 */
export function clearStoredTheme() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Check if system is in dark mode
 * @returns {boolean}
 */
export function isSystemDarkMode() {
  return window.matchMedia(SYSTEM_DARK_THEME).matches;
}

/**
 * Get color value for current theme
 * @param {string} lightValue 
 * @param {string} darkValue 
 * @returns {string}
 */
export function getThemeValue(lightValue, darkValue) {
  return document.documentElement.classList.contains(DARK_THEME) ? darkValue : lightValue;
} 