import FlashSale from "@/components/UI/HomePage/FlashSale/FlashSale";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import TopCategories from "@/components/UI/HomePage/TopCategories/TopCategories";
import TrendingProducts from "@/components/UI/HomePage/TrendingProducts/TrendingProducts";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FlashSale />
      <TopCategories />
      <TrendingProducts />
    </>
  );
};

export default HomePage;
