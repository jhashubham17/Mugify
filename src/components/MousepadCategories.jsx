import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MousepadCategories = () => {
  const mousepadCategories = [
    {
      id: 1,
      name: "7 by 9",
      image: "MainMugImage/Mousepad.jpg",
      badge: "Best Seller",
      color: "Stealth Black",
      description:
        "Smooth gliding surface with anti-fray stitching, perfect for gamers and professionals",
      accent: "#4f46e5",
    },
    {
      id: 2,
      name: "12 by 30",
      image: "MainMugImage/Mousepad.jpg",
      badge: "Best Seller",
      color: "Stealth Black",
      description:
        "Smooth gliding surface with anti-fray stitching, perfect for gamers and professionals",
      accent: "#4f46e5",
    },
    {
      id: 3,
      name: "Custom Size",
      image: "MainMugImage/Mousepad.jpg",
      badge: "Best Seller",
      color: "Stealth Black",
      description:
        "Smooth gliding surface with anti-fray stitching, perfect for gamers and professionals",
      accent: "#4f46e5",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .mousepad-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
          padding: 80px 0 100px;
          overflow: hidden;
          position: relative;
        }

        .mousepad-section::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(ellipse, rgba(79,70,229,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .mousepad-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4f46e5;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .mousepad-label::before,
        .mousepad-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #4f46e5;
        }

        .mousepad-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #f8f8fc;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .mousepad-title span {
          font-style: italic;
          background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mousepad-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: #6b6b80;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .mousepad-card {
          width: 320px;
          background: #13131f;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          margin: 0 auto;
        }

        .mousepad-card:hover {
          transform: translateY(-10px);
          border-color: rgba(129,140,248,0.25);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(79,70,229,0.08);
        }

        .mousepad-img-wrap {
          position: relative;
          height: 280px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 16px;
        }

        .mousepad-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        .mousepad-card:hover .mousepad-img-wrap img {
          transform: scale(1.05);
        }

        .mousepad-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(19,19,31,0.95) 100%);
          pointer-events: none;
        }

        .mousepad-badge {
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

        .mousepad-color-dot {
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

        .mousepad-card-body {
          padding: 18px 20px 22px;
        }

        .mousepad-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #f0f0fa;
          margin-bottom: 6px;
          line-height: 1.3;
          text-align: center;
        }

        .mousepad-card-desc {
          font-size: 12.5px;
          font-weight: 300;
          color: #5a5a70;
          line-height: 1.6;
          margin-bottom: 14px;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .mousepad-view-btn {
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

        .mousepad-view-btn:hover {
          background: rgba(79,70,229,0.15);
          border-color: rgba(79,70,229,0.4);
          color: #a5b4fc;
        }

        .mousepad-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #4f46e5, #c084fc);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .mousepad-card:hover .mousepad-card-accent {
          transform: scaleX(1);
        }

        .center-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }
      `}</style>

      <section className="mousepad-section">
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "52px" }}
          >
            <div className="mousepad-label">Gaming Gear</div>
            <h2 className="mousepad-title">
              Precision <span>Mouse Pads</span> for Every Setup
            </h2>
            <p className="mousepad-subtitle">
              Discover our premium mouse pad collection — smooth gliding,
              anti-slip base, and perfect for gaming and work.
            </p>
          </motion.div>

          <div className="center-container">
            {mousepadCategories.map((mousepad, index) => (
              <motion.div
                key={mousepad.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="mousepad-card"
              >
                <Link to={`/products/mousepad/${mousepad.id}`}>
                  <div className="mousepad-img-wrap">
                    <img
                      src={mousepad.image}
                      alt={mousepad.name}
                      draggable="false"
                    />
                    <div className="mousepad-img-overlay" />
                    <span className="mousepad-badge">{mousepad.badge}</span>
                    <span className="mousepad-color-dot">{mousepad.color}</span>
                  </div>
                </Link>

                <div className="mousepad-card-body">
                  <Link
                    to={`/products/mousepad/${mousepad.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="mousepad-card-name">{mousepad.name}</div>
                  </Link>
                  <p className="mousepad-card-desc">{mousepad.description}</p>

                  <Link
                    to={`/products/mousepad/${mousepad.id}`}
                    className="mousepad-view-btn"
                  >
                    View Details →
                  </Link>
                </div>

                <div className="mousepad-card-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MousepadCategories;
