function Description() {
  return (
    <div className="flex flex-col gap-6 lg:gap-[47px] lg:ml-[95px]">
      <div className="text-start">
        <p className="opacity-50 text-[#D87D4A] text-overline mb-6 lg:mb-4">
          NEW PRODUCT
        </p>
        <h2 className="text-black mb-6 lg:mb-8">XX99 Mark II Headphones</h2>
        <p className="opacity-50 text-black body mb-6 lg:mb-8">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <h6>$ 2,999</h6>
      </div>
      <div className="flex gap-4">
        <div className="flex p-[15px] items-center gap-[20px] bg-zinc-100">
          <button className="subtitle w-4 h-[18px] opacity-25 text-center text-black hover:text-[#D87D4A]">
            -
          </button>
          <span>1</span>
          <button className="subtitle w-4 h-[18px] opacity-25 text-center text-black hover:text-[#D87D4A]">
            +
          </button>
        </div>
        <button className="w-40 h-12 bg-[#D87D4A] subtitle text-white">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Description;
