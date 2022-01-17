import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import ResultClasses from "../modules/ResultClasses.js";
import ButtonBox from "../modules/ButtonBox.js";
import ResultRightColumn from "../modules/ResultRightColumn.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Results.css";

/**
 * Results page
 *
 * Proptypes
 * @param {list} prereqs list of dictionaries, should contain a list of classes
 * @param {list} ocw_links list of dictionaries, should contain a list of classes                      
 */


const Results = (props) => {

  return (
    <>
      <div className="u-row-made-by-containers">
      <ButtonBox
      />
      <ResultClasses
        
      />
      <ResultRightColumn/>


      </div>



    </>
  );
};

export default Results;









  


