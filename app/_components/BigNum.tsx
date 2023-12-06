import React from "react";

export default function BigNum({className,text,text1}:any) {
  return (
    <div className="inline-flex flex-col items-center relative">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Gabarito-Medium',Helvetica] font-medium text-light-gold text-[70px] tracking-[0] leading-[80px] whitespace-nowrap">
        {text}
      </div>
      <div className="relative w-fit font-text-small-regular-up font-[number:var(--text-small-regular-up-font-weight)] text-[#959595] text-[length:var(--text-small-regular-up-font-size)] tracking-[var(--text-small-regular-up-letter-spacing)] leading-[var(--text-small-regular-up-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-up-font-style)]">
      text1
      </div>
    </div>
  );
}
