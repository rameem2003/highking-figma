import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "./../../common/Image";

const Banner = () => {
  return (
    <section className=" bg-bgScreen bg-cover bg-no-repeat pt-[226px] pb-[600px]">
      <Container>
        <Flex>
          <div className="w-1/2">
            <h1 className="font-semibold xl:text-[72px] text-hikeBlack">
              Be prepared for the mountains and beyond.
            </h1>

            <h2 className=" font-medium xl:text-[22px] text-hikeGray xl:w-[459px]">
              Are you looking for amazing hiking travel? Don’t worry! We got it
              for you!
            </h2>

            <Flex className="mt-[52px] gap-7">
              <button className="py-[15px] px-10 bg-hikeSky rounded-full border-[1px] border-hikeSky font-semibold xl:text-[18px] text-white">
                Contact Us
              </button>
              <button className="py-[15px] px-10 bg-white rounded-full border-[1px] border-hikeSky font-semibold xl:text-[18px] text-hikeSky">
                Watch Video
              </button>
            </Flex>
          </div>
          <div className="w-1/2">
            <Image className="ml-auto" src="/banner.png" alt="banner" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
