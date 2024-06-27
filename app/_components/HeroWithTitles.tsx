export default function HeroWithTitles({
  bgColor = "white",
  title,
  subtitle,
  description,
  asHTML,
  max_width,
  height_auto,
  subtitle_max_width,
}: any) {
  const format_description = description.replace(/\n\n/g, "</p><p>");
  return (
    <div
      className={`bg-${bgColor} ${
        height_auto
          ? "min-h-[500px] lg:min-h-[600px]"
          : "min-h-[350px] lg:min-h-[500px]"
      }    lg:py-8  lg:p0 flex justify-center items-center md:px-[54px] px-4 ${
        bgColor === "white" ? "text-black" : "text-white"
      }`}
    >
      <div
        className={`flex flex-col gap-[10px] mt-30 justify-center items-center h-full text-center mx-auto  ${
          max_width ? "max-w-[1100px]" : "max-w-4xl"
        }`}
      >
        {title && (
          <h1
            className="spanLine mb-0 pb-0 text-[25px] font-semibold leading-[47px] text-inherit sm:text-[32px] md:text-[45px] md:leading-normal lg:text-[60px] lg:leading-[72px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && (
          <h3
            className={`text-[18px] !font-light lg:text-xl lg:leading-[30px]  mb-0 mt-0 pt-0 leading-[23px] ${
              subtitle_max_width ? subtitle_max_width : ""
            }`}
          >
            {subtitle}
          </h3>
        )}
        {description && !asHTML && (
          <p
            className={`text-sm font-normal mb-[35px] capitalize ${
              bgColor === "white" ? "text-gray" : "text-bej"
            } text-balance`}
          >
            {description}
          </p>
        )}
        {description && asHTML && (
          <div
            className={`text-sm font-normal mb-[35px] capitalize space-y-2 ${
              bgColor === "white" ? "text-gray" : "text-bej"
            } text-balance`}
            dangerouslySetInnerHTML={{ __html: format_description }}
          />
        )}
      </div>
    </div>
  );
}
