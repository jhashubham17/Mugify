import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: "🎨",
      title: "Creative Customization",
      description:
        "Transform your ideas into personalized products with our advanced customization technology.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description:
        "Quick processing times without compromising on quality. Your orders delivered promptly.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description:
        "Using only the finest materials and equipment for durable, vibrant customized products.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: "🤝",
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: "😊" },
    { number: "100,000+", label: "Products Customized", icon: "📦" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "99%", label: "Satisfaction Rate", icon: "❤️" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-24"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90"
          >
            Transforming ordinary items into personalized treasures since 2019.
            We're passionate about bringing your creative visions to life
            through customization.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-16"
      >
        {/* Company Story */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Welcome to{" "}
                  <span className="font-semibold text-blue-600">Mugify</span>!
                  What started as a small passion project in 2019 has grown into
                  a premier destination for personalized products.
                </p>
                <p>
                  We specialize in high-quality, custom products including
                  coffee mugs, water bottles, t-shirts, corporate gifts, and so
                  much more. Our mission is simple: to help you create unique
                  items that celebrate special moments, promote your brand, or
                  simply express your creativity.
                </p>
                <p>
                  Using state-of-the-art customization technology and premium
                  materials, we ensure every product meets our rigorous quality
                  standards. From corporate gifts to personal keepsakes, we make
                  it possible for everyone to create something truly special.
                </p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="text-center text-8xl mb-4">🏪</div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  Our Workshop
                </h3>
                <p className="text-gray-600 text-center">
                  Where creativity meets technology. Our modern facility houses
                  the latest customization equipment to bring your ideas to
                  life.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine passion, technology, and craftsmanship to deliver
              exceptional customized products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 mb-20 text-white"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90">
              These numbers tell the story of our commitment to excellence in
              customization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Customization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to transform your ideas into beautiful custom
              products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                1. Share Your Idea
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Send us your design, logo, or concept. Our team will help refine
                your vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                2. Design & Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We create a digital preview of your custom product for your
                approval.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-6">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                3. Production & Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We craft your custom product with care and deliver it to your
                doorstep.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={itemVariants}
          className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your creative vision to life. Browse
            our products or get in touch for custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59,130,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-full text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default About;
