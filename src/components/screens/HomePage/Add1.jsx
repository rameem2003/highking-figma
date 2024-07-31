import React from "react";
import Container from "./../../common/Container";
import Flex from "./../../common/Flex";
import Image from "./../../common/Image";

const Add1 = () => {
  return (
    <section className=" bg-add1 bg-cover bg-no-repeat">
      <Container>
        <Flex className=" flex-col md:flex-row items-center gap-5">
          <div className=" w-full md:w-7/12">
            <Image src="/add1pic.png" />
          </div>
          <div className=" w-full md:w-5/12">
            <h2 className=" font-semibold text-[35px] lg:text-[62px] text-hikeBlack">
              Safe, Affordable, And Trusted
            </h2>

            <p className=" font-normal text-lg xl:text-[22px] text-hikeGray mt-3 xl:w-[374px]">
              Volunteer trail stewardship projects in America’s parks and
              forests designed specifically for college student groups and young
              professionals.
            </p>

            <button className=" mt-8 py-[15px] px-10 bg-hikeSky rounded-full border-[1px] border-hikeSky font-semibold xl:text-[18px] text-white">
              Contact Us
            </button>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Add1;
