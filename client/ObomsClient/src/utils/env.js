/**
 * Environment variable utility functions with validation
 */

/**
 * Get a required environment variable
 * @param {string} key - The environment variable key
 * @throws {Error} If the environment variable is not set
 * @returns {string} The environment variable value
 */
export const getRequiredEnvVar = (key) => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

/**
 * Get an optional environment variable with a default value
 * @param {string} key - The environment variable key
 * @param {string} defaultValue - The default value if not set
 * @returns {string} The environment variable value or default
 */
export const getEnvVar = (key, defaultValue) => {
  return import.meta.env[key] || defaultValue;
};

/**
 * Check if we're in production environment
 * @returns {boolean}
 */
export const isProduction = () => {
  return import.meta.env.PROD === true;
};

/**
 * Check if we're in development environment
 * @returns {boolean}
 */
export const isDevelopment = () => {
  return import.meta.env.DEV === true;
};

/**
 * Get Supabase configuration with validation
 * @returns {{ url: string, anonKey: string }}
 */
export const getSupabaseConfig = () => {
  return {
    url: getRequiredEnvVar('VITE_SUPABASE_URL'),
    anonKey: getRequiredEnvVar('VITE_SUPABASE_ANON_KEY'),
  };
};

/**
 * Get API configuration
 * @returns {{ url: string, timeout: number }}
 */
export const getApiConfig = () => {
  return {
    url: getEnvVar('VITE_API_URL', 'http://localhost:3000'),
    timeout: parseInt(getEnvVar('VITE_API_TIMEOUT', '30000')),
  };
};

/**
 * Get feature flags
 * @returns {{ analytics: boolean, logging: boolean }}
 */
export const getFeatureFlags = () => {
  return {
    analytics: getEnvVar('VITE_ENABLE_ANALYTICS', 'false') === 'true',
    logging: getEnvVar('VITE_ENABLE_LOGGING', 'false') === 'true',
  };
};

/**
 * Get application settings
 * @returns {{ name: string, environment: string }}
 */
export const getAppSettings = () => {
  return {
    name: getEnvVar('VITE_APP_NAME', 'OBOMS'),
    environment: getEnvVar('VITE_APP_ENVIRONMENT', 'development'),
  };
}; 