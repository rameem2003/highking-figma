import React from "react";
import Container from "../../common/Container";
import Image from "../../common/Image";
import Flex from "../../common/Flex";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="py-[84px]">
      <Container>
        <h3 className=" font-medium xl:text-[20px] text-hikeSky text-center">
          Happy Hikers
        </h3>

        <h2 className=" font-semibold xl:text-[40px] text-hikeBlack text-center">
          Client’s Say About Us
        </h2>

        <div className="mt-[116px]">
          <div className="py-[52px] px-[57px] rounded-tl-[140px] rounded-br-[140px] shadow-custom mx-auto text-center">
            <Image className="mx-auto" src="/avatar.png" />

            <h2 className=" font-semibold xl:text-[24px] text-hikeBlack mt-5">
              Omar Gouse
            </h2>
            <h3 className=" font-normal xl:text-[18px] text-hikeRed">
              Happy Client
            </h3>

            <p className=" font-normal xl:text-[18px] text-hikeGray xl:w-[612px] mx-auto mt-5">
              “Everyone working in the office is very knowledgeable about all
              types of dental work and options for your individual needs.”
            </p>
            <Flex className="items-center justify-center gap-1 mt-3">
              <FaStar className=" text-[26px] text-yellow-400" />
              <FaStar className=" text-[26px] text-yellow-400" />
              <FaStar className=" text-[26px] text-yellow-400" />
              <FaStar className=" text-[26px] text-yellow-400" />
              <FaStar className=" text-[26px] text-yellow-400" />
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
