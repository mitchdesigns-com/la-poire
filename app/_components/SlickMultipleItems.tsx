"use client";
import React, { useRef, useState } from "react";
import Button from "./Button";
import ChevronLeft from "./Icons/ChevronLeft";
import ChevronRight from "./Icons/ChevronRight";

function SlickMultipleItems({
  children,
  nopadding,
  ArrowsPositionRight,
  ArrowPositionCenter,
  Btnbsolute,
  noSlick,
}: any) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isEndOfLeft, setIsEndOfLeft] = useState<boolean>(true);
  const [isEndOfRight, setIsEndOfRight] = useState<boolean>(false);
  let x = 0;
  let scrollAmount = 260;
  // if (typeof window !== "undefined") {
  //   scrollAmount = window.innerWidth < 768 ? 300 : 400;
  // }

  const goLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - scrollAmount,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const goRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + scrollAmount,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onSlide = () => {
    if (sliderRef.current) {
      x = sliderRef.current.scrollLeft;
      const endOfLeft = x === 0;
      setIsEndOfLeft(endOfLeft);

      // Check if there are no more sliders in the right direction
      const endOfRight =
        x + sliderRef.current.clientWidth === sliderRef.current.scrollWidth;
      setIsEndOfRight(endOfRight);
    }
  };

  return (
    <div className={"relative py-44"}>
      <div className={`${noSlick ? "" : "multi_scroll_content"}`}>
        <div
          ref={sliderRef}
          className={`multi_scroll_content_gallery no-scrollbar`}
          onScroll={onSlide}
        >
          <div className="wrapper">{children}</div>
        </div>
      </div>
      <div className={`flex gap-4 absolute left-[calc(50vw-519px)] mt-54`}>
        <div
          className={`${isEndOfRight ? " opacity-20 pointer-events-none" : ""}`}
          onClick={goLeft}
        >
          <Button variant="secondary" size="square" pill uppercase>
            <ChevronLeft />
          </Button>
        </div>
        <div
          className={`${isEndOfRight ? " opacity-20 pointer-events-none" : ""}`}
          onClick={goRight}
        >
          <Button variant="secondary" size="square" pill uppercase>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SlickMultipleItems;
