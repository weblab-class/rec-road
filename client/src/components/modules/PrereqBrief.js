import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { get } from "../../utilities";
import "../../utilities.css";
import "./PrereqBrief.css";

/**
 * PrereqBrief is a component that renders each prereq-class-box
 *
 * Proptypes
 * @param {num} prompt course id
 * @param {list} prereqs list of id's of prereqs
 *
 */
const PrereqBrief = (props) => {
  return (
    <div>
      <div>
        <p>
          Missing Prerequisites for {props.prompt}
        </p>
      </div>

      <div>
        {props.prereqs.map((class) => (
          <p>
            {class}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PrereqBrief;
