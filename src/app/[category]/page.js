import ProductItem from "@/components/category/ProductItem";

function CategoryPage() {
  return (
    <>
      <div className="bg-stone-950">
        <div className="container flex pt-[105px] pb-[97px] justify-center">
          <h2 className="text-white">headphones</h2>
        </div>
      </div>
      <div className="container">
        <div className="mt-16 md:mt-40 mb-[167.5px] grid place-items-center gap-y-[120px] lg:gap-y-[160px]">
          <ProductItem inverse={false} />
          <ProductItem inverse={true} />
          <ProductItem inverse={false} />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
