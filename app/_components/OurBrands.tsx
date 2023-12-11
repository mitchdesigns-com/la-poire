"use client";
import Image from "next/image";
import { motion } from "@/app/lib/motion";
export default function OurBrands() {
  return (
    <div className="container mx-auto text-center flex flex-col md:gap-40 gap-20 md:py-100 py-50">
      <h4 className="text-black text-xl font-light">Our Brands</h4>
      <div className="flex justify-center items-center gap-40 md:flex-nowrap flex-wrap">
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
