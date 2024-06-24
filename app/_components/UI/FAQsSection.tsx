import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useLocale, useTranslations } from "next-intl";
import { fetchingFAQs } from "@/app/api/fetcher";

export default function FAQsSection({ subTitle, title }: any) {
  const t = useTranslations('common');
  const locale = useLocale();
  const [faqs, setFAQs] = useState<any | null>(null);
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const allFAQs = await fetchingFAQs(locale);
        setFAQs(allFAQs.data ?? null);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    };

    fetchFAQs();
  }, [locale]);
  
  return (
    <div className="bg-white px-4 py-60 lg:py-95">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-l font-normal text-gray5 md:text-xl">{subTitle}</h3>
          <h2 className="mb-40 text-3xl font-bold text-gray5 md:text-5xl">{title}</h2>
          <Questions data={faqs} />
        </div>
      </div>
    </div>
  );
}
