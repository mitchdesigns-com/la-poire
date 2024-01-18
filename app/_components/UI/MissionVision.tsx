"use client";
import { pt_serif } from "@/app/fonts";
import { useState } from "react";

export default function MissionVision() {
  const [selectedRadio, setSelectedRadio] = useState("visionRadio");
  const handleRadioChange = (event: any) => {
    setSelectedRadio(event.target.value);
  };
  return (
    <div className="max-w-[960px] mx-auto flex justify-center items-center flex-col text-center gap-20">
      <div className="grid w-[280px] grid-cols-2 gap-2 rounded-full bg-goldDarker p-[6px]">
        <div>
          <input
            type="radio"
            name="visions"
            id="visionRadio"
            value="visionRadio"
            className="hidden peer"
            onChange={handleRadioChange}
            defaultChecked={selectedRadio === "visionRadio"}
          />
          <label
            htmlFor="visionRadio"
            className="block cursor-pointer select-none rounded-full px-20 whitespace-nowrap text-center text-base leading-9 font-bold text-gold peer-checked:bg-green peer-checked:text-white"
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
            className="hidden peer"
            onChange={handleRadioChange}
            defaultChecked={selectedRadio === "missionRadio"}
          />
          <label
            htmlFor="missionRadio"
            className="block cursor-pointer select-none rounded-full px-20 whitespace-nowrap text-center text-base leading-9 font-bold text-gold peer-checked:bg-green peer-checked:text-white"
          >
            Our Mission
          </label>
        </div>
      </div>
      {selectedRadio === "visionRadio" ? (
        <h2 className={`${pt_serif.className} text-gray5 text-[36px]`}>
          {
            "Crafting moments of unparalleled joy through culinary masterpieces that resonate with Egypt's soul."
          }
        </h2>
      ) : (
        <h2 className={`${pt_serif.className} text-gray5 text-[36px]`}>
          {
            "Crafting joy through culinary excellence, our mission is to create unforgettable moments that resonate with Egypt's soul"
          }
        </h2>
      )}
    </div>
  );
}
