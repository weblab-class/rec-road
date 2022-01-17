import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { get } from "../../utilities";
import "../../utilities.css";
import "./OCWClass.css";

/**
 * OCWClass is a component that renders each OCW-class-link-box
 *
 * Proptypes
 * @param {num} course_id course id
 * @param {string} course_name course name
 * @param {link? string?} link link to ocw
 *
 */
const OCWClass = (props) => {
  return (

      <div>
        <p>
           <a href={props.link}>{props.course_id} {props.course_name} OCW</a>
        </p>
      </div>

  );
};

export default OCWClass;
