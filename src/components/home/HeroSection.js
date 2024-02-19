function HeroSection() {
  return (
    <section className="bg-stone-950">
      <div className="container flex gap-12 pt-32 pb-[158px]">
        <div className="flex flex-col gap-10">
          <div className="max-w-[396px] flex flex-col gap-6">
            <p className="opacity-50 text-white text-overline">NEW PRODUCT</p>
            <h1 className="text-white">XX99 Mark II Headphones</h1>
            <p className="opacity-75 text-white body">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <button className="w-40 h-12 bg-[#D87D4A] subtitle text-white">
            See Product
          </button>
        </div>
        <div className="relative w-[709px]"></div>
      </div>
    </section>
  );
}

export default HeroSection;
