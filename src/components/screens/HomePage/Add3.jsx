import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const Add3 = () => {
  return (
    <section className="bg-add3 bg-cover bg-no-repeat mt-[130px]">
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-7/12">
            <Image src="/add3pic.png" />
          </div>
          <div className="w-5/12">
            <h2 className=" font-semibold xl:text-[62px] text-hikeBlack">
              Let’s Enjoy Nature With Us
            </h2>

            <p className=" font-normal xl:text-[22px] text-hikeGray mt-3 xl:w-[374px]">
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

export default Add3;
