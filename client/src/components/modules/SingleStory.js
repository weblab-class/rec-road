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
      <Link to={`/profile/${props.course_name}`} className="u-link u-bold Card-storyTitle">
        {props.course_name} ({props.course_id})
      </Link>
      <div className="Card-storyContent">
        <p> Units: {props.credits}</p>
        <p> Hours: {props.hours}</p>
        <p> Average Rating: {props.eval}</p>
        <p> Description: {props.description}</p>
      </div>
    </div>
  );
};

export default SingleStory;
