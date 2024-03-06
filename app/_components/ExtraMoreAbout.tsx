
export default function ExtraMoreAbout({title,content}:any) {

    const paragraphs = content.split('\n\n').map((paragraph: string, index: number) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ));
    
  return (
    <div className="container mx-auto py-48">
        <h4 className="text-xl font-semibold">{title}</h4>
        <div className="mt-13 flex flex-col gap-20 text-gray">
        {paragraphs}
        </div>
    </div>
  )
}
