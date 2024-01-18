import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SlickMultipleItems from "../SlickMultipleItems";
import ProductWidget from "./ProductWidget";

export default function ProductSlider({ data }: any) {
  const list = data?.products.data;
  return (
      <SlickMultipleItems ArrowsPositionRight nopadding>
        {Array.isArray(list) &&
          list.map((item: any, index: any) => (
            <div
              key={index}
              className="inline-flex flex-shrink-0 flex-grow-0 md:w-[260px] w-[calc(100vw-70px)]"
            >
              <ProductWidget data={item.attributes} />
            </div>
          ))}
      </SlickMultipleItems>
  );
}
