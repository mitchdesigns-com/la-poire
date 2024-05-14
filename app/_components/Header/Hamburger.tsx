import React, { useState } from "react";

export default function Hamburger({ isOpen, setIsOpen }: any) {
  const genericHamburgerLine = `h-[2px] w-22 rounded-full bg-gold transition ease transform duration-300`;

  return (
    <button
      className="group lg:opacity-0 lg:pointer-events-none flex h-22 w-22 flex-col items-end justify-center gap-[4px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-.5 opacity-100 group-hover:opacity-75"
            : "opacity-100 group-hover:opacity-75"
        }`}
      />
      <div
        className={`${genericHamburgerLine} w-[18px] ${
          isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-75"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-1 opacity-100 group-hover:opacity-75"
            : "opacity-100 group-hover:opacity-75"
        }`}
      />
    </button>
  );
}
