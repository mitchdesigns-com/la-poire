import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("nav");

  return (
    <footer className='bg-black'>
      <div className='container mx-auto flex flex-col items-center gap-4 pb-4 pt-4 text-center md:pt-64'>
        <Link href='/' className='my-4' prefetch={false}>
          <Image
            src='/images/logo-white.webp'
            alt='La Poire Logo'
            width={166}
            height={46}
          />
        </Link>
        <div className='flex flex-wrap justify-center gap-4 pl-2 md:gap-8'>
          <Link
            href='/'
            className='my-2 inline-block text-white'
            prefetch={false}>
            {t("home")}
          </Link>
          <Link
            href='/about'
            className='my-2 inline-block text-white'
            prefetch={false}>
            {t("about")}
          </Link>
          <Link
            href='/brands'
            className='my-2 inline-block text-white'
            prefetch={false}>
            {t("brands")}
          </Link>
          {/* <Link
            href='/franchise'
            className='my-2 inline-block text-white'
            prefetch={false}>
            {t("franchise")}
          </Link> */}
          <Link
            href='/job'
            className='my-2 inline-block text-white'
            prefetch={false}>
            {t("job")}
          </Link>
          <Link
            href='/contact-us'
            className='my-2 inline-block text-white'
            prefetch={false}>
            {t("contact")}
          </Link>
        </div>
      </div>
      <span className='block h-[2px] w-full bg-gray5 opacity-50' />
      <p className='flex flex-col items-center justify-center px-2 pb-4 pt-4 text-sm tracking-normal text-gray5 opacity-50 md:flex-row sm:rtl:flex-row-reverse'>
        © {new Date().getFullYear()} La Poire Group • All Rights Reserved •{" "}
        <Link
          href='https://www.mitchdesigns.com/'
          target='_blank'
          rel='noreferrer'
          className='flex items-center'>
          Designed by MitchDesigns
        </Link>
      </p>
    </footer>
  );
}
