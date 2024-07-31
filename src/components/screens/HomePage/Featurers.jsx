import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const Featurers = () => {
  return (
    <section>
      <Container>
        <div className=" relative">
          <div className=" translate-y-[-90px]  xl:translate-y-[-170px] w-full">
            <Flex className=" flex-col lg:flex-row w-full p-10 md:p-[66px] bg-white shadow-custom items-center justify-between gap-[120px]">
              <div className=" w-full lg:w-4/12">
                <Image src="/icon1.png" alt="icon" />

                <h2 className=" font-semibold lg:text-[24px] text-hikeBlack mt-7">
                  Secret Locations
                </h2>

                <p className=" font-normal lg:text-[18px] text-hikeGray xl:w-[268px] mt-3">
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                  eiusmod tempor.
                </p>
                <a
                  className=" font-normal lg:text-[18px] text-hikeRed block mt-1"
                  href=""
                >
                  Read More
                </a>
              </div>
              <div className=" w-full lg:w-4/12">
                <Image src="/icon2.png" alt="icon" />

                <h2 className=" font-semibold lg:text-[24px] text-hikeBlack mt-7">
                  Safe Adventure
                </h2>

                <p className=" font-normal lg:text-[18px] text-hikeGray xl:w-[268px] mt-3">
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                  eiusmod tempor.
                </p>
                <a
                  className=" font-normal lg:text-[18px] text-hikeRed block mt-1"
                  href=""
                >
                  Read More
                </a>
              </div>
              <div className=" w-full lg:w-4/12">
                <Image src="/icon3.png" alt="icon" />

                <h2 className=" font-semibold lg:text-[24px] text-hikeBlack mt-7">
                  Professional Hikers
                </h2>

                <p className=" font-normal lg:text-[18px] text-hikeGray xl:w-[268px] mt-3">
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                  eiusmod tempor.
                </p>
                <a
                  className=" font-normal lg:text-[18px] text-hikeRed block mt-1"
                  href=""
                >
                  Read More
                </a>
              </div>
            </Flex>
            <p className=" font-normal lg:text-[18px] text-hikeGray text-center mt-[76px]">
              Don’t hesitate to contact us to get better Information.{" "}
              <span className=" font-bold italic text-hikeRed">
                EXPLORE ALL TREKKING.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featurers;
