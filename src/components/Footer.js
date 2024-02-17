import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-stone-950">
      <div className="container pb-[38px] md:pb-[46px] lg:pb-12">
        <div className="w-[101px] h-1 bg-[#D87D4A]" />
        <div className="flex items-center md:items-start justify-between bg-stone-950 mt-12 md:mt-[56px] lg:mt-[71px] mb-12 md:mb-9 flex-col gap-y-12 md:gap-y-8 lg:flex-row">
          <Image
            width={143}
            height={25}
            src="/assets/shared/desktop/logo.svg"
            alt="site logo"
          />

          <div className="flex gap-4 md:gap-[34px] text-center md:text-start flex-col md:flex-row link text-white">
            <Link className="hover:text-[#D87D4A]" href={""}>
              HOME
            </Link>
            <Link className="hover:text-[#D87D4A]" href={""}>
              HEADPHONES
            </Link>
            <Link className="hover:text-[#D87D4A]" href={""}>
              SPEAKERS
            </Link>
            <Link className="hover:text-[#D87D4A]" href={""}>
              EARPHONES
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 text-white gap-y-12 md:gap-y-14">
          <div className="md:col-span-2 lg:col-span-1">
            <p className="opacity-50 body text-center md:text-start">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="md:col-start-1 md:row-start-2">
            <p className="opacity-50 body text-center md:text-start">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="md:col-start-2 lg:pb-[7px] flex justify-center md:items-end md:justify-end">
            <div className="flex gap-4">
              <Image
                className="color-[#D87D4A]"
                height={24}
                width={24}
                src={"/assets/shared/desktop/icon-facebook.svg"}
                alt="facebook icon"
              />
              <Image
                height={24}
                width={24}
                src={"/assets/shared/desktop/icon-twitter.svg"}
                alt="twitter icon"
              />
              <Image
                height={24}
                width={24}
                src={"/assets/shared/desktop/icon-instagram.svg"}
                alt="instagram icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
