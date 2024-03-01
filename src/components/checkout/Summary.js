import Image from "next/image";

function Summary() {
  return (
    <>
      <div className="col-span-2 h-fit rounded-lg bg-white pb-8 pl-8 pr-8 pt-8 lg:col-span-1">
        <h6>Summary</h6>
        <div className="mb-8 mt-8 flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Image
                src={
                  "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
                }
                className="rounded-lg"
                alt="product"
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <p className="body !font-bold">XX99 MK II</p>
                <p className="subtitle text-black opacity-50 ">$ 2,999</p>
              </div>
            </div>
            <p className="body">x1</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Image
                src={
                  "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
                }
                className="rounded-lg"
                alt="product"
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <p className="body !font-bold">XX99 MK II</p>
                <p className="subtitle text-black opacity-50 ">$ 2,999</p>
              </div>
            </div>
            <p className="body">x1</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Image
                src={
                  "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
                }
                className="rounded-lg"
                alt="product"
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <p className="body !font-bold">XX99 MK II</p>
                <p className="subtitle text-black opacity-50 ">$ 2,999</p>
              </div>
            </div>
            <p className="body">x1</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="body text-black opacity-50">TOTAL</p>
            <h6 className="text-right text-black">$ 5,396</h6>
          </div>
          <div className="flex justify-between">
            <p className="body text-black opacity-50">SHIPPING</p>
            <h6 className="text-right text-black">$ 50</h6>
          </div>
          <div className="flex justify-between">
            <p className="body text-black opacity-50">VAT (INCLUDED)</p>
            <h6 className="text-right text-black">$ 1,079</h6>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <p className="body text-black opacity-50">GRAND TOTAL</p>
          <h6 className="text-right text-[#D87D4A]">$ 5,446</h6>
        </div>
        <button
          type="submit"
          className="mt-8 w-full bg-[#D87D4A] pb-[15px] pt-[15px] text-white"
        >
          CONTINUE & PAY
        </button>
      </div>
    </>
  );
}

export default Summary;
