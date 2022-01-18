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
    setExported("Saved to FireRoad");
  };
  

  return (
    <>
      <div className="u-buttonbox">
        <div className="ButtonBox-container">
          <div className="fireroad-button-container" onClick={export_clicked}>
            <div className="fireroad-button-text">
              Export to FireRoad
            </div>
          </div>
          <div>
            <p>{exported}</p>
          </div>

          <div className="return-feed-button-container" onClick={export_clicked}>
            <div className="return-feed-button-text">
              Return to Feed
            </div>
          </div>

        </div>
      </div>

      

    </>
    );
  };
  
  export default ButtonBox;
  