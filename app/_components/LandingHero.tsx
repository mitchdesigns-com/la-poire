"use client";
import { motion } from "@/app/lib/motion";
import { pt_serif } from "../fonts";
import CompanyStats from "./CompanyStats";
import CardBackground from "./Widgets/CardBackground";

const HeroText = () => (
  <motion.h1
    className="text-white md:text-6xl text-3xl text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay: 1 * 0.2 }}
    viewport={{ once: true }}
  >
    la poire, <span className="text-goldLight">every day </span> deserves <br />
    a moment of <span className="text-goldLight">joy!</span>
  </motion.h1>
);

const CompanyInfo = ({ cardData }: any) => (
  <div className="flex justify-between py-14 w-full md:flex-row flex-col md:px-0 px-4">
    <div className="flex">
      <div className={`md:w-28 md:text-start text-center`}>
        <motion.p
          className={`text-base ${pt_serif.className} italic`}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 1 * 0.2 }}
          viewport={{ once: true }}
        >
          La Poire&apos;s five brands infuse{" "}
          <span className="text-green font-bold">joy</span> into every product,
          embodying our{" "}
          <span className="text-green font-bold">Economy of Scope</span> and
          elevating moments in Egypt.
        </motion.p>
      </div>
    </div>
    <div className="flex gap-2 overflow-x-auto no-scrollbar md:m-0 md:-mr-4 md:pr-4 -mx-4 md:p-0 p-4">
      {cardData.map((card: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <CardBackground img={card.img} text={card.text} color={card.color} />
        </motion.div>
      ))}
    </div>
  </div>
);

export default function LandingHero() {
  const cardData = [
    {
      img: "/images/cards/card_01.webp",
      text: "La Poire Patisserie",
      color: "green",
    },
    {
      img: "/images/cards/card_02.webp",
      text: "La Poire Bistro",
      color: "green",
    },
    {
      img: "/images/cards/card_03.webp",
      text: "Beano’s Cafe",
      color: "orange",
    },
    {
      img: "/images/cards/card_04.webp",
      text: "Stavolta Ice Cream",
      color: "black",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto md:px-4">
        <div className="bg-[url(/images/landing-hero.webp)] bg-cover md:h-688 h-460">
          <div className="py-8 md:px-240 px-4 flex justify-center items-center w-full h-full">
            <HeroText />
          </div>
        </div>
        <div className="flex flex-col items-end relative">
          <CompanyInfo cardData={cardData} />
          <div className="flex justify-end bg-black w-[1004px] md:max-w-[calc(100vw-388px)] relative md:pt-22 md:pb-56 md:pl-48 p-4 pr-0 max-w-full">
            <span className="absolute bg-black w-[100vw] h-[3000vh] bottom-0 left-0 z-[-1] pointer-events-none select-none md:block hidden" />
            <CompanyStats />
          </div>
        </div>
      </div>
    </div>
  );
}
