"use client";
import { useLocale, useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Image from "next/image";
import { useEffect } from "react";
const locales = ['en', 'ar'] as const;
const {useRouter, usePathname} = createSharedPathnamesNavigation({locales});

const LanguageSwitcher = ({ active, leave }: any) => {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const switcher = document.getElementById("languageSwitcher");
      if (switcher && !switcher.contains(event.target as Node)) {
        leave();
      }
    };

    if (active) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [active, leave]);
  
  const onLocaleChange = (e: any) => {
    const newLocale = e;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      id="languageSwitcher"
      className={` w-[210px] z-50 group-hover:z-[51] ${
        active ? " block" : "hidden"
      } absolute ltr:md:right-0 ltr:md:left-auto rtl:md:left-0 rtl:md:right-auto ltr:left-0 md:top-30 top-4 pt-2`}
      onMouseLeave={leave}
    >
      <svg
        className="absolute left-[54px] top-[3px] w-auto ltr:md:left-auto ltr:md:right-5 rtl:md:left-5 rtl:md:right-auto"
        fill="none"
        height="10"
        viewBox="0 0 21 10"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
        style={{ boxShadow: "0px 20px 66px 0px rgba(0, 0, 0, 0.20)" }}
      >
        <path
          d="M0.750009 9.74999L10.5 -1.85515e-05L20.25 9.74999H0.750009Z"
          fill="#fff"
        />
      </svg>
      <div
        className="bg-white"
        style={{ boxShadow: "0px 20px 66px 0px rgba(0, 0, 0, 0.20)" }}
      >
        <button
          className="border-gray-400 hover:bg-gray-400 flex w-full cursor-pointer items-center justify-start border-b px-4 py-5 text-sm text-black transition-all"
          onClick={() => onLocaleChange("en")}
        >
          <>
            <div className="md:min-w-16 flex min-w-5 items-center">
              <Image
                alt={"web"}
                height={22}
                src={"/images/en.png"}
                width={22}
              />
            </div>
            <span className="ml-3 mr-auto block">{t("lng_en")}</span>
          </>

          {locale == "en" && (
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.143 6.42676L9.557 16.9698L4.2 11.5698L3 12.7698L8.957 18.7698C9.03501 18.8502 9.12822 18.9143 9.23122 18.9585C9.33422 19.0026 9.44495 19.0258 9.557 19.0268C9.66905 19.0258 9.77978 19.0026 9.88278 18.9585C9.98578 18.9143 10.079 18.8502 10.157 18.7698L21.343 7.62676L20.143 6.42676Z"
                fill="#203D76"
              />
            </svg>
          )}
        </button>
        <div
          className="hover:bg-gray-400 flex w-full cursor-pointer items-center justify-start px-4 py-5 text-sm text-black transition-all"
          onClick={() => onLocaleChange("ar")}
        >
          <>
            <div className="md:min-w-16 flex min-w-5 items-center">
              <Image
                src={"/images/ar.png"}
                alt={"web"}
                width={22}
                height={22}
              />
            </div>
            <span className="ml-3 mr-auto block">{t("lng_ar")}</span>
          </>
          {locale == "ar" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.143 6.42676L9.557 16.9698L4.2 11.5698L3 12.7698L8.957 18.7698C9.03501 18.8502 9.12822 18.9143 9.23122 18.9585C9.33422 19.0026 9.44495 19.0258 9.557 19.0268C9.66905 19.0258 9.77978 19.0026 9.88278 18.9585C9.98578 18.9143 10.079 18.8502 10.157 18.7698L21.343 7.62676L20.143 6.42676Z"
                fill="#203D76"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
