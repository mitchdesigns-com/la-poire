"use client";
import Image from "next/image";
import HeroWithTitles from "../HeroWithTitles";

export default function Jobs() {
  const data = {
    herotitle: "Jobs in La Poire",
    herosubtitle:
      "Unlock Your Potential, Embrace Creativity, and Build a Flavorful Career Journey with La Poire",
    herodescription: "",
  };
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.herotitle}
        subtitle={data.herosubtitle}
        description={data.herodescription}
        max_width
        height_auto
        subtitle_max_width="max-w-[485px]"
      />
      <div className="container mx-auto pb-100">
        <div className="flex justify-center gap-5">
          <div className="flex-none">
            <Image src="/images/jobs_01.webp" alt="" width={296} height={409} />
          </div>
          <div className="flex-none">
            <Image src="/images/jobs_02.webp" alt="" width={667} height={409} />
          </div>
          <div className="flex flex-col flex-none gap-5">
            <Image src="/images/jobs_03.webp" alt="" width={206} height={258} />
            <Image src="/images/jobs_04.webp" alt="" width={206} height={146} />
          </div>
        </div>
        <h2 className="text-5xl font-semibold text-center mt-100">
          Why Join <span className="text-green">La Poire ?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-x-[25px] gap-y-[50px] mt-60">
          <div>
            <h4 className="mb-10 text-2xl font-bold">Legacy and Fusion</h4>
            <p className="text-gray5 text-l">
              {
                "Join La Poire—blending legacy since '75 with French-Egyptian traditions"
              }
            </p>
          </div>
          <div>
            <h4 className="mb-10 text-2xl font-bold">Craftsmanship</h4>
            <p className="text-gray5 text-l">
              {"Be part of a team committed to daily, exquisite pastry craft"}
            </p>
          </div>
          <div>
            <h4 className="mb-10 text-2xl font-bold">Elegance & Delight</h4>
            <p className="text-gray5 text-l">
              {
                "Work where simplicity meets elegance, crafting diverse delights"
              }
            </p>
          </div>
          <div>
            <h4 className="mb-10 text-2xl font-bold">Exquisite Tastes</h4>
            <p className="text-gray5 text-l">
              {
                "Contribute to daily culinary experiences known for exquisite tastes"
              }
            </p>
          </div>
          <div>
            <h4 className="mb-10 text-2xl font-bold">Diverse Delights</h4>
            <p className="text-gray5 text-l">
              {
                "Be a part of a menu ranging from buttery croissants to signature cakes"
              }
            </p>
          </div>
          <div>
            <h4 className="mb-10 text-2xl font-bold">Joyful Commitment</h4>
            <p className="text-gray5 text-l">
              {"Join a mission to bring joy through expertly balanced flavors"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gold py-[150px] text-white">
        <div className="">
          <h2 className="mb-40 text-5xl font-bold text-center">
            Current Job Openings
          </h2>
          <p className="text-l text-center max-w-[825px] mx-auto">
            Explore exciting opportunities to be part of the La Poire family. We
            are looking for passionate individuals who share our commitment to
            excellence and creativity. Join us in creating delightful
            experiences for our customers.
          </p>
        </div>
      </div>
    </div>
  );
}
