"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button";
// import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  // const isBrandsPage = pathname === "/brands";
  const isBrandsPage = pathname.startsWith("/brands");
  const brandSlug = isBrandsPage ? pathname.replace("/brands/", "") : null;

  return (
    <header
      className={`header-page md:py-34 py-14 px-4 ${
        isBrandsPage ? "absolute left-0 right-0 top-0 z-10" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex md:justify-between justify-center items-center">
          <div>
            <Link href="/">
              <Image
                src={`/images/logo-${brandSlug ? "white" : "gold"}.webp`}
                alt="La Poire Logo"
                width="166"
                height="46"
              />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-36 items-center text-base text-gold uppercase">
              <li>
                <Link href={"/"}>Homepage</Link>
              </li>
              <li>
                <Link href={"/about"}>About us</Link>
              </li>
              <li>
                <Link href={"/brands"}>Brands</Link>
              </li>
              <li>
                <Link href={"/franchise"}>Franchise</Link>
              </li>
              <li>
                <Link href={"/blog"}>News & Blog</Link>
              </li>
              <li>
                <Link href={"/job"}>Job</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Button variant="primary" size="normal" pill uppercase>
              <Link href={"/contact-us"}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
