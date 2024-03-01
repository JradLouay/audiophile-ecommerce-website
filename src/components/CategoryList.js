import Link from "next/link";

function CategoryList() {
  return (
    <div className="mb-[168px] mt-[120px] grid gap-[68px] md:mt-[200px] md:grid-cols-3 lg:gap-[30px]">
      {/* start */}
      <div className="group relative flex h-[165px] cursor-pointer flex-col-reverse items-center gap-[15px] rounded-lg bg-zinc-100 pb-[30px] md:h-[204px] lg:h-[204px]">
        <img
          className="absolute -top-[51px] w-[140px] md:w-[181px]"
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt=""
        />
        <Link
          href={"/headphones"}
          className="flex items-center justify-center gap-[13.32px] hover:text-[#D87D4A]"
        >
          <p className="category-link text-black opacity-50 group-hover:text-[#D87D4A] group-hover:opacity-100">
            Shop
          </p>
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
        </Link>
        <p className="text-center font-bold tracking-wider text-black">
          HEADPHONES
        </p>
      </div>
      <div className="group relative flex h-[165px] cursor-pointer flex-col-reverse items-center gap-[15px] rounded-lg bg-zinc-100 pb-[30px] md:h-[204px] lg:h-[204px]">
        <img
          className="absolute -top-[51px] w-[140px] md:w-[181px]"
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt=""
        />
        <Link
          href={"/speakers"}
          className="flex items-center justify-center gap-[13.32px] hover:text-[#D87D4A]"
        >
          <p className="category-link text-black opacity-50 group-hover:text-[#D87D4A] group-hover:opacity-100">
            Shop
          </p>
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
        </Link>
        <p className="text-center font-bold tracking-wider text-black">
          SPEAKERS
        </p>
      </div>
      <div className="group relative flex h-[165px] cursor-pointer flex-col-reverse items-center gap-[15px] rounded-lg bg-zinc-100 pb-[30px] md:h-[204px] lg:h-[204px]">
        <img
          className="absolute -top-[51px] w-[140px] md:w-[181px]"
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt=""
        />
        <Link
          href={"/earphones"}
          className="flex items-center justify-center gap-[13.32px] hover:text-[#D87D4A]"
        >
          <p className="category-link text-black opacity-50 group-hover:text-[#D87D4A] group-hover:opacity-100">
            Shop
          </p>
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
        </Link>
        <p className="text-center font-bold tracking-wider text-black">
          EARPHONES
        </p>
      </div>
      {/* stop */}
    </div>
  );
}

export default CategoryList;
