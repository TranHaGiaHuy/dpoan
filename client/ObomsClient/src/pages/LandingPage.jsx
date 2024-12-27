import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import LandingNavbar from '../components/LandingNavbar';
import OptimizedImage from '../components/OptimizedImage';
import FeaturesSection from '../components/FeaturesSection';
import gridPattern from '/grid.svg';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
    alt: "Modern restaurant interior with elegant table settings",
    width: 1200,
    height: 800,
    className: "col-span-2 row-span-2",
    priority: true,
    effect: "fade"
  },
  {
    src: "https://www.maestato.com/en/media/products_photos/59aff5c53d1b6_dsc0044-3.jpg",
    alt: "Professional billiard table",
    width: 600,
    height: 400,
    className: "col-span-1 row-span-1",
    effect: "zoom"
  },
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&auto=format&fit=crop&q=60",
    alt: "Cozy cafe interior",
    width: 600,
    height: 400,
    className: "col-span-1 row-span-1",
    effect: "slide"
  }
];

const fadeInUp = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0 }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white [&_*]:transition-none">
      <LandingNavbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/4 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/30 dark:bg-purple-500/30 rounded-full filter blur-3xl" />
          <div className="absolute -top-24 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/30 dark:bg-blue-500/30 rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
              >
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium">
                  30 Days free trial
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              >
                <span className="text-blue-700 dark:text-blue-400">Smart</span> Booking
                <br />
                Management
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Streamline your restaurant, café, and billiard club bookings with our modern management system. Real-time availability, instant confirmations.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700"
                >
                  Get Started
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-white/20"
                >
                  How it works?
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
                {images.map((image, index) => (
                  <motion.div
                    key={`image-${index}`}
                    className={`relative overflow-hidden rounded-2xl shadow-lg dark:shadow-gray-800/30 ${image.className}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <OptimizedImage
                      {...image}
                      quality={90}
                      objectFit="cover"
                      className="brightness-[0.85] contrast-[1.1] dark:brightness-100 dark:contrast-100"
                      hoverEffect={false}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-6 -right-6 bg-blue-100 dark:bg-blue-500/20 backdrop-blur-xl rounded-xl p-3 sm:p-4 shadow-xl dark:shadow-gray-800/30"
              >
                <div className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">Real-time Booking</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-purple-100 dark:bg-purple-500/20 backdrop-blur-xl rounded-xl p-3 sm:p-4 shadow-xl dark:shadow-gray-800/30"
              >
                <div className="text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium">Smart Management</div>
              </motion.div>
            </motion.div>

            {/* Mobile Image - Single Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative lg:hidden"
            >
              <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-800/30">
                <OptimizedImage
                  {...images[0]}
                  className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] dark:brightness-100 dark:contrast-100"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent dark:from-gray-900/60 dark:via-gray-900/30 dark:to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-cta-section
      >
        {/* Background with startup-like gradient and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#334155]">
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 dark:from-blue-500 dark:via-violet-500 dark:to-purple-500 animate-gradient" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-20" />
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/30 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/20 dark:bg-violet-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/0 dark:from-[#0F172A] dark:via-transparent dark:to-transparent opacity-60" />
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight [&_*]:transition-none"
            variants={fadeInUp}
          >
            Ready to Transform Your
            <motion.span 
              className="block mt-4 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-300 dark:to-violet-300 text-transparent bg-clip-text pb-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Business Management?
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl mb-12 text-gray-600 dark:text-blue-100/90 max-w-2xl mx-auto [&_*]:transition-none"
            variants={fadeInUp}
          >
            Join thousands of businesses already using OBOMS to streamline their operations and enhance customer experience.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={fadeInUp}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 dark:bg-white text-white dark:text-blue-900 rounded-full font-semibold text-lg shadow-xl hover:bg-blue-700 dark:hover:bg-opacity-90 transition-all duration-300 [&_*]:transition-none"
            >
              Get Started Now
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-blue-900 dark:text-white rounded-full font-semibold text-lg border border-blue-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-white/20 transition-all duration-300 [&_*]:transition-none"
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          {/* Interactive features counter */}
          <motion.div 
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
            variants={fadeInUp}
          >
            {[
              { label: "Active Users", value: "10K+" },
              { label: "Bookings/Month", value: "100K+" },
              { label: "Success Rate", value: "99.9%" },
              { label: "Response Time", value: "<1min" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-white mb-2 [&_*]:transition-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-600 dark:text-blue-200/80 [&_*]:transition-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 