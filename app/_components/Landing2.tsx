import React from "react";
import Testimonial from "./Testimonial";
// import { Footer } from "./Footer";
import BigNum from "./BigNum";
import Newsletter from "./Newsletter";

export const Landing2 = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] overflow-hidden w-[1512px] h-[5768px] relative">
        <div className="absolute w-[1448px] h-[1408px] top-0 left-[64px]">
          <div className="absolute w-[1444px] h-[1408px] top-0 left-[4px]">
            <div className="absolute w-[1073px] h-[1408px] top-0 left-[371px] bg-black" />
            <div className="absolute w-[1377px] h-[1172px] top-[180px] left-0">
              <div className="inline-flex items-center gap-[57px] absolute top-[1071px] left-[419px]">
                <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-white text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                    Flavors Trusted by Millions
                  </div>
                  <p className="relative w-[461px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-white text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                    Over 16 million people find joy in every bite, trusting our
                    brands to deliver unparalleled happiness and flavor.
                  </p>
                </div>
                <div className="inline-flex items-center gap-[43px] relative flex-[0_0_auto]">
                  <BigNum
                    className="!flex-[0_0_auto]"
                    text="5"
                    text1="BRANDS"
                  />
                  <img
                    className="relative w-px h-[75px] object-cover"
                    alt="Line"
                    src="line-3.svg"
                  />
                  <BigNum
                    className="!flex-[0_0_auto]"
                    text="126"
                    text1="LOCATIONS"
                  />
                  {/* <img
                    className="relative w-px h-[75px] object-cover"
                    alt="Line"
                    src="line-5.svg"
                  /> */}
                  <BigNum
                    className="!flex-[0_0_auto]"
                    text="870"
                    text1="EMPLOYEES"
                  />
                </div>
              </div>
              <div className="inline-flex items-start gap-[12px] absolute top-[701px] left-[278px]">
                <div className="relative w-[264.77px] h-[334px]">
                  <div className="relative w-[267px] h-[334px]">
                    <img
                      className="absolute w-[265px] h-[334px] top-0 left-0"
                      alt="Mask group"
                      src="/images/mask-group-2.png"
                    />
                    <div className="absolute w-[214px] h-[40px] top-[274px] left-[53px]">
                      <div className="relative w-[212px] h-[40px]">
                        <div className="absolute w-[212px] h-[40px] top-0 left-0 bg-green opacity-80" />
                        {/* <img
                          className="left-[176px] absolute w-[24px] h-[24px] top-[8px]"
                          alt="Arrow up right"
                          src="arrow-up-right.svg"
                        /> */}
                        <div className="absolute top-[6px] left-[11px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-[#ffffff] text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-medium-semi-bold-font-style)]">
                          La Poire Patisserie
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[264.77px] h-[334px] bg-[url(/images/mask-group-2.png)] bg-[100%_100%]">
                  <div className="relative w-[220px] h-[40px] top-[274px] left-[47px]">
                    <div className="relative w-[218px] h-[40px]">
                      <div className="absolute w-[218px] h-[40px] top-0 left-0 bg-green opacity-80" />
                      {/* <img
                        className="absolute w-[24px] h-[24px] top-[8px] left-[185px]"
                        alt="Arrow up right"
                        src="image.svg"
                      /> */}
                      <div className="absolute top-[6px] left-[11px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-[#ffffff] text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-medium-semi-bold-font-style)]">
                        La Poire Bistro
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[264.77px] h-[334px]">
                  <div className="relative w-[267px] h-[334px]">
                    <img
                      className="absolute w-[265px] h-[334px] top-0 left-0"
                      alt="Mask group"
                      src="/images/mask-group-2.png"
                    />
                    <div className="absolute w-[156px] h-[40px] top-[274px] left-[111px]">
                      <div className="relative w-[154px] h-[40px]">
                        <div className="absolute w-[154px] h-[40px] top-0 left-0 bg-beanos opacity-80" />
                        {/* <img
                          className="left-[124px] absolute w-[24px] h-[24px] top-[8px]"
                          alt="Arrow up right"
                          src="arrow-up-right-2.svg"
                        /> */}
                        <div className="absolute top-[6px] left-[13px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-[#ffffff] text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-medium-semi-bold-font-style)]">
                          Beano’s Cafe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[265.99px] h-[334px]">
                  <div className="relative w-[268px] h-[334px]">
                    <img
                      className="absolute w-[266px] h-[334px] top-0 left-0"
                      alt="Mask group"
                      src="/images/mask-group-2.png"
                    />
                    <div className="absolute w-[220px] h-[40px] top-[274px] left-[48px]">
                      <div className="relative w-[218px] h-[40px]">
                        <div className="absolute w-[218px] h-[40px] top-0 left-0 bg-black opacity-80" />
                        {/* <img
                          className="absolute w-[24px] h-[24px] top-[8px] left-[185px]"
                          alt="Arrow up right"
                          src="arrow-up-right-3.svg"
                        /> */}
                        <div className="absolute top-[6px] left-[12px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-[#ffffff] text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-medium-semi-bold-font-style)]">
                          Stavolta Ice Cream
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="absolute w-[207px] top-[701px] left-[2px] [font-family:'PT_Serif-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[33.6px]">
                <span className="[font-family:'PT_Serif-Italic',Helvetica] italic text-[#000000]">
                  La Poire&#39;s five brands infuse{" "}
                </span>
                <span className="[font-family:'PT_Serif-BoldItalic',Helvetica] font-bold italic text-[#00754a]">
                  joy
                </span>
                <span className="[font-family:'PT_Serif-Italic',Helvetica] italic text-[#000000]">
                  {" "}
                  into every product, embodying our{" "}
                </span>
                <span className="[font-family:'PT_Serif-BoldItalic',Helvetica] font-bold italic text-[#00754a]">
                  Economy of Scope
                </span>
                <span className="[font-family:'PT_Serif-Italic',Helvetica] italic text-[#000000]">
                  {" "}
                  and elevating moments in Egypt.
                </span>
              </p>
              <div className="absolute w-[1376px] h-[687px] top-0 left-0">
                <div className="relative w-[1374px] h-[687px] bg-[url(/images/group-40.png)] bg-[100%_100%]">
                  <p className="absolute w-[892px] top-[291px] left-[241px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-transparent text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                    <span className="text-[#ffffff] font-heading-h1 [font-style:var(--heading-h1-font-style)] font-[number:var(--heading-h1-font-weight)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[length:var(--heading-h1-font-size)]">
                      la poire,{" "}
                    </span>
                    <span className="text-[#ead388] font-heading-h1 [font-style:var(--heading-h1-font-style)] font-[number:var(--heading-h1-font-weight)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[length:var(--heading-h1-font-size)]">
                      every day
                    </span>
                    <span className="text-[#ffffff] font-heading-h1 [font-style:var(--heading-h1-font-style)] font-[number:var(--heading-h1-font-weight)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[length:var(--heading-h1-font-size)]">
                      {" "}
                      deserves a moment of{" "}
                    </span>
                    <span className="text-[#ead388] font-heading-h1 [font-style:var(--heading-h1-font-style)] font-[number:var(--heading-h1-font-weight)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[length:var(--heading-h1-font-size)]">
                      joy!
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[10px] px-[34px] py-[12px] absolute top-[34px] left-[1212px] bg-gold rounded-[30px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-text-small-semi-bold-up font-[number:var(--text-small-semi-bold-up-font-weight)] text-[#ffffff] text-[length:var(--text-small-semi-bold-up-font-size)] tracking-[var(--text-small-semi-bold-up-letter-spacing)] leading-[var(--text-small-semi-bold-up-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-up-font-style)]">
                CONTACT US
              </div>
            </div>
          </div>
          {/* <img
            className="absolute w-[166px] h-[46px] top-[33px] left-0 object-cover"
            alt="La poire group gold"
            src="la-poire-group-gold-logo-1.png"
          /> */}
        </div>
        <div className="inline-flex flex-col items-center gap-[40px] absolute top-[1508px] left-[443px]">
          <div className="relative w-fit mt-[-1.00px] font-text-large-light font-[number:var(--text-large-light-font-weight)] text-[#000000] text-[length:var(--text-large-light-font-size)] text-center tracking-[var(--text-large-light-letter-spacing)] leading-[var(--text-large-light-line-height)] whitespace-nowrap [font-style:var(--text-large-light-font-style)]">
            Our Brands
          </div>
          <div className="inline-flex items-center gap-[40px] relative flex-[0_0_auto]">
            {/* <img
              className="w-[104.4px] h-[123.12px] relative object-cover"
              alt="Image"
              src="image-41.png"
            />
            <img
              className="w-[131.2px] h-[56px] relative object-cover"
              alt="Image"
              src="image-40.png"
            />
            <img
              className="w-[140.8px] h-[29.04px] relative object-cover"
              alt="Image"
              src="image-39.png"
            />
            <img
              className="w-[129.6px] h-[98.4px] relative object-cover"
              alt="Image"
              src="image-43.png"
            /> */}
          </div>
        </div>
        <div className="absolute w-[1223px] h-[939px] top-[4023px] left-[144px]">
          <p className="absolute w-[452px] top-[84px] left-[692px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            <span className="text-[#000000] font-heading-h2 [font-style:var(--heading-h2-font-style)] font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[length:var(--heading-h2-font-size)]">
              When people taste,{" "}
            </span>
            <span className="text-[#fdb3c4] font-heading-h2 [font-style:var(--heading-h2-font-style)] font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[length:var(--heading-h2-font-size)]">
              joy
            </span>
            <span className="text-[#000000] font-heading-h2 [font-style:var(--heading-h2-font-style)] font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[length:var(--heading-h2-font-size)]">
              {" "}
              speaks!
            </span>
          </p>
          <div className="absolute w-[530px] h-[751px] top-[94px] left-[64px]">
            <div className="relative h-[751px]">
              <div className="absolute w-[413px] h-[682px] top-[70px] left-[75px] bg-[#fdb3c4]" />
              {/* <img
                className="absolute w-[530px] h-[751px] top-0 left-0"
                alt="Hipster teenager in"
                src="hipster-teenager-in-sunglasses-2022-11-04-16-15-38-utc-2.png"
              /> */}
            </div>
          </div>
          <div className="inline-flex items-start gap-[10px] absolute top-[871px] left-[920px]">
            <div className="w-[18px] h-[18px] rounded-[9px] relative bg-pink" />
            <div className="relative w-[18px] h-[18px] bg-bej rounded-[9px]" />
            <div className="relative w-[18px] h-[18px] bg-bej rounded-[9px]" />
          </div>
          <div className="inline-flex flex-col items-center gap-[16px] absolute top-[251px] left-[690px]">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
        <div className="absolute w-[1512px] h-[714px] top-[1801px] left-0">
          <div className="absolute w-[1512px] h-[714px] top-0 left-0 bg-black-green">
            <div className="inline-flex items-center gap-[100px] relative top-[129px] left-[107px]">
              <div className="relative w-[699px] h-[432px]">
                <div className="relative w-[697px] h-[432px]">
                  <p className="absolute w-[697px] top-0 left-0 [font-family:'PT_Serif-Regular',Helvetica] font-normal text-transparent text-[40px] tracking-[0] leading-[72.0px]">
                    <span className="text-[#ffffff]">La Poire&#39;s </span>
                    <span className="text-[#ead388]">four brands</span>
                    <span className="text-[#ffffff]"> in </span>
                    <span className="text-[#ead388]">Egypt</span>
                    <span className="text-[#ffffff]">
                      {" "}
                      symbolize a fusion of{" "}
                    </span>
                    <span className="text-[#ead388]">joy</span>
                    <span className="text-[#ffffff]">
                      {" "}
                      and happiness in every cherished{" "}
                    </span>
                    <span className="text-[#ead388]">moment</span>
                    <span className="text-[#ffffff]">
                      . Through our unwavering commitment, we{" "}
                    </span>
                    <span className="text-[#ead388]">transform</span>
                    <span className="text-[#ffffff]">
                      {" "}
                      fleeting moments into memorable, delightful experiences.
                    </span>
                  </p>
                  {/* <img
                    className="absolute w-[194px] h-[14px] top-[63px] left-[180px]"
                    alt="Vector"
                    src="vector-1.svg"
                  /> */}
                </div>
              </div>
              {/* <img
                className="relative w-[501.16px] h-[200.84px]"
                alt="Joy"
                src="joy.png"
              /> */}
            </div>
          </div>
          <div className="inline-flex items-center gap-[4px] absolute top-[616px] left-[103px]">
            <div className="relative w-fit font-text-small-semi-bold-up font-[number:var(--text-small-semi-bold-up-font-weight)] text-white text-[length:var(--text-small-semi-bold-up-font-size)] tracking-[var(--text-small-semi-bold-up-letter-spacing)] leading-[var(--text-small-semi-bold-up-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-up-font-style)]">
              MORE ABOUT LA POIRE
            </div>
            {/* <img
              className="relative w-[48px] h-[48px]"
              alt="Arrow right"
              src="arrow-right.svg"
            /> */}
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[10px] absolute top-[4962px] left-0">
          <div className="relative w-[1512px] h-[929px] bg-black" />
          {/* <Footer
            className="!absolute !left-[36px] !bg-transparent !top-[600px]"
            hasMenuBar={false}
            laPoireGroupGold="la-poire-group-gold-logo-white-1-2.png"
          /> */}
          <Newsletter />
        </div>
        <div className="inline-flex flex-col items-start gap-[30px] absolute top-[2615px] left-[70px]">
          {/* <img
            className="relative w-[1372px] h-[686px]"
            alt="Group"
            src="group-33.png"
          /> */}
          <div className="flex flex-col w-[1369px] items-start gap-[70px] relative flex-[0_0_auto]">
            <div className="flex w-[1369px] items-center justify-between relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                  Distinctive Excellence
                </div>
                <p className="relative w-fit font-text-large-light font-[number:var(--text-large-light-font-weight)] text-black text-[length:var(--text-large-light-font-size)] tracking-[var(--text-large-light-letter-spacing)] leading-[var(--text-large-light-line-height)] whitespace-nowrap [font-style:var(--text-large-light-font-style)]">
                  The Pillars of Our Prestige: Six Reasons We Shine
                </p>
              </div>
              <p className="relative w-[634px] mt-[-1.00px] [font-family:'PT_Serif-Italic',Helvetica] font-normal italic text-black text-[16px] tracking-[0] leading-[33.6px]">
                Dive into the essence of what makes La Poire group exceptional.
                With a tapestry woven from pioneering legacies to unparalleled
                quality, our unique selling propositions distinguish us in
                Egypt&#39;s culinary landscape. Discover the cornerstones that
                have shaped our journey, transforming ordinary moments into
                extraordinary experiences.
              </p>
            </div>
            <div className="flex flex-col w-[1369px] items-start gap-[26px] relative flex-[0_0_auto]">
              <div className="flex w-[1369px] items-start justify-between relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  {/* <img
                    className="absolute w-[40px] h-[40px] top-[25px] left-[27px]"
                    alt="Vector"
                    src="vector.svg"
                  /> */}
                  {/* <img
                    className="relative w-[61px] h-[61px] mt-[-0.50px] ml-[-0.50px]"
                    alt="Papers"
                    src="x31-1-papers.png"
                  /> */}
                  <div className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#000000] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Pioneering Legacy
                  </div>
                  <p className="relative w-[319px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-mediun-grey text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                    With roots dating back to 1975, La Poire boasts a
                    time-honored tradition in Egypt, melding expertise with
                    culinary innovation.
                  </p>
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  {/* <img
                    className="absolute w-[40px] h-[40px] top-[28px] left-[-7px]"
                    alt="Vector"
                    src="vector-2.svg"
                  /> */}
                  {/* <img
                    className="relative w-[60px] h-[60px]"
                    alt="Vector"
                    src="vector-3.svg"
                  /> */}
                  <div className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#000000] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Diverse Portfolio
                  </div>
                  <p className="relative w-[319px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-mediun-grey text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                    Spanning patisseries to cafes, La Poire group&#39;s
                    wide-ranging brand lineup offers a comprehensive experience
                    for every palate and preference.
                  </p>
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  {/* <img
                    className="absolute w-[40px] h-[40px] top-[-5px] left-[11px]"
                    alt="Vector"
                    src="vector-4.svg"
                  /> */}
                  {/* <img
                    className="relative w-[60.4px] h-[60.4px] mt-[-0.20px] ml-[-0.20px]"
                    alt="Group"
                    src="group.png"
                  /> */}
                  <div className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#000000] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Quality Commitment
                  </div>
                  <p className="relative w-[319px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-mediun-grey text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                    La Poire stands as a hallmark of premium ingredients,
                    masterful craftsmanship, and a consistent, delightful taste
                    profile cherished by many.
                  </p>
                </div>
              </div>
              <div className="flex w-[1372px] items-start justify-between relative flex-[0_0_auto] mr-[-3.00px]">
                <div className="inline-flex flex-col h-[196px] items-start gap-[10px] relative flex-[0_0_auto]">
                  {/* <img
                    className="absolute w-[40px] h-[40px] top-[-6px] left-[36px]"
                    alt="Vector"
                    src="vector-5.svg"
                  />
                  <img
                    className="relative w-[61.7px] h-[61.7px] mt-[-0.85px] ml-[-0.85px]"
                    alt="G"
                    src="g-6883.png"
                  /> */}
                  <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#000000] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      Cultural Integration
                    </div>
                    <p className="relative w-[319px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-mediun-grey text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                      Merging international culinary flair with Egypt&#39;s
                      deep-rooted heritage, the group curates unique offerings
                      that appeal to both local and international tastes.
                    </p>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  {/* <img
                    className="relative w-[40px] h-[40px]"
                    alt="Element"
                    src="04.png"
                  /> */}
                  <div className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#000000] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Economy of Scope
                  </div>
                  <p className="relative w-[319px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-mediun-grey text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                    With its broad array of brands, La Poire adeptly caters to
                    diverse market demands, ensuring a dynamic and ever-evolving
                    presence in the culinary scene.
                  </p>
                  {/* <img
                    className="absolute w-[57px] h-[40px] top-0 left-0"
                    alt="Vector"
                    src="vector-6.svg"
                  /> */}
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  {/* <img
                    className="absolute w-[40px] h-[40px] top-[11px] left-[14px]"
                    alt="Vector"
                    src="vector-7.svg"
                  />
                  <img
                    className="relative w-[60px] h-[60px]"
                    alt="Growth"
                    src="growth-1.svg"
                  /> */}
                  <div className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#000000] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Sustainable Growth
                  </div>
                  <p className="relative w-[319px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-mediun-grey text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                    La Poire&#39;s commitment to environmental and societal
                    well-being, coupled with business expansion, ensures a
                    sustainable and positive impact on the communities they
                    serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          className="absolute w-[1374px] h-[5px] top-[4006px] left-[79px]"
          alt="Line"
          src="line-9.svg"
        /> */}
      </div>
    </div>
  );
};
