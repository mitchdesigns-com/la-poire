
export default function HeroWithTitles({
  bgColor = "white",
  title,
  subtitle,
  description,
}: any) {
  return (
    <div className={`bg-${bgColor} md:min-h-[600px] flex justify-center items-center ${bgColor==="white"?"text-black":"text-white"}`}>
      <div className="flex flex-col gap-[10px] justify-center items-center h-full text-center max-w-4xl md:px-[54px] px-4 mx-auto">
        {title && (
          <h1 className="text-[60px] font-semibold leading-[72px] text-inherit">
            {title}
          </h1>
        )}
        {subtitle && (
          <h3 className="text-xl font-light leading-[30px]">{subtitle}</h3>
        )}
        {description && (
          <p className={`text-sm font-normal capitalize ${bgColor==="white"?"text-gray":"text-bej"}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
