"use client";

import SectionTitles from "./SectionTitles";
import TimeLineProgress from "./TimeLineProgress";

export default function TimeLine() {
  return (
    <div className="bg-greenBlack py-80 px-4">
      <div className="container mx-auto">
        <section className="text-white">
          <SectionTitles
            title={"La Poire's Time-Honored History"}
            sub_title={"From Humble Beginnings to National Stardom"}
          />
        </section>
      </div>
      <div className="-mx-4">
        <TimeLineProgress />
      </div>
    </div>
  );
}
