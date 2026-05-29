import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const BalloonCategories = () => {
  const balloonCategories = [
    {
      id: 1,
      name: "Balloon",
      image: "MainMugImage/Ballons.jpeg",
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
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Fredoka+One&display=swap');

        .balloon-section {
          font-family: 'Quicksand', sans-serif;
          background: linear-gradient(145deg, #f0f7ff 0%, #ffe6f0 100%);
          padding: 80px 0 100px;
          overflow: hidden;
          position: relative;
        }

        .balloon-section::before {
          content: '🎈';
          position: absolute;
          top: 20px;
          left: 10%;
          font-size: 60px;
          opacity: 0.1;
          animation: floatAround 20s infinite ease-in-out;
        }

        .balloon-section::after {
          content: '🎈';
          position: absolute;
          bottom: 20px;
          right: 10%;
          font-size: 80px;
          opacity: 0.08;
          animation: floatAround 25s infinite reverse ease-in-out;
        }

        @keyframes floatAround {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        .balloon-label {
          font-family: 'Quicksand', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #ec4899;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .balloon-label::before,
        .balloon-label::after {
          content: '🎈';
          font-size: 14px;
          letter-spacing: 0;
        }

        .balloon-title {
          font-family: 'Fredoka One', cursive;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 400;
          color: #1e1b4b;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .balloon-title span {
          background: linear-gradient(135deg, #ec4899 0%, #f97316 50%, #eab308 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .balloon-subtitle {
          font-size: 16px;
          font-weight: 400;
          color: #6b7280;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .balloon-card {
          width: 320px;
          background: white;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          cursor: pointer;
          margin: 0 auto;
        }

        .balloon-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px -12px rgba(236,72,153,0.25);
        }

        .balloon-img-wrap {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%);
        }

        .balloon-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .balloon-card:hover .balloon-img-wrap img {
          transform: scale(1.08);
        }

        .balloon-img-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, transparent 40%, rgba(0,0,0,0.1) 100%);
          pointer-events: none;
        }

        .balloon-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #fff;
          padding: 5px 12px;
          border-radius: 30px;
          background: linear-gradient(135deg, #ec4899, #f97316);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .balloon-color-dot {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 10px;
          font-weight: 600;
          color: #374151;
          padding: 5px 12px;
          border-radius: 30px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(4px);
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }

        .balloon-card-body {
          padding: 20px 18px 22px;
        }

        .balloon-card-name {
          font-family: 'Fredoka One', cursive;
          font-size: 20px;
          font-weight: 400;
          color: #1f2937;
          margin-bottom: 8px;
          line-height: 1.3;
          text-align: center;
        }

        .balloon-card-desc {
          font-size: 13px;
          font-weight: 400;
          color: #6b7280;
          line-height: 1.55;
          margin-bottom: 20px;
          text-align: center;
        }

        .balloon-view-btn {
          display: block;
          width: 100%;
          padding: 12px 0;
          border-radius: 40px;
          background: linear-gradient(135deg, #fdf2f8 0%, #fef9c3 100%);
          border: none;
          color: #ec4899;
          font-family: 'Quicksand', sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .balloon-view-btn:hover {
          background: linear-gradient(135deg, #ec4899, #f97316);
          color: white;
          transform: scale(0.98);
        }

        .balloon-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ec4899, #f97316, #eab308);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .balloon-card:hover .balloon-card-accent {
          transform: scaleX(1);
        }

        .floating-balloon-1 {
          position: absolute;
          bottom: -50px;
          left: 5%;
          font-size: 40px;
          opacity: 0.15;
          animation: floatUp 18s infinite ease-in-out;
          pointer-events: none;
        }

        .floating-balloon-2 {
          position: absolute;
          top: -30px;
          right: 8%;
          font-size: 55px;
          opacity: 0.1;
          animation: floatUp 22s infinite reverse ease-in-out;
          pointer-events: none;
        }

        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-40px) rotate(8deg); opacity: 0.2; }
          100% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
        }

        .center-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }
      `}</style>

      <section className="balloon-section">
        <div className="floating-balloon-1">🎈</div>
        <div className="floating-balloon-2">🎈</div>

        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "52px" }}
          >
            <div className="balloon-label">Party Collection</div>
            <h2 className="balloon-title">
              Floating <span>Balloons</span> for Every Celebration
            </h2>
            <p className="balloon-subtitle">
              Discover our magical balloon collection — vibrant colors, premium
              quality, and perfect for birthdays, weddings, and all festive
              moments.
            </p>
          </motion.div>

          <div className="center-container">
            {balloonCategories.map((balloon, index) => (
              <motion.div
                key={balloon.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="balloon-card"
              >
                <Link to={`/products/balloon/${balloon.id}`}>
                  <div className="balloon-img-wrap">
                    <img
                      src={balloon.image}
                      alt={balloon.name}
                      draggable="false"
                    />
                    <div className="balloon-img-overlay" />
                    <span className="balloon-badge">{balloon.badge}</span>
                    <span className="balloon-color-dot">{balloon.color}</span>
                  </div>
                </Link>

                <div className="balloon-card-body">
                  <Link
                    to={`/products/balloon/${balloon.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="balloon-card-name">{balloon.name}</div>
                  </Link>
                  <p className="balloon-card-desc">{balloon.description}</p>

                  <Link
                    to={`/products/balloon/${balloon.id}`}
                    className="balloon-view-btn"
                  >
                    View Details →
                  </Link>
                </div>

                <div className="balloon-card-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BalloonCategories;
