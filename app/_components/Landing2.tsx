import React from "react";
import Testimonial from "./Testimonial";
// import { Footer } from "./Footer";
import BigNum from "./BigNum";
import Newsletter from "./Newsletter";

export const Landing2 = (): JSX.Element => {
  return (
    <div className="flex w-full flex-row justify-center bg-[#ffffff]">
      <div className="relative h-[5768px] w-[1512px] overflow-hidden bg-[#ffffff]">
        <div className="absolute left-[64px] top-0 h-[1408px] w-[1448px]">
          <div className="absolute left-[4px] top-0 h-[1408px] w-[1444px]">
            <div className="absolute left-[371px] top-0 h-[1408px] w-[1073px] bg-black" />
            <div className="absolute left-0 top-[180px] h-[1172px] w-[1377px]">
              <div className="absolute left-[419px] top-[1071px] inline-flex items-center gap-[57px]">
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[5px]">
                  <div className="font-heading-h6 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--heading-h6-font-size)] font-[number:var(--heading-h6-font-weight)] leading-[var(--heading-h6-line-height)] tracking-[var(--heading-h6-letter-spacing)] text-white [font-style:var(--heading-h6-font-style)]">
                    Flavors Trusted by Millions
                  </div>
                  <p className="font-text-small-light relative w-[461px] text-[length:var(--text-small-light-font-size)] font-[number:var(--text-small-light-font-weight)] leading-[var(--text-small-light-line-height)] tracking-[var(--text-small-light-letter-spacing)] text-white [font-style:var(--text-small-light-font-style)]">
                    Over 16 million people find joy in every bite, trusting our
                    brands to deliver unparalleled happiness and flavor.
                  </p>
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-center gap-[43px]">
                  <BigNum
                    className="!flex-[0_0_auto]"
                    text="5"
                    text1="BRANDS"
                  />
                  <img
                    className="w-px relative h-[75px] object-cover"
                    alt="Line"
                    src="line-3.svg"
                  />
                  <BigNum
                    className="!flex-[0_0_auto]"
                    text="126"
                    text1="LOCATIONS"
                  />
                  {/* <img
                    className="w-px relative h-[75px] object-cover"
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
              <div className="absolute left-[278px] top-[701px] inline-flex items-start gap-[12px]">
                <div className="relative h-[334px] w-[264.77px]">
                  <div className="relative h-[334px] w-[267px]">
                    <img
                      className="absolute left-0 top-0 h-[334px] w-[265px]"
                      alt="Mask group"
                      src="/images/mask-group-2.png"
                    />
                    <div className="absolute left-[53px] top-[274px] h-[40px] w-[214px]">
                      <div className="relative h-[40px] w-[212px]">
                        <div className="absolute left-0 top-0 h-[40px] w-[212px] bg-green opacity-80" />
                        {/* <img
                          className="absolute left-[176px] top-[8px] h-[24px] w-[24px]"
                          alt="Arrow up right"
                          src="arrow-up-right.svg"
                        /> */}
                        <div className="font-text-medium-semi-bold absolute left-[11px] top-[6px] whitespace-nowrap text-[length:var(--text-medium-semi-bold-font-size)] font-[number:var(--text-medium-semi-bold-font-weight)] leading-[var(--text-medium-semi-bold-line-height)] tracking-[var(--text-medium-semi-bold-letter-spacing)] text-[#ffffff] [font-style:var(--text-medium-semi-bold-font-style)]">
                          La Poire Patisserie
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[334px] w-[264.77px] bg-[url(/images/mask-group-2.png)] bg-[100%_100%]">
                  <div className="relative left-[47px] top-[274px] h-[40px] w-[220px]">
                    <div className="relative h-[40px] w-[218px]">
                      <div className="absolute left-0 top-0 h-[40px] w-[218px] bg-green opacity-80" />
                      {/* <img
                        className="absolute left-[185px] top-[8px] h-[24px] w-[24px]"
                        alt="Arrow up right"
                        src="image.svg"
                      /> */}
                      <div className="font-text-medium-semi-bold absolute left-[11px] top-[6px] whitespace-nowrap text-[length:var(--text-medium-semi-bold-font-size)] font-[number:var(--text-medium-semi-bold-font-weight)] leading-[var(--text-medium-semi-bold-line-height)] tracking-[var(--text-medium-semi-bold-letter-spacing)] text-[#ffffff] [font-style:var(--text-medium-semi-bold-font-style)]">
                        La Poire Bistro
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[334px] w-[264.77px]">
                  <div className="relative h-[334px] w-[267px]">
                    <img
                      className="absolute left-0 top-0 h-[334px] w-[265px]"
                      alt="Mask group"
                      src="/images/mask-group-2.png"
                    />
                    <div className="absolute left-[111px] top-[274px] h-[40px] w-[156px]">
                      <div className="relative h-[40px] w-[154px]">
                        <div className="bg-beanos absolute left-0 top-0 h-[40px] w-[154px] opacity-80" />
                        {/* <img
                          className="absolute left-[124px] top-[8px] h-[24px] w-[24px]"
                          alt="Arrow up right"
                          src="arrow-up-right-2.svg"
                        /> */}
                        <div className="font-text-medium-semi-bold absolute left-[13px] top-[6px] whitespace-nowrap text-[length:var(--text-medium-semi-bold-font-size)] font-[number:var(--text-medium-semi-bold-font-weight)] leading-[var(--text-medium-semi-bold-line-height)] tracking-[var(--text-medium-semi-bold-letter-spacing)] text-[#ffffff] [font-style:var(--text-medium-semi-bold-font-style)]">
                          Beano’s Cafe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[334px] w-[265.99px]">
                  <div className="relative h-[334px] w-[268px]">
                    <img
                      className="absolute left-0 top-0 h-[334px] w-[266px]"
                      alt="Mask group"
                      src="/images/mask-group-2.png"
                    />
                    <div className="absolute left-[48px] top-[274px] h-[40px] w-[220px]">
                      <div className="relative h-[40px] w-[218px]">
                        <div className="absolute left-0 top-0 h-[40px] w-[218px] bg-black opacity-80" />
                        {/* <img
                          className="absolute left-[185px] top-[8px] h-[24px] w-[24px]"
                          alt="Arrow up right"
                          src="arrow-up-right-3.svg"
                        /> */}
                        <div className="font-text-medium-semi-bold absolute left-[12px] top-[6px] whitespace-nowrap text-[length:var(--text-medium-semi-bold-font-size)] font-[number:var(--text-medium-semi-bold-font-weight)] leading-[var(--text-medium-semi-bold-line-height)] tracking-[var(--text-medium-semi-bold-letter-spacing)] text-[#ffffff] [font-style:var(--text-medium-semi-bold-font-style)]">
                          Stavolta Ice Cream
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="absolute left-[2px] top-[701px] w-[207px] text-[16px] font-normal leading-[33.6px] tracking-[0] text-transparent [font-family:'PT_Serif-Regular',Helvetica]">
                <span className="italic text-[#000000] [font-family:'PT_Serif-Italic',Helvetica]">
                  La Poire&#39;s five brands infuse{" "}
                </span>
                <span className="font-bold italic text-[#00754a] [font-family:'PT_Serif-BoldItalic',Helvetica]">
                  joy
                </span>
                <span className="italic text-[#000000] [font-family:'PT_Serif-Italic',Helvetica]">
                  {" "}
                  into every product, embodying our{" "}
                </span>
                <span className="font-bold italic text-[#00754a] [font-family:'PT_Serif-BoldItalic',Helvetica]">
                  Economy of Scope
                </span>
                <span className="italic text-[#000000] [font-family:'PT_Serif-Italic',Helvetica]">
                  {" "}
                  and elevating moments in Egypt.
                </span>
              </p>
              <div className="absolute left-0 top-0 h-[687px] w-[1376px]">
                <div className="relative h-[687px] w-[1374px] bg-[url(/images/group-40.png)] bg-[100%_100%]">
                  <p className="font-heading-h1 absolute left-[241px] top-[291px] w-[892px] text-center text-[length:var(--heading-h1-font-size)] font-[number:var(--heading-h1-font-weight)] leading-[var(--heading-h1-line-height)] tracking-[var(--heading-h1-letter-spacing)] text-transparent [font-style:var(--heading-h1-font-style)]">
                    <span className="font-heading-h1 text-[length:var(--heading-h1-font-size)] font-[number:var(--heading-h1-font-weight)] leading-[var(--heading-h1-line-height)] tracking-[var(--heading-h1-letter-spacing)] text-[#ffffff] [font-style:var(--heading-h1-font-style)]">
                      la poire,{" "}
                    </span>
                    <span className="font-heading-h1 text-[length:var(--heading-h1-font-size)] font-[number:var(--heading-h1-font-weight)] leading-[var(--heading-h1-line-height)] tracking-[var(--heading-h1-letter-spacing)] text-[#ead388] [font-style:var(--heading-h1-font-style)]">
                      every day
                    </span>
                    <span className="font-heading-h1 text-[length:var(--heading-h1-font-size)] font-[number:var(--heading-h1-font-weight)] leading-[var(--heading-h1-line-height)] tracking-[var(--heading-h1-letter-spacing)] text-[#ffffff] [font-style:var(--heading-h1-font-style)]">
                      {" "}
                      deserves a moment of{" "}
                    </span>
                    <span className="font-heading-h1 text-[length:var(--heading-h1-font-size)] font-[number:var(--heading-h1-font-weight)] leading-[var(--heading-h1-line-height)] tracking-[var(--heading-h1-letter-spacing)] text-[#ead388] [font-style:var(--heading-h1-font-style)]">
                      joy!
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute left-[1212px] top-[34px] inline-flex items-center justify-center gap-[10px] overflow-hidden rounded-[30px] bg-gold px-[34px] py-[12px]">
              <div className="font-text-small-semi-bold-up relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--text-small-semi-bold-up-font-size)] font-[number:var(--text-small-semi-bold-up-font-weight)] leading-[var(--text-small-semi-bold-up-line-height)] tracking-[var(--text-small-semi-bold-up-letter-spacing)] text-[#ffffff] [font-style:var(--text-small-semi-bold-up-font-style)]">
                CONTACT US
              </div>
            </div>
          </div>
          {/* <img
            className="absolute left-0 top-[33px] h-[46px] w-[166px] object-cover"
            alt="La poire group gold"
            src="la-poire-group-gold-logo-1.png"
          /> */}
        </div>
        <div className="absolute left-[443px] top-[1508px] inline-flex flex-col items-center gap-[40px]">
          <div className="font-text-large-light relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-[length:var(--text-large-light-font-size)] font-[number:var(--text-large-light-font-weight)] leading-[var(--text-large-light-line-height)] tracking-[var(--text-large-light-letter-spacing)] text-[#000000] [font-style:var(--text-large-light-font-style)]">
            Our Brands
          </div>
          <div className="relative inline-flex flex-[0_0_auto] items-center gap-[40px]">
            {/* <img
              className="relative h-[123.12px] w-[104.4px] object-cover"
              alt="Image"
              src="image-41.png"
            />
            <img
              className="relative h-[56px] w-[131.2px] object-cover"
              alt="Image"
              src="image-40.png"
            />
            <img
              className="relative h-[29.04px] w-[140.8px] object-cover"
              alt="Image"
              src="image-39.png"
            />
            <img
              className="relative h-[98.4px] w-[129.6px] object-cover"
              alt="Image"
              src="image-43.png"
            /> */}
          </div>
        </div>
        <div className="absolute left-[144px] top-[4023px] h-[939px] w-[1223px]">
          <p className="font-heading-h2 absolute left-[692px] top-[84px] w-[452px] text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)] text-transparent [font-style:var(--heading-h2-font-style)]">
            <span className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)] text-[#000000] [font-style:var(--heading-h2-font-style)]">
              When people taste,{" "}
            </span>
            <span className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)] text-[#fdb3c4] [font-style:var(--heading-h2-font-style)]">
              joy
            </span>
            <span className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)] text-[#000000] [font-style:var(--heading-h2-font-style)]">
              {" "}
              speaks!
            </span>
          </p>
          <div className="absolute left-[64px] top-[94px] h-[751px] w-[530px]">
            <div className="relative h-[751px]">
              <div className="absolute left-[75px] top-[70px] h-[682px] w-[413px] bg-[#fdb3c4]" />
              {/* <img
                className="absolute left-0 top-0 h-[751px] w-[530px]"
                alt="Hipster teenager in"
                src="hipster-teenager-in-sunglasses-2022-11-04-16-15-38-utc-2.png"
              /> */}
            </div>
          </div>
          <div className="absolute left-[920px] top-[871px] inline-flex items-start gap-[10px]">
            <div className="relative h-[18px] w-[18px] rounded-[9px] bg-pink" />
            <div className="relative h-[18px] w-[18px] rounded-[9px] bg-bej" />
            <div className="relative h-[18px] w-[18px] rounded-[9px] bg-bej" />
          </div>
          <div className="absolute left-[690px] top-[251px] inline-flex flex-col items-center gap-[16px]">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
        <div className="absolute left-0 top-[1801px] h-[714px] w-[1512px]">
          <div className="bg-black-green absolute left-0 top-0 h-[714px] w-[1512px]">
            <div className="relative left-[107px] top-[129px] inline-flex items-center gap-[100px]">
              <div className="relative h-[432px] w-[699px]">
                <div className="relative h-[432px] w-[697px]">
                  <p className="absolute left-0 top-0 w-[697px] text-[40px] font-normal leading-[72.0px] tracking-[0] text-transparent [font-family:'PT_Serif-Regular',Helvetica]">
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
                    className="absolute left-[180px] top-[63px] h-[14px] w-[194px]"
                    alt="Vector"
                    src="vector-1.svg"
                  /> */}
                </div>
              </div>
              {/* <img
                className="relative h-[200.84px] w-[501.16px]"
                alt="Joy"
                src="joy.png"
              /> */}
            </div>
          </div>
          <div className="absolute left-[103px] top-[616px] inline-flex items-center gap-[4px]">
            <div className="font-text-small-semi-bold-up relative w-fit whitespace-nowrap text-[length:var(--text-small-semi-bold-up-font-size)] font-[number:var(--text-small-semi-bold-up-font-weight)] leading-[var(--text-small-semi-bold-up-line-height)] tracking-[var(--text-small-semi-bold-up-letter-spacing)] text-white [font-style:var(--text-small-semi-bold-up-font-style)]">
              MORE ABOUT LA POIRE
            </div>
            {/* <img
              className="relative h-[48px] w-[48px]"
              alt="Arrow right"
              src="arrow-right.svg"
            /> */}
          </div>
        </div>
        <div className="absolute left-0 top-[4962px] inline-flex flex-col items-start gap-[10px]">
          <div className="relative h-[929px] w-[1512px] bg-black" />
          {/* <Footer
            className="!absolute !left-[36px] !top-[600px] !bg-transparent"
            hasMenuBar={false}
            laPoireGroupGold="la-poire-group-gold-logo-white-1-2.png"
          /> */}
          <Newsletter />
        </div>
        <div className="absolute left-[70px] top-[2615px] inline-flex flex-col items-start gap-[30px]">
          {/* <img
            className="relative h-[686px] w-[1372px]"
            alt="Group"
            src="group-33.png"
          /> */}
          <div className="relative flex w-[1369px] flex-[0_0_auto] flex-col items-start gap-[70px]">
            <div className="relative flex w-[1369px] flex-[0_0_auto] items-center justify-between">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start">
                <div className="font-heading-h5 relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-[length:var(--heading-h5-font-size)] font-[number:var(--heading-h5-font-weight)] leading-[var(--heading-h5-line-height)] tracking-[var(--heading-h5-letter-spacing)] text-black [font-style:var(--heading-h5-font-style)]">
                  Distinctive Excellence
                </div>
                <p className="font-text-large-light relative w-fit whitespace-nowrap text-[length:var(--text-large-light-font-size)] font-[number:var(--text-large-light-font-weight)] leading-[var(--text-large-light-line-height)] tracking-[var(--text-large-light-letter-spacing)] text-black [font-style:var(--text-large-light-font-style)]">
                  The Pillars of Our Prestige: Six Reasons We Shine
                </p>
              </div>
              <p className="relative mt-[-1.00px] w-[634px] text-[16px] font-normal italic leading-[33.6px] tracking-[0] text-black [font-family:'PT_Serif-Italic',Helvetica]">
                Dive into the essence of what makes La Poire group exceptional.
                With a tapestry woven from pioneering legacies to unparalleled
                quality, our unique selling propositions distinguish us in
                Egypt&#39;s culinary landscape. Discover the cornerstones that
                have shaped our journey, transforming ordinary moments into
                extraordinary experiences.
              </p>
            </div>
            <div className="relative flex w-[1369px] flex-[0_0_auto] flex-col items-start gap-[26px]">
              <div className="relative flex w-[1369px] flex-[0_0_auto] items-start justify-between">
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[10px]">
                  {/* <img
                    className="absolute left-[27px] top-[25px] h-[40px] w-[40px]"
                    alt="Vector"
                    src="vector.svg"
                  /> */}
                  {/* <img
                    className="relative ml-[-0.50px] mt-[-0.50px] h-[61px] w-[61px]"
                    alt="Papers"
                    src="x31-1-papers.png"
                  /> */}
                  <div className="font-text-regular-medium relative w-fit whitespace-nowrap text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] leading-[var(--text-regular-medium-line-height)] tracking-[var(--text-regular-medium-letter-spacing)] text-[#000000] [font-style:var(--text-regular-medium-font-style)]">
                    Pioneering Legacy
                  </div>
                  <p className="font-text-tiny-normal text-mediun-grey relative w-[319px] text-[length:var(--text-tiny-normal-font-size)] font-[number:var(--text-tiny-normal-font-weight)] leading-[var(--text-tiny-normal-line-height)] tracking-[var(--text-tiny-normal-letter-spacing)] [font-style:var(--text-tiny-normal-font-style)]">
                    With roots dating back to 1975, La Poire boasts a
                    time-honored tradition in Egypt, melding expertise with
                    culinary innovation.
                  </p>
                </div>
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[10px]">
                  {/* <img
                    className="absolute left-[-7px] top-[28px] h-[40px] w-[40px]"
                    alt="Vector"
                    src="vector-2.svg"
                  /> */}
                  {/* <img
                    className="relative h-[60px] w-[60px]"
                    alt="Vector"
                    src="vector-3.svg"
                  /> */}
                  <div className="font-text-regular-medium relative w-fit whitespace-nowrap text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] leading-[var(--text-regular-medium-line-height)] tracking-[var(--text-regular-medium-letter-spacing)] text-[#000000] [font-style:var(--text-regular-medium-font-style)]">
                    Diverse Portfolio
                  </div>
                  <p className="font-text-tiny-normal text-mediun-grey relative w-[319px] text-[length:var(--text-tiny-normal-font-size)] font-[number:var(--text-tiny-normal-font-weight)] leading-[var(--text-tiny-normal-line-height)] tracking-[var(--text-tiny-normal-letter-spacing)] [font-style:var(--text-tiny-normal-font-style)]">
                    Spanning patisseries to cafes, La Poire group&#39;s
                    wide-ranging brand lineup offers a comprehensive experience
                    for every palate and preference.
                  </p>
                </div>
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[10px]">
                  {/* <img
                    className="absolute left-[11px] top-[-5px] h-[40px] w-[40px]"
                    alt="Vector"
                    src="vector-4.svg"
                  /> */}
                  {/* <img
                    className="relative ml-[-0.20px] mt-[-0.20px] h-[60.4px] w-[60.4px]"
                    alt="Group"
                    src="group.png"
                  /> */}
                  <div className="font-text-regular-medium relative w-fit whitespace-nowrap text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] leading-[var(--text-regular-medium-line-height)] tracking-[var(--text-regular-medium-letter-spacing)] text-[#000000] [font-style:var(--text-regular-medium-font-style)]">
                    Quality Commitment
                  </div>
                  <p className="font-text-tiny-normal text-mediun-grey relative w-[319px] text-[length:var(--text-tiny-normal-font-size)] font-[number:var(--text-tiny-normal-font-weight)] leading-[var(--text-tiny-normal-line-height)] tracking-[var(--text-tiny-normal-letter-spacing)] [font-style:var(--text-tiny-normal-font-style)]">
                    La Poire stands as a hallmark of premium ingredients,
                    masterful craftsmanship, and a consistent, delightful taste
                    profile cherished by many.
                  </p>
                </div>
              </div>
              <div className="relative mr-[-3.00px] flex w-[1372px] flex-[0_0_auto] items-start justify-between">
                <div className="relative inline-flex h-[196px] flex-[0_0_auto] flex-col items-start gap-[10px]">
                  {/* <img
                    className="absolute left-[36px] top-[-6px] h-[40px] w-[40px]"
                    alt="Vector"
                    src="vector-5.svg"
                  />
                  <img
                    className="relative ml-[-0.85px] mt-[-0.85px] h-[61.7px] w-[61.7px]"
                    alt="G"
                    src="g-6883.png"
                  /> */}
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[10px]">
                    <div className="font-text-regular-medium relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] leading-[var(--text-regular-medium-line-height)] tracking-[var(--text-regular-medium-letter-spacing)] text-[#000000] [font-style:var(--text-regular-medium-font-style)]">
                      Cultural Integration
                    </div>
                    <p className="font-text-tiny-normal text-mediun-grey relative w-[319px] text-[length:var(--text-tiny-normal-font-size)] font-[number:var(--text-tiny-normal-font-weight)] leading-[var(--text-tiny-normal-line-height)] tracking-[var(--text-tiny-normal-letter-spacing)] [font-style:var(--text-tiny-normal-font-style)]">
                      Merging international culinary flair with Egypt&#39;s
                      deep-rooted heritage, the group curates unique offerings
                      that appeal to both local and international tastes.
                    </p>
                  </div>
                </div>
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[10px]">
                  {/* <img
                    className="relative h-[40px] w-[40px]"
                    alt="Element"
                    src="04.png"
                  /> */}
                  <div className="font-text-regular-medium relative w-fit whitespace-nowrap text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] leading-[var(--text-regular-medium-line-height)] tracking-[var(--text-regular-medium-letter-spacing)] text-[#000000] [font-style:var(--text-regular-medium-font-style)]">
                    Economy of Scope
                  </div>
                  <p className="font-text-tiny-normal text-mediun-grey relative w-[319px] text-[length:var(--text-tiny-normal-font-size)] font-[number:var(--text-tiny-normal-font-weight)] leading-[var(--text-tiny-normal-line-height)] tracking-[var(--text-tiny-normal-letter-spacing)] [font-style:var(--text-tiny-normal-font-style)]">
                    With its broad array of brands, La Poire adeptly caters to
                    diverse market demands, ensuring a dynamic and ever-evolving
                    presence in the culinary scene.
                  </p>
                  {/* <img
                    className="absolute left-0 top-0 h-[40px] w-[57px]"
                    alt="Vector"
                    src="vector-6.svg"
                  /> */}
                </div>
                <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[10px]">
                  {/* <img
                    className="absolute left-[14px] top-[11px] h-[40px] w-[40px]"
                    alt="Vector"
                    src="vector-7.svg"
                  />
                  <img
                    className="relative h-[60px] w-[60px]"
                    alt="Growth"
                    src="growth-1.svg"
                  /> */}
                  <div className="font-text-regular-medium relative w-fit whitespace-nowrap text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] leading-[var(--text-regular-medium-line-height)] tracking-[var(--text-regular-medium-letter-spacing)] text-[#000000] [font-style:var(--text-regular-medium-font-style)]">
                    Sustainable Growth
                  </div>
                  <p className="font-text-tiny-normal text-mediun-grey relative w-[319px] text-[length:var(--text-tiny-normal-font-size)] font-[number:var(--text-tiny-normal-font-weight)] leading-[var(--text-tiny-normal-line-height)] tracking-[var(--text-tiny-normal-letter-spacing)] [font-style:var(--text-tiny-normal-font-style)]">
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
          className="absolute left-[79px] top-[4006px] h-[5px] w-[1374px]"
          alt="Line"
          src="line-9.svg"
        /> */}
      </div>
    </div>
  );
};
