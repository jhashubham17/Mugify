import { motion } from "framer-motion";

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
      link: "https://www.instagram.com/araipan_inspired?igsh=c3IwYzV3MGxoMGY3",
    },
    {
      name: "Twitter",
      icon: "🐦",
      color: "hover:text-sky-400",
      link: "https://www.instagram.com/araipan_inspired?igsh=c3IwYzV3MGxoMGY3",
    },
    {
      name: "YouTube",
      icon: "📺",
      color: "hover:text-red-400",
      link: "https://www.instagram.com/araipan_inspired?igsh=c3IwYzV3MGxoMGY3",
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

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Top Section - Mobile Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              {/* Logo */}
              <div className="flex-shrink-0 mb-4">
                <a href="/" className="flex items-center space-x-2">
                  <img
                    src="/Logo/Logo.jpeg"
                    alt="Logo"
                    className="h-10 md:h-12 w-auto object-contain rounded-full"
                  />
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Transform ordinary items into extraordinary personalized
                products. Your creativity, our quality - the perfect combination
                for unique gifts and custom items.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-blue-400">📧</span>
                <span className="truncate">araipaninspired@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-green-400">📞</span>
                <span>+91 9060917383</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-red-400">📍</span>
                <span>Delhi, India</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile: Quick Links and Popular Categories in Flex */}
          <div className="md:hidden">
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={link.link}
                      className="inline-block px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold mb-4 text-white">
                Popular Categories
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <a
                      href={category.link}
                      className="inline-block px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
                    >
                      {category.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Quick Links (Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Desktop: Popular Categories (Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <h4 className="text-xl font-bold mb-6 text-white">
              Popular Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <motion.li
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={category.link}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300"></span>
                    {category.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">
              Stay Connected
            </h4>

            {/* Newsletter */}
            <div className="mb-6 md:mb-8">
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                Get updates on new products and exclusive offers!
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 md:py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                Follow us on social media:
              </p>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-lg md:text-xl ${social.color} hover:bg-white/20 transition-all duration-300 group`}
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

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 md:mb-8"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base"
        >
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; 2025 Araipan Inspired. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-gray-400">
            <a
              href="/terms"
              className="hover:text-white transition-colors text-xs md:text-sm"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="hover:text-white transition-colors text-xs md:text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/cookies"
              className="hover:text-white transition-colors text-xs md:text-sm"
            >
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-400"
            >
              ❤️
            </motion.span>
            <span>in India</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Animation Elements (Hidden on Mobile) */}
      <div className="hidden md:block absolute top-10 left-10">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-8 h-8 text-2xl opacity-30"
        >
          ✨
        </motion.div>
      </div>
      <div className="hidden md:block absolute top-20 right-20">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="w-8 h-8 text-2xl opacity-30"
        >
          🎨
        </motion.div>
      </div>
      <div className="hidden md:block absolute bottom-20 left-1/4">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="w-8 h-8 text-2xl opacity-30"
        >
          🎁
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
