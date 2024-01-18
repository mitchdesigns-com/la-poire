import React, { useState } from "react";
import ChevronDown from "../Icons/ChevronDown";

export default function Questions({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
    <div className="flex flex-col gap-10 w-[700px] max-w-full mx-auto select-none">
      {data?.map((item: any, index: number) => (
        <div
          className="flex flex-col p-20 transition-all border cursor-pointer border-goldLight rounded-3xl"
          key={index}
          onClick={() => toggleContent(index)}
        >
          <div className="flex items-center justify-between">
            <h5 className="text-[15px] font-medium">{item.question}</h5>
            <span
              className={`text-gold w-32 h-32 bg-bej rounded-full flex justify-center items-center ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              <ChevronDown />
            </span>
          </div>
          <div
            className={`text-sm mt-30 text-grayMed flex flex-col gap-30 ${
              activeIndex === index ? "block" : "hidden"
            }`}
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      ))}
    </div>
  );
}
