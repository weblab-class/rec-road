import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";

import { get } from "../../utilities";

const Feed = (props) => {
  const [stories, setStories] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    document.title = "Course Feed";
    get("/api/stories").then((storyObjs) => {
      setStories(storyObjs);
    });
  }, []);


  let storiesList = null;
  const hasStories = stories.length !== 0;
  if (hasStories) {
    storiesList = stories
    // storiesList = stories.map((storyObj) => (
    //   <Card
    //     key={`Card_${storyObj._id}`}
    //     _id={storyObj._id}
    //     creator_name={storyObj.creator_name}
    //     creator_id={storyObj.creator_id}
    //     userId={props.userId}
    //     content={storyObj.content}
    //   />
    // ));
  } else {
    storiesList = <div>No stories!</div>;
  }
  return (
    <>
      {storiesList}
    </>
  );
};

export default Feed;
