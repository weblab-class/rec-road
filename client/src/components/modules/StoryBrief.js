import React from "react";
import { Link } from "@reach/router";
import ComponentHead from "./ComponentHead.js";
import "../../utilities.css";

const display = (info_item) => {
  if (typeof info_item == 'number') {
    return Number.parseFloat(info_item).toFixed(2);
  }
  else if (!info_item) {
    return <span className="u-midsmall-font"><i>Data Not Available</i></span>
  }
  else {
    return "WARNING"
  }
}

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} course_id of the story
 * @param {string} course_name
 * @param {string} hours of the story
 * @param {string} credits of the story
 */

const StoryBrief = (props) => {
  return (
    <div className="u-text-padding">
      <div>
        <p>
          <b>{props.course_id} {props.course_name}</b>
        </p>
      </div>

        <div>
          <span className="u-first-item-in-a-line">
              <b>Units:</b> {props.credits}
          </span>
          <span className="u-second-item-in-a-line">
              <b> Hours: </b> {display(props.hours)}
          </span>
          
        </div>
    </div>
  );
};

export default StoryBrief;
