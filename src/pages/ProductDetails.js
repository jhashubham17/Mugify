import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import allProducts from "../data/AllProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(50);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);

  useEffect(() => {
    const foundProduct = allProducts.find((p) => p._id === id);
    setProduct(foundProduct || null);
  }, [id]);

  // Function to get correct image path
  const getImagePath = (imagePath) => {
    if (!imagePath) return "/placeholder-image.jpg";

    // If it's already a full URL (http or https), use it directly
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // If it's a relative path, prepend with public URL
    return `${process.env.PUBLIC_URL}${
      imagePath.startsWith("/") ? "" : "/"
    }${imagePath}`;
  };

  const handleSendEnquiry = () => {
    // Here you would typically send the enquiry to your backend
    console.log(`Enquiry sent for ${quantity} units of ${product.name}`);
    setEnquirySent(true);
    setTimeout(() => setEnquirySent(false), 3000);
  };

  // Predefined quantity options
  const quantityOptions = [50, 100, 150, 200];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Create array of images (main image + additional images if available)
  const images = [
    getImagePath(product.image),
    ...(product.additionalImages || []).map((img) => getImagePath(img)),
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mx-2">
              <Link
                to="/products"
                className="hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
            </li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image with Zoom */}
            <div
              className="bg-gray-100 rounded-lg p-4 relative cursor-zoom-in overflow-hidden"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <motion.img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
                animate={{
                  scale: isZoomed ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.target.src = `${process.env.PUBLIC_URL}/placeholder-image.jpg`;
                }}
              />
              {isZoomed && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  Click to zoom out
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsZoomed(false);
                    }}
                    className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                      selectedImage === index
                        ? "border-blue-600 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `${process.env.PUBLIC_URL}/placeholder-image.jpg`;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              {product.tag && (
                <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Price and Add to Cart Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
              {/* Price */}
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold text-blue-600">
                  ₹{product.price}
                </p>
              </div>
            </div>

            {/* Collapsible Description */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span>Product Description</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isDescriptionOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isDescriptionOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {product.description || "No description available."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collapsible Specifications */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setIsSpecificationsOpen(!isSpecificationsOpen)}
                className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span>Product Specifications</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isSpecificationsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isSpecificationsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        {product.weight && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              Weight:
                            </span>
                            <p className="text-gray-800">{product.weight}</p>
                          </div>
                        )}
                        {product.material && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              Material:
                            </span>
                            <p className="text-gray-800">{product.material}</p>
                          </div>
                        )}
                        {product.size && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              Size:
                            </span>
                            <p className="text-gray-800">{product.size}</p>
                          </div>
                        )}
                        {product.brand && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              Brand:
                            </span>
                            <p className="text-gray-800">{product.brand}</p>
                          </div>
                        )}
                        {product.hsn && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              HSN:
                            </span>
                            <p className="text-gray-800">{product.hsn}</p>
                          </div>
                        )}
                        {product.packaging && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              Packaging:
                            </span>
                            <p className="text-gray-800">{product.packaging}</p>
                          </div>
                        )}
                        {product.sku && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              SKU:
                            </span>
                            <p className="text-gray-800">{product.sku}</p>
                          </div>
                        )}
                        {product.category && (
                          <div>
                            <span className="font-semibold text-gray-600">
                              Category:
                            </span>
                            <p className="text-gray-800 capitalize">
                              {product.category}
                            </p>
                          </div>
                        )}
                        {product.tags && (
                          <div className="md:col-span-2">
                            <span className="font-semibold text-gray-600">
                              Tags:
                            </span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {product.tags.split(",").map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                                >
                                  {tag.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collapsible Features */}
            {product.features && product.features.length > 0 && (
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span>Product Features</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isFeaturesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isFeaturesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-800 block mb-3"></span>

              {/* Manual quantity controls */}
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  Custom Quantity:
                </span>
                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.max(50, prev - 50))
                    }
                    disabled={quantity <= 50}
                    className={`px-3 py-2 transition-colors ${
                      quantity <= 50
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-lg font-semibold min-w-[80px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 50)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Bulk Order Info */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold text-center">
                Bulk Order? Call{" "}
                <span className="text-blue-600">9060917383</span>
              </p>
            </div>

            {/* Send Enquiry Button */}
            <div>
              <motion.button
                onClick={handleSendEnquiry}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
              >
                {enquirySent ? "Enquiry Sent!" : "Send Enquiry"}
              </motion.button>

              {enquirySent && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 mt-3 text-center"
                >
                  Thank you for your enquiry! We'll contact you shortly.
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
