import React from "react";
import withAuth from "../HOC/withAuth";

const About = () => {
  return (
    <div>
      <h1 className="">This is the about page</h1>
    </div>
  );
};

export default withAuth(About);
