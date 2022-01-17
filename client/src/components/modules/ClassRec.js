import React, { useState, useEffect } from "react";
import ComponentHead from "./ComponentHead.js";
import ClassBrief from "./ClassBrief.js";
import { get } from "../../utilities";
import "../../utilities.css";
import "./ClassRec.css";

/**
 * ClassRec is a component that renders each block section of the center column of the Results page
 *
 * Proptypes
 * @param {string} content used in the ComponentHead
 * @param {list} classes list of dictionaries, should contain a list of classes
 *                       
 */

const ClassRec = (props) => {


    return (
      <>
        <ComponentHead
          content={props.content}
        />
        {/* {props.classes.map((class) => (
          <ClassBrief
            course_id={class.prompt}
            course_name={class.value}
            hours={class.hours}
            credits={class.credits}
          />
        ))} */}
  
      </>
    );
  };
  
  export default ClassRec;
  