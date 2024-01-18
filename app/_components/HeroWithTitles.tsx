
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
    <div className={`bg-${bgColor} ${height_auto?"md:min-h-[400px]":"md:min-h-[600px]"} flex justify-center items-center md:px-[54px] px-4 ${bgColor==="white"?"text-black":"text-white"}`}>
      <div className={`flex flex-col gap-[10px] justify-center items-center h-full text-center mx-auto ${max_width?"max-w-[1100px]":"max-w-4xl"}`}>
        {title && (
          <h1
            className="text-[60px] font-semibold leading-[72px] text-inherit spanLine"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && (
          <h3 className={`text-xl font-light leading-[30px] ${subtitle_max_width?subtitle_max_width:""}`}>{subtitle}</h3>
        )}
        {description && (
          <p className={`text-sm font-normal capitalize ${bgColor==="white"?"text-gray":"text-bej"} text-balance`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
