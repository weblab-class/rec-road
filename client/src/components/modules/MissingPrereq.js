import React, { useState, useEffect } from "react";
import ComponentHead from "./ComponentHead.js";
import PrereqBrief from "./PrereqBrief.js";
import { get } from "../../utilities";
import "../../utilities.css";
import "./MissingPrereq.css";

/**
 * MissingPrereq is a box in the right sidebar that lists the missing prereqs
 *
 * Proptypes
 * @param {dict} classes list of dictionaries, should contain a list of classes (the scheduled classes, not prereqs),
 *                            each dictionary should have keys class.prompt and class.prereq (lists the prereqs)
 *                       
 */

const MissingPrereq = (props) => {


    return (
      <>
        <ComponentHead
          topic_header={"Missing Prerequisites"}
        />
        {props.classes.map((class) => (
          <PrereqBrief
            course_id={class.prompt}
            prereq={class.prereq}
          />
        ))}
  
      </>
    );
  };
  
  export default MissingPrereq;
  