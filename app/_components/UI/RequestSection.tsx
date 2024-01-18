import { roboto } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import RequestForm from "../RequestForm";

export default function RequestSection() {
  return (
    <div className={`px-4 py-32 bg-gold ${roboto.className}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-[80px] flex-wrap">
          <div className="w-[474px]">
            <div className="w-full px-32 bg-white rounded-xl py-26 shadow-md shadow-[#034A3080]">
              <RequestForm />
            </div>
          </div>
          <div className="flex flex-col gap-[70px]">
            <Image
              src="/images/logo-white.webp"
              alt="La Poire Logo"
              width="205"
              height="57"
            />
            <div className="flex flex-col gap-10 max-w-[550px]">
              <h6 className="text-xl text-goldLight">
                Ready to Embark on this Venture?
              </h6>
              <h2 className="text-[76px] font-bold text-white leading-[90px]">
                {"Let's Shape the Future Together"}
              </h2>
              <p className="text-sm text-gray3 leading-[21px]">
                {
                  "Have questions? Eager to get started? Reach out to our franchising team today. We're here to assist, guide, and collaborate, ensuring a prosperous and fulfilling journey ahead."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
