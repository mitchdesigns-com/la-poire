import HeroWithTitles from "../HeroWithTitles";
import Newsletter from "../Newsletter";
import BlogList from "../UI/BlogList";

export default function News({data}:any) {
  const dataHero = {
    herotitle: "News & Blog",
    herosubtitle: "Latest Scoops & Sweet Stories from La Poire",
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
