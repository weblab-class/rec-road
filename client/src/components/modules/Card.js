import React, { useState, useEffect } from "react";
import SingleStory from "./SingleStory.js";
import { get } from "../../utilities";

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} course_id of the story
 * @param {string} course_name
 * @param {string} description
 * @param {string} hours of the story
 * @param {string} credits of the story
 * @param {string} eval of the story
 */
const Card = (props) => {
  return (
    <div className="Card-container">
      <SingleStory
        course_id={props.course_id}
        course_name={props.course_name}
        description={props.description}
        hours={props.hours}
        credits={props.credits}
        eval={props.eval}
      />
    </div>
  );
};

export default Card;
