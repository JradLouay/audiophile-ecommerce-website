import Link from "next/link";
import Image from "next/image";

function ProductPreview() {
  return (
    <section className="container">
      <div className="mt-[168px]  flex flex-col items-center gap-[30px] rounded-lg bg-[#D87D4A] lg:flex-row lg:items-start ">
        <div className="overflow-hidden">
          <Image
            className="-mb-[29px] ml-[117px] mr-[138px] mt-24 hidden lg:block"
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={410}
            height={493}
            alt="speaker-zx9 Image"
          />
          <Image
            className="mt-[52px] hidden md:block lg:hidden"
            src="/assets/home/tablet/image-speaker-zx9.png"
            width={197}
            height={237}
            alt="speaker-zx9 Image"
          />
          <Image
            className="mt-[52px] block md:hidden"
            src="/assets/home/mobile/image-speaker-zx9.png"
            width={172}
            height={107}
            alt="speaker-zx9 Image"
          />
        </div>
        <div className="mb-[55px] flex max-w-[349px] flex-col items-center justify-center place-self-center text-center md:mb-16 lg:mb-[unset] lg:items-start lg:text-start">
          <h1 className="mb-6 text-white">ZX9 SPEAKER</h1>
          <p className="body mb-10 max-w-[349px] text-white opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href={"/speakers/zx9-speaker"}
            className="link flex h-12 w-40 items-center justify-center bg-black text-white"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductPreview;
