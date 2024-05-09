"use client";
import { motion } from "@/app/lib/motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import Field from "./Field";
import CampaignMonitorForm from "./CampaignMonitorForm";
import { useTranslations } from "next-intl";
import { fetchingGeneralPage } from "../api/fetcher";

export default function Newsletter() {
  const t = useTranslations("common");
  const [show] = useState(true);
  interface GeneralData {
    data: any;
  }
  let [dataFetchedContent, setDataFetched] = useState<GeneralData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchingGeneralPage();
        setDataFetched(result);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const dataImages = dataFetchedContent?.data.attributes;

  return (
    <div className="bg-black p-10">
      <div className="mx-auto w-full max-w-full px-10 md:w-[100vw] md:max-w-[1490px] md:px-0">
        <div className="flex w-full flex-wrap gap-10 md:flex-nowrap">
          <motion.div
            className="flex w-full flex-col gap-10 md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={
                dataImages?.Images
                  ? process.env.NEXT_PUBLIC_API_URL +
                  dataImages?.Images[0].Image?.data.attributes.url
                  : "/images/placeholder.webp"
              } 
              alt="img alt"
              width={490}
              height={277}
            />

            <Image
               src={
                dataImages?.Images
                  ? process.env.NEXT_PUBLIC_API_URL +
                  dataImages?.Images[1].Image?.data.attributes.url
                  : "/images/placeholder.webp"
              } 
              alt="img alt"
              width={490}
              height={277}
            />
          </motion.div>
          <div className="flex w-full flex-col gap-10 md:w-1/3">
            <motion.div
              className="flex w-full gap-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.4 }}
              viewport={{ once: true }}
            >
              <Image
              src={
                  dataImages?.Images
                    ? process.env.NEXT_PUBLIC_API_URL +
                    dataImages?.Images[2].Image?.data.attributes.url
                    : "/images/placeholder.webp"
                } 
                alt="img alt"
                width={240}
                height={91}
                className="max-w-[calc(50%-5px)]"
              />
              <Image
                src={
                  dataImages?.Images
                    ? process.env.NEXT_PUBLIC_API_URL +
                    dataImages?.Images[3].Image?.data.attributes.url
                    : "/images/placeholder.webp"
                } 
                alt="img alt"
                width={240}
                height={91}
                className="max-w-[calc(50%-5px)]"
              />
            </motion.div>
            <div className="flex h-[362px] flex-col items-center justify-center bg-white px-4 text-center md:px-30">
              <h3 className="px-0 text-3xl md:px-30">
                {t("newsletter_title")} <span>{t("brand_name")}!</span>
              </h3>
              <p className="mt-5 text-sm text-greenBlack">
                {t("newsletter_desc")}
              </p>
              <CampaignMonitorForm />
            </div>
            <motion.div
              className="flex w-full gap-10"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={
                  dataImages?.Images
                    ? process.env.NEXT_PUBLIC_API_URL +
                    dataImages?.Images[6].Image?.data.attributes.url
                    : "/images/placeholder.webp"
                } 
                alt="img alt"
                width={240}
                height={91}
                className="max-w-[calc(50%-5px)]"
              />
              <Image
                 src={
                  dataImages?.Images
                    ? process.env.NEXT_PUBLIC_API_URL +
                    dataImages?.Images[7].Image?.data.attributes.url
                    : "/images/placeholder.webp"
                } 
                alt="img alt"
                width={240}
                height={91}
                className="max-w-[calc(50%-5px)]"
              />
            </motion.div>
          </div>
          <motion.div
            className="flex w-full flex-col gap-10 md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.4 }}
            viewport={{ once: true }}
          >
            <Image
               src={
                dataImages?.Images
                  ? process.env.NEXT_PUBLIC_API_URL +
                  dataImages?.Images[4].Image?.data.attributes.url
                  : "/images/placeholder.webp"
              } 
              alt="img alt"
              width={490}
              height={277}
            />
            <Image
              src={
                dataImages?.Images
                  ? process.env.NEXT_PUBLIC_API_URL +
                  dataImages?.Images[5].Image?.data.attributes.url
                  : "/images/placeholder.webp"
              } 
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
