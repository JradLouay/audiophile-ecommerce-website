import AdSection from "@/components/AdSection";
import Description from "@/components/productDetails/Description";
import Features from "@/components/productDetails/Features";
import InsideTheBox from "@/components/productDetails/InsideTheBox";
import ItemInfo from "@/components/productDetails/ItemInfo";
import ItemOverview from "@/components/productDetails/ItemOverview";
import Suggestions from "@/components/productDetails/Suggestions";
import React from "react";

function ProductDetailPage() {
  return (
    <div className="flex flex-col gap-40 pb-40 pt-20">
      <ItemOverview />
      <ItemInfo />
      {/* <Suggestions />
      <AdSection /> */}
    </div>
  );
}

export default ProductDetailPage;
