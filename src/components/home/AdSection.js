import Image from "next/image";

function AdSection() {
  return (
    <section className="container ">
      <div className="mb-[200px] grid lg:grid-cols-2 gap-10 md:gap-[63px]">
        <div className="relative h-[588px] lg:col-start-2">
          <Image
            className="rounded-lg"
            src="/assets/shared/desktop/image-best-gear.jpg"
            fill
            alt="best gear"
          />
        </div>
        <div className="lg:max-w-[445px] flex-col justify-center text-center lg:text-start gap-8 flex lg:col-start-1 lg:row-start-1">
          <h2>
            Bringing you the
            <span className="text-orange-400"> best </span>
            audio gear
          </h2>
          <div className="opacity-50 text-black body">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdSection;
