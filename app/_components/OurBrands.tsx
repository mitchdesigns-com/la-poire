"use client";
import Image from "next/image";
import { motion } from "@/app/lib/motion";
export default function OurBrands({title}:{title?:string}) {
  let mainTitle = "Our Brands"
  if(title){
    mainTitle = title
  }
  return (
    <div className="container flex flex-col gap-20 mx-auto text-center md:gap-40 md:py-100 py-50">
      <h4 className="text-xl font-light text-black">{mainTitle}</h4>
      <div className="flex flex-wrap items-center justify-center gap-40 md:flex-nowrap">
        <motion.div
          className="relative w-[142px] h-[124px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 2 * 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/brands/brand_01.webp"
            alt="brand logo alt"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div
          className="relative w-[142px] h-[124px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 1 * 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/brands/brand_02.webp"
            alt="brand logo alt"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div
          className="relative w-[142px] h-[124px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 1 * 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/brands/brand_03.webp"
            alt="brand logo alt"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div
          className="relative w-[142px] h-[124px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 2 * 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/brands/brand_04.webp"
            alt="brand logo alt"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
