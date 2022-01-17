import React, { useState, useEffect } from "react";
// import ComponentHead from "./ComponentHead.js";
import PrereqBrief from "./PrereqBrief.js";
import { get } from "../../utilities";
import "../../utilities.css";
import "./MissingPrereq.css";

/**
 * MissingPrereq is a box in the right sidebar that lists the missing prereqs
 *
 * Proptypes
 * @param {list} classes list of dictionaries, should contain a list of classes (the scheduled classes, not prereqs),
 *                            each dictionary should have keys class.prompt and class.prereqs (lists the prereqs)
 *                       
 */

const MissingPrereq = (props) => {


    return (
      <>
        <ComponentHead
          content={"Missing Prerequisites"}
        />
        {/* {props.classes.map((class) => {
          <PrereqBrief
            prompt={class.prompt}
            prereqs={class.prereqs}
          /> */}
})}
  
      </>
    );
  };
  
  export default MissingPrereq;
  