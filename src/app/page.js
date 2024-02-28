import { redirect } from "next/navigation";
import Image from "next/image";
import AdSection from "@/components/AdSection";
import CategoryList from "@/components/CategoryList";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlight from "@/components/home/ProductHighlight";
import ProductHighlight2 from "@/components/home/ProductHighlight2";
import ProductPreview from "@/components/ProductPreview";
export default function Home() {
  return (
    <main className="pb-[120px] md:pb-[96px] lg:pb-[200px]">
      <HeroSection />
      <section className="container">
        <CategoryList />
      </section>
      <ProductPreview />
      <ProductHighlight2 />
      <ProductHighlight />
      <AdSection />
    </main>
  );
}
