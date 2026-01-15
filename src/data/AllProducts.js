// In your AllProducts.js file
import mugs from "./Mugs";
import bottles from "./Bottles";
import tShirts from "./TShirts";
import corporateGifts from "./CorporateGifts";
import metalPens from "./MetalPens"; // Import the metal pens data
import plasticPens from "./PlasticPens"; // Import the plastic pens data
import ecoFriendly from "./EcoFriendly"; // Import the eco friendly data

// In your AllProducts.js file, make sure the category values match the filter values
const allProducts = [
  // Mugs should have category: "mug"
  ...mugs.map((product) => ({ ...product, category: "mug" })),

  // Bottles should have category: "bottle"
  ...bottles.map((product) => ({ ...product, category: "bottle" })),

  // T-Shirts should have category: "t-shirt"
  ...tShirts.map((product) => ({ ...product, category: "t-shirt" })),

  // Corporate Gifts should have category: "corporate-gift"
  ...corporateGifts.map((product) => ({
    ...product,
    category: "corporate-gift",
  })),

  // Metal Pens should have category: "metal-pen"
  ...metalPens.map((product) => ({
    ...product,
    category: "metal-pen",
  })),

  // Plastic Pens should have category: "plastic-pen"
  ...plasticPens.map((product) => ({
    ...product,
    category: "plastic-pen",
  })),

  // Eco Friendly products should have category: "eco-friendly"
  ...ecoFriendly.map((product) => ({
    ...product,
    category: "eco-friendly",
  })),
];

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "mug", label: "Mugs" },
  { value: "metal-pen", label: "Metal Pens" },
  { value: "plastic-pen", label: "Plastic Pens" },
  { value: "eco-friendly", label: "Eco Friendly" },
  { value: "bottle", label: "Bottles" },
  { value: "t-shirt", label: "T-Shirts" },
  { value: "corporate-gift", label: "Corporate Gifts" },
];

export default allProducts;
