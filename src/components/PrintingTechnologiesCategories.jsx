import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const PrintingTechnologies = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  const printingMethods = [
    {
      id: 1,
      name: "DTF Printing",
      description:
        "Direct-to-film printing for detailed, colorful designs on any fabric",
      icon: "🎞️",
      badge: "Advanced",
      color: "DTF",
      image: "./MainMugImage/Dtf.jpeg",
      accent: "#8b5cf6",
    },
    {
      id: 2,
      name: "Screen Printing",
      description: "Classic technique for bold, opaque designs on dark fabrics",
      icon: "🖼️",
      badge: "Traditional",
      color: "Screen",
      image: "./MainMugImage/SkinPrinting.jpg",
      accent: "#ec4899",
    },
    {
      id: 3,
      name: "Laser Engraving",
      description: "Permanent, precise markings on wood, metal, glass & more",
      icon: "⚡",
      badge: "Precision",
      color: "Laser",
      image: "./MainMugImage/LeaserEngravingImage.jpg",
      accent: "#10b981",
    },
    {
      id: 4,
      name: "Pad Printing",
      description:
        "Versatile printing on irregularly shaped objects & curved surfaces",
      icon: "🔄",
      badge: "Versatile",
      color: "Pad",
      image: "./MainMugImage/HeatPressMachine.jpeg",
      accent: "#f59e0b",
    },
    {
      id: 5,
      name: "UV Printing",
      description:
        "Instant curing prints with vibrant colors on various surfaces",
      icon: "☀️",
      badge: "Eco-Friendly",
      color: "UV",
      image: "./MainMugImage/UV.jpg",
      accent: "#ef4444",
    },
    {
      id: 6,
      name: "UV DTF",
      description:
        "Instant curing prints with vibrant colors on various surfaces",
      icon: "☀️",
      badge: "Eco-Friendly",
      color: "UV",
      image: "./MainMugImage/UVSticker.jpg",
      accent: "#ef4444",
    },
    {
      id: 7,
      name: "Sublimation Printing",
      description:
        "Full-color dye transfer for polyester fabrics & coated mugs",
      icon: "🎨",
      badge: "Trending",
      color: "Sublimation",
      image: "./MainMugImage/Dtf.jpeg",
      accent: "#a78bfa",
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
      }, 2500);
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pt-section {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 100%);
          padding: 80px 0 100px;
          overflow: hidden;
          position: relative;
        }

        .pt-section::before {
          content: '🖨️';
          position: absolute;
          top: -100px;
          left: -50px;
          font-size: 200px;
          opacity: 0.03;
          pointer-events: none;
          animation: rotateSlow 30s infinite linear;
        }

        .pt-section::after {
          content: '🎨';
          position: absolute;
          bottom: -100px;
          right: -50px;
          font-size: 180px;
          opacity: 0.03;
          pointer-events: none;
          animation: rotateSlow 25s infinite reverse linear;
        }

        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .pt-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #8b5cf6;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .pt-label::before,
        .pt-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
        }

        .pt-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #f8f8fc;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .pt-title span {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pt-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: #6b6b80;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .pt-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          color: #e2e2f0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .pt-nav-btn:hover {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-color: transparent;
          color: #fff;
          transform: translateY(-50%) scale(1.08);
        }

        .pt-nav-left { left: -22px; }
        .pt-nav-right { right: -22px; }

        .pt-track {
          overflow-x: auto;
          scrollbar-width: none;
          cursor: grab;
          padding-bottom: 8px;
        }

        .pt-track:active { cursor: grabbing; }
        .pt-track::-webkit-scrollbar { display: none; }

        .pt-cards {
          display: flex;
          gap: 20px;
          padding: 20px 4px 20px;
        }

        .pt-card {
          flex-shrink: 0;
          width: 280px;
          background: #13131f;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }

        .pt-card:hover {
          transform: translateY(-10px);
          border-color: rgba(139,92,246,0.3);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.1);
        }

        .pt-card-img-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 20px;
        }

        .pt-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        .pt-card:hover .pt-card-img-wrap img {
          transform: scale(1.05);
        }

        .pt-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(19,19,31,0.95) 100%);
          pointer-events: none;
        }

        .pt-icon-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 28px;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
          z-index: 2;
        }

        .pt-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
          padding: 5px 10px;
          border-radius: 30px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          backdrop-filter: blur(8px);
          z-index: 2;
        }

        .pt-color-dot {
          position: absolute;
          bottom: 14px;
          right: 14px;
          font-size: 10px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
          padding: 4px 10px;
          border-radius: 30px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
          z-index: 2;
        }

        .pt-card-body {
          padding: 18px 20px 22px;
        }

        .pt-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #f0f0fa;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .pt-card-desc {
          font-size: 12.5px;
          font-weight: 300;
          color: #5a5a70;
          line-height: 1.6;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pt-view-btn {
          display: block;
          width: 100%;
          padding: 11px 0;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #c4c4d8;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .pt-view-btn:hover {
          background: rgba(139,92,246,0.15);
          border-color: rgba(139,92,246,0.4);
          color: #c4b5fd;
        }

        .pt-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .pt-card:hover .pt-card-accent {
          transform: scaleX(1);
        }

        .pt-dots {
          display: flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
        }

        .pt-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2a2a3d;
          transition: all 0.3s;
        }

        .pt-dot.active {
          width: 20px;
          border-radius: 3px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
        }

        .pt-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 50px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: #c4c4d8;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .pt-all-btn:hover {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 10px 40px rgba(139,92,246,0.35);
          transform: translateY(-2px);
        }

        .pt-all-btn svg {
          transition: transform 0.3s;
        }

        .pt-all-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>

      <section className="pt-section">
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "52px" }}
          >
            <div className="pt-label">Printing Excellence</div>
            <h2 className="pt-title">
              Advanced <span>Printing Technologies</span>
            </h2>
            <p className="pt-subtitle">
              Discover cutting-edge printing techniques — from traditional
              screen to modern UV and DTF.
            </p>
          </motion.div>

          {/* Scroll Container */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() =>
              setTimeout(() => setIsAutoScrolling(true), 5000)
            }
          >
            {showLeftArrow && (
              <button
                className="pt-nav-btn pt-nav-left"
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

            {showRightArrow && (
              <button
                className="pt-nav-btn pt-nav-right"
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

            <div
              ref={scrollContainerRef}
              className="pt-track"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="pt-cards">
                {printingMethods.map((method, index) => (
                  <motion.div
                    key={method.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="pt-card"
                    onMouseEnter={() => setActiveCard(method.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <Link to={`/technologies/${method.id}`}>
                      <div className="pt-card-img-wrap">
                        <img
                          src={method.image}
                          alt={method.name}
                          draggable="false"
                          onError={(e) => {
                            e.target.src =
                              "https://placehold.co/400x300/1a1a2e/8b5cf6?text=" +
                              method.name.charAt(0);
                          }}
                        />
                        <div className="pt-card-img-overlay" />
                        <div className="pt-icon-badge">{method.icon}</div>
                        <span className="pt-badge">{method.badge}</span>
                        <span className="pt-color-dot">{method.color}</span>
                      </div>
                    </Link>

                    <div className="pt-card-body">
                      <Link
                        to={`/technologies/${method.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="pt-card-name">{method.name}</div>
                      </Link>
                      <p className="pt-card-desc">{method.description}</p>

                      <Link
                        to={`/technologies/${method.id}`}
                        className="pt-view-btn"
                      >
                        Learn More →
                      </Link>
                    </div>

                    <div className="pt-card-accent" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="pt-dots">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`pt-dot ${i === 0 ? "active" : ""}`} />
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginTop: "52px" }}
          >
            <Link to="/technologies" className="pt-all-btn">
              Explore All Technologies
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
      </section>
    </>
  );
};

export default PrintingTechnologies;
