import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const TravelPartners = () => {
  return (
    <section className="py-[64px]">
      <Container>
        <h3 className=" font-medium xl:text-[20px] text-hikeSky text-center">
          Safe Journey
        </h3>

        <h2 className=" font-semibold xl:text-[40px] text-hikeBlack text-center">
          Trusted by Big Companies{" "}
        </h2>

        <Flex className="flex-wrap w-full items-center justify-center mt-[114px] gap-[80px]">
          <div className="w-3/12 text-center">
            <Image src="/com1.png" />
          </div>
          <div className="w-3/12 text-center">
            <Image src="/com2.png" />
          </div>
          <div className="w-3/12 text-center">
            <Image src="/com3.png" />
          </div>
          <div className="w-3/12 text-center">
            <Image src="/com4.png" />
          </div>
          <div className="w-3/12 text-center">
            <Image src="/com5.png" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default TravelPartners;
