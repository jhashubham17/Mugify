import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "📷",
      color: "hover:text-pink-400",
      link: "https://www.instagram.com/araipan_inspired?igsh=c3IwYzV3MGxoMGY3",
    },
    {
      name: "Facebook",
      icon: "📘",
      color: "hover:text-blue-400",
      link: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      icon: "🐦",
      color: "hover:text-sky-400",
      link: "https://twitter.com/",
    },
    {
      name: "YouTube",
      icon: "📺",
      color: "hover:text-red-400",
      link: "https://youtube.com/",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      color: "hover:text-blue-500",
      link: "https://linkedin.com/",
    },
    {
      name: "Pinterest",
      icon: "📌",
      color: "hover:text-red-500",
      link: "https://pinterest.com/",
    },
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
    { name: "Privacy Policy", link: "/privacy" },
  ];

  const categories = [
    { name: "Custom Mugs", link: "/products?category=mug" },
    { name: "T-Shirts", link: "/products?category=t-shirt" },
    { name: "Bottles", link: "/products?category=bottle" },
    { name: "Corporate Gifts", link: "/products?category=corporate-gift" },
    { name: "Eco Friendly", link: "/products?category=eco-friendly" },
    { name: "Metal Pens", link: "/products?category=metal-pen" },
  ];

  const services = [
    { name: "Custom Printing", link: "/services/printing" },
    { name: "Bulk Orders", link: "/services/bulk" },
    { name: "Design Support", link: "/services/design" },
    { name: "Express Delivery", link: "/services/delivery" },
    { name: "Wholesale", link: "/services/wholesale" },
    { name: "Corporate Gifting", link: "/services/corporate" },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[rgba(255,255,255,0.05)] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        .footer-section {
          font-family: 'DM Sans', sans-serif;
        }
        
        .footer-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/3 to-pink-600/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative footer-section container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section - 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img
                    src="/Logo/Logo.jpeg"
                    alt="Araipan Inspired"
                    className="h-12 w-auto object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">Araipan</span>
                  <span className="text-purple-400 font-bold text-xl">
                    {" "}
                    Inspired
                  </span>
                  <p className="text-gray-500 text-xs">
                    Custom Printing Experts
                  </p>
                </div>
              </Link>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Transform ordinary items into extraordinary personalized products.
              Your creativity, our quality — the perfect combination for unique
              gifts and custom items.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <span className="text-purple-400 text-sm">📧</span>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  araipaninspired@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <span className="text-green-400 text-sm">📞</span>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  +91 90609 17383
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <span className="text-red-400 text-sm">📍</span>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  Delhi, India (Worldwide Shipping)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="footer-heading text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.link}
                    className="footer-link text-gray-400 hover:text-white text-sm transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="footer-heading text-lg font-semibold text-white mb-6">
              Popular Categories
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  to={category.link}
                  className="footer-link text-gray-400 hover:text-white text-sm transition-colors py-1"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter & Social - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="footer-heading text-lg font-semibold text-white mb-6">
              Stay Connected
            </h4>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">
                Get updates on new products and exclusive offers!
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#13131f] border border-[rgba(255,255,255,0.08)] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Follow us on:</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`w-9 h-9 bg-[#13131f] border border-[rgba(255,255,255,0.08)] rounded-xl flex items-center justify-center text-base ${social.color} hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group`}
                    title={social.name}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-10 pb-8 border-b border-[rgba(255,255,255,0.05)]"
        >
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div>
              <h4 className="footer-heading text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Our Services
              </h4>
              <div className="flex flex-wrap gap-4">
                {services.map((service, index) => (
                  <Link
                    key={service.name}
                    to={service.link}
                    className="text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">Secure Payments:</span>
              <div className="flex gap-1">
                <span className="text-gray-400 text-lg">💳</span>
                <span className="text-gray-400 text-lg">💵</span>
                <span className="text-gray-400 text-lg">🏦</span>
                <span className="text-gray-400 text-lg">📱</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <div className="text-gray-500 text-center md:text-left text-xs">
            <p>© 2025 Araipan Inspired. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              to="/sitemap"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Sitemap
            </Link>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>in India</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-10 opacity-20 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-3xl"
        >
          ✨
        </motion.div>
      </div>
      <div className="absolute top-20 right-10 opacity-20 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          className="text-3xl"
        >
          🎨
        </motion.div>
      </div>
      <div className="absolute bottom-32 right-20 opacity-15 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="text-2xl"
        >
          🎁
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
