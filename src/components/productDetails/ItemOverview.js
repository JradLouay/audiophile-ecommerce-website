import Image from "next/image";
import Description from "./Description";

function ItemOverview() {
  return (
    <div className="container grid sm:grid-cols-2 gap-8 sm:gap[30px]">
      <Image
        className="rounded-lg lg:block hidden"
        src={
          "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
        }
        height={560}
        width={540}
        alt="xx99-mark-two-headphones"
      />
      <Image
        className="rounded-lg lg:hidden sm:block hidden"
        src={
          "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg"
        }
        height={480}
        width={281}
        alt="xx99-mark-two-headphones"
      />
      <Image
        className="rounded-lg place-self-center sm:hidden block"
        src={
          "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
        }
        height={327}
        width={327}
        alt="xx99-mark-two-headphones"
      />
      <Description />
    </div>
  );
}

export default ItemOverview;
