import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  { name: "Delhi Government", category: "Government", icon: "🏛️" },
  { name: "Central Government", category: "Government", icon: "🇮🇳" },
  { name: "Indian Navy", category: "Defence", icon: "⚓" },
  { name: "Indian Army", category: "Defence", icon: "🎖️" },
  { name: "Delhi University", category: "Education", icon: "🎓" },
  { name: "Jawaharlal Nehru University", category: "Education", icon: "📚" },
  { name: "IIT Delhi", category: "Education", icon: "🏫" },
  { name: "Kendriya Vidyalaya", category: "School", icon: "🏫" },
  { name: "Ryan International School", category: "School", icon: "📖" },
  { name: "Tata Consultancy Services", category: "MNC", icon: "💼" },
  { name: "Infosys", category: "MNC", icon: "🌐" },
  { name: "Wipro", category: "MNC", icon: "💡" },
  { name: "HCL Technologies", category: "MNC", icon: "🖥️" },
  { name: "Reliance Industries", category: "Corporate", icon: "🏢" },
  { name: "HDFC Bank", category: "Finance", icon: "🏦" },
];

const categoryColors = {
  Government:
    "from-blue-500/30 to-blue-600/20 border-blue-500/40 text-blue-300",
  Defence:
    "from-emerald-500/30 to-emerald-600/20 border-emerald-500/40 text-emerald-300",
  Education:
    "from-purple-500/30 to-purple-600/20 border-purple-500/40 text-purple-300",
  School:
    "from-amber-500/30 to-amber-600/20 border-amber-500/40 text-amber-300",
  MNC: "from-cyan-500/30 to-cyan-600/20 border-cyan-500/40 text-cyan-300",
  Corporate:
    "from-orange-500/30 to-orange-600/20 border-orange-500/40 text-orange-300",
  Finance:
    "from-emerald-500/30 to-emerald-600/20 border-emerald-500/40 text-emerald-300",
};

function MarqueeRow({ items, direction = "left", speed = 30 }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative w-full py-2">
      {/* Fade masks - matching dark theme */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-4"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((partner, idx) => {
          const colorClass =
            categoryColors[partner.category] ||
            "from-slate-500/30 to-slate-600/20 border-slate-500/40 text-slate-300";
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl border bg-gradient-to-br ${colorClass} backdrop-blur-sm whitespace-nowrap transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
              style={{ minWidth: "220px" }}
            >
              <span className="text-2xl">{partner.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">
                  {partner.name}
                </p>
                <p className="text-white/40 text-xs font-medium mt-0.5">
                  {partner.category}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function TrustedPartners() {
  const row1 = partners.slice(0, 8);
  const row2 = partners.slice(7);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0a0a0f] to-[#12121a] overflow-hidden py-24 px-4"
    >
      {/* Background Effects - Matching website theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-30" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce opacity-20" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-500 rounded-full animate-ping opacity-30" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 max-w-4xl mx-auto">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-purple-400 text-xs font-semibold tracking-wider uppercase">
            Our Trusted Partners
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Trusted By{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative inline-block">
            India's Best
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="4"
              viewBox="0 0 200 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2 L200 2"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          From Government ministries to Defence forces, top universities to
          global MNCs — we've delivered quality print solutions across every
          sector.
        </motion.p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-5 mb-16">
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={28} />
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
      >
        {[
          { number: "50+", label: "Trusted Partners", icon: "🤝" },
          { number: "1000+", label: "Projects Completed", icon: "✅" },
          { number: "24/7", label: "Customer Support", icon: "💬" },
          { number: "100%", label: "Quality Guarantee", icon: "⭐" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              {stat.number}
            </div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 text-center"
      >
        <div className="inline-block">
          <p className="text-gray-500 text-sm mb-4 tracking-wide">
            Join 50+ organisations that trust us
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
            }}
          >
            <span className="relative z-10">Get a Free Quote</span>
            <svg
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </motion.div>

      {/* Keyframes */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
