import React, { useState, useEffect } from "react";
import ClassRec from "./ClassRec.js";
import { get } from "../../utilities";
import "../../utilities.css";
import "./ResultClasses.css";

/**
 * ResultClasses is the center column of the Results page
 *
 * Proptypes
 * @param {list} rec_classes list of dictionaries, should contain a list of classes
 * @param {list} other_classes list of dictionaries, should contain a list of classes                      
 */

const ResultClasses = (props) => {


    return (
      <>
        <ClassRec
            content={"Saved Classes"}
            classes={props.rec_classes}
        />
        <ClassRec
            content={"Other Liked Classes"}
            classes={props.other_classes}
        />
        
        
  
      </>
    );
  };
  
  export default ResultClasses;
  