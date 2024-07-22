"use client";
import { arfont, poppins, pt_serif } from "@/app/fonts";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function MissionVision({ data }: any) {
  const t = useTranslations("common");
  const locale = useLocale();
  const [selectedRadio, setSelectedRadio] = useState("visionRadio");
  const handleRadioChange = (event: any) => {
    setSelectedRadio(event.target.value);
  };
  if (!data) {
    return null;
  }
  // console.log(data);
  return (
    <div className="mx-auto flex max-w-[960px] flex-col items-center justify-center text-center">
      <div className="bg-goldDarker mx-auto mb-20 flex w-[280px] justify-center gap-2 rounded-full p-[6px]">
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
            {t("our_vision")}
          </label>
        </div>
        {data.missionDescription && (
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
              {t("our_mission")}
            </label>
          </div>
        )}
      </div>
      {selectedRadio === "visionRadio" ? (
        <h5
          className={`${
            locale === "ar" ? arfont.className : poppins.className
          } text-gray5 text-xl mb-5 font-light`}
        >
          {data.visionTitle}
        </h5>
      ) : (
        <h5
          className={`${
            locale === "ar" ? arfont.className : poppins.className
          } text-gray5 text-xl mb-5 font-light`}
        >
          {data.missionTitle}
        </h5>
      )}
      {selectedRadio === "visionRadio" ? (
        <h2
          className={`${
            locale === "ar" ? arfont.className : pt_serif.className
          } text-gray5 text-[24px] md:text-[32px] lg:text-[36px]`}
        >
          {data.visionDescription}
        </h2>
      ) : (
        <h2
          className={`${
            locale === "ar" ? arfont.className : pt_serif.className
          } text-gray5 text-[36px]`}
        >
          {data.missionDescription}
        </h2>
      )}
    </div>
  );
}
