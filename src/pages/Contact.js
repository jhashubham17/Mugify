import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 9060917383", "Available 24/7"],
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["araipaninspired@gmail.com", "Instant Support"],
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "💬",
      title: "Live Chat & WhatsApp",
      details: [
        "Available 24/7",
        "Instant Support",
        "WhatsApp: +91 9060917383",
      ],
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: "⏰",
      title: "Response Time",
      details: [
        "Email: Within 4 hours",
        "WhatsApp: Instant",
        "Phone: Immediate",
      ],
      color: "from-amber-400 to-orange-500",
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", link: "#", color: "hover:text-pink-500" },
    { name: "Facebook", icon: "📘", link: "#", color: "hover:text-blue-500" },
    { name: "Pinterest", icon: "📌", link: "#", color: "hover:text-red-500" },
    { name: "YouTube", icon: "📺", link: "#", color: "hover:text-red-600" },
  ];

  const faqs = [
    {
      question: "How long does customization take?",
      answer:
        "Most orders are completed within 2-3 business days. Rush services available for urgent orders.",
    },
    {
      question: "Do you offer bulk discounts for large orders?",
      answer:
        "Yes! We offer special pricing for orders over 50 pieces. Contact us for custom quotes on bulk orders.",
    },
    {
      question: "What file formats do you accept for designs?",
      answer:
        "We accept PNG, JPG, SVG, PDF, and AI files in high resolution (300 DPI or higher for best results).",
    },
    {
      question: "Can you help me design my product if I don't have a design?",
      answer:
        "Absolutely! Our design team can create custom designs based on your ideas, themes, or requirements for an additional fee.",
    },
    {
      question: "What's the minimum order quantity?",
      answer:
        "We accept orders of any size - from single items to thousands. No minimum order requirement.",
    },
    {
      question: "How do I place a custom order?",
      answer:
        "You can place orders through our website, via WhatsApp, or by email. We'll guide you through the process step by step.",
    },
    {
      question: "Do you offer samples before bulk orders?",
      answer:
        "Yes, we provide samples for bulk orders. Sample costs are usually deducted from your final order invoice.",
    },
    {
      question: "What's your return policy for customized products?",
      answer:
        "Due to the personalized nature of our products, we don't accept returns unless there's a manufacturing defect. We ensure quality checks before shipment.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary by location.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Let's Create Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            Have an idea for a custom product? Our team is ready to bring your
            vision to life!
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-16"
      >
        {/* Contact Cards */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Form and Info Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Start Your Custom Project
                </h2>
                <p className="text-gray-600 text-lg">
                  Tell us about your customization needs. We'll get back to you
                  with a quote and design ideas within 4 hours.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Process and Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Customization Process */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Customization Process
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Consultation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Share your ideas and requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Design & Quote
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We create a design mockup and provide pricing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Approval & Production
                      </h4>
                      <p className="text-gray-600 text-sm">
                        You approve the design, we create your products
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Delivery</h4>
                      <p className="text-gray-600 text-sm">
                        We carefully package and ship your order
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>Fast turnaround - 2-3 business days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💎</span>
                    <span>Premium quality materials & printing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎨</span>
                    <span>Free design consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚚</span>
                    <span>Free shipping on orders over ₹5000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Quality guarantee on all products</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our customization services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Media & CTA */}
        <motion.section
          variants={itemVariants}
          className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Follow Our Work
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            See our latest custom creations and get inspiration for your next
            project!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className={`w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl ${social.color} hover:shadow-xl transition-all duration-300`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg inline-block mx-auto"
          >
            <h3 className="font-bold text-gray-800 mb-2">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 mb-3">Call or message us directly</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919060917383"
                className="text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                📞 +91 9060917383
              </a>
              <a
                href="https://wa.me/919876543210"
                className="text-lg font-bold text-green-600 hover:text-green-800 transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Contact;
