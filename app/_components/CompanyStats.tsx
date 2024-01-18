import React from "react";
import Counter from "./Counter";
import { gabarito } from "../fonts";

const StatItem = ({ value, label }: any) => (
  <>
    <div className="flex flex-col justify-center items-center text-center">
      <span
        className={`md:text-7xl text-[11vw] text-goldLight font-medium ${gabarito.className}`}
      >
        <Counter value={value} />
      </span>
      <span className="uppercase text-sm text-gray2">{label}</span>
    </div>
    <span className="bg-gray w-[1px] h-[75px] mt-[13px] last-of-type:hidden block" />
  </>
);
export default function CompanyStats({fullWidth}:any) {
  return (
    <div className={`${fullWidth?"bg-black pt-[174px] pb-[155px]":""}`}>
    <div className={`flex lg:flex-row flex-col flex-wrap gap-10 w-full items-center justify-evenly ${fullWidth?"mx-auto container":""}`}>
      <div className={`${fullWidth?"md:w-[461px] w-full":"md:w-460 w-full"}`}>
        <h3 className="text-xl text-white mb-5">Flavors Trusted by Millions</h3>
        <p className={`${fullWidth?"text-white text-sm font-light":"text-white text-sm font-light"}`}>
          Over 16 million people find joy in every bite, trusting our brands to
          deliver unparalleled happiness and flavor.
        </p>
      </div>
      <div className="flex md:justify-between justify-center md:gap-44 gap-22 md:pt-0 pt-20 items-stretch w-auto">
        <StatItem value={5} label="brands" />
        <StatItem value={126} label="Locations" />
        <StatItem value={880} label="Employees" />
      </div>
    </div>
    </div>
  );
}
