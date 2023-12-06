"use client";
import { motion } from "@/app/lib/motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Field from "./Field";

export default function Newsletter() {
  const [show] = useState(true);

  return (
    <div className="p-10 bg-black">
      <div className="w-[100vw] max-w-[1490px] mx-auto">
        <div className="flex w-full gap-10">
          <motion.div
            className="w-1/3 flex flex-col gap-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/newsletter/newsletter_01.webp"
              alt="img alt"
              width={490}
              height={277}
            />

            <Image
              src="/images/newsletter/newsletter_02.webp"
              alt="img alt"
              width={490}
              height={277}
            />
          </motion.div>
          <div className="w-1/3 flex flex-col gap-10">
            <motion.div
              className="flex gap-10 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/newsletter/newsletter_03.webp"
                alt="img alt"
                width={240}
                height={91}
              />
              <Image
                src="/images/newsletter/newsletter_04.webp"
                alt="img alt"
                width={240}
                height={91}
              />
            </motion.div>
            <div className="flex bg-white flex-col h-[362px] text-center px-30 items-center justify-center">
              <h3 className="text-3xl px-30">
                Stay in the Loop with La Poire!
              </h3>
              <p className="mt-5 text-greenBlack text-sm">
                Subscribe now for delicious updates, exclusive offers, and a
                sprinkle of joy in your inbox.
              </p>
              <div className="flex flex-col gap-10 items-stretch w-full mt-10">
                <Field text="Full Name" placeholder="Full Name" />
                <Field text="Email Address" placeholder="Email Address" />
                <Button variant="primary" size="normal" pill uppercase>
                  Subscribe Now
                </Button>
              </div>
            </div>
            <motion.div
              className="flex gap-10 w-full"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/newsletter/newsletter_05.webp"
                alt="img alt"
                width={240}
                height={91}
              />
              <Image
                src="/images/newsletter/newsletter_06.webp"
                alt="img alt"
                width={240}
                height={91}
              />
            </motion.div>
          </div>
          <motion.div
            className="w-1/3 flex flex-col gap-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/newsletter/newsletter_07.webp"
              alt="img alt"
              width={490}
              height={277}
            />
            <Image
              src="/images/newsletter/newsletter_08.webp"
              alt="img alt"
              width={490}
              height={277}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
