import { arfont, roboto } from "@/app/fonts";
import { useLocale } from "next-intl";
import Image from "next/image";
import RequestForm from "../RequestForm";

export default function RequestSection({ subTitle, title, paragraph }: any) {
  const locale = useLocale();
  return (
    <div
      id="requestForm"
      className={`px-4 py-32 bg-gold ${
        locale === "ar" ? arfont.className : roboto.className
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse flex-wrap items-center justify-center gap-[71px] md:max-lg:flex-col-reverse lg:flex-row">
          <div className="w-full md:w-[474px]">
            <div className="w-full rounded-xl bg-white px-32 py-26 shadow-md shadow-[#034A3080]">
              <RequestForm />
            </div>
          </div>
          <div className="flex flex-col gap-[70px]">
            <Image
              src="/images/logo-white.webp"
              alt="La Poire Logo"
              width="205"
              height="57"
            />
            <div className="flex max-w-[550px] flex-col gap-10 md:max-w-[384px]">
              <h6 className="text-xl text-goldLight">{subTitle}</h6>
              <h2 className="text-[30px] font-bold leading-[56px] text-white md:text-[53px] lg:text-[76px] lg:leading-[90px]">
                {title}
              </h2>
              <p className="text-sm leading-[21px] text-gray3">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
