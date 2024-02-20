"use client";

import SectionTitles from "./SectionTitles";
import TimeLineProgress from "./TimeLineProgress";

export default function TimeLine({ data }: any) {
  return (
    <div className="bg-greenBlack px-4 py-80">
      <div className="container mx-auto">
        <section className="text-start text-white">
          <SectionTitles title={data.title} sub_title={data.desc} />
        </section>
      </div>
      <div className="-mx-4">
        <TimeLineProgress progress={data.process} />
      </div>
    </div>
  );
}
