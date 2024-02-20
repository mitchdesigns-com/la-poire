import BlogWidget from "./BlogWidget";

export default function BlogList({data}:any) {
  // const [data, setData] = useState<any | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await fetchingBlogsPage();
  //       setData(result.data);
  //     } catch (error) {
  //       console.error("Error fetching home page data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  if (!data) {
    return null;
  }
  // console.log("data", data);
  return (
    <div className="container mx-auto pb-100">
      <div className="grid gap-x-[25px] gap-y-[50px] md:grid-cols-3">
        {data.map((item: any, index: number) => (
          <BlogWidget key={index} data={item.attributes} />
        ))}
      </div>
      {/* <div className="mx-auto mt-50 flex items-center justify-center">
        <Button type="submit" variant="borderGold" size="normal" pill uppercase>
          Load More
        </Button>
      </div> */}
    </div>
  );
}
