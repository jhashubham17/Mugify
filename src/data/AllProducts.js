// In your AllProducts.js file
import mugs from "./Mugs";
import bottles from "./Bottles";
import tShirts from "./TShirts";
import corporateGifts from "./CorporateGifts";
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
];

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "mug", label: "Mugs" },
  { value: "bottle", label: "Bottles" },
  { value: "t-shirt", label: "T-Shirts" },
  { value: "corporate-gift", label: "Corporate Gifts" },
];

export default allProducts;
