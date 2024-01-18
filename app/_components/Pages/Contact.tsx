"use client";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import { roboto } from "@/app/fonts";
import PhoneCall from "../Icons/PhoneCall";
import Mail from "../Icons/Mail";
import SectionTitles from "../UI/SectionTitles";
import ReactPlayer from "react-player";
import PlayBtn from "../Icons/PlayBtn";
import ContactForm from "../ContactForm";
import SectionTextImage from "../UI/SectionTextImage";
import Button from "../Button";
import Image from "next/image";
import Newsletter from "../Newsletter";

export default function Contact() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const data = {
    herotitle: "Medium length hero headline goes here",
    herosubtitle: "Your Inquiries Matter to Us – Reach Out Today!",
    herodescription:
      "Whether you have questions, feedback, or require assistance, our team is ready to provide you with the support you need. Contact La Poire for a taste of dedication and response as prompt and pleasing as our desserts.",
  };
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.herotitle}
        subtitle={data.herosubtitle}
        description={data.herodescription}
        max_width
      />
      <div className="container mx-auto mt-30 mb-30">
        <span className="bg-gray3 h-[5px] w-full block" />
      </div>
      <div className="px-4 bg-white pt-120 pb-140">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3">
            <div className="flex flex-col items-start gap-30">
              <div>
                <h4
                  className={`text-greenBlack ${roboto.className} text-xl font-semibold`}
                >
                  Customer Support
                </h4>
                <p className="mt-5 text-green">
                  Exceptional Service, Just a Message Away
                </p>
              </div>
              <div className="flex flex-col gap-5 text-sm text-gray5">
                <h5 className="flex items-center gap-5 font-semibold">
                  <PhoneCall />
                  Phone
                </h5>
                <p>+20 100 9873 878</p>
                <p>+20 2040 3990</p>
              </div>
              <div className="flex flex-col gap-5 text-sm text-gray5">
                <h5 className="flex items-center gap-5 font-semibold">
                  <Mail />
                  Email Address
                </h5>
                <p>customer_service@lapoiregroup.com</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-30">
              <div>
                <h4
                  className={`text-greenBlack ${roboto.className} text-xl font-semibold`}
                >
                  Corporate Contact
                </h4>
                <p className="mt-5 text-green">Let’s Discuss Opportunities</p>
              </div>
              <div className="flex flex-col gap-5 text-sm text-gray5">
                <h5 className="flex items-center gap-5 font-semibold">
                  <PhoneCall />
                  Phone
                </h5>
                <p>+20 100 9873 878</p>
                <p>+20 2040 3990</p>
              </div>
              <div className="flex flex-col gap-5 text-sm text-gray5">
                <h5 className="flex items-center gap-5 font-semibold">
                  <Mail />
                  Email Address
                </h5>
                <p>customer_service@lapoiregroup.com</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-30">
              <div>
                <h4
                  className={`text-greenBlack ${roboto.className} text-xl font-semibold`}
                >
                  Media Relations
                </h4>
                <p className="mt-5 text-green"> Press & Media</p>
              </div>
              <div className="flex flex-col gap-5 text-sm text-gray5">
                <h5 className="flex items-center gap-5 font-semibold">
                  <PhoneCall />
                  Phone
                </h5>
                <p>+20 100 9873 878</p>
                <p>+20 2040 3990</p>
              </div>
              <div className="flex flex-col gap-5 text-sm text-gray5">
                <h5 className="flex items-center gap-5 font-semibold">
                  <Mail />
                  Email Address
                </h5>
                <p>customer_service@lapoiregroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-64 bg-goldLight">
        <div className="container mx-auto -mb-140">
          <div className="flex flex-col items-center justify-center gap-20 mb-7">
            <section className="text-center text-black">
              <SectionTitles
                title={"Feedback & Suggestions"}
                sub_title={"Help Us Sweeten Your Experience"}
              />
            </section>
            <p className="max-w-3xl mx-auto text-sm text-center text-gray5">
              {
                "Your feedback is the ingredient that helps us improve. Share your thoughts, and let’s make the La Poire experience even more delightful for everyone."
              }
            </p>
          </div>
          <div className="w-[474px] mx-auto">
            <div className="relative w-full px-32 bg-white rounded-xl py-26" style={{ boxShadow: "0px 10px 20px rgba(51, 20, 27, 0.1)" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-140"/>
      <SectionTextImage
        image_position={"left"}
        image_src={"/images/SectionTextImage_contact.webp"}
        color={"white"}
      >
        <div className="flex flex-col text-black max-w-[515px]">
          <h2 className="text-5xl font-semibold">Visit Our Headquarters</h2>
          <h4 className="mt-10 text-green">The Heart of La Poire in Cairo</h4>
          <p className="text-base text-black pt-10 border-t-[3px] border-gray3 mt-10">
            45 Street name, somewhere, Cairo, Egypt.
          </p>
          <div className="pt-40">
            <Button
              type="submit"
              variant="border"
              size="normal"
              pill
              uppercase
              className="flex items-start gap-10"
            >
              <Image
                src="/images/pin.webp"
                alt="google pin"
                width={16}
                height={23}
              />
              Get Direction on Map
            </Button>
          </div>
        </div>
      </SectionTextImage>

      <Newsletter/>
    </div>
  );
}
