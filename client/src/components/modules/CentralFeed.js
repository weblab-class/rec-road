import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";

CentralFeed = () =>{
    useEffect(() => {
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
    return <div>

    </div>
}

export default CentralFeed