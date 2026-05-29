import Button from "../components/Button";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ProductCategories from "../components/ProductCategories";
import { motion } from "framer-motion";
import CustomerReviews from "../components/CustomerReviews";
import PrintingTechnologies from "../components/PrintingTechnologiesCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomizationProcess from "../components/CustomizationProcess";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <Banner />
      <ProductCategories />
      <PrintingTechnologies />
      <CustomerReviews />
      <WhyChooseUs />
      <CustomizationProcess />
    </div>
  );
};

export default Home;
