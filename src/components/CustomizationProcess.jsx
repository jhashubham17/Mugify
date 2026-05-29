import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomizationProcess = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Share Your Idea",
      description:
        "Tell us what you need — send your design, logo, or just a rough concept. Our team will help refine your vision.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "#8b5cf6",
    },
    {
      id: 2,
      number: "02",
      title: "Get Free Mockup",
      description:
        "We create a professional digital mockup of your design on your chosen product for your approval.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "#ec4899",
    },
    {
      id: 3,
      number: "03",
      title: "Approve & Produce",
      description:
        "Once you're happy with the mockup, we start production using our premium quality printing technology.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      color: "#10b981",
    },
    {
      id: 4,
      number: "04",
      title: "Quality Check",
      description:
        "Every single item undergoes thorough quality inspection before packaging to ensure perfection.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "#f59e0b",
    },
    {
      id: 5,
      number: "05",
      title: "Secure Packaging",
      description:
        "We pack your items with care using premium materials to ensure safe delivery to your doorstep.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      color: "#22d3ee",
    },
    {
      id: 6,
      number: "06",
      title: "Fast Delivery",
      description:
        "Your custom products are shipped quickly with real-time tracking available for all orders.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "#ef4444",
    },
  ];

  const benefits = [
    {
      title: "No Minimum Order",
      description:
        "Start with as few as 1 piece — perfect for samples or small events",
      icon: "🎯",
    },
    {
      title: "Free Design Help",
      description:
        "Our designers assist you in perfecting your artwork at no extra cost",
      icon: "🎨",
    },
    {
      title: "Fast Turnaround",
      description: "Most orders ship within 5-7 business days after approval",
      icon: "⚡",
    },
    {
      title: "100% Guarantee",
      description:
        "Not satisfied? We'll reprint or refund — no questions asked",
      icon: "✅",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .process-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
          padding: 80px 0 100px;
          overflow: hidden;
          position: relative;
        }

        .process-section::before {
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

        .process-label {
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

        .process-label::before,
        .process-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #7c3aed;
        }

        .process-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #f8f8fc;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .process-title span {
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .process-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: #6b6b80;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .step-card {
          background: #13131f;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .step-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167,139,250,0.25);
          box-shadow: 0 30px 50px rgba(0,0,0,0.4);
        }

        .step-number {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.5;
          font-family: 'Playfair Display', serif;
        }

        .benefit-card {
          background: rgba(19,19,31,0.6);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 20px;
          transition: all 0.3s ease;
          text-align: center;
        }

        .benefit-card:hover {
          background: rgba(139,92,246,0.1);
          border-color: rgba(139,92,246,0.2);
          transform: translateY(-4px);
        }

        .timeline-line {
          position: relative;
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #7c3aed, #ec4899, #7c3aed, transparent);
          transform: translateY(-50%);
          z-index: 0;
        }

        @media (max-width: 768px) {
          .timeline-line::before {
            display: none;
          }
        }
      `}</style>

      <section className="process-section">
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
            <div className="process-label">How It Works</div>
            <h2 className="process-title">
              Our <span>Customization Process</span>
            </h2>
            <p className="process-subtitle">
              From concept to delivery — we make custom printing simple, fast,
              and hassle-free
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="step-card group"
              >
                <div className="step-number">{step.number}</div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="timeline-line hidden lg:block relative mb-20 px-8"
          >
            <div className="flex justify-between items-center">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center relative z-10">
                  <div
                    className="w-3 h-3 rounded-full mx-auto"
                    style={{ background: step.color }}
                  ></div>
                  <p className="text-gray-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.title.split(" ")[0]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <div className="flex justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-6 mb-2">
                Why Businesses Love Working With Us
              </h3>
              <p className="text-gray-500 text-sm">
                Simple process, exceptional results, guaranteed satisfaction
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="benefit-card"
                >
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="font-semibold text-white text-sm mb-1">
                    {benefit.title}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {benefit.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 p-8 md:p-12 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Bring Your Ideas to Life?
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Get started today — send us your design and receive a free
                mockup within 24 hours
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Start Your Custom Order
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Browse Products
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free Design Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CustomizationProcess;
