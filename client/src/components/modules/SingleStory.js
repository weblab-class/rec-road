import React from "react";
import { Link } from "@reach/router";

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
  return (
    <div>
      <div className="Card-storyTitle">
        <p>
          {props.course_name} ({props.course_id})
        </p>
      </div>
      <div className="Card-storyContent">
        <p>
          <b>Units:</b> {props.credits}
        </p>
        <p>
          <b> Hours: </b> {props.hours}
        </p>
        <p>
          <b>Average Rating: </b> {props.eval}
        </p>
        <p>
          <b>Description: </b> {props.description}
        </p>
      </div>
    </div>
  );
};

export default SingleStory;
