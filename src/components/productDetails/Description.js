function Description({ newProduct, name, description, price }) {
  return (
    <div className="flex flex-col gap-6 lg:ml-[95px] lg:gap-[47px]">
      <div className="text-start">
        {newProduct && (
          <p className="text-overline mb-6 text-[#D87D4A] opacity-50 lg:mb-4">
            NEW PRODUCT
          </p>
        )}
        <h2 className="mb-6 text-black lg:mb-8">{name}</h2>
        <p className="body mb-6 text-black opacity-50 lg:mb-8">{description}</p>
        <h6>$ {price}</h6>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-[20px] bg-zinc-100 pl-[15px] pr-[15px]">
          <button className="subtitle h-[18px] text-center !leading-none text-black opacity-25 hover:text-[#D87D4A] hover:opacity-100">
            -
          </button>
          <span className="subtitle">1</span>
          <button className="subtitle h-[18px] text-center !leading-none text-black opacity-25 hover:text-[#D87D4A] hover:opacity-100">
            +
          </button>
        </div>
        <button className="subtitle h-12 w-40 bg-[#D87D4A] text-white hover:bg-[#FBAF85]">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Description;
