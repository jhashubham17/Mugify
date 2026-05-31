import MugCategories from "./MugCategories";
import BalloonCategories from "./BalloonCategories";
import TShirtCategories from "./TshirtCategories";
import BottleCategories from "./BottleCategories";
import UmbrellaCategories from "./UmbrellaCategories";
import PenCategories from "./PenCategories";
import CooperativeGiftCategories from "./CooperativeGiftCategories";
import CapCategories from "./CapCategories";

const ProductCategories = () => {
  return (
    <>
      <MugCategories />
      {/* <BottleCategories /> */}
      <TShirtCategories />
      {/* <CapCategories /> */}
      <CooperativeGiftCategories />
      <UmbrellaCategories />
      <PenCategories />

      <BalloonCategories />
    </>
  );
};

export default ProductCategories;
