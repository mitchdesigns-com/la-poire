"use client";
import { pt_serif } from "../fonts";
import Counter from "./Counter";
import CardBackground from "./Widgets/CardBackground";
import { motion } from "@/app/lib/motion";

const HeroText = () => (
  <motion.h1
    className="text-white text-6xl text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay: 1 * 0.2 }}
    viewport={{ once: true }}
  >
    la poire, <span className="text-goldLight">every day </span> deserves <br />
    a mooment of <span className="text-goldLight">joy!</span>
  </motion.h1>
);

const CompanyInfo = ({ cardData }: any) => (
  <div className="flex justify-between py-14 w-full">
    <div className="flex">
      <div className={`w-28`}>
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
    <div className="flex gap-2">
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

const CompanyStats = () => (
  <div className="flex justify-between items-center">
    <div className="w-460">
      <h3 className="text-xl text-white mb-5">Flavors Trusted by Millions</h3>
      <p className="text-white text-sm font-light">
        Over 16 million people find joy in every bite, trusting our brands to
        deliver unparalleled happiness and flavor.
      </p>
    </div>
    <div className="flex justify-between gap-44">
      <StatItem value="5" label="brands" />
      <StatItem value="126" label="Locations" />
      <StatItem value="870" label="Employees" />
    </div>
  </div>
);

const StatItem = ({ value, label }: any) => (
  <>
    <div className="flex flex-col justify-center items-center text-center">
      <span className="text-7xl text-goldLight min-w-[140px]">
        <Counter value={value} />
      </span>
      <span className="uppercase text-sm text-gray2">{label}</span>
    </div>
    <span className="bg-gray w-[1px] last-of-type:hidden" />
  </>
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
    <div className="pt-8">
      <div className="container mx-auto">
        <div className="bg-[url(/images/group-40.png)] bg-cover h-688">
          <div className="py-8 px-240 flex justify-center items-center w-full h-full">
            <HeroText />
          </div>
        </div>
        <div className="flex flex-col items-end relative">
          <CompanyInfo cardData={cardData} />
          <div className="flex justify-end bg-black w-auto relative pt-22 pb-56 pl-6">
            <span className="absolute bg-black w-[100vw] h-[1410px] bottom-0 left-0 z-[-1] pointer-events-none select-none" />
            <CompanyStats />
          </div>
        </div>
      </div>
    </div>
  );
}
