import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
      </div>

      {/* Floating Shapes - Smaller for laptop */}
      <motion.div
        className="absolute top-10 lg:top-20 left-5 lg:left-10 w-48 h-48 lg:w-72 lg:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-10 lg:bottom-20 right-5 lg:right-10 w-64 h-64 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-56 h-56 lg:w-80 lg:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 lg:mb-6 px-3 lg:px-4 py-1.5 lg:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-xs lg:text-sm font-medium text-white/90">
              ✨ Print On Demand Made Easy
            </span>
          </motion.div>

          {/* Main Heading - Smaller for laptop */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Create Your Unique
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Custom Products
            </span>
          </motion.h1>

          {/* Description - Smaller text for laptop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 lg:mb-10 max-w-2xl mx-auto leading-relaxed px-4 lg:px-0"
          >
            Transform your ideas into reality. Design personalized mugs,
            t-shirts, gifts, and accessories that tell your unique story.
          </motion.p>

          {/* CTA Buttons - Fixed hover issue and colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center"
          >
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button className="group relative px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="hidden sm:inline">
                      Start Customizing Now
                    </span>
                    <span className="sm:hidden">Customize Now</span>
                    <svg
                      className="w-4 h-4 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>
              </motion.div>
            </Link>

            <Link to="/how-it-works">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <button className=" ml-10 px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold text-white rounded-lg border-2 border-purple-400/50 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-sm">
                  How It Works →
                </button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats Section - Smaller stats for laptop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-4 pt-6 lg:pt-8 border-t border-white/10"
          >
            {[
              { number: "500+", label: "Products" },
              { number: "50K+", label: "Happy Customers" },
              { number: "24/7", label: "Support" },
              { number: "Free", label: "Design Tools" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-xs lg:text-sm text-gray-300 mt-1 pb-10">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Slightly smaller */}
      <motion.div
        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white/50 rounded-full mt-2 animate-bounce pb-6"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
