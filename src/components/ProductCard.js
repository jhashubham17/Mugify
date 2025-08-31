import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-200 rounded-xl p-4 bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
        {product.name}
      </h3>

      <p className="text-xl font-bold text-blue-600 mb-4">₹{product.price}</p>

      <Link
        to={`/product/${product._id}`}
        className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default ProductCard;
