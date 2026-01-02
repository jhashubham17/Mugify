import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  Scale,
  Ruler,
  Tag,
  ShoppingBag,
  Truck,
  Shield,
  Printer,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Palette,
  Coffee,
  Info,
  Box,
} from "lucide-react";
import allProducts from "../data/AllProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(50);
  const [activeTab, setActiveTab] = useState("description");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [enquirySent, setEnquirySent] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

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

    // Get charges from product data
    const printingCharge = parseInt(product.printingCharge || "0");
    const packagingCharge = parseInt(product.packingCharge || "0");
    const totalWithCharges =
      (product.price + printingCharge + packagingCharge) * quantity;

    const message = encodeURIComponent(
      `🛍️ *NEW PRODUCT ENQUIRY*\n\n` +
        `*Product:* ${product.name}\n` +
        `*Quantity:* ${quantity} units\n` +
        `*Base Price:* ₹${product.price} per unit\n` +
        `*Printing Charge:* ₹${printingCharge} per unit\n` +
        `*Packaging Charge:* ₹${packagingCharge} per unit\n` +
        `*Total Price per unit:* ₹${
          product.price + printingCharge + packagingCharge
        }\n` +
        `*Total Amount:* ₹${totalWithCharges}\n` +
        `*Mobile:* ${mobileNumber}\n\n` +
        `Please contact me for this bulk order.`
    );
    const whatsappUrl = `https://wa.me/919060917383?text=${message}`;

    window.open(whatsappUrl, "_blank");

    setEnquirySent(true);
    setIsModalOpen(false);
    setTimeout(() => setEnquirySent(false), 3000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="animate-pulse space-y-4 w-full max-w-2xl">
          <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl"></div>
          <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl w-3/4"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl w-1/2"></div>
          <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl w-1/4"></div>
        </div>
      </div>
    );
  }

  const images = [
    getImagePath(product.image),
    ...(product.additionalImages || []).map((img) => getImagePath(img)),
  ];

  const tabs = [
    { id: "description", label: "Description", icon: ShoppingBag },
    { id: "specifications", label: "Specifications", icon: Package },
    { id: "features", label: "Features", icon: CheckCircle },
  ];

  const specificationItems = [
    { icon: Tag, label: "SKU", value: product.sku },
    { icon: Scale, label: "Weight", value: product.weight },
    { icon: Ruler, label: "Size", value: product.size },
    { icon: Package, label: "Material", value: product.material },
    { icon: Printer, label: "Print Type", value: product.print },
    { icon: Tag, label: "Brand", value: product.brand },
    { icon: Box, label: "Packaging", value: product.packaging },
    { icon: Coffee, label: "Capacity", value: product.capacity },
    { icon: Palette, label: "Color/Finish", value: product.paint },
  ].filter((item) => item.value);

  // Get charges from product data
  const printingCharge = parseInt(product.printingCharge || "0");
  const packagingCharge = parseInt(product.packingCharge || "0");
  const totalPerUnit = product.price + printingCharge + packagingCharge;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <AnimatePresence>
        {enquirySent && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Enquiry sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb - Made more subtle */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-300">›</li>
            <li>
              <Link
                to="/products"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                Products
              </Link>
            </li>
            <li className="text-gray-300">›</li>
            <li className="text-gray-700 font-medium truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Product Images - Made more compact */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div
                className="relative w-full h-[350px] cursor-zoom-in rounded-lg overflow-hidden"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-contain transition-transform duration-500 ${
                    isZoomed ? "scale-125" : "scale-100"
                  }`}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/placeholder-image.jpg`;
                  }}
                />
                {isZoomed && (
                  <div className="absolute top-3 right-3 bg-black/60 text-white px-2.5 py-1 rounded-full text-xs backdrop-blur-sm">
                    Click to zoom out
                  </div>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsZoomed(false);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border transition-all ${
                      selectedImage === index
                        ? "border-blue-500 ring-2 ring-blue-100"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details - Better spacing */}
          <div className="space-y-6">
            {/* Header with subtle divider */}
            <div className="pb-4 border-b border-gray-100">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
            </div>

            {/* Price Section - More compact design */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
              <div className="mb-3">
                <p className="text-xs text-gray-600 mb-1">Base Product Price</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-600 ml-2">/unit</span>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Printer className="w-3.5 h-3.5 text-purple-500" />
                    <span className="text-gray-700">Printing Charge</span>
                  </div>
                  <span className="font-medium">+ ₹{printingCharge}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Box className="w-3.5 h-3.5 text-orange-500" />
                    <span className="text-gray-700">Packaging Charge</span>
                  </div>
                  <span className="font-medium">+ ₹{packagingCharge}</span>
                </div>
              </div>

              <div className="border-t border-blue-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    Total per unit
                  </span>
                  <span className="text-xl font-bold text-blue-700">
                    ₹{totalPerUnit}
                  </span>
                </div>
              </div>

              {printingCharge > 0 || packagingCharge > 0 ? (
                <div className="flex items-start gap-1.5 mt-3 pt-3 border-t border-blue-200">
                  <Info className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-700">
                    Printing and packaging charges apply per unit
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-1.5 mt-3 pt-3 border-t border-blue-200">
                  <Info className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-green-700">
                    Printing and packaging included in base price
                  </p>
                </div>
              )}
            </div>

            {/* Quantity Selector - More elegant */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="mb-3">
                <p className="font-semibold text-gray-900">Select Quantity</p>
                <p className="text-xs text-gray-500">Minimum order: 50 units</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setQuantity((prev) => Math.max(50, prev - 50))}
                  disabled={quantity <= 50}
                  className={`w-10 h-10 flex items-center justify-center rounded-l-lg border border-r-0 transition-colors ${
                    quantity <= 50
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  -
                </button>
                <div className="w-20 h-10 flex items-center justify-center border-y bg-white">
                  <span className="font-bold text-gray-900">{quantity}</span>
                </div>
                <button
                  onClick={() => setQuantity((prev) => prev + 50)}
                  className="w-10 h-10 flex items-center justify-center rounded-r-lg border border-l-0 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
                <span className="ml-3 text-gray-600 text-sm">units</span>
              </div>
            </div>

            {/* Tabs - Cleaner design */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="flex">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="p-4">
                <AnimatePresence mode="wait">
                  {activeTab === "description" && (
                    <motion.div
                      key="description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {product.description}
                    </motion.div>
                  )}

                  {activeTab === "specifications" && (
                    <motion.div
                      key="specifications"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {specificationItems.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center">
                              <item.icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-gray-500 truncate">
                                {item.label}
                              </p>
                              <p className="font-medium text-gray-900 truncate">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        ))}
                        {/* Add printing and packaging charges to specifications */}
                        {printingCharge > 0 && (
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center">
                              <Printer className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-gray-500 truncate">
                                Printing Charge
                              </p>
                              <p className="font-medium text-gray-900 truncate">
                                ₹{printingCharge} per unit
                              </p>
                            </div>
                          </div>
                        )}
                        {packagingCharge > 0 && (
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-8 h-8 rounded-md bg-orange-100 flex items-center justify-center">
                              <Box className="w-4 h-4 text-orange-600" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-gray-500 truncate">
                                Packaging Charge
                              </p>
                              <p className="font-medium text-gray-900 truncate">
                                ₹{packagingCharge} per unit
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2"
                    >
                      {product.features?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Benefits - More compact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded-lg border border-gray-100 text-center">
                <Truck className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-900">
                  Free Shipping
                </p>
                <p className="text-[10px] text-gray-500">Above ₹500</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 text-center">
                <Shield className="w-6 h-6 text-green-500 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-900">
                  Quality Assured
                </p>
                <p className="text-[10px] text-gray-500">Premium Materials</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 text-center">
                <Printer className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-900">
                  Custom Print
                </p>
                <p className="text-[10px] text-gray-500">
                  {product.print || "Available"}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 text-center">
                <MessageCircle className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-900">
                  24/7 Support
                </p>
                <p className="text-[10px] text-gray-500">Call 9060917383</p>
              </div>
            </div>

            {/* CTA Buttons - Better spacing */}
            <div className="space-y-3">
              <motion.button
                onClick={handleOpenModal}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send Bulk Enquiry
              </motion.button>

              <a
                href="tel:9060917383"
                className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: 9060917383
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal - Cleaner design */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Send Enquiry
                </h3>
                <p className="text-sm text-gray-600">
                  We'll contact you shortly
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Product</p>
                  <p className="font-medium text-gray-900">{product.name}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-medium">₹{product.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Printing</span>
                    <span className="font-medium">+ ₹{printingCharge}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Packaging</span>
                    <span className="font-medium">+ ₹{packagingCharge}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-medium">
                      <span>Total per unit</span>
                      <span>₹{totalPerUnit}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-600">{quantity} units</span>
                      <span className="font-bold text-green-700">
                        ₹{totalPerUnit * quantity}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                      setMobileError("");
                    }}
                    placeholder="10-digit number"
                    className={`w-full px-3 py-2.5 text-sm rounded-lg border focus:outline-none focus:ring-1 ${
                      mobileError
                        ? "border-red-400 focus:ring-red-400"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {mobileError && (
                    <p className="mt-1 text-xs text-red-500">{mobileError}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Cancel
                </button>
                <motion.button
                  onClick={handleSendEnquiry}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-sm"
                >
                  Send via WhatsApp
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
