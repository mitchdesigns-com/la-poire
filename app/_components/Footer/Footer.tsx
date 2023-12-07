import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="flex container mx-auto pt-64 pb-4 flex-col justify-center items-center gap-4 text-center">
        <Link href="/">
          <Image
            src="/images/logo-white.webp"
            alt="La Poire Logo"
            width="166"
            height="46"
          />
        </Link>
        <span className="bg-gray5 h-[2px] w-full block" />
        <p className="text-gray5 text-sm tracking-normal">
          © {new Date().getFullYear()} La Poire Group • All Rights Reserved •{" "}
          <Link
            href="https://www.mitchdesigns.com/"
            target="_blank"
            rel="noreferrer"
          >
            Designed by MitchDesigns
          </Link>
        </p>
      </div>
    </div>
  );
}
