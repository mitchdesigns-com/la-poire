import Link from "next/link";
import React from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import BreadCrumb from "../UI/BreadCrumb";
import Image from "next/image";
import LongArrow from "../Icons/LongArrow";
import Button from "../Button";
import Newsletter from "../Newsletter";

export default function SingleJob() {
  const list = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Jobs",
      link: "/job",
    },
    {
      title: "Single",
    },
  ];
  return (
    <>
      <div className="px-4 pt-120">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-30">
              <Link href="/job" className="w-[35px] inline-block rotate-180">
                <LongArrow />
              </Link>
              <div>
                <h6 className="text-xl text-green">Jobs in La Poire</h6>
                <h1 className="text-[60px] font-semibold">Pastry Chef</h1>
              </div>
            </div>
            <div className="h-[2px] bg-green w-7/12 self-end" />
          </div>
          <div className="mt-80">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="text-3xl text-black capitalize mb-22">
                  Responsibilities
                </h3>
                <ul className="pl-20 text-xl font-normal text-black list-disc leading-[50px]">
                  <li>Craft and create a variety of pastries and desserts.</li>
                  <li>
                    Ensure the highest quality and presentation of all products.
                  </li>
                  <li>
                    Collaborate with the culinary team to develop new recipes.
                  </li>
                  <li>Craft and create a variety of pastries and desserts.</li>
                  <li>
                    Ensure the highest quality and presentation of all products.
                  </li>
                  <li>
                    Collaborate with the culinary team to develop new recipes.
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/single_job.webp"
                  alt=""
                  width={527}
                  height={380}
                />
              </div>
            </div>
            <div className="flex mt-50 pb-50">
              <div className="flex flex-col">
                <h3 className="text-3xl text-black capitalize mb-22">
                  Requirements
                </h3>
                <ul className="pl-20 text-xl font-normal text-black list-disc leading-[50px]">
                  <li>Proven experience as a Pastry Chef.</li>
                  <li>Creative flair and a passion for pastry making.</li>
                  <li>Culinary degree or relevant certification.</li>
                  <li>Proven experience as a Pastry Chef.</li>
                  <li>Creative flair and a passion for pastry making.</li>
                  <li>Culinary degree or relevant certification.</li>
                </ul>
                <div className="mt-50">
                  <Button
                    variant="primary"
                    size="large"
                    pill
                    uppercase
                    // onClick={handleSubscribe}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
