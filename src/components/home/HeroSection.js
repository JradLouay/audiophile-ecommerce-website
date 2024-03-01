import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="/headphones/xx99-mark-two-headphones"
            className="subtitle flex h-12 w-40 items-center justify-center bg-[#D87D4A] text-white hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
