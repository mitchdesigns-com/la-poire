"use client";
import React from "react";
import Joy from "./Icons/Joy";
import { arfont, pt_serif } from "../fonts";
import ArrowLeft from "./Icons/ArrowLeft";
import { motion } from "@/app/lib/motion";
import CurveBorder from "./Icons/CurveBorder";
import { useLocale } from "next-intl";

export default function AboutSection({ color }: any) {
  const locale = useLocale();
  let baseColor = "bg-greenBlack";
  let textColor = "text-goldLight";
  if (color === "pink") {
    baseColor = "bg-pinkLight";
    textColor = "text-pinkDark";
  }
  return (
    <div className={`md:py-130 py-40 px-4 ${baseColor}`}>
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse items-center justify-between gap-40 md:flex-nowrap md:gap-0">
          <div className="w-auto">
            <p
              className={`md:text-4xl text-2xl ${
                locale === "ar" ? arfont.className : pt_serif.className
              } text-white md:w-[700px] w-full font-normal`}
            >
              {locale === "en" ? (
                <>
                  La Poire&apos;s{" "}
                  <span className={`${textColor} relative`}>
                    four brands{" "}
                    <motion.span
                      className="absolute left-0 right-0 top-full"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 1 * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CurveBorder />
                    </motion.span>
                  </span>{" "}
                  in <span className={`${textColor}`}>Egypt</span> symbolize a
                  fusion of <span className={`${textColor}`}>joy</span> and
                  happiness in every cherished{" "}
                  <span className={`${textColor}`}>moment</span>. Through our
                  unwavering commitment, we{" "}
                  <span className={`${textColor}`}>transform</span> fleeting
                  moments into memorable, delightful experiences.
                </>
              ) : (
                <>
                  علامات
                  <span className={`${textColor} relative`}>
                    {" "} لابوار الأربعة
                    <motion.span
                      className="absolute left-0 right-0 top-full"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 1 * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CurveBorder />
                    </motion.span>
                  </span>{" "}
                  في <span className={`${textColor}`}>مصر</span> رمز لاندماج
                  الفرح والسعادة في كل{" "}
                  <span className={`${textColor}`}>لحظة</span>. من خلال التزامنا
                  تجاه عملاءنا، <span className={`${textColor}`}>نحول {" "}</span>
                  اللحظات العابرة إلى تجارب مبهجة لا تُنسى.
                </>
              )}
            </p>
          </div>
          <motion.div
            className={`w-[502px] h-[202] md:p-0 ${textColor}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 1 * 0.2 }}
            viewport={{ once: true }}
          >
            <Joy />
          </motion.div>
        </div>
        <div className="pointer-events-none mt-56 hidden opacity-30">
          <button className="flex items-center justify-between gap-.5 text-sm font-semibold uppercase text-white">
            more about La Poire{" "}
            <span className="inline-block h-6 w-6">
              <ArrowLeft />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
