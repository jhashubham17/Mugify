import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const CooperativeGiftCategories = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const cooperativeGiftCategories = [
    {
      id: 1,
      name: "4 in 1 Corporate Gift Box",
      image: "MainMugImage/4in1CooperativeGits.jpeg",
      badge: "Best Seller",
      color: "Premium",
      description:
        "Elegant gift box with premium items perfect for corporate clients",
      accent: "#a78bfa",
    },
    {
      id: 2,
      name: "3 in 1 Corporate Gift Box",
      image: "MainMugImage/3in1CooperativeGits.jpeg",
      badge: "Trending",
      color: "Festive",
      description:
        "Beautifully curated hamper for special occasions and celebrations",
      accent: "#f472b6",
    },
    {
      id: 3,
      name: "2 in 1 Corporate Gift Box",
      image: "MainMugImage/2in1CooperativeGits.jpeg",
      badge: "Premium",
      color: "Custom",
      description:
        "Personalized gift set with your branding for special events",
      accent: "#34d399",
    },
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll logic - now works on mobile too
  useEffect(() => {
    let interval;
    if (isAutoScrolling && scrollContainerRef.current) {
      // Check if scrolling is needed (only when content overflows)
      const container = scrollContainerRef.current;
      const { scrollWidth, clientWidth } = container;
      const needsScrolling = scrollWidth > clientWidth;

      if (needsScrolling) {
        interval = setInterval(() => {
          const container = scrollContainerRef.current;
          if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            // If reached end, go back to start
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
              container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              // Scroll by 280px on mobile, 340px on desktop
              const scrollAmount = isMobile ? 280 : 340;
              container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
          }
        }, 2500); // 2.5 seconds interval
      }
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, isMobile]);

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
      const scrollAmount = isMobile ? 300 : 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
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
    <section className="bg-[#0a0a0f] py-20 md:py-24 overflow-hidden relative font-['DM_Sans',sans-serif]">
      {/* Background Effect */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[3px] uppercase text-purple-600 mb-4">
            <span className="w-7 h-px bg-purple-600"></span>
            Gifting Collection
            <span className="w-7 h-px bg-purple-600"></span>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Shop by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cooperative Gift Categories
            </span>
          </h2>

          <p className="text-[15px] text-gray-400 max-w-md mx-auto">
            Discover our premium gift collection — perfect for corporate events,
            festivals, and special occasions.
          </p>
        </motion.div>

        {/* Scroll Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setTimeout(() => setIsAutoScrolling(true), 5000)}
        >
          {/* Left Arrow - Hide on mobile if not needed */}
          {showLeftArrow && (
            <button
              className="absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white cursor-pointer flex items-center justify-center transition-all hover:bg-purple-600 hover:border-purple-600 hover:scale-105 left-0 md:-left-5"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <svg
                width="16"
                height="16"
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

          {/* Right Arrow - Hide on mobile if not needed */}
          {showRightArrow && (
            <button
              className="absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white cursor-pointer flex items-center justify-center transition-all hover:bg-purple-600 hover:border-purple-600 hover:scale-105 right-0 md:-right-5"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <svg
                width="16"
                height="16"
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

          {/* Track */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing pb-4"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-5 md:gap-6 w-max mx-auto md:mx-0 md:justify-center">
              {cooperativeGiftCategories.map((gift, index) => (
                <motion.div
                  key={gift.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-[280px] md:w-[320px] bg-[#13131f] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 group"
                  onMouseEnter={() => setActiveCard(gift.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Image */}
                  <Link to={`/products/gift/${gift.id}`}>
                    <div className="relative h-[260px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden">
                      <img
                        src={gift.image}
                        alt={gift.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] via-transparent to-transparent opacity-60" />

                      {/* Badge */}
                      <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase text-white px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-10">
                        {gift.badge}
                      </span>

                      {/* Color Tag */}
                      <span className="absolute top-3 right-3 text-[10px] font-medium text-white px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md z-10">
                        {gift.color}
                      </span>
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="p-5">
                    <Link to={`/products/gift/${gift.id}`} className="block">
                      <h3 className="font-['Playfair_Display',serif] text-lg font-semibold text-white mb-2">
                        {gift.name}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {gift.description}
                    </p>

                    <Link
                      to={`/products/gift/${gift.id}`}
                      className="block w-full py-2.5 text-center bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm font-medium transition-all hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-white"
                    >
                      View Details →
                    </Link>
                  </div>

                  {/* Accent Line */}
                  <div className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-10">
          {cooperativeGiftCategories.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === 0
                  ? "w-6 bg-gradient-to-r from-purple-500 to-pink-500"
                  : "w-1.5 bg-gray-700"
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
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-gray-300 text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-purple-600/25 hover:-translate-y-0.5"
          >
            View All Gifts
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

export default CooperativeGiftCategories;
