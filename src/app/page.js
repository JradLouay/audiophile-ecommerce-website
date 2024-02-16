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
