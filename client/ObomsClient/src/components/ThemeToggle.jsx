import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const iconVariants = {
  initial: { scale: 0.6, rotate: 90 },
  animate: { scale: 1, rotate: 0, transition: { duration: 0.2 } },
  exit: { scale: 0.6, rotate: 90, transition: { duration: 0.2 } },
};

const containerVariants = {
  light: { backgroundColor: 'var(--color-background-secondary)' },
  dark: { backgroundColor: 'var(--color-background-accent)' },
};

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full hover:ring-2 hover:ring-brand-primary/20 transition-all duration-200 ${className}`}
      variants={containerVariants}
      animate={theme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          className="absolute inset-0 text-brand-primary"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={iconVariants}
          key={theme}
        >
          {isDark ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </motion.div>
      </div>
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </motion.button>
  );
}

ThemeToggle.propTypes = {
  className: PropTypes.string,
}; 