import Image from "next/image";

function CategoryList() {
  return (
    <div className="mb-[168px] mt-[120px] grid gap-[68px] md:grid-cols-3 lg:gap-[30px]">
      {/* start */}
      <div className="relative flex h-[165px] flex-col-reverse items-center gap-[15px] rounded-lg bg-zinc-100 pb-[30px] lg:h-[204px]">
        <div className="flex items-center justify-center gap-[13.32px]">
          <p className="category-link text-black opacity-50">Shop</p>
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
        <p className="text-center font-bold tracking-wider text-black">
          HEADPHONES
        </p>
        {/* <Image
            className="absolute bottom-1/2 left-1/2 -ml-[56px]"
            src={
              "/assets/shared/desktop/image-category-thumbnail-headphones.png"
            }
            height={110}
            width={120}
            style={{ objectFit: "cover" }}
            alt="category thumbnail"
          /> */}
      </div>
      <div className=" flex h-[165px] flex-col-reverse items-center gap-[15px] rounded-lg bg-zinc-100 pb-[30px] lg:h-[204px]">
        <div className="flex items-center justify-center gap-[13.32px]">
          <p className="category-link text-black opacity-50">Shop</p>
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
        <p className="text-center font-bold tracking-wider text-black">
          SPEAKERS
        </p>
        <div className="relative h-[101px] w-max">
          <Image
            src={"/assets/shared/desktop/image-category-thumbnail-speakers.png"}
            fill
            alt="category thumbnail"
          />
        </div>
      </div>
      <div className=" flex h-[165px] flex-col-reverse items-center gap-[15px] rounded-lg bg-zinc-100 pb-[30px] lg:h-[204px]">
        <div className="flex items-center justify-center gap-[13.32px]">
          <p className="category-link text-black opacity-50">Shop</p>
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
        <p className="text-center font-bold tracking-wider text-black">
          EARPHONES
        </p>
        <div className="relative h-[101px] w-max">
          <Image
            src={
              "/assets/shared/desktop/image-category-thumbnail-earphones.png"
            }
            fill
            alt="category thumbnail"
          />
        </div>
      </div>
      {/* stop */}
    </div>
  );
}

export default CategoryList;
