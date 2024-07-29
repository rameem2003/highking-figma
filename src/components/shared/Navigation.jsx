import React from "react";
import Container from "./../common/Container";
import { Link } from "react-router-dom";
import Image from "./../common/Image";
import Flex from "./../common/Flex";
import List from "./../common/List";
import ListItem from "./../common/ListItem";

const Navigation = () => {
  return (
    <nav className="py-[47px] fixed w-full left-0 top-0">
      <Container>
        <Flex className="items-center justify-between">
          <Link to="/">
            <Image src="/logo.png" alt="logo" />
          </Link>

          <List className="flex items-center justify-end gap-[50px]">
            <ListItem className="font-medium xl:text-[18px] text-hikeBlack cursor-pointer">
              Location
            </ListItem>
            <ListItem className="font-medium xl:text-[18px] text-hikeBlack cursor-pointer">
              Blogs
            </ListItem>
            <ListItem className="font-medium xl:text-[18px] text-hikeBlack cursor-pointer">
              Testimonials
            </ListItem>
            <ListItem className="font-medium xl:text-[18px] text-hikeBlack cursor-pointer">
              Contact
            </ListItem>
          </List>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
