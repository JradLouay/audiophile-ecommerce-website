import Image from "next/image";
import AdSection from "@/components/AdSection";
import ItemInfo from "@/components/productDetails/ItemInfo";
import ItemOverview from "@/components/productDetails/ItemOverview";
import Suggestions from "@/components/productDetails/Suggestions";

function ProductDetailPage() {
  return (
    <div className="flex flex-col gap-[88px] md:gap-40 pb-40 pt-20">
      <ItemOverview />
      <ItemInfo />
      <div className="container gallery-grid">
        <Image
          className="rounded-lg lg:block hidden"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
          }
          width={445}
          height={280}
          alt="image-gallery-1.jpg"
        />
        <Image
          className="rounded-lg lg:hidden sm:block hidden"
          src={
            "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg"
          }
          width={277}
          height={174}
          alt="image-gallery-1.jpg"
        />
        <Image
          className="rounded-lg sm:hidden block"
          src={
            "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"
          }
          width={327}
          height={174}
          alt="image-gallery-1.jpg"
        />
        <Image
          className="rounded-lg lg:block hidden row-start-2"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
          }
          width={445}
          height={280}
          alt="image-gallery-2.jpg"
        />
        <Image
          className="rounded-lg lg:hidden sm:block hidden row-start-2"
          src={
            "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg"
          }
          width={277}
          height={174}
          alt="image-gallery-2.jpg"
        />
        <Image
          className="rounded-lg sm:hidden block row-start-2"
          src={
            "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg"
          }
          width={327}
          height={174}
          alt="image-gallery-2.jpg"
        />
        <Image
          className="rounded-lg lg:block hidden md:col-start-2 md:row-span-2"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
          }
          width={635}
          height={592}
          alt="image-gallery-3.jpg"
        />
        <Image
          className="rounded-lg lg:hidden sm:block hidden md:col-start-2 md:row-span-2"
          src={
            "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg"
          }
          width={395}
          height={368}
          alt="image-gallery-3.jpg"
        />
        <Image
          className="rounded-lg sm:hidden block md:col-start-2 md:row-span-2"
          src={
            "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"
          }
          width={327}
          height={368}
          alt="image-gallery-3.jpg"
        />

        {/* <Image
          className="md:col-start-2 md:row-span-2"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
          }
          width={635}
          height={592}
          alt="image-gallery-3.jpg"
        /> */}
      </div>
      <Suggestions />
      <AdSection />
    </div>
  );
}

export default ProductDetailPage;
