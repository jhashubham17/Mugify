import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, getTotal, clearCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-8"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
          >
            Shopping Cart
          </motion.h1>
          <p className="text-gray-600">Review and manage your items</p>
        </div>

        <AnimatePresence>
          {cart.length === 0 ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto"
            >
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/products">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl">
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                      Cart Items ({cart.length})
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1"
                    >
                      <span>🗑️</span>
                      Clear Cart
                    </button>
                  </div>

                  <div className="space-y-4">
                    <AnimatePresence>
                      {cart.map((item) => (
                        <CartItem key={item._id} item={item} />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">₹{getTotal()}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {getTotal() > 5000 ? "Free" : "₹100"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">
                        ₹{(getTotal() * 0.18).toFixed(2)}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-blue-600">
                          ₹
                          {(
                            getTotal() +
                            (getTotal() > 5000 ? 0 : 100) +
                            getTotal() * 0.18
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Free Shipping Progress */}
                  {getTotal() < 5000 && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          Free shipping on orders over ₹5000
                        </span>
                        <span className="font-semibold">
                          ₹{5000 - getTotal()} more needed
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(getTotal() / 5000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Checkout Button */}
                  <Link to="/checkout">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl mb-4">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  {/* Continue Shopping */}
                  <Link to="/products">
                    <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 font-semibold py-3 px-6 rounded-xl">
                      Continue Shopping
                    </Button>
                  </Link>

                  {/* Security Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">🔒</span>
                      <span>Secure checkout. SSL encrypted.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recommended Products (optional) */}
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Placeholder for recommended products */}
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-4xl">☕</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Premium Mug
                </h3>
                <p className="text-blue-600 font-bold">₹299</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-4xl">🍶</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Water Bottle
                </h3>
                <p className="text-blue-600 font-bold">₹499</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-4xl">👕</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">T-Shirt</h3>
                <p className="text-blue-600 font-bold">₹599</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-4xl">🎁</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Gift Set</h3>
                <p className="text-blue-600 font-bold">₹899</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
