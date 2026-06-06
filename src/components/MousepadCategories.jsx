import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const EventCategories = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const eventCategories = [
    {
      id: 1,
      name: "Wristbands",
      image: "./MainMugImage/Wristband.jpg",
      badge: "Best Seller",
      color: "Multiple Colors",
      description:
        "Silicone wristbands perfect for events, fundraisers, and awareness campaigns",
    },
    {
      id: 2,
      name: "Lanyards",
      image: "./MainMugImage/Lanyard.jpg",
      badge: "Trending",
      color: "Custom Printing",
      description:
        "Premium lanyards with custom printing, ideal for conferences and ID badges",
    },
    {
      id: 3,
      name: "ID Cards",
      image: "./MainMugImage/IDCard.jpg",
      badge: "New",
      color: "PVC/Plastic",
      description:
        "High-quality ID cards with photo, barcode, and custom designs for events",
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
            container.scrollBy({ left: 280, behavior: "smooth" });
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
      const cardWidth = window.innerWidth < 640 ? 280 : 300;
      const gap = window.innerWidth < 640 ? 16 : 24;
      const scrollAmount =
        direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
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
    <section className="bg-[#0a0a0f] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative">
      {/* Background Effect */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase text-purple-600 mb-3 sm:mb-4">
            <span className="w-5 sm:w-7 h-px bg-purple-600"></span>
            Event Essentials
            <span className="w-5 sm:w-7 h-px bg-purple-600"></span>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Shop by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Event Categories
            </span>
          </h2>

          <p className="text-sm sm:text-[15px] text-gray-400 max-w-md mx-auto px-4">
            Discover our premium wristbands, lanyards, and ID cards — perfect
            for events, conferences, and corporate branding.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setTimeout(() => setIsAutoScrolling(true), 5000)}
        >
          {/* Left Arrow - Hidden on mobile when not needed */}
          {showLeftArrow && (
            <button
              className="absolute top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white cursor-pointer flex items-center justify-center transition-all hover:bg-purple-600 hover:border-purple-600 hover:scale-105 left-0 sm:-left-3 md:-left-5"
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

          {/* Right Arrow - Hidden on mobile when not needed */}
          {showRightArrow && (
            <button
              className="absolute top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white cursor-pointer flex items-center justify-center transition-all hover:bg-purple-600 hover:border-purple-600 hover:scale-105 right-0 sm:-right-3 md:-right-5"
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
            className="overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing pb-4 px-0 sm:px-2"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-4 sm:gap-5 md:gap-6 w-max px-2 sm:px-0">
              {eventCategories.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-[260px] xs:w-[280px] sm:w-[290px] md:w-[300px] bg-[#13131f] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 group flex-shrink-0"
                >
                  {/* Image Section */}
                  <Link to={`/products/event/${item.id}`}>
                    <div className="relative h-[220px] xs:h-[240px] sm:h-[250px] md:h-[260px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] via-transparent to-transparent opacity-60" />

                      {/* Badge */}
                      <span className="absolute top-2 sm:top-3 left-2 sm:left-3 text-[9px] sm:text-[10px] font-semibold uppercase text-white px-2 sm:px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-10">
                        {item.badge}
                      </span>

                      {/* Color Tag */}
                      <span className="absolute top-2 sm:top-3 right-2 sm:right-3 text-[9px] sm:text-[10px] font-medium text-white px-2 sm:px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md z-10">
                        {item.color}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <Link to={`/products/event/${item.id}`} className="block">
                      <h3 className="font-['Playfair_Display',serif] text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">
                        {item.name}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <Link
                      to={`/products/event/${item.id}`}
                      className="block w-full py-2 sm:py-2.5 text-center bg-white/5 border border-white/10 rounded-xl text-gray-300 text-xs sm:text-sm font-medium transition-all hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-white"
                    >
                      View Details →
                    </Link>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-1.5 sm:gap-2 justify-center mt-8 sm:mt-10">
          {eventCategories.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = window.innerWidth < 640 ? 276 : 300;
                  const gap = window.innerWidth < 640 ? 16 : 24;
                  scrollContainerRef.current.scrollTo({
                    left: i * (cardWidth + gap),
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === 0
                  ? "w-6 bg-gradient-to-r from-purple-500 to-pink-500"
                  : "w-1.5 bg-gray-700 hover:bg-gray-500"
              }`}
            />
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
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/10 text-gray-300 text-xs sm:text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-purple-600/25 hover:-translate-y-0.5"
          >
            View All Event Products
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
        
        @media (max-width: 480px) {
          .xs\\:w-\\[280px\\] {
            width: 280px;
          }
          .xs\\:h-\\[240px\\] {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default EventCategories;
