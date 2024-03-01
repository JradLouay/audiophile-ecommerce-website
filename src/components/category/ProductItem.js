import Image from "next/image";
import Link from "next/link";

function ProductItem({ data, inverse }) {
  const link = `/${data.category}/${data.slug}`;

  return (
    <div className="grid place-items-center gap-6 sm:gap-[52px] lg:grid-cols-2 lg:gap-[30px]">
      {" "}
      <div className={`${inverse && "lg:col-start-2"}`}>
        <Image
          className={`hidden rounded-lg lg:block`}
          src={data.categoryImage.desktop}
          height={560}
          width={540}
          alt="produt"
        />
        <Image
          className={`rounded-lg lg:hidden`}
          src={data.categoryImage.tablet}
          height={352}
          width={689}
          alt="produt"
        />
      </div>
      <div
        className={`flex items-center rounded-lg ${
          inverse && `lg:col-start-1 lg:row-start-1`
        }`}
      >
        {" "}
        <div
          className={`flex flex-col items-center gap-6 lg:items-start lg:gap-10 ${
            !inverse && "lg:ml-[95px]"
          }`}
        >
          <div className=" text-center lg:text-start">
            {data.newProduct && (
              <p className="text-overline mb-6 text-[#D87D4A] opacity-50 lg:mb-4">
                NEW PRODUCT
              </p>
            )}
            <h2 className="mb-6 text-black lg:mb-8">{data.name}</h2>
            <p className="body text-black opacity-50">{data.description}</p>
          </div>
          <Link
            className="subtitle flex h-12 w-40 items-center justify-center bg-[#D87D4A] text-white hover:bg-[#FBAF85]"
            href={link}
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
