import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const STATS = [
  { number: "500+", label: "Products" },
  { number: "50K+", label: "Happy Customers" },
  { number: "24/7", label: "Support" },
  { number: "Free", label: "Design Tools" },
];

const Banner = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const gridX = useTransform(springX, (v) => v * 0.015);
  const gridY = useTransform(springY, (v) => v * 0.015);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ background: "#080612" }}
    >
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #1a0a3c 0%, #080612 70%)",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Parallax grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage: `linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, #080612 100%)",
        }}
      />

      {/* Orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)",
          filter: "blur(1px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(219,39,119,0.14) 0%, transparent 70%)",
          filter: "blur(1px)",
        }}
        animate={{ x: [0, -50, 0], y: [0, -35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          top: "40%",
          left: "60%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating accent lines */}
      <motion.div
        className="absolute"
        style={{
          width: 1,
          height: 120,
          top: "12%",
          left: "18%",
          background:
            "linear-gradient(to bottom, transparent, rgba(139,92,246,0.5), transparent)",
        }}
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          width: 1,
          height: 80,
          bottom: "20%",
          right: "22%",
          background:
            "linear-gradient(to bottom, transparent, rgba(219,39,119,0.4), transparent)",
        }}
        animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
          style={{
            padding: "6px 16px",
            borderRadius: 100,
            border: "1px solid rgba(139,92,246,0.35)",
            background: "rgba(139,92,246,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#a78bfa",
              boxShadow: "0 0 8px #a78bfa",
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.06em",
              color: "#c4b5fd",
              textTransform: "uppercase",
            }}
          >
            Print On Demand Made Easy
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              color: "#f1ecff",
            }}
          >
            Create Your
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #c084fc 0%, #e879f9 40%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Unique Products
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(196,181,253,0.65)",
            maxWidth: 520,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Transform your ideas into reality. Design personalized mugs, t-shirts,
          gifts, and accessories that tell your unique story.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 32px",
                borderRadius: 12,
                border: "none",
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #4f46e5 100%)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                boxShadow:
                  "0 0 0 1px rgba(139,92,246,0.4), 0 8px 32px rgba(109,40,217,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                letterSpacing: "0.01em",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Start Customizing
              <svg
                width="16"
                height="16"
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
            </motion.button>
          </Link>

          <Link to="/how-it-works">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "13px 28px",
                borderRadius: 12,
                border: "1px solid rgba(139,92,246,0.3)",
                background: "rgba(139,92,246,0.06)",
                color: "#c4b5fd",
                fontWeight: 500,
                fontSize: 15,
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                letterSpacing: "0.01em",
              }}
            >
              How It Works →
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16"
          style={{
            background: "rgba(139,92,246,0.12)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "20px 16px",
                background: "rgba(8,6,18,0.7)",
                backdropFilter: "blur(12px)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #e9d5ff, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.2,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "rgba(167,139,250,0.55)",
                  marginTop: 4,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          style={{
            width: 24,
            height: 40,
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <motion.div
            style={{
              width: 3,
              height: 8,
              borderRadius: 2,
              background: "rgba(167,139,250,0.6)",
            }}
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
