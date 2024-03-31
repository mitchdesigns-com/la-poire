import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 border-none pb-4 pt-4 text-center md:pt-64">
        <Link href="/" className="my-20 inline-block md:my-0" prefetch={false}>
          <Image
            src="/images/logo-white.webp"
            alt="La Poire Logo"
            width="166"
            height="46"
          />
        </Link>
        <span className="block h-[2px] w-full bg-gray5 opacity-50" />
        <p className="px-2 text-sm tracking-normal text-gray5 opacity-50">
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
