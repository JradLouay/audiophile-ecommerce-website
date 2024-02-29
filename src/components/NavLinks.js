"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/"
        className={`hover:text-[#D87D4A] ${pathname === "/" ? "text-[#D87D4A]" : ""}`}
      >
        HOME
      </Link>
      <Link
        href="/headphones"
        className={`hover:text-[#D87D4A] ${pathname.includes("/headphones") ? "text-[#D87D4A]" : ""}`}
      >
        HEADPHONES
      </Link>
      <Link
        href="/speakers"
        className={`hover:text-[#D87D4A] ${pathname.includes("/speakers") ? "text-[#D87D4A]" : ""}`}
      >
        SPEAKERS
      </Link>
      <Link
        href="/earphones"
        className={`hover:text-[#D87D4A] ${pathname.includes("/earphones") ? "text-[#D87D4A]" : ""}`}
      >
        EARPHONES
      </Link>
    </>
  );
}

export default NavLinks;
