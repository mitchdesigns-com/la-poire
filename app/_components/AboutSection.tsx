"use client";
import React from "react";
import Joy from "./Icons/Joy";
import { pt_serif } from "../fonts";
import ArrowLeft from "./Icons/ArrowLeft";
import { motion } from "@/app/lib/motion";
import CurveBorder from "./Icons/CurveBorder";

export default function AboutSection() {
  return (
    <div className="bg-greenBlack md:py-130 py-40 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:flex-nowrap flex-wrap-reverse">
          <div className="w-auto">
            <p
              className={`md:text-4xl text-2xl ${pt_serif.className} text-white md:w-[700px] w-full font-normal`}
            >
              La Poire&apos;s{" "}
              <span className="text-goldLight relative">
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
              in <span className="text-goldLight">Egypt</span> symbolize a
              fusion of <span className="text-goldLight">joy</span> and
              happiness in every cherished{" "}
              <span className="text-goldLight">moment</span>. Through our
              unwavering commitment, we{" "}
              <span className="text-goldLight">transform</span> fleeting moments
              into memorable, delightful experiences.
            </p>
          </div>
          <motion.div
            className="w-[502px] h-[202] md:p-0 p-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 1 * 0.2 }}
            viewport={{ once: true }}
          >
            <Joy />
          </motion.div>
        </div>
        <div className="mt-56 opacity-30 pointer-events-none hidden">
          <button className="flex items-center justify-between text-white gap-.5 text-sm uppercase font-semibold">
            more about La Poire{" "}
            <span className="w-6 h-6 inline-block">
              <ArrowLeft />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
