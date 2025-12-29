import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import { motion } from "framer-motion";
import allProducts, { categories } from "../data/AllProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlCategory = params.get("category") || "all";
    setCategory(urlCategory);
    setProducts(allProducts);
  }, [location.search]);

  // Filter products based on category only
  const filteredProducts =
    category === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {category === "all"
            ? "Our Premium Collection"
            : categories.find((cat) => cat.value === category)?.label ||
              "Products"}
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {category === "all"
            ? "Discover our curated selection of high-quality, customizable products for every occasion"
            : `Explore our premium ${categories
                .find((cat) => cat.value === category)
                ?.label.toLowerCase()} collection`}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === cat.value
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Count */}
      <div className="mb-6 text-center">
        <p className="text-gray-500">
          Showing{" "}
          <span className="font-bold text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>
      </div>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            No Products Found
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            We couldn't find any products in this category. Please check back
            soon!
          </p>
          <button
            onClick={() => setCategory("all")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            View All Products
          </button>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </motion.div>
  );
};

export default Products;
