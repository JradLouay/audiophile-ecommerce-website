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
        <div className="mt-40 mb-[167.5px] grid lg:grid-cols-2 lg:gap-x-[30px] gap-y-[160px]">
          <ProductItem row={1} inverse={false} />
          <ProductItem row={2} inverse={true} />
          <ProductItem row={3} inverse={false} />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
