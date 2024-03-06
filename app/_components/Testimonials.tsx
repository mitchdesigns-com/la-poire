"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { arfont, pt_serif } from "../fonts";
import { motion } from "@/app/lib/motion";
import { useLocale, useTranslations } from "next-intl";

const TestimonialItem = ({ quote, author, location,locale }: any) => (
  <div className={`py-1`} dir={`${locale === "ar" ? "rtl" : "ltr"}`}>
    <div className="relative flex flex-col gap-2 border border-dashed border-pink2 px-4 pb-14 pt-48">
      <span
        className={`absolute top-1 text-pink2 font-bold text-[50px] ${locale === "ar"?arfont.className:pt_serif.className} ${locale==="ar"?"right-1":"left-1"}`}
      >
        “
      </span>
      <span className={`absolute top-36 h-[70px] w-[6px] bg-pink ${locale==="ar"?"right-0":"left-0"}`} />
      <p>{quote}</p>
      <div className="flex items-center gap-2">
        <Image src="/images/user.webp" alt="img alt" width={42} height={42} />
        <div className="flex flex-col">
          <span className="text-base font-medium leading-6">{author}</span>
          <span className="text-xs text-pink">{location}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const t = useTranslations('common');
  const locale = useLocale();
  const settings = {
    dots: true,
    // infinite: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true,
    // verticalSwiping: true,
    // swipeToSlide: true,
  };

  const testimonialsDataEn = [
    {
      quote: "Every family gathering is incomplete without La Poire's delicacies. It's not just about the food, it's about the happiness they bring to our moments together.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "Every family gathering is incomplete without La Poire's delicacies. It's not just about the food, it's about the happiness they bring to our moments together.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "Every family gathering is incomplete without La Poire's delicacies. It's not just about the food, it's about the happiness they bring to our moments together.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "Every family gathering is incomplete without La Poire's delicacies. It's not just about the food, it's about the happiness they bring to our moments together.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "Every family gathering is incomplete without La Poire's delicacies. It's not just about the food, it's about the happiness they bring to our moments together.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "Every family gathering is incomplete without La Poire's delicacies. It's not just about the food, it's about the happiness they bring to our moments together.",
      author: "Sarah",
      location: "from Alexandria",
    },
  ];
  const testimonialsDataAr = [
    {
      quote: "كل تجمع عائلي لا يكتمل بدون مأكولات لابوار الشهية. لا يتعلق الأمر بالطعام فحسب، بل يتعلق بالسعادة التي يجلبونها إلى لحظاتنا معًا.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "كل تجمع عائلي لا يكتمل بدون مأكولات لابوار الشهية. لا يتعلق الأمر بالطعام فحسب، بل يتعلق بالسعادة التي يجلبونها إلى لحظاتنا معًا.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "كل تجمع عائلي لا يكتمل بدون مأكولات لابوار الشهية. لا يتعلق الأمر بالطعام فحسب، بل يتعلق بالسعادة التي يجلبونها إلى لحظاتنا معًا.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "كل تجمع عائلي لا يكتمل بدون مأكولات لابوار الشهية. لا يتعلق الأمر بالطعام فحسب، بل يتعلق بالسعادة التي يجلبونها إلى لحظاتنا معًا.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "كل تجمع عائلي لا يكتمل بدون مأكولات لابوار الشهية. لا يتعلق الأمر بالطعام فحسب، بل يتعلق بالسعادة التي يجلبونها إلى لحظاتنا معًا.",
      author: "Sarah",
      location: "from Alexandria",
    },
    {
      quote:
        "كل تجمع عائلي لا يكتمل بدون مأكولات لابوار الشهية. لا يتعلق الأمر بالطعام فحسب، بل يتعلق بالسعادة التي يجلبونها إلى لحظاتنا معًا.",
      author: "Sarah",
      location: "from Alexandria",
    },
  ];

  const testimonialsData = locale === "ar"? testimonialsDataAr:testimonialsDataEn;

  return (
    <div className="pb-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-end justify-center gap-20 px-4 md:flex-nowrap md:gap-95 md:px-0">
          <div>
            <div className="relative">
              <motion.span
                className="absolute bottom-0 top-[70px] z-[1] bg-pink ltr:left-[75px] ltr:right-[42px] rtl:left-[42px] rtl:right-[75px]"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.9 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -100 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/testimonials-hero.webp"
                  alt="img alt"
                  width={531}
                  height={753}
                  className="relative z-[2]"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            className="w-full md:w-[533px]"
            initial={{ opacity: 0, scale: 1, x: -100 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 1 * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold md:pr-70 md:text-5xl">
              {t("when_people_taste")}, <span className="text-pink">{t("joy")}</span> {t("speaks")}!
            </h2>
            <div className="mt-32">
              <Slider {...settings}>
                {/* Map over the testimonialsData and split it into chunks of 3 */}
                {(testimonialsData.reduce((chunks: any[], item, index) => {
                    const chunkIndex = Math.floor(index / 3);

                    if (!chunks[chunkIndex]) {
                      chunks[chunkIndex] = [];
                    }

                    chunks[chunkIndex].push(item);

                    return chunks;
                  }, []) as any[]
                ).map((chunk, chunkIndex) => (
                  <div className="flex flex-col gap-3" key={chunkIndex}>
                    {chunk.map((testimonial: any, index: number) => (
                      <TestimonialItem key={index} locale={locale} {...testimonial} />
                    ))}
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
