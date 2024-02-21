import React from "react";
import Features from "./Features";
import InsideTheBox from "./InsideTheBox";

function ItemInfo() {
  return (
    <div className="container flex flex-col lg:flex-row  gap-[88px] sm:gap-[120px] lg:gap-[125px]">
      <Features />
      <InsideTheBox />
    </div>
  );
}

export default ItemInfo;
