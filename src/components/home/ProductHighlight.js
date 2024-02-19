import Image from "next/image";

function ProductHighlight() {
  return (
    <section className="mb-[200px]">
      <div className="container grid grid-cols-2 gap-[30px] mb-[200px]">
        <figure className="relative">
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
        <div className="bg-zinc-100 rounded-lg pt-[101px] pb-[101px] pl-[96.5px] pr-[96.5px]">
          <div className="text-black flex-col justify-center items-start gap-8 inline-flex">
            <h4>ZX7 SPEAKER</h4>
            <button className="w-40 h-12 border border-black ">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
