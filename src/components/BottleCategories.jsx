import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const BottleCategories = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  const bottleCategories = [
    {
      id: 1,
      name: "Temperature & Non Temperature Display Bottle",
      image: "./MainMugImage/Templature.jpg",
      badge: "Best Seller",
      color: "Silver",
      description:
        "Premium stainless steel bottle keeps drinks hot or cold for hours",
      accent: "#a78bfa",
    },
    {
      id: 2,
      name: "Challa Bottle",
      image: "./MainMugImage/ChallaBottle.jpg",
      badge: "Premium",
      color: "Black",
      description: "Sleek matte finish black bottle for bold and modern look",
      accent: "#f472b6",
    },
    {
      id: 4,
      name: "Bamboo Water Bottle",
      image: "./MainMugImage/Bamboo.jpg",
      badge: "New Arrival",
      color: "Rose Gold",
      description: "Elegant rose gold finish for a premium look",
      accent: "#fb923c",
    },
    {
      id: 5,
      name: "Tumbler",
      image: "./MainMugImage/Tumbler.webp",
      badge: "Eco Friendly",
      color: "Green",
      description: "Nature-inspired green bottle for eco-conscious users",
      accent: "#818cf8",
    },
    {
      id: 6,
      name: "Gym Shaker Steel Bottle",
      image: "./MainMugImage/GymShaker.jpg",
      badge: "Trending",
      color: "Purple",
      description: "Beautiful lavender purple bottle for stylish hydration",
      accent: "#f43f5e",
    },
    {
      id: 7,
      name: "Gym Shaker Plastic Bottle",
      image: "./MainMugImage/GymShakerPlasticBottle.jpg",
      badge: "Limited Edition",
      color: "Coral",
      description: "Bright coral orange bottle that stands out",
      accent: "#22d3ee",
    },
    {
      id: 8,
      name: "Plastic Bottle",
      image: "./MainMugImage/PlasticBottle.jpg",
      badge: "Premium",
      color: "Midnight",
      description: "Deep midnight black with subtle metallic shine",
      accent: "#c084fc",
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
      }, 2000);
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

        .bottle-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
          padding: 80px 0 100px;
          overflow: hidden;
          position: relative;
        }

        .bottle-section::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .bottle-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #7c3aed;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .bottle-label::before,
        .bottle-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #7c3aed;
        }

        .bottle-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #f8f8fc;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .bottle-title em {
          font-style: italic;
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bottle-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: #6b6b80;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .bottle-nav-btn {
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

        .bottle-nav-btn:hover {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
          transform: translateY(-50%) scale(1.08);
        }

        .bottle-nav-left { left: -22px; }
        .bottle-nav-right { right: -22px; }

        .bottle-track {
          overflow-x: auto;
          scrollbar-width: none;
          cursor: grab;
          padding-bottom: 8px;
        }

        .bottle-track:active { cursor: grabbing; }
        .bottle-track::-webkit-scrollbar { display: none; }

        .bottle-cards {
          display: flex;
          gap: 20px;
          padding: 20px 4px 20px;
        }

        .bottle-card {
          flex-shrink: 0;
          width: 280px;
          background: #13131f;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.35s ease;
        }

        .bottle-card:hover {
          transform: translateY(-10px);
          border-color: rgba(167,139,250,0.25);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.08);
        }

        .bottle-card-img-wrap {
          position: relative;
          height: 260px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 16px;
        }

        .bottle-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        .bottle-card:hover .bottle-card-img-wrap img {
          transform: scale(1.05);
        }

        .bottle-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(19,19,31,0.95) 100%);
          pointer-events: none;
        }

        .bottle-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
          padding: 5px 10px;
          border-radius: 30px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          z-index: 2;
        }

        .bottle-color-dot {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 10px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          padding: 5px 10px;
          border-radius: 30px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
          z-index: 2;
        }

        .bottle-card-body {
          padding: 18px 20px 22px;
        }

        .bottle-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #f0f0fa;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .bottle-card-desc {
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

        .bottle-view-btn {
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

        .bottle-view-btn:hover {
          background: rgba(124,58,237,0.15);
          border-color: rgba(124,58,237,0.4);
          color: #c4b5fd;
        }

        .bottle-card-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .bottle-card:hover .bottle-card-accent-line {
          transform: scaleX(1);
        }

        .bottle-dots {
          display: flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
        }

        .bottle-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2a2a3d;
          transition: all 0.3s;
        }

        .bottle-dot.active {
          width: 20px;
          border-radius: 3px;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
        }

        .bottle-all-btn {
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

        .bottle-all-btn:hover {
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 10px 40px rgba(124,58,237,0.35);
          transform: translateY(-2px);
        }

        .bottle-all-btn svg {
          transition: transform 0.3s;
        }

        .bottle-all-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>

      <section className="bottle-section">
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
            <div className="bottle-label">Hydration Collection</div>
            <h2 className="bottle-title">
              Shop by <em>Bottle Categories</em>
            </h2>
            <p className="bottle-subtitle">
              Explore our premium bottle collection — eco-friendly, durable, and
              perfect for customisation.
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
                className="bottle-nav-btn bottle-nav-left"
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
                className="bottle-nav-btn bottle-nav-right"
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
              className="bottle-track"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="bottle-cards">
                {bottleCategories.map((bottle, index) => (
                  <motion.div
                    key={bottle.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="bottle-card"
                    onMouseEnter={() => setActiveCard(bottle.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {/* Image */}
                    <Link to={`/products/bottle/${bottle.id}`}>
                      <div className="bottle-card-img-wrap">
                        <img
                          src={bottle.image}
                          alt={bottle.name}
                          draggable="false"
                        />
                        <div className="bottle-card-img-overlay" />
                        <span className="bottle-badge">{bottle.badge}</span>
                        <span className="bottle-color-dot">{bottle.color}</span>
                      </div>
                    </Link>

                    {/* Body */}
                    <div className="bottle-card-body">
                      <Link
                        to={`/products/bottle/${bottle.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="bottle-card-name">{bottle.name}</div>
                      </Link>
                      <p className="bottle-card-desc">{bottle.description}</p>

                      <Link
                        to={`/products/bottle/${bottle.id}`}
                        className="bottle-view-btn"
                      >
                        View Details →
                      </Link>
                    </div>

                    <div className="bottle-card-accent-line" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="bottle-dots">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`bottle-dot ${i === 0 ? "active" : ""}`}
              />
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
            <Link to="/products" className="bottle-all-btn">
              View All Bottles
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

export default BottleCategories;
