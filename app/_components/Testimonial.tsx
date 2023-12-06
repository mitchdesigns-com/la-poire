import React from "react";

export default function Testimonial() {
  return (
    <div className="relative w-[533px] h-[186px] border border-dashed border-[#e78da2]">
      <div className="inline-flex flex-col h-[124px] items-start justify-between absolute top-[47px] left-[24px]">
        <p className="relative w-[459px] h-[71px] mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-black text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
          Every family gathering is incomplete without La Poire&#39;s
          delicacies. It&#39;s not just about the food, it&#39;s about the
          happiness they bring to our moments together.
        </p>
        <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
          <div className="relative w-[42px] h-[42px] bg-pink rounded-[21px]" />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#000000] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
              Sarah
            </div>
            <div className="relative w-fit font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-pink text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
              from Alexandria
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[19px] top-[11px] left-[10px] [font-family:'PT_Serif-Bold',Helvetica] font-bold text-[#e78da2] text-[50px] tracking-[0] leading-[53px] whitespace-nowrap">
        “
      </div>
      <div className="absolute w-[6px] h-[70px] top-[38px] -left-px bg-[#fdb3c4]" />
    </div>
  );
}
