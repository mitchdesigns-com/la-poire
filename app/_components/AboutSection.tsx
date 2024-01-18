"use client";
import React from "react";
import Joy from "./Icons/Joy";
import { pt_serif } from "../fonts";
import ArrowLeft from "./Icons/ArrowLeft";
import { motion } from "@/app/lib/motion";
import CurveBorder from "./Icons/CurveBorder";

export default function AboutSection({color}:any) {
  let baseColor = "bg-greenBlack";
  let textColor = "text-goldLight";
  if(color==="pink"){
    baseColor = "bg-pinkLight";
    textColor = "text-pinkDark";
  }
  return (
    <div className={`md:py-130 py-40 px-4 ${baseColor}`}>
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse items-center justify-between gap-40 md:flex-nowrap md:gap-0">
          <div className="w-auto">
            <p
              className={`md:text-4xl text-2xl ${pt_serif.className} text-white md:w-[700px] w-full font-normal`}
            >
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
              <span className={`${textColor}`}>transform</span> fleeting moments
              into memorable, delightful experiences.
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
        <div className="hidden mt-56 pointer-events-none opacity-30">
          <button className="flex items-center justify-between text-white gap-.5 text-sm uppercase font-semibold">
            more about La Poire{" "}
            <span className="inline-block w-6 h-6">
              <ArrowLeft />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
