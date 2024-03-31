"use client";
import { useLocale } from "next-intl";
import { useState } from "react";
import ArrowDown from "../Icons/ArrowDown";
import World from "../Icons/World";
import LanguageSwitcher from "./languageSwitcher";
// import World from "./Icons/World";
// import ArrowDown from "./Icons/ArrowDown";
// import LanguageSwitcher from "./Header/languageSwitcher";

const LangSwitcher = ({ headerTransparent }: any) => {
  const locale = useLocale();
  const [isShow, setIsShow] = useState(false);

  const closeLanguageSwitcher = () => {
    setIsShow(false);
  };

  const toggleLanguageSwitcher = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="relative">
      <div
        className="flex cursor-pointer items-center gap-x-[6px]"
        onClick={toggleLanguageSwitcher}
        id="lang-button"
      >
        <span
          className={`lg:group-hover:text-sea ${
            headerTransparent ? "text-white" : "text-sea"
          }`}
        >
          <World />
        </span>

        <p
          className={`uppercase text-base lg:group-hover:text-black customSmFontScreen ${
            headerTransparent ? "text-white" : " text-black"
          }`}
        >
          {locale}
        </p>
        <span
          className={`lg:group-hover:text-black ${
            headerTransparent ? "text-white" : "text-black"
          }`}
        >
          <ArrowDown />
        </span>
      </div>
      <LanguageSwitcher active={isShow} leave={closeLanguageSwitcher} />
    </div>
  );
};
export default LangSwitcher;
