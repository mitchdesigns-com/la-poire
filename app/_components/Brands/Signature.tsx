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
    <div className="relative -mb-44 py-56 lg:ml-0  ">
      <div className="container mx-auto flex-row">
        <div className="flex gap-y-20 ">
          <div className="xl:w-[445px] max-w-[1304]:w-[28%] w-[25%] shrink-0 flex-grow-0 pe-3">
            <div className="w-fit ltr:ml-auto rtl:mr-auto">
              <Pattern color={data?.BrandColor}  />
            </div>
          </div>
          <div className="w-full px-6 lg:px-54 text-left">
            <span
              className={`bg-${data?.BrandColor} absolute top-0 md:ltr:left-[calc(50vw-(140px*2))] ltr:left-[80px] rtl:right-[calc(50vw-(140px*2))] bottom-0 w-[100vw] select-none pointer-events-none`}
            ></span>
            <div className="relative text-white  ">
              <h3 className="md:text-2xl text-xl font-bold mb-2 ">
                {data?.ProductsSectionTitle}
              </h3>
              <h5 className="md:text-xl text-lg font-light mb-4 md:w-[50%] w-full text-pretty">
                {data?.ProductsSectionSubTitle_1} <br />{data?.ProductsSectionSubTitle_2}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <ProductSlider data={products} />
      <div className="container mx-auto pb-34">
        <div className="flex">
          <div className="xl:w-[445px] max-w-[1304]:w-[28%] w-[25%] shrink-0 flex-grow-0 pe-3" />
          <div className="w-full px-6 lg:px-54 text-left">
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
