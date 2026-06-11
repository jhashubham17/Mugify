import Button from "../components/Button";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ProductCategories from "../components/ProductCategories";
import { motion, AnimatePresence } from "framer-motion";
import CustomerReviews from "../components/CustomerReviews";
import PrintingTechnologies from "../components/PrintingTechnologiesCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomizationProcess from "../components/CustomizationProcess";
import ClientCategories from "../components/ClientCategories";
import TrustedPartners from "../components/TrustedPartners";
import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Home = () => {
  const phoneNumber = "9060917383";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:${phoneNumber}`;

  const [showNotification, setShowNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date: 4th September, 12:00 AM (midnight)
  const targetDate = new Date(2026, 8, 4, 0, 0, 0); // September 4, 2026, 00:00:00

  useEffect(() => {
    // Show notification after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <Banner />
      <ProductCategories />
      <PrintingTechnologies />
      <CustomerReviews />
      <WhyChooseUs />
      <CustomizationProcess />
      <TrustedPartners />

      {/* Notification Modal - Responsive for all devices */}
      <AnimatePresence>
        {showNotification && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeNotification}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl max-w-[95%] sm:max-w-md md:max-w-lg w-full mx-auto pointer-events-auto overflow-hidden"
              >
                {/* Header with gradient and X button */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">🚧</span>
                    <h2 className="text-white font-bold text-base sm:text-xl">
                      Announcement
                    </h2>
                  </div>
                  <button
                    onClick={closeNotification}
                    className="text-white hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-all duration-200 hover:rotate-90"
                    aria-label="Close notification"
                  >
                    <FaTimes className="text-base sm:text-xl" />
                  </button>
                </div>

                {/* Content - Responsive padding */}
                <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
                  {/* Under Construction Badge */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-block p-2 sm:p-3 bg-yellow-100 rounded-full mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl">🔨</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
                      Website Under Construction
                    </h3>
                    <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                  </div>

                  <p className="text-gray-600 text-center text-sm sm:text-base mb-4 sm:mb-5">
                    Our website is currently under development. We will be fully
                    ready by:
                  </p>

                  {/* Countdown Timer - Responsive grid */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5">
                    <div className="text-center text-white mb-2 text-xs sm:text-sm font-semibold">
                      🕐 LAUNCHING IN:
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
                      {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds },
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="bg-black/50 rounded-lg p-1.5 sm:p-2">
                            <div className="text-lg sm:text-2xl font-bold text-white font-mono">
                              {String(item.value).padStart(2, "0")}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-300">
                              {item.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Launch Date */}
                  <div className="text-center mb-4 sm:mb-5">
                    <p className="text-gray-700 font-semibold text-sm sm:text-base">
                      📅{" "}
                      <span className="text-orange-600">
                        September 4th, 2026 at 12:00 AM
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      The website will be fully functional after this time
                    </p>
                  </div>

                  {/* Contact Section */}
                  <div className="border-t border-gray-200 pt-4 sm:pt-5 mb-4 sm:mb-5">
                    <p className="text-center text-gray-700 font-semibold text-sm sm:text-base mb-3">
                      📞 For any orders or inquiries:
                    </p>

                    {/* Buttons - Responsive flex layout */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 py-2.5 sm:py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                      >
                        <FaWhatsapp className="text-lg sm:text-xl" />
                        <span className="font-medium">WhatsApp</span>
                      </a>
                      <a
                        href={callLink}
                        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-5 py-2.5 sm:py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                      >
                        <FaPhoneAlt className="text-base sm:text-lg" />
                        <span className="font-medium">Call Now</span>
                      </a>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-3">
                      <span className="text-green-500 text-sm">✓</span>
                      <p className="text-center text-xs sm:text-sm text-gray-600">
                        24/7 Available for support
                      </p>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeNotification}
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white py-2.5 sm:py-3 rounded-lg transition-all duration-200 font-semibold text-sm sm:text-base hover:scale-[1.02]"
                  >
                    Got it, Thanks!
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons - Responsive for all devices */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-2 sm:gap-3">
        {/* WhatsApp Button */}
        <div className="relative group">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
          </motion.a>
          {/* Hover Tooltip - Responsive */}
          <div className="absolute right-full mr-2 sm:mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
            <div className="bg-gray-900 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg">
              24*7 Available
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Call Button */}
        <div className="relative group">
          <motion.a
            href={callLink}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Call Now"
          >
            <FaPhoneAlt className="text-lg sm:text-xl" />
          </motion.a>
          {/* Hover Tooltip - Responsive */}
          <div className="absolute right-full mr-2 sm:mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
            <div className="bg-gray-900 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg">
              24*7 Available
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
