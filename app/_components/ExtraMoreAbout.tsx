
export default function ExtraMoreAbout({title,content}:any) {

    const paragraphs = content.split('\n\n').map((paragraph: string, index: number) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ));
    
  return (
    <div className="container px-[20px] mx-auto py-48 lg:py-48">
        <h4 className=" text-l  md:text-xl font-semibold lg:text-left text-center">{title}</h4>
        <div className="mt-13 text-xs md;text-m flex flex-col gap-20 text-gray">
        {paragraphs}
        </div>
    </div>
  )
}
