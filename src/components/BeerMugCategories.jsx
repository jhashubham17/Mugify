import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BeerMugCategories = () => {
  const beerMugCategories = [
    {
      id: 1,
      name: "Beer Mug",
      image: "./MainMugImage/BeerMugImg.png",
      badge: "Best Seller",
      color: "Amber & Coral",
      description:
        "Radiant gradient like summer dusk, perfect for celebrations",
      accent: "#ff9a5e",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .beer-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
          padding: 80px 0 100px;
          overflow: hidden;
          position: relative;
        }

        .beer-section::before {
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

        .beer-label {
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

        .beer-label::before,
        .beer-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #7c3aed;
        }

        .beer-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #f8f8fc;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .beer-title span {
          font-style: italic;
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .beer-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: #6b6b80;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .beer-card {
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

        .beer-card:hover {
          transform: translateY(-10px);
          border-color: rgba(167,139,250,0.25);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.08);
        }

        .beer-img-wrap {
          position: relative;
          height: 280px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 16px;
        }

        .beer-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        .beer-card:hover .beer-img-wrap img {
          transform: scale(1.05);
        }

        .beer-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(19,19,31,0.95) 100%);
          pointer-events: none;
        }

        .beer-badge {
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

        .beer-color-dot {
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

        .beer-card-body {
          padding: 18px 20px 22px;
        }

        .beer-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #f0f0fa;
          margin-bottom: 6px;
          line-height: 1.3;
          text-align: center;
        }

        .beer-card-desc {
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

        .beer-view-btn {
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

        .beer-view-btn:hover {
          background: rgba(124,58,237,0.15);
          border-color: rgba(124,58,237,0.4);
          color: #c4b5fd;
        }

        .beer-card-accent {
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

        .beer-card:hover .beer-card-accent {
          transform: scaleX(1);
        }

        .center-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }
      `}</style>

      <section className="beer-section">
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
            <div className="beer-label">Bar Collection</div>
            <h2 className="beer-title">
              Premium <span>Beer Mug</span> for Every Occasion
            </h2>
            <p className="beer-subtitle">
              Discover our premium beer mug collection — vibrant design, premium
              quality, and perfect for parties, pubs, and all celebrations.
            </p>
          </motion.div>

          <div className="center-container">
            {beerMugCategories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="beer-card"
              >
                <Link to={`/products/beer-mug/${item.id}`}>
                  <div className="beer-img-wrap">
                    <img src={item.image} alt={item.name} draggable="false" />
                    <div className="beer-img-overlay" />
                    <span className="beer-badge">{item.badge}</span>
                    <span className="beer-color-dot">{item.color}</span>
                  </div>
                </Link>

                <div className="beer-card-body">
                  <Link
                    to={`/products/beer-mug/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="beer-card-name">{item.name}</div>
                  </Link>
                  <p className="beer-card-desc">{item.description}</p>

                  <Link
                    to={`/products/beer-mug/${item.id}`}
                    className="beer-view-btn"
                  >
                    View Details →
                  </Link>
                </div>

                <div className="beer-card-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BeerMugCategories;
