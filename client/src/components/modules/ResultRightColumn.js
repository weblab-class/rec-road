import React, { useState, useEffect } from "react";
import MissingPrereq from "./MissingPrereq.js";
import OCWResources from "./OCWResources.js";
import { get } from "../../utilities";
import "../../utilities.css";
import "./ResultRightColumn.css";

/**
 * ResultRightColumn is the right column of the Results page
 *
 * Proptypes
 * @param {list} prereqs list of dictionaries, should contain a list of classes
 * @param {list} ocw_links list of dictionaries, should contain a list of classes and their id, name, and ocw links                     
 */

const ResultRightColumn = (props) => {


    return (
      <>
        {/* <div className = "u-side-container u-making-column-inside-container">
          <MissingPrereq
              classes={props.prereqs}
          />
          <OCWResources
              classes={props.ocw_links}
          />
        
        </div> */}
        <div className = "u-result-rightbar u-making-column-inside-container u-hidden-text">The boxes with OCW links and missing prerequisites will be implemented soon.</div>
      </>
    );
  };
  
  export default ResultRightColumn;
  