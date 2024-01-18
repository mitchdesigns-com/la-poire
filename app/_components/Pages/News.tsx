import HeroWithTitles from "../HeroWithTitles";
import Newsletter from "../Newsletter";
import BlogList from "../UI/BlogList";

export default function News() {
  const data = {
    herotitle: "News & Blog",
    herosubtitle: "Latest Scoops & Sweet Stories from La Poire",
    herodescription: "",
  };
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.herotitle}
        subtitle={data.herosubtitle}
        description={data.herodescription}
        max_width
        height_auto
      />
      <BlogList />
      <Newsletter />
    </div>
  );
}
