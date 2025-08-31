import { motion } from "framer-motion";

const Button = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-secondary text-white px-4 py-2 rounded-md ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export default Button;
