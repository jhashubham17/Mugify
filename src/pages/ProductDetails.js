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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [enquirySent, setEnquirySent] = useState(false);

  useEffect(() => {
    const foundProduct = allProducts.find((p) => p._id === id);
    setProduct(foundProduct || null);
  }, [id]);

  const getImagePath = (imagePath) => {
    if (!imagePath) return "/placeholder-image.jpg";
    if (imagePath.startsWith("http")) return imagePath;
    return `${process.env.PUBLIC_URL}${
      imagePath.startsWith("/") ? "" : "/"
    }${imagePath}`;
  };

  const validateMobileNumber = (number) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(number);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setMobileNumber("");
    setMobileError("");
  };

  const handleSendEnquiry = () => {
    if (!validateMobileNumber(mobileNumber)) {
      setMobileError("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    // Log enquiry details
    console.log(
      `Enquiry sent for ${quantity} units of ${product.name}, Mobile: ${mobileNumber}`
    );

    // Construct WhatsApp message
    const yourWhatsAppNumber = "+919060917383";
    const message = encodeURIComponent(
      `New Enquiry:\nProduct: ${product.name}\nQuantity: ${quantity}\nMobile: ${mobileNumber}`
    );
    const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Update UI
    setEnquirySent(true);
    setIsModalOpen(false);
    setTimeout(() => setEnquirySent(false), 3000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setMobileNumber("");
    setMobileError("");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse space-y-4 w-full max-w-2xl">
          <div className="h-96 bg-gray-200 rounded-xl"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-12 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  const images = [
    getImagePath(product.image),
    ...(product.additionalImages || []).map((img) => getImagePath(img)),
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to="/products"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Products
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-semibold truncate max-w-[150px] md:max-w-none">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div
              className="relative bg-white rounded-xl shadow-sm p-4 cursor-zoom-in overflow-hidden border border-gray-100"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <motion.img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-[350px] md:h-[450px] object-contain rounded-lg"
                animate={{ scale: isZoomed ? 1.8 : 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onError={(e) => {
                  e.target.src = `${process.env.PUBLIC_URL}/placeholder-image.jpg`;
                }}
              />
              {isZoomed && (
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                  Click to zoom out
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsZoomed(false);
                    }}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border transition-all duration-300 ${
                      selectedImage === index
                        ? "border-blue-500 ring-2 ring-blue-100 shadow-sm"
                        : "border-gray-200 hover:border-blue-300"
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
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                {product.name}
              </h1>
              {product.tag && (
                <span className="inline-block bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 py-1 rounded-full mt-2">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Price Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                ₹{product.price}
              </p>
              <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-0">
                <p>Inclusive of all taxes</p>
                <p>Free shipping on orders above ₹500</p>
              </div>
            </div>

            {/* Special Highlight for T-Shirts */}
            {product.category === "t-shirt" && (
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-4 md:p-5 rounded-xl shadow-sm">
                <h2 className="text-lg md:text-xl font-bold text-yellow-800 mb-3">
                  T-Shirt Highlights
                </h2>
                <div className="grid grid-cols-3 gap-2 md:gap-3 text-center">
                  <div className="p-2 md:p-3 bg-white rounded-lg shadow-xs border border-gray-100">
                    <span className="block text-xs font-medium text-gray-500">
                      GSM
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-800">
                      {product.GMS}
                    </span>
                  </div>
                  <div className="p-2 md:p-3 bg-white rounded-lg shadow-xs border border-gray-100">
                    <span className="block text-xs font-medium text-gray-500">
                      Size
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-800">
                      {product.Size}
                    </span>
                  </div>
                  <div className="p-2 md:p-3 bg-white rounded-lg shadow-xs border border-gray-100">
                    <span className="block text-xs font-medium text-gray-500">
                      Colour
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-800">
                      {product.Colour}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Collapsible Sections */}
            {[
              {
                title: "Product Description",
                isOpen: isDescriptionOpen,
                setIsOpen: setIsDescriptionOpen,
                content: product.description || "No description available.",
              },
              {
                title: "Product Specifications",
                isOpen: isSpecificationsOpen,
                setIsOpen: setIsSpecificationsOpen,
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {product.weight && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Weight:
                        </span>
                        <p className="text-gray-800 mt-1">{product.weight}</p>
                      </div>
                    )}
                    {product.material && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Material:
                        </span>
                        <p className="text-gray-800 mt-1">{product.material}</p>
                      </div>
                    )}
                    {product.size && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Size:
                        </span>
                        <p className="text-gray-800 mt-1">{product.size}</p>
                      </div>
                    )}
                    {product.brand && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Brand:
                        </span>
                        <p className="text-gray-800 mt-1">{product.brand}</p>
                      </div>
                    )}
                    {product.hsn && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          HSN:
                        </span>
                        <p className="text-gray-800 mt-1">{product.hsn}</p>
                      </div>
                    )}
                    {product.packaging && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Packaging:
                        </span>
                        <p className="text-gray-800 mt-1">
                          {product.packaging}
                        </p>
                      </div>
                    )}
                    {product.sku && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          SKU:
                        </span>
                        <p className="text-gray-800 mt-1">{product.sku}</p>
                      </div>
                    )}
                    {product.category && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Category:
                        </span>
                        <p className="text-gray-800 mt-1 capitalize">
                          {product.category}
                        </p>
                      </div>
                    )}
                    {product.tags && (
                      <div className="md:col-span-2 bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Tags:
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {product.tags.split(",").map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ),
              },
              {
                title: "Product Features",
                isOpen: isFeaturesOpen,
                setIsOpen: setIsFeaturesOpen,
                content:
                  product.features && product.features.length > 0 ? (
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null,
              },
            ].map(
              ({ title, isOpen, setIsOpen, content }) =>
                content && (
                  <div
                    key={title}
                    className="border border-gray-200 rounded-xl bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-4 py-3 text-left font-semibold text-gray-800 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base">{title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
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
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-3 text-gray-600 leading-relaxed text-sm">
                            {content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
            )}

            {/* Quantity Selector */}
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="font-semibold text-gray-800 text-base">
                  Custom Quantity (Min. 50):
                </span>
                <div className="flex items-center border border-gray-300 rounded-full bg-white shadow-xs">
                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.max(50, prev - 50))
                    }
                    disabled={quantity <= 50}
                    className={`px-3 py-1.5 text-base font-medium transition-colors rounded-l-full ${
                      quantity <= 50
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-base font-semibold min-w-[80px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 50)}
                    className="px-3 py-1.5 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors rounded-r-full"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Bulk Order Info */}
            <div className="bg-blue-50 p-3 rounded-xl text-center border border-blue-100">
              <p className="text-blue-800 text-sm font-medium">
                Need a Bulk Order? Call{" "}
                <a
                  href="tel:9060917383"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  9060917383
                </a>
              </p>
            </div>

            {/* Enquiry Button */}
            <div className="sticky bottom-4 z-10 lg:static">
              <motion.button
                onClick={handleOpenModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300 text-base"
                aria-label="Open enquiry form"
              >
                Send Enquiry
              </motion.button>
              {enquirySent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition
                  className="text-green-600 mt-3 text-center font-medium"
                >
                  Thank you for your enquiry! We'll contact you shortly.
                </motion.p>
              )}
            </div>
          </div>
        </div>

        {/* Enquiry Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Enquiry
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={product.name}
                      readOnly
                      className="mt-1 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={quantity}
                      readOnly
                      className="mt-1 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        setMobileError("");
                      }}
                      placeholder="Enter 10-digit mobile number"
                      className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        mobileError
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-blue-500"
                      }`}
                      aria-describedby={
                        mobileError ? "mobile-error" : undefined
                      }
                    />
                    {mobileError && (
                      <p
                        id="mobile-error"
                        className="mt-1 text-sm text-red-500"
                      >
                        {mobileError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Cancel enquiry"
                  >
                    Cancel
                  </button>
                  <motion.button
                    onClick={handleSendEnquiry}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
                    aria-label="Submit enquiry"
                  >
                    Submit Enquiry
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductDetails;
