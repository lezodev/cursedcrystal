import { Hero } from "@/components/home/hero";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { LatestDiscovery } from "@/components/home/latest-discovery";
import { CrystalValues } from "@/components/home/crystal-values";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <LatestDiscovery />
      <CrystalValues />
    </>
  );
}
