import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const MousepadCategories = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const mousepadCategories = [
    {
      id: 1,
      name: "7 by 9",
      image: "MainMugImage/MousePad7by9.png",
      badge: "Best Seller",
      color: "Stealth Black",
      description:
        "Smooth gliding surface with anti-fray stitching, perfect for gamers and professionals",
      accent: "#4f46e5",
    },
    {
      id: 2,
      name: "11 by 30",
      image: "MainMugImage/MousePad12by30.png",
      badge: "Best Seller",
      color: "Stealth Black",
      description:
        "Smooth gliding surface with anti-fray stitching, perfect for gamers and professionals",
      accent: "#4f46e5",
    },
    {
      id: 3,
      name: "Custom Size",
      image: "MainMugImage/MousePad12by30.png",
      badge: "Best Seller",
      color: "Stealth Black",
      description:
        "Smooth gliding surface with anti-fray stitching, perfect for gamers and professionals",
      accent: "#4f46e5",
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    let interval;
    if (isAutoScrolling && scrollContainerRef.current) {
      interval = setInterval(() => {
        const container = scrollContainerRef.current;
        if (container) {
          const { scrollLeft, scrollWidth, clientWidth } = container;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction) => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const handleMouseDown = (e) => {
    setIsAutoScrolling(false);
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#0a0a0f] py-16 md:py-20 lg:py-24 overflow-hidden relative">
      {/* Background Effect */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(ellipse,rgba(79,70,229,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase text-indigo-500 mb-3 sm:mb-4">
            <span className="w-5 sm:w-7 h-px bg-indigo-500"></span>
            Gaming Gear
            <span className="w-5 sm:w-7 h-px bg-indigo-500"></span>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Precision{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mouse Pads
            </span>{" "}
            for Every Setup
          </h2>

          <p className="text-sm sm:text-[15px] text-gray-400 max-w-md mx-auto">
            Discover our premium mouse pad collection — smooth gliding,
            anti-slip base, and perfect for gaming and work.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setTimeout(() => setIsAutoScrolling(true), 5000)}
        >
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              className="absolute top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white cursor-pointer flex items-center justify-center transition-all hover:bg-indigo-600 hover:border-indigo-600 hover:scale-105 left-0 sm:-left-3 md:-left-5"
              onClick={() => scroll("left")}
            >
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              className="absolute top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white cursor-pointer flex items-center justify-center transition-all hover:bg-indigo-600 hover:border-indigo-600 hover:scale-105 right-0 sm:-right-3 md:-right-5"
              onClick={() => scroll("right")}
            >
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing pb-4"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-5 md:gap-6 w-max">
              {mousepadCategories.map((mousepad, index) => (
                <motion.div
                  key={mousepad.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-[280px] md:w-[300px] bg-[#13131f] rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/20 group"
                >
                  {/* Image Section */}
                  <Link to={`/products/mousepad/${mousepad.id}`}>
                    <div className="relative h-[260px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden">
                      <img
                        src={mousepad.image}
                        alt={mousepad.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] via-transparent to-transparent opacity-60" />

                      {/* Badge */}
                      <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase text-white px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-10">
                        {mousepad.badge}
                      </span>

                      {/* Color Tag */}
                      <span className="absolute top-3 right-3 text-[10px] font-medium text-white px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md z-10">
                        {mousepad.color}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-5">
                    <Link
                      to={`/products/mousepad/${mousepad.id}`}
                      className="block"
                    >
                      <h3 className="font-['Playfair_Display',serif] text-xl font-semibold text-white mb-2 text-center">
                        {mousepad.name}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-400 leading-relaxed mb-4 text-center line-clamp-2">
                      {mousepad.description}
                    </p>

                    <Link
                      to={`/products/mousepad/${mousepad.id}`}
                      className="block w-full py-2.5 text-center bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm font-medium transition-all hover:bg-indigo-600/20 hover:border-indigo-500/50 hover:text-white"
                    >
                      View Details →
                    </Link>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-2 justify-center mt-8 sm:mt-10">
          {mousepadCategories.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = window.innerWidth < 768 ? 280 : 300;
                  const gap = window.innerWidth < 768 ? 20 : 24;
                  scrollContainerRef.current.scrollTo({
                    left: i * (cardWidth + gap),
                    behavior: "smooth",
                  });
                }
              }}
              className="transition-all duration-300"
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === 0
                    ? "w-6 bg-gradient-to-r from-indigo-500 to-purple-500"
                    : "w-1.5 bg-gray-700 hover:bg-gray-500"
                }`}
              />
            </button>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 md:mt-14"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/10 text-gray-300 text-xs sm:text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-indigo-600/25 hover:-translate-y-0.5"
          >
            View All Mouse Pads
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default MousepadCategories;
