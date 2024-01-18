import Image from "next/image";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function TimeLineProgress() {
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragStartX !== null) {
      const delta = dragStartX - e.clientX;
      setScrollLeft((prevScrollLeft) => prevScrollLeft + delta);
      setDragStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setDragStartX(null);
  };
  const handleItemClick = (index: number) => {
    const newActiveIndices: number[] = Array.from(
      { length: index + 1 },
      (_, i) => i
    );
    setActiveIndices(newActiveIndices);
  };
  const mockData = [
    {
      year: 1975,
      title: "Birth in Garden City",
      desc: "La Poire's first store opens, igniting passion.",
      image: "/images/1975_year.webp",
    },
    {
      year: 1983,
      title: "Cairo Expansion",
      desc: "Spreading joy, one Cairo neighborhood at a time.",
      image: "/images/1975_year.webp",
    },
    {
      year: 1991,
      title: "Brand Diversification",
      desc: "New brands, same commitment to culinary joy.",
      image: "/images/1975_year.webp",
    },
    {
      year: 2000,
      title: "Becoming an Icon",
      desc: "La Poire: Egypt's turn-of-the-century culinary symbol.",
      image: "/images/1975_year.webp",
    },
    {
      year: 2009,
      title: "Middle Eastern Footsteps",
      desc: "Sharing Egypt's sweet legacy across borders.",
      image: "/images/1975_year.webp",
    },
    {
      year: 2018,
      title: "Embracing Digital",
      desc: "Tradition meets technology; touching hearts anew.",
      image: "/images/1975_year.webp",
    },
    {
      year: 2020,
      title: "Sustainable Pioneers",
      desc: "Leading green practices in Egypt's culinary scene.",
      image: "/images/1975_year.webp",
    },
    // {
    //   year: 2023,
    //   title: "Future Milestone",
    //   desc: "Exciting plans for the future!",
    //   image: "/images/1975_year.webp",
    // },
  ];

  return (
    <div
      id="container"
      className="relative select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="flex px-4 xl:justify-center items-center overflow-x-scroll">
        {mockData.map((item, index: any) => (
          <ProgressItem
            key={index}
            index={index}
            data={item}
            active={activeIndices.includes(index)}
            onItemClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

const ProgressItem = ({ data, active, onItemClick, index }: any) => {
  const even = index % 2 === 0;

  return (
    <div className={`pt-[400px] pb-[316px] inline-block pr-[130px]`}>
      <div className="relative py-22 group cursor-pointer">
        <span
          className={`text-2xl font-bold leading-[36px] px-14 w-[90px] flex justify-center items-center rounded-full ${
            active ? "text-white bg-greenDark" : "text-goldLight bg-green"
          }`}
          onClick={onItemClick}
        >
          {data.year}
        </span>
        {index === 0 && (
          <span className="flex gap-[50px] absolute bottom-full right-full translate-x-[45px]">
            <span className="w-[2px] h-36 bg-goldLight bg-opacity-50 rounded-full" />
            <span className="w-[2px] h-36 bg-goldLight bg-opacity-50 rounded-full" />
            <span className="w-[2px] h-36 bg-goldLight bg-opacity-50 rounded-full" />
          </span>
        )}
        <span className="flex gap-[50px] absolute bottom-full left-full -translate-x-[45px]">
          <span
            className={`w-[2px] h-36 bg-goldLight group-hover:before:opacity-100 relative before:absolute before:w-10 before:h-10 before:bg-goldLight before:opacity-0 before:transition-all transition-all before:rounded-full before:-left-[4px] rounded-full ${
              active ? "bg-opacity-100 before:opacity-100" : "bg-opacity-70"
            } ${
              even
                ? "before:top-full before:-mt-[4px]"
                : "before:bottom-full before:-mb-[4px]"
            }`}
          />
          <span className="w-[2px] h-36 bg-goldLight bg-opacity-50 rounded-full" />
          <span className="w-[2px] h-36 bg-goldLight bg-opacity-50 rounded-full" />
          <span className="w-[2px] h-36 bg-goldLight bg-opacity-50 rounded-full" />
        </span>
        <div
          className={`absolute ${
            even ? "top-full left-4" : "bottom-full mb-[90px] left-4"
          }`}
        >
          <div
            className={`relative flex gap-20 pr-50 ${
              even ? "flex-col" : "flex-col-reverse"
            }`}
          >
            <Image
              className={`absolute ${even ? "top-36" : "bottom-36"} right-0 ${
                active ? "opacity-100" : "opacity-0"
              } transition-all`}
              alt=""
              src={data.image}
              width={130}
              height={166}
            />
            <div className={`transition-all ${active ? "" : "opacity-30"}`}>
              <span
                className={`w-[2px] bg-goldLight ${
                  even ? "h-[140px]" : "h-[140px]"
                } block mx-20`}
              ></span>
              <span className="mt-22 rounded-full border-2 border-brand inline-flex justify-center items-center w-40 h-40">
                <span className="w-10 h-10 inline-block rounded-full bg-white"></span>
              </span>
            </div>
            <div>
              <h3
                className={`whitespace-nowrap text-sm font-semibold text-goldLight transition-all ${
                  active ? "" : "opacity-30"
                }`}
              >
                {data.title}
              </h3>
              <p
                className={`whitespace-nowrap text-xs text-white mt-5 transition-all ${
                  active ? "" : "opacity-30"
                }`}
              >
                {data.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
