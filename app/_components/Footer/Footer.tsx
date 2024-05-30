import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";

export default function Footer() {
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
        <div className='flex flex-wrap pl-2 justify-center gap-4 md:gap-8'>
          <Link
            href='/'
            className='my-2 inline-block text-white'
            prefetch={false}>
            Homepage
          </Link>
          <Link
            href='/about'
            className='my-2 inline-block text-white'
            prefetch={false}>
            About
          </Link>
          <Link
            href='/brands'
            className='my-2 inline-block text-white'
            prefetch={false}>
            Our Brands
          </Link>
          <Link
            href='/franchise'
            className='my-2 inline-block text-white'
            prefetch={false}>
            Franchise
          </Link>
          <Link
            href='/job'
            className='my-2 inline-block text-white'
            prefetch={false}>
            Careers
          </Link>
          <Link
            href='/contact-us'
            className='my-2 inline-block text-white'
            prefetch={false}>
            Contact us
          </Link>
        </div>
      </div>
      <span className='block h-[2px] w-full  bg-gray5 opacity-50' />
      <p className='flex flex-col md:flex-row pb-4 pt-4 px-2 text-sm tracking-normal items-center justify-center text-gray5 opacity-50'>
        © {new Date().getFullYear()} La Poire Group • All Rights Reserved •{" "}
        <Link
          href='https://www.mitchdesigns.com/'
          target='_blank'
          rel='noreferrer'
          className='flex  items-center'>
          Designed by MitchDesigns
        </Link>
      </p>
    </footer>
  );
}
