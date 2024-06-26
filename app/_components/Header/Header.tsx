"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../Button";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
// import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  // console.log("pathname", pathname);
  // const isBrandsPage = pathname === "/brands";
  const isBrandsPage = pathname.includes("brands/");
  const brandSlug = isBrandsPage ? pathname.replace("/brands/", "") : null;
  const isHome = pathname === "/" || pathname === "/en" || pathname === "/ar";
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMob, setIsOpenMob] = useState(false);
  const isAboutPage = pathname.includes("/about");
  const isSingleBrand = pathname.includes("brands/");
  // console.log('pathname',pathname)
  // console.log('brandSlug',brandSlug)
  return (
    <header
      className={`header-page md:py-34 py-14 px-4 ${
        isBrandsPage ? "absolute left-0 right-0 top-0 z-10" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
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
          <div className="hidden w-[1004px] items-center justify-between md:max-w-[calc(100vw-388px)] lg:flex">
            <div className="1xl:gap-54 flex items-center gap-4 ltr:-translate-x-34 rtl:translate-x-34">
              {isHome && <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />}
              <nav
                className={`${
                  !isHome
                    ? ""
                    : isOpen
                    ? "opacity-100 transition ease"
                    : " opacity-0 transition ease pointer-events-none"
                }`}
              >
                <ul
                  className={`ease 1xl:text-base flex items-center gap-20 whitespace-nowrap text-sm uppercase transition`}
                >
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isSingleBrand
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}
                  >
                    <Link href={"/"}>{t("home")}</Link>
                  </li>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isSingleBrand
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}
                  >
                    <Link href={"/about"}>{t("about")}</Link>
                  </li>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isSingleBrand
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}
                  >
                    <Link href={"/brands"}>{t("brands")}</Link>
                  </li>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isSingleBrand
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}
                  >
                    <Link href={"/franchise"}>{t("franchise")}</Link>
                  </li>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isSingleBrand
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}
                  >
                    <Link href={"/blog"}>{t("blog")}</Link>
                  </li>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isSingleBrand
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}
                  >
                    <Link href={"/job"}>{t("job")}</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <Button variant="primary" size="normalSm" pill uppercase>
                <Link href={"/contact-us"}>{t("contact")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex lg:hidden">
            <Hamburger isOpen={isOpenMob} setIsOpen={setIsOpenMob} />
            <div
              className={`fixed z-[100] inset-0 mt-[74px] transition-all ${
                isOpenMob
                  ? " pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="relative h-full w-full">
                <nav className="relative z-10 bg-white pb-8 pt-4">
                  <ul
                    className={`ease 1xl:text-base flex flex-col items-center gap-20 whitespace-nowrap pb-34 text-sm uppercase`}
                  >
                    <li>
                      <Link href={"/"}>{t("home")}</Link>
                    </li>
                    <li>
                      <Link href={"/about"}>{t("about")}</Link>
                    </li>
                    <li>
                      <Link href={"/brands"}>{t("brands")}</Link>
                    </li>
                    <li>
                      <Link href={"/franchise"}>{t("franchise")}</Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>{t("blog")}</Link>
                    </li>
                    <li>
                      <Link href={"/job"}>{t("job")}</Link>
                    </li>
                  </ul>
                  <Button
                    variant="primary"
                    size="normalSm"
                    pill
                    uppercase
                    className="mx-auto block"
                  >
                    <Link href={"/contact-us"}>{t("contact")}</Link>
                  </Button>
                  <div className="mx-auto"></div>
                </nav>
                <div className="fixed inset-0 mt-[74px] bg-black bg-opacity-90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
