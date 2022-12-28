import React from "react";
import Hero from "../components/Hero";
import Home from "../components/Home";
import BlogContainer from "./BlogContainer";
import WhyUsContainer from "./WhyUsContainer";
import MeetUs from "../components/MeetUs";
import YourJourney from "../components/YourJourney";

const HomeContainer = ({ user }) => {
  return (
    <div>
      <Hero user={user} />
      <Home />
      <BlogContainer />
      <WhyUsContainer />
      <MeetUs />
      <YourJourney />
    </div>
  );
};

export default HomeContainer;
