import AdSection from "@/components/home/AdSection";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlight from "@/components/home/ProductHighlight";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <section className="container">
        <div className="mt-[120px] mb-[168px] grid grid-cols-3 gap-x-[30px]">
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <div
                key={index}
                className="w-[350px] h-[204px] bg-zinc-100 rounded-lg flex flex-col justify-center items-center gap-[15px]"
              >
                <p className="text-center text-black font-bold tracking-wider">
                  HEADPHONES
                </p>
                <div className="justify-center items-center gap-[13.32px] flex">
                  <p className="opacity-50 text-black category-link">Shop</p>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.3219 1L6.3219 6L1.3219 11"
                      stroke="#D87D4A"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </section> */}
      {/* <section className="container">
        <div className="bg-[#D87D4A] rounded-lg flex gap-[30px] ">
          <div className="overflow-hidden">
            <Image
              className="-mb-[29px]"
              src="/assets/home/desktop/image-speaker-zx9.png"
              width={410}
              height={493}
              alt="speaker-zx9 Image"
            />
          </div>
          <div>
            <h1 className="text-white mb-6">ZX9 SPEAKER</h1>
            <p className="opacity-75 text-white body mb-10 max-w-[349px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="w-40 h-12 bg-black text-white">
              See Product
            </button>
          </div>
        </div>
      </section> */}
      <section className="container">
        <div className="relative mt-12 mb-12 pt-[101px] pb-[101px] pl-[96.5px] pr-[96.5px]">
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
      <ProductHighlight />
      <AdSection />
    </>
  );
}
