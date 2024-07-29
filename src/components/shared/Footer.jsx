import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import List from "./../common/List";
import ListItem from "./../common/ListItem";

const Footer = () => {
  return (
    <footer className=" pt-[117px] bg-hikeLightSky">
      <Container>
        <Flex>
          <div className="w-1/2">
            <Image src="/logo.png" alt="logo" />

            <p className=" font-normal xl:text-[20px] text-hikeGray xl:w-[341px] mt-4">
              We envision a world where everyone feels welcome in the American
              hiking community.
            </p>

            <Flex className="mt-12 gap-[30px]">
              <a
                className=" p-2 rounded-full flex items-center justify-center bg-hikeSky"
                href=""
              >
                <FaFacebookF className="text-[32px] text-white" />
              </a>
              <a
                className=" p-2 rounded-full flex items-center justify-center bg-hikeSky"
                href=""
              >
                <FaTwitter className="text-[32px] text-white" />
              </a>
              <a
                className=" p-2 rounded-full flex items-center justify-center bg-hikeSky"
                href=""
              >
                <FaInstagram className="text-[32px] text-white" />
              </a>
            </Flex>
          </div>
          <div className="w-1/2">
            <Flex className="items-center justify-between">
              <div>
                <h2 className=" font-medium xl:text-[20px] text-hikeBlack mb-[30px]">
                  Location
                </h2>

                <List>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    America
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Asia
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Europe
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Africa
                  </ListItem>
                </List>
              </div>

              <div>
                <h2 className=" font-medium xl:text-[20px] text-hikeBlack mb-[30px]">
                  Contact
                </h2>

                <List>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    About Me
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Teams
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Profile
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    FAQ
                  </ListItem>
                </List>
              </div>

              <div>
                <h2 className=" font-medium xl:text-[20px] text-hikeBlack mb-[30px]">
                  Legals
                </h2>

                <List>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Privacy
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Disclaimer
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Terms
                  </ListItem>
                  <ListItem className="font-normal xl:text-[18px] text-hikeGray mb-6">
                    Company
                  </ListItem>
                </List>
              </div>
            </Flex>
          </div>
        </Flex>

        <p className="pt-[131px] pb-12 font-normal xl:text-[20px] text-hikeGray text-center">
          Copyright © 2021. All Right Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
