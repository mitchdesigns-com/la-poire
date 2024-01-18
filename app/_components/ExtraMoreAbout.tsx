
export default function ExtraMoreAbout({title,content}:any) {
    const paragraphs = content.split('\n\n').map((paragraph: string, index: number) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ));
    
  return (
    <div className="container mx-auto py-48">
        <h4 className="text-xl font-semibold">About {title}</h4>
        <div className="flex flex-col gap-20 mt-13 text-gray">
        {paragraphs}
        </div>
    </div>
  )
}
