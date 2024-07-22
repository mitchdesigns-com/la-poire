import { Link } from "@/navigation";
import Image from "next/image";
import Button from "../Button";
import LongArrow from "../Icons/LongArrow";
import Newsletter from "../Newsletter";
import NoDataFound from "../UI/NoDataFound";
import { useTranslations } from "next-intl";

export default function SingleJob({ data }: any) {
  const t = useTranslations("common");

  const list = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Jobs",
      link: "/job",
    },
    {
      title: "Single",
    },
  ];
  if (!data) {
    return <NoDataFound />;
  }
  return (
    <>
      <div className='px-4 pt-120'>
        <div className='container mx-auto'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-30'>
              <Link
                href='/job'
                className='inline-block w-[35px] rotate-180'
                prefetch={false}>
                <LongArrow />
              </Link>
              <div>
                <h6 className='text-xl text-green text-nowrap'>
                  {t("Jobs_in_La_Poire")}
                </h6>
                <h1 className='text-[21px] md:text-[60px] text-nowrap font-semibold'>
                  {data.Name}
                </h1>
              </div>
            </div>
            <div className='h-[2px] w-7/12 self-end bg-green' />
          </div>
          <div className='mt-80'>
            <div className='flex justify-between flex-col-reverse md:flex-row'>
              <div className='flex flex-col'>
                <h3 className='mb-22 text-3xl capitalize text-black'>
                  {t("Responsibilities")}
                </h3>
                <ul className='list-disc pl-20 text-xl font-normal leading-[50px] text-black'>
                  {data.Responsibility.map((item: any, index: number) => (
                    <li key={index}>{item.Name}</li>
                  ))}
                </ul>
              </div>
              <div className='pb-[34px] md:pb-0'>
                <Image
                  src='/images/single_job.webp'
                  alt=''
                  width={527}
                  height={380}
                />
              </div>
            </div>
            <div className='mt-50 flex pb-50'>
              <div className='flex flex-col'>
                <h3 className='mb-22 text-3xl capitalize text-black'>
                  {t("Requirements")}
                </h3>
                <ul className='list-disc pl-20 text-xl font-normal leading-[50px] text-black'>
                  {data.Requirements.map((item: any, index: number) => (
                    <li key={index}>{item.Name}</li>
                  ))}
                </ul>
                <div className='mt-50'>
                  <Button variant='primary' size='large' pill uppercase>
                    {t("Applynow")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
