import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";

const Newsletter = () => {
  return (
    <section className="pt-[118px] pb-[98px] bg-hikeLightSky">
      <Container>
        <h2 className=" font-semibold text-[40px] capitalize text-center xl:w-[575px] mx-auto">
          Subscribe to Our Newsletter For Weekly Article Update.
        </h2>

        <p className=" font-normal xl:text-[18px] text-hikeGray xl:w-[637px] mx-auto mt-[30px]">
          We have hiking-related blog so we can share our thought and rutinity
          in our blog that updated weekly. We will not spam you, we promise.
        </p>

        <Flex className="mt-[76px] w-[637px] mx-auto gap-5">
          <div className="w-[70%]">
            <input
              className="py-4 pl-[66px] border-[1px] border-hikeSky w-full bg-transparent rounded-full placeholder:text-base placeholder:text-hikeSky"
              type="text"
              name=""
              id=""
              placeholder="Enter your e-mail address"
            />
          </div>

          <button className=" w-[30%]  py-[15px] px-10 bg-hikeSky rounded-full border-[1px] border-hikeSky font-semibold xl:text-[18px] text-white">
            Subscribe
          </button>
        </Flex>
      </Container>
    </section>
  );
};

export default Newsletter;
