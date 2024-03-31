import { Link } from "@/navigation";
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
        <ul className="text-gray-800 flex flex-wrap whitespace-nowrap py-4 text-[10px] leading-relaxed md:py-4 md:text-sm">
          {list.map((item: any, index: number) => (
            <li key={index} className="flex items-center capitalize">
              {item.link ? (
                <>
                  <Link
                    prefetch={false}
                    href={item.link}
                    className="cursor-pointer pr-[6px] hover:underline"
                  >
                    {item.title}
                  </Link>
                  <span className="mr-1 inline-block">/</span>
                </>
              ) : (
                <span className="text-gray-800 w-[110px] whitespace-nowrap text-xs text-opacity-60 md:text-sm lg:w-full">
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
