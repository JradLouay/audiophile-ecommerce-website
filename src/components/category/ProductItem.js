import Image from "next/image";

function ProductItem({ inverse, row }) {
  return (
    <>
      {" "}
      <div
        className={`${inverse && "lg:col-start-2"}`}
        style={{ gridRowStart: row }}
      >
        <Image
          className={`rounded-lg lg:block hidden`}
          src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          height={560}
          width={540}
          alt="produt"
        />
        <Image
          className={`rounded-lg block lg:hidden`}
          src="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
          height={352}
          width={689}
          alt="product"
        />
      </div>
      <div
        className={`rounded-lg flex items-center ${
          inverse && `lg:col-start-1`
        }`}
        style={{ gridRowStart: row }}
      >
        {" "}
        <div className={`flex flex-col gap-10 ${!inverse && "lg:ml-[95px]"}`}>
          <div className="flex flex-col gap-6">
            <p className="opacity-50 text-[#D87D4A] text-overline">
              NEW PRODUCT
            </p>
            <h2 className="text-black">XX99 Mark II Headphones</h2>
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
    </>
  );
}

export default ProductItem;
