import React from "react";
import { Link } from "@reach/router";
import ComponentHead from "./ComponentHead.js";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} course_id of the story
 * @param {string} course_name
 * @param {string} description
 * @param {string} hours of the story
 * @param {string} credits of the story
 * @param {string} eval of the story
 */
const SingleStory = (props) => {
  const temp = props.course_name + " (" + props.course_id + ")";
  return (
    <div>
      <div className="Card-storyTitle">
        <div>
          <ComponentHead content={temp} />
        </div>
      </div>
      <div className="Card-storyContent">
        <b>Units:</b> {props.credits}
      </div>
      <div className="Card-storyContent">
        <b> Hours: </b> {props.hours}
      </div>
      <div className="Card-storyContent">
        <b>Average Rating: </b> {props.eval}
      </div>
      <div className="Card-storyContent">
        <b>Description: </b> {props.description}
      </div>
    </div>
  );
};

export default SingleStory;
