import Image from "next/image";
import { Link } from "@/navigation";

export default function BlogWidget({ data }: any) {
  if (!data) {
    return null;
  }
  const publishedAt = data.publishedAt;
  const date = new Date(publishedAt);
  const options = {
    month: "short" as const,
    day: "numeric" as const,
    year: "numeric" as const,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div>
      <Link
        href={`/blog/${data.slug}`}
        className="relative block aspect-square overflow-hidden rounded-[45px]"
      >
        <Image src="/images/blog_widget.webp" alt="blog" fill />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-18 text-[17px] uppercase leading-[26px] text-white">
          NEWS
        </span>
      </Link>
      <div className="flex flex-col gap-10 py-2">
        <h2 className="text-2xl">
          <Link
            href="/blog/single"
            dangerouslySetInnerHTML={{ __html: data.Title }}
          />
        </h2>
        <p className="text-sm font-light">{data.ShortDescription}</p>
        <span className="text-[15px] text-gray">{formattedDate}</span>
      </div>
    </div>
  );
}
