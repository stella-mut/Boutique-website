import Hero from "@/components/home/Hero";
import ShopByDepartment from "@/components/home/ShopByDepartment";
import NewArrivals from "@/components/home/NewArrivals";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import CategoryBrowse from "@/components/home/CategoryBrowse";
import ProductGrid from "@/components/home/ProductGrid";
import Lookbook from "@/components/home/Lookbook";
import BrandStory from "@/components/home/BrandStory";
import SocialProof from "@/components/home/SocialProof";
import Newsletter from "@/components/layout/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByDepartment />
      <NewArrivals />
      <FeaturedCollections />
      <CategoryBrowse />
      <ProductGrid />
      <Lookbook />
      <BrandStory />
      <SocialProof />
      <Newsletter />
    </>
  );
}
