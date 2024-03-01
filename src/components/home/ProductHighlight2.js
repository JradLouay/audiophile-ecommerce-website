import Image from "next/image";
import Link from "next/link";

function ProductHighlight2() {
  return (
    <section className="container">
      <div className="relative mb-12 mt-12 pb-[101px] pl-[96.5px] pr-[96.5px] pt-[101px]">
        <Image
          className="-z-10 rounded-lg"
          src="/assets/home/desktop/image-speaker-zx7.jpg"
          fill
          objectFit="cover"
          quality={100}
          alt="product zx3"
        ></Image>
        <div className="inline-flex flex-col items-start justify-center gap-8 pr-0.5 text-black">
          <h4>ZX7 SPEAKER</h4>
          <Link
            className="link flex h-12 w-40 items-center justify-center border border-black hover:bg-[black] hover:text-white"
            href="/speakers/zx7-speaker"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight2;
