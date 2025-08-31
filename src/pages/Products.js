import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import { motion } from "framer-motion";
import allProducts, { categories } from "../data/AllProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(""); // 👈 New state
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlCategory = params.get("category") || "all";
    setCategory(urlCategory);

    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, [location.search]);

  useEffect(() => {
    let filtered = products;

    // Category filter
    if (category !== "all") {
      filtered = products.filter((p) => p.category === category);
    }

    // Search filter
    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting logic
    if (sortBy === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      filtered = [...filtered].sort((a, b) => b.id - a.id); // assuming id = latest
    } else if (sortBy === "nameAZ") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [category, search, products, sortBy]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto p-4"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        {category === "all"
          ? "All Products"
          : categories.find((cat) => cat.value === category)?.label ||
            "Products"}
      </h1>

      <p className="text-gray-600 mb-6 text-center">
        {category === "all"
          ? "Browse our full range of customizable products for every occasion."
          : `Explore our premium ${
              categories
                .find((cat) => cat.value === category)
                ?.label.toLowerCase() || "products"
            }.`}
      </p>

      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Sorting Select */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="nameAZ">Name: A - Z</option>
        </select>
      </div>

      {/* Products / No Result */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">
            No products found matching your criteria.
          </p>
          <button
            onClick={() => {
              setCategory("all");
              setSearch("");
              setSortBy("");
            }}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </motion.div>
  );
};

export default Products;
