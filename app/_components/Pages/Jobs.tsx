"use client";
import Image from "next/image";
import HeroWithTitles from "../HeroWithTitles";
import Link from "next/link";
import LongArrow from "../Icons/LongArrow";
import SectionTitles from "../UI/SectionTitles";
import Newsletter from "../Newsletter";

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
          <ul className="max-w-6xl mx-auto mt-[90px] text-gray3">
            <li>
              <Link
                href="/job/single"
                className="flex items-center justify-between border-b pt-[27px] pb-20"
              >
                <div className="flex flex-col">
                  <span className="text-[34px] font-bold">Pastry Chef</span>
                  <span>In Office</span>
                </div>
                <span className="w-[26px] inline-block"><LongArrow /></span>
              </Link>
            </li>
            <li>
              <Link
                href="/job/single"
                className="flex items-center justify-between border-b pt-[27px] pb-20"
              >
                <div className="flex flex-col">
                  <span className="text-[34px] font-bold">Barista</span>
                  <span>In Office</span>
                </div>
                <span className="w-[26px] inline-block"><LongArrow /></span>
              </Link>
            </li>
            <li>
              <Link
                href="/job/single"
                className="flex items-center justify-between border-b pt-[27px] pb-20"
              >
                <div className="flex flex-col">
                  <span className="text-[34px] font-bold">
                    Front-of-House Manager
                  </span>
                  <span>In Office</span>
                </div>
                <span className="w-[26px] inline-block"><LongArrow /></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-[200px] px-4 pb-140">
        <div className="container mx-auto">
          <section className="text-center text-black">
            <SectionTitles
              title={"Employee Testimonials"}
              sub_title={
                "Discover the Heartbeat of La Poire through the Experiences and Stories of Our Valued Team Members"
              }
            />
          </section>
          <div className="grid grid-cols-3 mt-[60px] gap-[60px]">
            <div className="flex flex-col items-center justify-center text-center bg-yellow2 px-[26px] py-50">
              <Image src="/images/stars.webp" width={99} height={18} alt="" />
              <p className="mb-10 mt-18 text-gray5">
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className="text-xs font-semibold text-gray">
                Joe - UI & UX Designer
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-yellow2 px-[26px] py-50 scale-110">
              <Image src="/images/stars.webp" width={99} height={18} alt="" />
              <p className="mb-10 mt-18 text-gray5">
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className="text-xs font-semibold text-gray">
                Joe - UI & UX Designer
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-yellow2 px-[26px] py-50">
              <Image src="/images/stars.webp" width={99} height={18} alt="" />
              <p className="mb-10 mt-18 text-gray5">
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className="text-xs font-semibold text-gray">
                Joe - UI & UX Designer
              </span>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
