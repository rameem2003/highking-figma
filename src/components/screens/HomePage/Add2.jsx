import React from "react";
import Container from "../../common/Container";
import Image from "../../common/Image";
import Flex from "../../common/Flex";

const Add2 = () => {
  return (
    <section className="bg-add2 bg-cover bg-no-repeat mt-[130px]">
      <Container>
        <Flex className="flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-1/2">
            <h2 className=" font-semibold text-[35px] lg:text-[62px] text-hikeBlack">
              Enjoy Your Life With Us Now!
            </h2>

            <p className=" font-normal text-lg lg:text-[22px] text-hikeGray mt-3 xl:w-[374px]">
              Volunteer trail stewardship projects in America’s parks and
              forests designed specifically for college student groups and young
              professionals.
            </p>

            <button className=" mt-8 py-[15px] px-10 bg-hikeSky rounded-full border-[1px] border-hikeSky font-semibold xl:text-[18px] text-white">
              Contact Us
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <Image className="ml-auto" src="/add2pic.png" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Add2;
