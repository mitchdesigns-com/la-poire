import { useTranslations } from "next-intl";
import { gabarito } from "../fonts";
import Counter from "./Counter";

const StatItem = ({ value, label,removeComma }: any) => (
  <>
    <div className="flex flex-col items-center justify-center px-2 text-center">
      <span
        className={`md:ltr:text-[66px] md:rtl:text-6xl text-[11vw] text-goldLight font-medium ${gabarito.className}`}
      >
        <Counter value={value} removeComma={removeComma}/>
      </span>
      <span className="text-sm uppercase text-gray2">{label}</span>
    </div>
    <span className="mt-[13px] block h-[75px] w-[1px] bg-gray last-of-type:hidden" />
  </>
);
export default function CompanyStats({
  fullWidth,
  brandsNum,
  sinceYear,
  employeesNum,
  locationsNum,
  numbersTitle,
  numbersDescription,
}: any) {
  const t = useTranslations("common");
  return (
    <div className={`${fullWidth ? "bg-black py-[75px] mb-72 lg:mb-0" : ""}`}>
      <div
        className={`flex lg:flex-row flex-col-reverse	 flex-nowrap  gap-10 w-full items-center justify-evenly md:pr-[113px]  ${
          fullWidth ? "mx-auto container" : ""
        }`}
      >
        <div
          className={`${fullWidth ? "  pl-3 md:w-[461px] w-full" : "px-4  xl:w-460 w-full "}`}
        >
          <h3 className="mb-5  md:ml-0 text-m mb:text-xl text-white">{numbersTitle}</h3>
          <p
            className={`${
              fullWidth
                ? "text-white text-sm font-light"
                : "text-white text-sm font-light"
            }`}
          >
            {numbersDescription}
          </p>
        </div>
        <div className="flex w-full items-stretch justify-center sm:gap-[17px] pt-20 md:justify-between md:gap-0 md:pt-0">
          {brandsNum && <StatItem value={brandsNum} label={t("brands")} />}
          {sinceYear && <StatItem value={sinceYear} label={t("since")} removeComma/>}
          <StatItem value={locationsNum} label={t("locations")} />
          <StatItem value={employeesNum} label={t("employees")} />
        </div>
      </div>
    </div>
  );
}
