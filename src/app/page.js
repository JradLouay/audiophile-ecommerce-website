import AdSection from "@/components/AdSection";
import CategoryList from "@/components/CategoryList";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlight from "@/components/home/ProductHighlight";
import ProductHighlight2 from "@/components/home/ProductHighlight2";
import ProductPreview from "@/components/ProductPreview";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <header className="hero-image">
        <Navbar />
        <HeroSection />
      </header>
      <main className="pb-[120px] md:pb-[96px] lg:pb-[200px]">
        <section className="container">
          <CategoryList />
        </section>
        <ProductPreview />
        <ProductHighlight2 />
        <ProductHighlight />
        <AdSection />
      </main>
    </>
  );
}
