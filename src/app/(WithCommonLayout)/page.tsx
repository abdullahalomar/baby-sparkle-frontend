import FlashSale from "@/components/UI/HomePage/FlashSale/FlashSale";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import PopularProduct from "@/components/UI/HomePage/PopularProduct/PopularProduct";
import TopCategories from "@/components/UI/HomePage/TopCategories/TopCategories";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FlashSale />
      <TopCategories />
      <PopularProduct />
    </>
  );
};

export default HomePage;
