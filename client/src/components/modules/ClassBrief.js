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

      <div>
        <div>
            {props.credits} units
        </div>
        <div>
            {props.hours} hours
        </div>
      </div>
    </div>
  );
};

export default ClassBrief;
