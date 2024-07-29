import React from "react";
import Banner from "../components/screens/HomePage/Banner";
import Featurers from "../components/screens/HomePage/Featurers";
import Add1 from "../components/screens/HomePage/Add1";
import TravelPartners from "../components/screens/HomePage/TravelPartners";
import Add2 from "../components/screens/HomePage/Add2";
import Add3 from "../components/screens/HomePage/Add3";
import Testimonial from "../components/screens/HomePage/Testimonial";
import Newsletter from "../components/screens/HomePage/Newsletter";

const Home = () => {
  return (
    <main>
      <Banner />
      <Featurers />
      <Add1 />
      <TravelPartners />
      <Add2 />
      <Add3 />
      <Testimonial />
      <Newsletter />
    </main>
  );
};

export default Home;
