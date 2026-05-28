import Button from "../components/Button";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ProductCategories from "../components/ProductCategories";
import { motion } from "framer-motion";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <Banner />
      <ProductCategories />

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
            designs to life with exceptional quality and precision, perfect for
            all product types including eco-friendly items, apparel, and
            promotional items.
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

      <CustomerReviews />

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
            Browse our complete collection including mugs, bottles, pens,
            apparel, eco-friendly items, and promotional products for your next
            customization project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
