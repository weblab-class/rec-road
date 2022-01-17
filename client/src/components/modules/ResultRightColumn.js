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
 * @param {list} ocw_links list of dictionaries, should contain a list of classes                      
 */

const ResultRightColumn = (props) => {


    return (
      <>
        <MissingPrereq
            classes={props.prereqs}
        />
        <OCWResources
            classes={props.ocw_links}
        />
        <p>right</p>
        
  
      </>
    );
  };
  
  export default ResultRightColumn;
  