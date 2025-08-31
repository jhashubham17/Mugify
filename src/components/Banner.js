import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router-dom";

const Banner = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative bg-primary text-white py-16 text-center"
  >
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Customize Your Products</h1>
      <p className="text-lg mb-6">
        From mugs to t-shirts, gifts to accessories – design and personalize
        every product your way.
      </p>
      <Link to="/products">
        <Button>Start Customizing</Button>
      </Link>
    </div>
  </motion.div>
);

export default Banner;
