import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-stone-950">
        <div className="container flex gap-12 pt-32 pb-[158px]">
          <div className="flex flex-col gap-10">
            <div className="max-w-[396px] flex flex-col gap-6">
              <p className="opacity-50 text-white overline">NEW PRODUCT</p>
              <h1 className="text-white">XX99 Mark II Headphones</h1>
              <p className="opacity-75 text-white body">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <button className="w-40 h-12 bg-orange-400 subtitle text-white">
              See Product
            </button>
          </div>
          <div className="relative w-[709px]"></div>
        </div>
      </section>
      <section className="mt-12 mb-12">
        <div className="container relative pt-[101px] pb-[101px] pl-[96.5px] pr-[96.5px]">
          <Image
            className="-z-10 rounded-lg"
            src="/assets/home/desktop/image-speaker-zx7.jpg"
            fill
            objectFit="cover"
            quality={100}
            alt="product zx3"
          ></Image>
          <div className="pr-0.5 text-black flex-col justify-center items-start gap-8 inline-flex">
            <h4>ZX7 SPEAKER</h4>
            <button className="w-40 h-12 border border-black ">
              See Product
            </button>
          </div>
        </div>
      </section>
      <section className="mb-[200px]">
        <div className="container grid grid-cols-2 gap-[30px] mb-[200px]">
          <figure className="relative">
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
      <section className="mb-[200px]">
        <div className="container grid grid-cols-2 gap-[30px]">
          <div className="max-w-[445px] flex-col justify-center gap-8 flex">
            <h2>
              Bringing you the
              <span className="text-orange-400"> best </span>
              audio gear
            </h2>
            <div className="opacity-50 text-black body">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </div>
          </div>
          <div className="relative h-[588px]">
            <Image
              className="rounded-lg"
              src="/assets/shared/desktop/image-best-gear.jpg"
              fill
              alt="best gear"
            />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container mt-[120px] mb-[168px] grid grid-cols-3 gap-x-[30px]">
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <div
                key={index}
                className="relative w-[350px] h-[204px]  bg-zinc-100 rounded-lg flex flex-col items-center gap-[15px]"
              >
                <p className="text-center text-blackfont-bold tracking-wider">
                  HEADPHONES
                </p>
                <p className="opacity-50 text-black subtitle tracking-wide">
                  Shop
                </p>
              </div>
            ))}
        </div>
      </section> */}
    </main>
  );
}
