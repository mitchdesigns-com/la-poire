import Link from "next/link";
import React from "react";

interface BreadCrumbProps {
  list: {
    title?: string;
    link?: string;
  }[];
  noPadding?: boolean;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ list, noPadding }) => {
  return (
    <div className="" id="BreadCrumb">
      <div className={`container mx-auto ${noPadding ? "" : "md:px-12 px-4"}`}>
        <ul className="flex md:py-4 py-4 flex-wrap text-[10px] text-gray-800 md:text-sm whitespace-nowrap leading-relaxed">
          {list.map((item: any, index: number) => (
            <li key={index} className="flex items-center capitalize">
              {item.link ? (
                <>
                  <Link
                    href={item.link}
                    className="hover:underline cursor-pointer pr-[6px]"
                  >
                    {item.title}
                  </Link>
                  <span className="inline-block mr-1">/</span>
                </>
              ) : (
                <span className="text-gray-800 text-opacity-60 text-xs md:text-sm w-[110px] lg:w-full whitespace-nowrap">
                  {item.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
