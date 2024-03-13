import { useTranslations } from "next-intl";
import { gabarito } from "../fonts";
import Counter from "./Counter";

const StatItem = ({ value, label,removeComma }: any) => (
  <>
    <div className="flex flex-col items-center justify-center text-center">
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
    <div className={`${fullWidth ? "bg-black pt-[174px] pb-[155px]" : ""}`}>
      <div
        className={`flex lg:flex-row flex-col flex-wrap gap-10 w-full items-center justify-evenly ${
          fullWidth ? "mx-auto container" : ""
        }`}
      >
        <div
          className={`${fullWidth ? "md:w-[461px] w-full" : "md:w-460 w-full"}`}
        >
          <h3 className="mb-5 text-xl text-white">{numbersTitle}</h3>
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
        <div className="flex w-auto items-stretch justify-center gap-22 pt-20 md:justify-between md:gap-44 md:pt-0">
          {brandsNum && <StatItem value={brandsNum} label={t("brands")} />}
          {sinceYear && <StatItem value={sinceYear} label={t("since")} removeComma/>}
          <StatItem value={locationsNum} label={t("locations")} />
          <StatItem value={employeesNum} label={t("employees")} />
        </div>
      </div>
    </div>
  );
}
