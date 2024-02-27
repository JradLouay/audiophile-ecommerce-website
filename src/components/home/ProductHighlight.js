import Image from "next/image";

function ProductHighlight() {
  return (
    <section className="mb-[200px]">
      <div className="container mb-[200px] grid gap-[30px] md:grid-cols-2">
        <figure className="relative h-[200px] md:h-[unset]">
          <Image
            className="rounded-lg"
            src={"/assets/home/desktop/image-earphones-yx1.jpg"}
            fill
            alt="image earphones-yx1"
          />
          <Image
            className="rounded-lg"
            src={"/assets/home/desktop/image-earphones-yx1.jpg"}
            fill
            alt="image earphones-yx1"
          />
          <Image
            className="rounded-lg"
            src={"/assets/home/desktop/image-earphones-yx1.jpg"}
            fill
            alt="image earphones-yx1"
          />
        </figure>
        <div className="flex h-[200px] flex-col justify-center rounded-lg bg-zinc-100 pl-[25.5px] md:h-[320px] md:pl-[42.5px] lg:pl-[95px]">
          <div className="flex flex-col justify-center gap-8 text-black">
            <h4>ZX7 SPEAKER</h4>
            <button className="h-12 w-40 border border-black ">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
