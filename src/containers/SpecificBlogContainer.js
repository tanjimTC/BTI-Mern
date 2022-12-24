import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpecificBlog from "../components/SpecificBlog";
import { blogs } from "../blogs";

const SpecificBlogContainer = () => {
  const [myBlog , setMyBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const myBlog = blogs.find((blog) => blog.id === parseInt(id));
    setMyBlog(myBlog);
  }, [id]);
  return (
    <div>
      <h1>This is the specific blog page and the blog {id}</h1>
      {myBlog && JSON.stringify(myBlog)}
      <SpecificBlog />
    </div>
  );
};

export default SpecificBlogContainer;
