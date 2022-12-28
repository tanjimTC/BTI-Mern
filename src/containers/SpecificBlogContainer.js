import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpecificBlog from "../components/SpecificBlog";
import axios from "axios";

const SpecificBlogContainer = () => {
  const [myBlog, setMyBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3500/binary/blog/get/${id}`)
      .then((response) => {
        console.log(response.data);
        setMyBlog(response.data.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return <div>{myBlog && <SpecificBlog myBlog={myBlog} />}</div>;
};

export default SpecificBlogContainer;
