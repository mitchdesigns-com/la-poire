import Image from "next/image";
import Link from "next/link";

export default function BlogWidget() {
  return (
    <div>
      <Link
        href="/blog/single"
        className="relative block overflow-hidden aspect-square rounded-[45px]"
      >
        <Image src="/images/blog_widget.webp" alt="blog" fill />
        <span className="bg-gold px-18 leading-[26px] uppercase text-[17px] absolute top-4 left-4 rounded-full text-white">
          NEWS
        </span>
      </Link>
      <div className="flex flex-col gap-10 py-2">
        <h2 className="text-2xl">
          <Link href="/blog/single">
            Exploring Egyptian Culinary Adventures
          </Link>
        </h2>
        <p className="text-sm font-light">
          Share stories and photos from special events, celebrations, or
          memorable customer experiences at La Poire
        </p>
        <span className="text-gray text-[15px]">Oct 14, 2023</span>
      </div>
    </div>
  );
}
