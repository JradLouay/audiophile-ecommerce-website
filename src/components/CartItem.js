import Image from "next/image";

function CartItem() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <Image
          className="rounded-lg"
          src={
            "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
          }
          alt="product"
          width={64}
          height={64}
        />
        <div className="flex flex-col justify-center">
          <p className="body !font-bold">XX99 MK II</p>
          <p className="subtitle text-black opacity-50 ">$ 2,999</p>
        </div>
      </div>
      <div className="flex h-8 items-center gap-3 bg-zinc-100 pb-[7px] pl-[11.5px] pr-[11.5px] pt-[7px] ">
        <button className="subtitle text-center text-black opacity-25 hover:text-[#D87D4A] hover:opacity-100">
          -
        </button>
        <span>1</span>
        <button className="subtitle text-center text-black opacity-25 hover:text-[#D87D4A] hover:opacity-100">
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
