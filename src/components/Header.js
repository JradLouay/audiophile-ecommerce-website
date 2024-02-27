import Image from "next/image";
import Link from "next/link";
import CartMenu from "./CartMenu";
import NavBarMenu from "./NavBarMenu";

function Header() {
  return (
    <header className="bg-stone-950">
      <div className="container flex items-center justify-between bg-stone-950 pb-9 pt-8">
        <div className="flex">
          <NavBarMenu>
            <Image
              src="/assets/shared/tablet/icon-hamburger.svg"
              width={16}
              height={15}
              alt="icon-hamburger"
            />
          </NavBarMenu>
          <Image
            width={143}
            height={25}
            src="/assets/shared/desktop/logo.svg"
            alt="site logo"
          />
        </div>

        <div className="link hidden justify-center gap-[34px] text-white lg:flex">
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
        <CartMenu>
          <Image
            height={23}
            width={20}
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart logo"
          />
        </CartMenu>
      </div>
    </header>
  );
}

export default Header;
