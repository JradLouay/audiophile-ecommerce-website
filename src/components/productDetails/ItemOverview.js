import Image from "next/image";
import Description from "./Description";

function ItemOverview({ data }) {
  const { image, name, newProduct, description, price } = data;
  return (
    <div className="sm:gap[30px] container grid gap-8 sm:grid-cols-2">
      <Image
        className="hidden rounded-lg lg:block"
        src={image.desktop}
        height={560}
        width={540}
        alt="xx99-mark-two-headphones"
      />
      <Image
        className="hidden rounded-lg sm:block lg:hidden"
        src={image.tablet}
        height={480}
        width={281}
        alt="xx99-mark-two-headphones"
      />
      <Image
        className="block place-self-center rounded-lg sm:hidden"
        src={image.mobile}
        height={327}
        width={327}
        alt="xx99-mark-two-headphones"
      />
      <Description
        name={name}
        newProduct={newProduct}
        price={price}
        description={description}
      />
    </div>
  );
}

export default ItemOverview;
