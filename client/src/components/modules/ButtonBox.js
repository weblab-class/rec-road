import React, { useState, useEffect } from "react";

import { get } from "../../utilities";
import "../../utilities.css";
import "./ButtonBox.css";

/**
 * ButtonBox is the left column of the Results page                     
 */

const ButtonBox = (props) => {

  const [exported, setExported] = useState("");
  const export_clicked = () => {
    setExported("To be implemented");
  };
  

  return (
    <>
      <div className="u-buttonbox">
        <div className="ButtonBox-container">
          
          
          <div className="fireroad-button-container u-smooth-button" onClick={export_clicked}>
            <div className="fireroad-button-text">
              Export to FireRoad
            </div>
          </div>
          <div className="u-midsmall-font">
            <p>{exported}</p>
          </div>
          <a href="/">
            <div className="return-feed-button-container u-smooth-button">
              <div className="return-feed-button-text">
                Return to Feed
              </div>
            </div>
          </a>

        </div>
      </div>

      

    </>
    );
  };
  
  export default ButtonBox;
  