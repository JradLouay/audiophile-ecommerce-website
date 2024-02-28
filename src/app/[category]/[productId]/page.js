import Image from "next/image";
import AdSection from "@/components/AdSection";
import ItemInfo from "@/components/productDetails/ItemInfo";
import ItemOverview from "@/components/productDetails/ItemOverview";
import Suggestions from "@/components/productDetails/Suggestions";
import { getDataByProductId } from "@/app/utility";
import Gallery from "@/components/productDetails/Gallery";

function ProductDetailPage({ params }) {
  const { productId } = params;
  const data = getDataByProductId(productId);
  return (
    <div className="flex flex-col gap-[88px] pb-40 pt-20 md:gap-40">
      <ItemOverview data={data} />
      <ItemInfo features={data.features} includes={data.includes} />
      <Gallery />
      <Suggestions suggestions={data.others} />
      <AdSection />
    </div>
  );
}

export default ProductDetailPage;
