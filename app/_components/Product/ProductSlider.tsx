import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SlickMultipleItems from "../SlickMultipleItems";
import ProductWidget from "./ProductWidget";

export default function ProductSlider({ data }: any) {
  const list = data?.data;
  // console.log('products list: ', list);
  // Sort the list by orderNumber
  const sortedList = Array.isArray(list)
    ? list.sort(
        (a: any, b: any) => a.attributes.orderNumber - b.attributes.orderNumber
      )
    : [];

  return (
    <SlickMultipleItems ArrowsPositionRight nopadding>
      {sortedList.map((item: any, index: any) => (
        <div
          key={index}
          className="inline-flex flex-shrink-0 flex-grow-0 md:w-[260px] w-[calc(50vw)] z-40"
        >
          <ProductWidget data={item.attributes} />
        </div>
      ))}
    </SlickMultipleItems>
  );
}
