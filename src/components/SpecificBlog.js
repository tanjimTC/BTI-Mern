import React from "react";
import { useParams } from "react-router-dom";

const SpecificBlog = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is the specific blog page {id}</h1>
    </div>
  );
};

export default SpecificBlog;
