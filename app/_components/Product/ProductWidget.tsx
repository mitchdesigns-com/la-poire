import Image from "next/image";
import React from "react";

export default function ProductWidget({ data }: any) {
    const categoryNames = data.categories.data.map((category: any) => category.attributes.name);

  return (
    <div className="bg-bej drop-shadow-md rounded-[10px] p-20 w-full">
      <div className="aspect-square relative">
        <Image
          alt=""
          fill
          className="object-cover"
          src={
            process.env.NEXT_PUBLIC_API_URL +
            data.thumbnail.data?.attributes.url
          }
        />
      </div>
      <h3 className="font-bold text-black mt-10">{data.name}</h3>
      <h5 className="text-sm text-black">{categoryNames}</h5>
    </div>
  );
}
