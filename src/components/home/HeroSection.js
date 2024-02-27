import Image from "next/image";

function HeroSection() {
  return (
    <section className="bg-stone-950">
      <div className="container">
        <div className="h-px w-full bg-white"></div>
      </div>
      <div className="container flex gap-12 pb-[158px] pt-32">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[396px] flex-col gap-6">
            <p className="text-overline text-white opacity-50">NEW PRODUCT</p>
            <h1 className="text-white">XX99 Mark II Headphones</h1>
            <p className="body text-white opacity-75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <button className="subtitle h-12 w-40 bg-[#D87D4A] text-white">
            See Product
          </button>
        </div>
        {/* <Image
          src={"/assets/home/desktop/image-hero.jpg"}
          width={708}
          height={886}
          alt="hero image"
        /> */}
      </div>
    </section>
  );
}

export default HeroSection;
