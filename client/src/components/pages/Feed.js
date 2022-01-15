import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import FeedSideBar from "../modules/FeedSideBar"
import CentralFeed from "../modules/CentralFeed"

import { get } from "../../utilities";

const Feed = (props) => {
  const [stories, setStories] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    document.title = "Course Feed";
  }, []);
  
  return (
    <>
     <FeedSideBar/>
    <CentralFeed/>
    </>
  );
};

export default Feed;
