import Image from "next/image";
import { Link } from "@/navigation";
import React, { useEffect, useState } from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import BreadCrumb from "../UI/BreadCrumb";

interface BlogData {
  BodyContent: any;
  Title: string;
  Subtitle: string;
  Description: string;
  slug: string;
  MoreAbout: any;
}
export default function SingleBlog({ data }: any) {
  const list = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "News & Blog",
      link: "/blog",
    },
    {
      title: "Single",
    },
  ];
  return (
    <div className="px-4 pt-120">
      <div className="mx-auto w-full max-w-[1000px]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-[7px] text-gray5"
        >
          <span className="inline-block h-20 w-20 rotate-180">
            <ArrowLeft />
          </span>
          Back to All News
        </Link>
        <BreadCrumb list={list} />
        <div className="mb-50">
          <h1 className="text-[60px] font-semibold">
            A Day in the <span className="text-green">La Poire</span>
          </h1>
          <span className="text-sm text-gray">
            By John Smith, Published on November 15, 2023
          </span>
        </div>
        <div className="relative -mx-[140px] aspect-video">
          <Image src="/images/blog-hero.webp" fill alt="" />
        </div>
        <div className="blog-content">
          {data.BodyContent.map((item: any, index: any) => (
            <React.Fragment key={index}>
              {item.type === "heading" && (
                <>
                  {item.level === 2 && (
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: item.children[0].text,
                      }}
                    />
                  )}
                  {item.level === 3 && <h3>{item.children[0].text}</h3>}
                  {item.level === 4 && <h4>{item.children[0].text}</h4>}
                  {item.level === 5 && <h5>{item.children[0].text}</h5>}
                  {item.level === 6 && <h6>{item.children[0].text}</h6>}
                </>
              )}
              {item.type === "paragraph" && <p>{item.children[0].text}</p>}
              {item.type === "quote" && (
                <blockquote>
                  <p>{item.children[0].text}</p>
                </blockquote>
              )}
              {item.type === "image" && (
                <div>
                  <Image
                    src={`${item.image.url}`}
                    alt={""}
                    width={item.image.width}
                    height={item.image.height}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
