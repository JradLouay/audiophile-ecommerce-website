import React from "react";
import Features from "./Features";
import InsideTheBox from "./InsideTheBox";

function ItemInfo({ features, includes }) {
  return (
    <div className="container flex flex-col gap-[88px]  sm:gap-[120px] lg:flex-row lg:gap-[125px]">
      <Features features={features} />
      <InsideTheBox includes={includes} />
    </div>
  );
}

export default ItemInfo;
