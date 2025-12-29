import Button from "../components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const categories = [
    {
      name: "Mugs",
      slug: "mug",
      icon: "☕",
      color: "from-amber-400 to-orange-500",
    },
    {
      name: "Bottles",
      slug: "bottle",
      icon: "🍶",
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "T-Shirts",
      slug: "t-shirt",
      icon: "👕",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Corporate Gifts",
      slug: "corporate-gift",
      icon: "🎁",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const printingMethods = [
    {
      name: "Heat Transfer Printing",
      description: "Durable prints with a soft feel, perfect for garments",
      icon: "👕",
    },
    {
      name: "DTF Printing",
      description: "Direct-to-film printing for detailed, colorful designs",
      icon: "🎞️",
    },
    {
      name: "DTG Printing",
      description: "Direct-to-garment printing for photorealistic designs",
      icon: "🖨️",
    },
    {
      name: "Screen Printing",
      description: "Classic technique for bold, opaque designs on dark fabrics",
      icon: "🖼️",
    },
    {
      name: "Laser Engraving",
      description: "Permanent, precise markings on various materials",
      icon: "⚡",
    },
    {
      name: "Pad Printing",
      description: "Versatile printing on irregularly shaped objects",
      icon: "🔄",
    },
    {
      name: "UV Printing",
      description:
        "Instant curing prints with vibrant colors on various surfaces",
      icon: "☀️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const cardHover = {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
            >
              Our Customized Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Discover our premium collection of customizable products. From
              everyday essentials to unique gifts, we have everything you need
              to express your creativity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
            >
              <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Premium Quality
              </span>
              <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Custom Printing
              </span>
              <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Fast Delivery
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-12 pt-8"
        >
          Product Categories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              variants={cardVariants}
              whileHover={cardHover}
              className="group"
            >
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-4xl mb-4 filter drop-shadow-sm"
                  >
                    {category.icon}
                  </motion.div>

                  {/* Category Name */}
                  <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors flex-grow">
                    {category.name}
                  </h3>

                  {/* Button */}
                  <Link
                    to={`/products?category=${category.slug}`}
                    className="w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${category.color} hover:shadow-lg text-white font-semibold py-3 px-6 rounded-xl border-0 transition-all duration-300 transform hover:-translate-y-0.5`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          View Products
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            →
                          </motion.span>
                        </span>
                      </Button>
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Printing Methods Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-100 to-gray-200 py-16"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Our Printing Techniques
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            We utilize state-of-the-art printing technologies to bring your
            designs to life with exceptional quality and precision.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {printingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {method.name}
                </h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Browse our complete collection and find the perfect products for
            your next customization project.
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Explore All Products
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
