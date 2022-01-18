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
        <div className = "u-center-container u-making-column-inside-container">
          <div className="u-section-padding">
            <ClassRec
                content={"Saved Classes"}
                classes={props.rec_classes}
            />
          </div>

          <div className="u-section-padding">
            <ClassRec
                content={"Your Other Top Ranked Courses"}
                classes={props.other_classes}
            />
          </div>
        </div>
        
  
      </>
    );
  };
  
  export default ResultClasses;
  