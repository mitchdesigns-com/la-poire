import React from "react";

const Pattern = ({ spanWidth = 3, color = "orange" }: any) => {
  let gap: string = "";
  let width: string;
  if (spanWidth === 3) {
    gap = "gap-[3.5px]";
    width = "w-[3px] h-[3px]";
  } else if (spanWidth === 6) {
    gap = "gap-[7px]";
    width = "w-[6px] h-[6px]";
  }

  const generateGrid = () => {
    const rows = 12;
    const columns = 13;

    const grid = [];

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < columns; j++) {
        const isOpaque = i >= 5; // Rows from the 6th row onwards have opacity

        row.push(
          <span
            key={j}
            className={`inline-block ${width} ${
              isOpaque ? "opacity-50" : "opacity-100"
            } bg-${color}`}
          />
        );
      }

      grid.push(
        <div key={i} className={`flex ${gap}`}>
          {row}
        </div>
      );
    }

    return grid;
  };

  return <div className={`flex ${gap} flex-col`}>{generateGrid()}</div>;
};

export default Pattern;
