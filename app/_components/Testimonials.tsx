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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
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
        <div className="flex items-end justify-center gap-95">
          <motion.div
            initial={{ opacity: 0, scale: 1, x: 100 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 1 * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/testimonials-hero.webp"
              alt="img alt"
              width={531}
              height={753}
            />
          </motion.div>
          <motion.div
            className="w-[533px]"
            initial={{ opacity: 0, scale: 1, x: -100 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 1 * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-semibold pr-70">
              When people taste, <span className="text-pink">joy</span> speaks!
            </h2>
            <div className="mt-32">
              <div className="flex flex-col gap-3">
                <Slider {...settings}>
                  {testimonialsData.map((testimonial, index) => (
                    <TestimonialItem key={index} {...testimonial} />
                  ))}
                </Slider>
              </div>
              <div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
