import Button from "../components/Button";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ProductCategories from "../components/ProductCategories";
import { motion } from "framer-motion";
import CustomerReviews from "../components/CustomerReviews";
import PrintingTechnologies from "../components/PrintingTechnologiesCategories";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <Banner />
      <ProductCategories />
      <PrintingTechnologies />
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
