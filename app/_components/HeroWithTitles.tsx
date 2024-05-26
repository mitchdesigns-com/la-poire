
export default function HeroWithTitles({
  bgColor = "white",
  title,
  subtitle,
  description,
  max_width,
  height_auto,
  subtitle_max_width
}: any) {
  return (
    <div className={`bg-${bgColor} ${height_auto?"min-h-[450px] lg:min-h-[400px]":"min-h-[450px] lg:min-h-[600px]"}    lg:py-8  lg:p0 flex justify-center items-center md:px-[54px] px-4 ${bgColor==="white"?"text-black":"text-white"}`}>
      <div className={`flex flex-col gap-[10px] mt-30 justify-center items-center h-full text-center mx-auto  ${max_width?"max-w-[1100px]":"max-w-4xl"}`}>
        {title && (
          <h1
            className="text-[25px] sm:text-[32px] md:text-[45px] lg:text-[60px] leading-[47px] font-semibold mb-0 lg:leading-[72px]  md:leading-normal pb-0 text-inherit spanLine"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && (
          <h3 className={`text-[18px] !font-light lg:text-xl lg:leading-[30px]  mb-0 mt-0 pt-0 leading-[23px] ${subtitle_max_width?subtitle_max_width:""}`}>{subtitle}</h3>
        )}
        {description && (
          <p className={`text-sm font-normal mb-[35px] capitalize ${bgColor==="white"?"text-gray":"text-bej"} text-balance`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
