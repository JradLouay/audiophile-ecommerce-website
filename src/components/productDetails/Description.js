function Description() {
  return (
    <div className="flex flex-col gap-6 lg:ml-[95px] lg:gap-[47px]">
      <div className="text-start">
        <p className="text-overline mb-6 text-[#D87D4A] opacity-50 lg:mb-4">
          NEW PRODUCT
        </p>
        <h2 className="mb-6 text-black lg:mb-8">XX99 Mark II Headphones</h2>
        <p className="body mb-6 text-black opacity-50 lg:mb-8">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <h6>$ 2,999</h6>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-[20px] bg-zinc-100 pl-[15px] pr-[15px]">
          <button className="subtitle h-[18px] text-center !leading-none text-black opacity-25 hover:text-[#D87D4A]">
            -
          </button>
          <span className="subtitle">1</span>
          <button className="subtitle h-[18px] text-center !leading-none text-black opacity-25 hover:text-[#D87D4A]">
            +
          </button>
        </div>
        <button className="subtitle h-12 w-40 bg-[#D87D4A] text-white">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Description;
