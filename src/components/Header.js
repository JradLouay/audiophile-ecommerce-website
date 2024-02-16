import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-stone-950">
      <div className="container">
        <div className="flex items-center justify-between bg-stone-950 pb-9 pt-8">
          <Image
            width={143}
            height={25}
            src="/assets/shared/desktop/logo.svg"
            alt="site logo"
          />

          <div className="hidden lg:flex justify-center gap-[34px] link text-white">
            <Link href={""}>HOME</Link>
            <Link href={""}>HEADPHONES</Link>
            <Link href={""}>SPEAKERS</Link>
            <Link href={""}>EARPHONES</Link>
          </div>
          <Image
            height={23}
            width={20}
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart logo"
          />
        </div>
        <div className="h-px w-full bg-white"></div>
      </div>
    </header>
  );
}

export default Header;
