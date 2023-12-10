"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { pt_serif } from "../fonts";
import { motion } from "@/app/lib/motion";

const TestimonialItem = ({ quote, author, location }: any) => (
  <div className="py-1">
    <div className="border border-dashed border-pink2 pt-6 pb-14 px-4 flex flex-col gap-2 relative">
      <span
        className={`absolute top-1 left-1 text-pink2 font-bold text-[50px] ${pt_serif.className}`}
      >
        “
      </span>
      <span className={`absolute top-36 left-0 w-[6px] h-[70px] bg-pink`} />
      <p>{quote}</p>
      <div className="flex gap-2 items-center">
        <Image src="/images/user.webp" alt="img alt" width={42} height={42} />
        <div className="flex flex-col">
          <span className="text-base font-medium leading-6">{author}</span>
          <span className="text-pink text-xs">{location}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
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

  const testimonialsData = [
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
    {
      quote:
        "Every family gathering is incomplete without La Poire's delicacies. It's not just about the food, it's about the happiness they bring to our moments together.",
      author: "Sarah",
      location: "from Alexandria",
    },
  ];

  return (
    <div className="pb-100">
      <div className="container mx-auto">
        <div className="flex items-end justify-center md:gap-95 md:flex-nowrap flex-wrap gap-20 md:px-0 px-4">
          <div>
            <div className="relative">
              <motion.span
                className="absolute bottom-0 left-[75px] right-[42px] top-[70px] bg-pink z-[1]"
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
                  className="z-[2] relative"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            className="md:w-[533px] w-full"
            initial={{ opacity: 0, scale: 1, x: -100 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 1 * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="md:text-5xl text-3xl font-semibold md:pr-70">
              When people taste, <span className="text-pink">joy</span> speaks!
            </h2>
            <div className="mt-32">
              <Slider {...settings}>
                {/* Map over the testimonialsData and split it into chunks of 3 */}
                {(
                  testimonialsData.reduce((chunks: any[], item, index) => {
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
                      <TestimonialItem key={index} {...testimonial} />
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
