import React from "react";
import Instagram from "./Icons/Instagram";
import Facebook from "./Icons/Facebook";
import SocialMediaLoader from "./SocialMediaLoader";
import Tiktok from "./Icons/Tiktok";
import X from "./Icons/X";
import Youtube from "./Icons/Youtube";
import Link from "next/link";

export default function SocialMedia({ data }: any) {
  // Check if data or data.HeroImage is null
  if (!data) {
    // You can render a placeholder or handle this case as needed
    return <SocialMediaLoader />;
  }

  const socialMediaLinks = [];

  // Check if InstagramLink exists and add to the array
  if (data.InstagramLink) {
    socialMediaLinks.push({
      name: "Instagram",
      icon: <Instagram />,
      link: data.InstagramLink,
      color: "orange",
    });
  }

  // Check if FacebookLink exists and add to the array
  if (data.FacebookLink) {
    socialMediaLinks.push({
      name: "Facebook",
      icon: <Facebook />,
      link: data.FacebookLink,
      color: "blue",
    });
  }

  // Check if TiktokLink exists and add to the array
  if (data.TiktokLink) {
    socialMediaLinks.push({
      name: "Tiktok",
      icon: <Tiktok />,
      link: data.TiktokLink,
      color: "black",
    });
  }

  // Check if XLink exists and add to the array
  if (data.XLink) {
    socialMediaLinks.push({
      name: "X",
      icon: <X />,
      link: data.XLink,
      color: "black",
    });
  }

  // Check if YouTubeLink exists and add to the array
  if (data.YouTubeLink) {
    socialMediaLinks.push({
      name: "Youtube",
      icon: <Youtube />,
      link: data.YouTubeLink,
      color: "red",
    });
  }
  return (
    <div
      className={`bg-${data.BrandColor} h-screen flex justify-center items-center text-center text-white`}
    >
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-xl font-semibold">Find La Poire Patisserie on</h6>
        <h3 className="relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-3 before:h-2 before:bg-black before:z-0 text-[60px] font-bold px-2">
          <span className="relative">Social Media</span>
        </h3>
        <div className="flex gap-10 flex-wrap mt-40">
          {socialMediaLinks.map((socialMedia, index) => (
            <Link
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white hover:bg-bej transition-all flex items-center text-${socialMedia.color} rounded-[10px] gap-10 py-20 md:w-[268px] justify-center items-center text-xl font-semibold`}
            >
              {socialMedia.icon}

              {socialMedia.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
