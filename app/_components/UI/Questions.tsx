import React, { useState } from "react";
import ChevronDown from "../Icons/ChevronDown";

export default function Questions({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
    <div className="mx-auto flex w-[700px] max-w-full select-none flex-col gap-10">
      {data?.map((item: any, index: number) => (
        <div
          className="flex cursor-pointer flex-col rounded-3xl border border-goldLight p-20 transition-all"
          key={index}
          onClick={() => toggleContent(index)}
        >
          <div className="flex items-center justify-between">
            <h5 className="text-[15px] font-medium">{item.attributes.question}</h5>
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
            dangerouslySetInnerHTML={{ __html: item.attributes.answer }}
          />
        </div>
      ))}
    </div>
  );
}
