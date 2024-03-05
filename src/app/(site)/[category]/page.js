import ProductItem from "@/components/category/ProductItem";
import { getDataByCategory } from "../../utility";
import CategoryList from "@/components/CategoryList";
import AdSection from "@/components/AdSection";

function CategoryPage({ params }) {
  const { category } = params;
  const data = getDataByCategory(category);
  return (
    <div className="pb-[120px] lg:pb-[160px]">
      <div className="bg-stone-950">
        <div className="container flex justify-center pb-[97px] pt-[105px]">
          <h2 className="text-white">{category}</h2>
        </div>
      </div>
      <div className="container">
        <div className="mb-[167.5px] mt-16 grid place-items-center gap-y-[120px] md:mt-40 lg:gap-y-[160px]">
          {data.map((item, index) => (
            <ProductItem key={item.slug} data={item} inverse={index % 2} />
          ))}
        </div>
      </div>
      <div className="container">
        <CategoryList />
      </div>
      <AdSection />
    </div>
  );
}

export default CategoryPage;
