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
      <p>left</p>

      <div className="ButtonBox-container">
        <div className="fireroad-button-container" onClick={export_clicked}>
          <div className="fireroad-button-text">
            Export to FireRoad
          </div>
        </div>
      </div>
      <div>
        <p>{exported}</p>
      </div>


    </>
    );
  };
  
  export default ButtonBox;
  