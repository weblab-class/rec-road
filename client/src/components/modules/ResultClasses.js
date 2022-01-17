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
            topic_header={"Spring 2022 Recommended Classes"}
            classes={props.rec_classes}
        />
        <ClassRec
            topic_header={"Other Liked Classes"}
            classes={props.other_classes}
        />
        <p>middle</p>
        
  
      </>
    );
  };
  
  export default ResultClasses;
  