import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { get } from "../../utilities";
import "../../utilities.css";
import "./ClassBrief.css";

/**
 * ClassBrief is a component that renders each class-box in Results
 *
 * Proptypes
 * @param {num} course_id course id
 * @param {string} course_name course name
 * @param {string} hours hours
 * @param {string} credits credits
 *
 */
const ClassBrief = (props) => {
  return (
    <div>
      <div>
        <p>
          <b>{props.course_id} {props.course_name}</b>
        </p>
      </div>
      <div className="u-line-of-items">
        <span className="u-line-of-items u-item-in-a-line">
          <span className="u-item-in-a-line">
              {props.credits} units
          </span>
          <span className="u-item-in-a-line">
              {props.hours} hours
          </span>
        </span>
        <span className="u-item-in-a-line">
          blah
        </span>
      </div>
    </div>
  );
};

export default ClassBrief;
