import { useTranslations } from "next-intl";
import HeroWithTitles from "../HeroWithTitles";
import Newsletter from "../Newsletter";
import BlogList from "../UI/BlogList";

export default function News({data}:any) {
  const t = useTranslations('common');
  const dataHero = {
    herotitle: t('blog'),
    herosubtitle: t('blog_subtitle'),
    herodescription: "",
  };
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={dataHero.herotitle}
        subtitle={dataHero.herosubtitle}
        description={dataHero.herodescription}
        max_width
        height_auto
      />
      <BlogList data={data} />
      <Newsletter />
    </div>
  );
}
