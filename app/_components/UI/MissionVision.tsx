"use client";
import { pt_serif } from "@/app/fonts";
import { useState } from "react";

export default function MissionVision({data}:any) {
  const [selectedRadio, setSelectedRadio] = useState("visionRadio");
  const handleRadioChange = (event: any) => {
    setSelectedRadio(event.target.value);
  };
  if(!data){
    return null;
  }
  return (
    <div className="mx-auto flex max-w-[960px] flex-col items-center justify-center gap-20 text-center">
      <div className="bg-goldDarker grid w-[280px] grid-cols-2 gap-2 rounded-full p-[6px]">
        <div>
          <input
            type="radio"
            name="visions"
            id="visionRadio"
            value="visionRadio"
            className="peer hidden"
            onChange={handleRadioChange}
            defaultChecked={selectedRadio === "visionRadio"}
          />
          <label
            htmlFor="visionRadio"
            className="block cursor-pointer select-none whitespace-nowrap rounded-full px-20 text-center text-base font-bold leading-9 text-gold peer-checked:bg-green peer-checked:text-white"
          >
            Our Vision
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="visions"
            id="missionRadio"
            value="missionRadio"
            className="peer hidden"
            onChange={handleRadioChange}
            defaultChecked={selectedRadio === "missionRadio"}
          />
          <label
            htmlFor="missionRadio"
            className="block cursor-pointer select-none whitespace-nowrap rounded-full px-20 text-center text-base font-bold leading-9 text-gold peer-checked:bg-green peer-checked:text-white"
          >
            Our Mission
          </label>
        </div>
      </div>
      {selectedRadio === "visionRadio" ? (
        <h2 className={`${pt_serif.className} text-gray5 text-[36px]`}>
          {data.visionDescription}
        </h2>
      ) : (
        <h2 className={`${pt_serif.className} text-gray5 text-[36px]`}>
        {data.missionDescription}
        </h2>
      )}
    </div>
  );
}
