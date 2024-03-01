import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SocialMediaButtonsGroup from "./SocialMediaButtonsGroup";

function Footer() {
  return (
    <footer className="bg-stone-950">
      <div className="container pb-[38px] md:pb-[46px] lg:pb-12">
        <div className="m-auto h-1 w-[101px] bg-[#D87D4A] md:m-0" />
        <div className="mb-12 mt-12 flex flex-col items-center justify-between gap-y-12 bg-stone-950 md:mb-9 md:mt-[56px] md:items-start md:gap-y-8 lg:mt-[71px] lg:flex-row">
          <Image
            width={143}
            height={25}
            src="/assets/shared/desktop/logo.svg"
            alt="site logo"
          />

          <div className="link flex flex-col gap-4 text-center text-white md:flex-row md:gap-[34px] md:text-start">
            <NavLinks />
          </div>
        </div>
        <div className="grid gap-y-12 text-white md:grid-cols-2 md:gap-y-14">
          <div className="md:col-span-2 lg:col-span-1">
            <p className="body text-center opacity-50 md:text-start">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="md:col-start-1 md:row-start-2">
            <p className="body text-center opacity-50 md:text-start">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center md:col-start-2 md:items-end md:justify-end lg:pb-[7px]">
            <SocialMediaButtonsGroup />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
