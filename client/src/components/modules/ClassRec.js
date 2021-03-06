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
        <div className="u-component-body u-rounded-out-blocks">
          <ComponentHead
            content={props.content}
          />
          {props.classes.map((class_dict) => (
            <ClassBrief
              remove_course_function={props.remove_course_function}
              course_id={class_dict.course_id}
              course_name={class_dict.course_name}
              hours={class_dict.hours}
              credits={class_dict.credits}
              remove={props.remove}
            />
          ))} 
        </div>
      </>
    );
  };
  
  export default ClassRec;
  