import Image from "next/image";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function TimeLineProgress({ progress }: any) {
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
  // const handleItemClick = (index: number) => {
  //   const newActiveIndices: number[] = Array.from(
  //     { length: index + 1 },
  //     (_, i) => i
  //   );
  //   setActiveIndices(newActiveIndices);
  // };
  const handleItemClick = (index: number) => {
    setActiveIndices([index]);
  };
  

  // const mockData = [
  //   {
  //     year: 1975,
  //     title: "Birth in Garden City",
  //     desc: "La Poire's first store opens, igniting passion.",
  //     image: "/images/1975_year.webp",
  //   },
  //   {
  //     year: 1983,
  //     title: "Cairo Expansion",
  //     desc: "Spreading joy, one Cairo neighborhood at a time.",
  //     image: "/images/1975_year.webp",
  //   },
  //   {
  //     year: 1991,
  //     title: "Brand Diversification",
  //     desc: "New brands, same commitment to culinary joy.",
  //     image: "/images/1975_year.webp",
  //   },
  //   {
  //     year: 2000,
  //     title: "Becoming an Icon",
  //     desc: "La Poire: Egypt's turn-of-the-century culinary symbol.",
  //     image: "/images/1975_year.webp",
  //   },
  //   {
  //     year: 2009,
  //     title: "Middle Eastern Footsteps",
  //     desc: "Sharing Egypt's sweet legacy across borders.",
  //     image: "/images/1975_year.webp",
  //   },
  //   {
  //     year: 2018,
  //     title: "Embracing Digital",
  //     desc: "Tradition meets technology; touching hearts anew.",
  //     image: "/images/1975_year.webp",
  //   },
  //   {
  //     year: 2020,
  //     title: "Sustainable Pioneers",
  //     desc: "Leading green practices in Egypt's culinary scene.",
  //     image: "/images/1975_year.webp",
  //   },
  //   // {
  //   //   year: 2023,
  //   //   title: "Future Milestone",
  //   //   desc: "Exciting plans for the future!",
  //   //   image: "/images/1975_year.webp",
  //   // },
  // ];

  return (
    <div
      id="container"
      className="relative select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="no-scrollbar flex items-center overflow-x-scroll px-4 xl:justify-center">
        {progress.map((item: any, index: any) => (
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
  if (!data) {
    return null;
  }
  return (
    <div className={`inline-block pb-[316px] pr-[130px] pt-[400px]`}>
      <div className="group relative cursor-pointer py-22">
        <span
          className={`text-2xl font-bold leading-[36px] px-14 w-[90px] flex justify-center items-center rounded-full group-hover:opacity-100 ${
            active ? "text-white bg-greenDark opacity-100" : "text-goldLight bg-green opacity-30"
          }`}
          onClick={onItemClick}
        >
          {data.Year}
        </span>
        {index === 0 && (
          <span className="absolute bottom-full right-full flex translate-x-[45px] gap-[50px]">
            <span className="h-36 w-[2px] rounded-full bg-goldLight bg-opacity-50" />
            <span className="h-36 w-[2px] rounded-full bg-goldLight bg-opacity-50" />
            <span className="h-36 w-[2px] rounded-full bg-goldLight bg-opacity-50" />
          </span>
        )}
        <span className="absolute bottom-full left-full flex -translate-x-[45px] gap-[50px]">
          <span
            className={`w-[2px] h-36 bg-goldLight group-hover:before:opacity-100 relative before:absolute before:w-10 before:h-10 before:bg-goldLight before:opacity-0 before:transition-all transition-all before:rounded-full before:-left-[4px] rounded-full ${
              active ? "bg-opacity-100 before:opacity-100" : "bg-opacity-70"
            } ${
              even
                ? "before:top-full before:-mt-[4px]"
                : "before:bottom-full before:-mb-[4px]"
            }`}
          />
          <span className="h-36 w-[2px] rounded-full bg-goldLight bg-opacity-50" />
          <span className="h-36 w-[2px] rounded-full bg-goldLight bg-opacity-50" />
          <span className="h-36 w-[2px] rounded-full bg-goldLight bg-opacity-50" />
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
              src={
                process.env.NEXT_PUBLIC_API_URL +
                data.Image.data?.attributes.url
              }
              width={130}
              height={166}
            />
            <div className={`transition-all ${active ? "" : "opacity-0 group-hover:opacity-90"}`}>
              <span
                className={`w-[2px] bg-goldLight ${
                  even ? "h-[140px]" : "h-[140px]"
                } block mx-20`}
              ></span>
              <span className="mt-22 inline-flex h-40 w-40 items-center justify-center rounded-full border-2 border-brand">
                <span className="inline-block h-10 w-10 rounded-full bg-white"></span>
              </span>
            </div>
            <div>
              <h3
                className={`whitespace-nowrap text-sm font-semibold text-goldLight transition-all ${
                  active ? "" : "opacity-0 group-hover:opacity-90"
                }`}
              >
                {data.Title}
              </h3>
              <p
                className={`whitespace-nowrap text-xs text-white mt-5 transition-all ${
                  active ? "" : "opacity-0 group-hover:opacity-90"
                }`}
              >
                {data.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
