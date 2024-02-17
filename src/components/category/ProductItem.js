import Image from "next/image";

function ProductItem({ inverse }) {
  return (
    <div className="grid place-items-center lg:grid-cols-2 gap-6 sm:gap-[52px] lg:gap-[30px]">
      {" "}
      <div className={`${inverse && "lg:col-start-2"}`}>
        <Image
          className={`rounded-lg lg:block hidden`}
          src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          height={560}
          width={540}
          alt="produt"
        />
        <Image
          className={`rounded-lg lg:hidden`}
          src="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
          height={352}
          width={689}
          alt="produt"
        />
      </div>
      <div
        className={`rounded-lg flex items-center ${
          inverse && `lg:col-start-1 lg:row-start-1`
        }`}
      >
        {" "}
        <div
          className={`flex flex-col items-center lg:items-start gap-6 lg:gap-10 ${
            !inverse && "lg:ml-[95px]"
          }`}
        >
          <div className=" text-center lg:text-start">
            <p className="opacity-50 text-[#D87D4A] text-overline mb-6 lg:mb-4">
              NEW PRODUCT
            </p>
            <h2 className="text-black mb-6 lg:mb-8">XX99 Mark II Headphones</h2>
            <p className="opacity-50 text-black body">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
          </div>
          <button className="w-40 h-12 bg-[#D87D4A] subtitle text-white">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
