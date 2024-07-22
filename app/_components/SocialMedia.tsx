import React from "react";
import Instagram from "./Icons/Instagram";
import Facebook from "./Icons/Facebook";
import SocialMediaLoader from "./SocialMediaLoader";
import Tiktok from "./Icons/Tiktok";
import X from "./Icons/X";
import Youtube from "./Icons/Youtube";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function SocialMedia({ data }: any) {
  const t = useTranslations('common');
  
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
      className={`bg-${data.BrandColor} md:min-h-[50vh] h-[423px] lg:h-[705px] lg:py-44 flex justify-center items-center text-center text-white`}
    >
      <div className="flex flex-col items-center justify-center">
        <h6 className="md:text-xl text-[10px] font-semibold">
          {t("find") || "Find"} {data.Title || ""} {t("on") || "on"}
        </h6>
        <h3 className="relative px-2 lg:text-[60px] md:text-[40px] text-[27px] font-bold before:absolute md:before:bottom-3 before:bottom-[9px] before:left-0 before:right-0 before:z-0 md:before:h-2 before:h-[10px] before:bg-black before:content-['']">
          <span className="relative">{t('social_media')}</span>
        </h3>
        <div className="mt-40 flex flex-wrap md:flex-nowrap md:px-3 gap-10 px-3">
          {socialMediaLinks.map((socialMedia, index) => (
            <Link
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white hover:bg-bej px-20 transition-all flex items-center text-${socialMedia.color} rounded-[10px] gap-10 py-20 xl:w-[268px] lg:w-[250px] w-[calc(100%/2-5px)] justify-center items-center text-xl font-semibold`}
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