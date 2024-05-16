"use client";
import { useTranslations } from "next-intl";
import Pattern from "../Pattern";
import ProductSlider from "../Product/ProductSlider";
import SignatureLoader from "./SignatureLoader";

export default function Signature({ products, data }: any) {
  const t = useTranslations("signature");
  if (!data) {
    // You can render a placeholder or handle this case as needed
    return <SignatureLoader />;
  }
  if (!data.SignatureDelightsDescription) {
    return null;
  }
  return (
    <div className="relative -mb-44 py-56">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[445px] shrink-0 flex-grow-0 ps-3">
            <div className="w-fit ltr:ml-auto rtl:mr-auto">
              <Pattern />
            </div>
          </div>
          <div className="w-full px-54">
            <span
              className={`bg-${data?.BrandColor} absolute top-0 ltr:left-[calc(50vw-(140px*2))] rtl:right-[calc(50vw-(140px*2))] bottom-0 w-[100vw] select-none pointer-events-none`}
            ></span>
            <div className="relative text-white">
              <h3 className="text-2xl font-bold">{t("title")}</h3>
              <h5 className="text-xl font-light">
                {t("subtitle")} <br /> {t("subtitle2")}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <ProductSlider data={products} />
      <div className="container mx-auto pb-34">
        <div className="flex">
          <div className="w-[445px] shrink-0 flex-grow-0 ps-3" />
          <div className="w-full px-54">
            <div className="relative text-white">
              <p className="text-sm text-bej">
                {data.SignatureDelightsDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
