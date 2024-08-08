import React, { useEffect, useRef, useState } from "react";
import Container from "./../common/Container";
import { Link } from "react-router-dom";
import Image from "./../common/Image";
import Flex from "./../common/Flex";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();

  const handleScroll = () => {
    let ofsetY = window.scrollY;

    if (ofsetY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      menuRef.current.contains(e.target) ? setToggle(true) : setToggle(false);
    });
  }, []);

  return (
    <nav
      className={`${
        scroll ? "bg-white py-8" : "bg-transparent py-[47px]"
      }  fixed w-full left-0 top-0 z-[1000] ease-in-out duration-300`}
    >
      <Container>
        <Flex className="items-center justify-between">
          <div className=" w-full  md:w-4/12">
            <Flex className="items-center justify-between">
              <Link to="/">
                <Image src="/logo.png" alt="logo" />
              </Link>

              <div ref={menuRef}>
                <GiHamburgerMenu
                  className=" text-3xl block md:hidden"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
            </Flex>
          </div>

          <List
            className={`w-full h-screen md:h-auto md:w-8/12 flex flex-col md:flex-row absolute ${
              scroll ? "bg-white" : "bg-hikeLightSky"
            } top-0 ${
              toggle ? "left-0" : "left-[-100%]"
            } md:static items-center justify-center md:justify-end gap-[50px] ease-in-out duration-300 `}
          >
            <ListItem className="font-medium text-base xl:text-[18px] text-hikeBlack cursor-pointer">
              Location
            </ListItem>
            <ListItem className="font-medium text-base xl:text-[18px] text-hikeBlack cursor-pointer">
              Blogs
            </ListItem>
            <ListItem className="font-medium text-base xl:text-[18px] text-hikeBlack cursor-pointer">
              Testimonials
            </ListItem>
            <ListItem className="font-medium text-base xl:text-[18px] text-hikeBlack cursor-pointer">
              Contact
            </ListItem>
          </List>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
