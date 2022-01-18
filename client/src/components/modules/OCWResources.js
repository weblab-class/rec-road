import React, { useState, useEffect } from "react";
import ComponentHead from "./ComponentHead.js";
import OCWClass from "./OCWClass.js";
import { get } from "../../utilities";
import "../../utilities.css";
import "./OCWResources.css";

/**
 * OCWResources is a box in the right sidebar that lists the OCW links for the recommended classes
 *
 * Proptypes
 * @param {list} classes list of dictionaries, should contain a list of classes,
 *                            each dictionary should have keys class.prompt, class.value, and class.link
 *                       
 */

const OCWResources = (props) => {


    return (
      <>
        <ComponentHead
          content={"Resources"}
        />
        {props.classes.map((class_dict) => (
          <OCWClass
            course_id={class_dict.prompt}
            course_name={class_dict.value}
            link={class_dict.link}
          />
        ))}
  
      </>
    );
  };
  
  export default OCWResources;
  