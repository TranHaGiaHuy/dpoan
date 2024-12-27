import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  },
  zoom: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  },
  slide: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }
};

const imageLoader = ({ src, width, quality = 75 }) => {
  try {
    const url = new URL(src);
    const params = new URLSearchParams(url.search);
    
    params.set('w', width);
    params.set('q', quality);
    params.set('auto', 'format,compress,enhance');
    params.set('fit', 'crop');
    params.set('fm', 'webp');
    
    return `${url.origin}${url.pathname}?${params.toString()}`;
  } catch (error) {
    console.error('Error parsing image URL:', error);
    return src;
  }
};

const generatePlaceholder = (width, height) => {
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" gradientTransform="rotate(90)">
          <stop offset="0" stop-color="#f6f7f8"/>
          <stop offset="0.5" stop-color="#edeef1"/>
          <stop offset="1" stop-color="#f6f7f8"/>
        </linearGradient>
        <filter id="b" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="12"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -7"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" filter="url(#b)" opacity="0.5"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg.trim())}`;
};

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height,
  className = '',
  priority = false,
  quality = 75,
  loading = 'lazy',
  onClick,
  effect = 'fade',
  hoverEffect = true,
  objectFit = 'cover',
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isInView, setIsInView] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imageRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imageRef.current) {
      observerRef.current.observe(imageRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const optimizedSrc = imageLoader({ src, width, quality });
        setImageSrc(optimizedSrc);

        if (priority) {
          const img = new Image();
          img.src = optimizedSrc;
          await img.decode();
        }
      } catch (error) {
        console.error('Error loading image:', error);
        setError(true);
      }
    };

    loadImage();
  }, [src, width, quality, priority, retryCount]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setError(false);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
    setIsLoading(false);
  }, []);

  const handleRetry = useCallback(() => {
    setError(false);
    setIsLoading(true);
    setRetryCount(prev => prev + 1);
  }, []);

  const hoverVariants = hoverEffect ? {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  } : {};

  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : 'auto'
      }}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
          style={{
            backgroundSize: '200% 100%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      )}

      {/* Blur Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
        style={{
          backgroundImage: `url(${generatePlaceholder(width, height)})`,
          opacity: isLoading ? 1 : 0,
        }}
      />

      {/* Main Image */}
      <motion.img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`
          w-full
          h-full
          object-${objectFit}
          transition-all
          duration-300
          ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
        `}
        variants={{
          ...animations[effect],
          ...hoverVariants
        }}
        initial="hidden"
        animate={isInView && !isLoading ? "visible" : "hidden"}
        whileHover={hoverEffect ? "hover" : undefined}
        {...props}
      />

      {/* Error State */}
      <AnimatePresence>
        {error && (
          <motion.div 
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-sm text-white"
          >
            <svg 
              className="w-12 h-12 mb-4 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-white mb-4">Failed to load image</p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          opacity: isLoading ? 0 : 1
        }}
      />
    </div>
  );
}

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  priority: PropTypes.bool,
  quality: PropTypes.number,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  onClick: PropTypes.func,
  effect: PropTypes.oneOf(['fade', 'zoom', 'slide']),
  hoverEffect: PropTypes.bool,
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
}; 