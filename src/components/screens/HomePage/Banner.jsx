import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "./../../common/Image";

const Banner = () => {
  return (
    <section className=" bg-bgScreen bg-cover bg-no-repeat py-[120px] xl:pt-[226px] xl:pb-[600px]">
      <Container>
        <Flex className="flex-col gap-10 md:flex-row md:gap-0">
          <div className=" w-full md:w-1/2">
            <h1 className="mb-1 font-semibold text-center md:text-left text-[30px] md:text-[40px] xl:text-[72px] text-hikeBlack">
              Be prepared for the mountains and beyond.
            </h1>

            <h2 className=" font-medium text-center md:text-left text-base lg:text-[22px] text-hikeGray xl:w-[459px]">
              Are you looking for amazing hiking travel? Don’t worry! We got it
              for you!
            </h2>

            <Flex className="mt-[52px] gap-7 items-center justify-center md:justify-start">
              <button className="py-2 px-3 lg:py-[15px] lg:px-10 bg-hikeSky rounded-full border-[1px] border-hikeSky font-semibold lg:text-[18px] text-white">
                Contact Us
              </button>
              <button className="py-2 px-3 lg:py-[15px] lg:px-10 bg-white rounded-full border-[1px] border-hikeSky font-semibold lg:text-[18px] text-hikeSky">
                Watch Video
              </button>
            </Flex>
          </div>
          <div className=" w-full md:w-1/2">
            <Image className="ml-auto" src="/banner.png" alt="banner" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
