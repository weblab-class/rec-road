import React, { useState, useEffect } from "react";
import ComponentHead from "./ComponentHead.js";
import ClassBrief from "./ClassBrief.js";
import { get } from "../../utilities";

import "./ClassRec.css";

/**
 * ClassRec is a component that renders each block section of the center column of the Results page
 *
 * Proptypes
 * @param {string} topic_header used in the ComponentHead
 * @param {string} creator_name
 */

const ClassRec = (props) => {


    return (
      <>
        <ComponentHead
          topic_header={props.topic_header}
          />
        <ClassBrief
          _id={props._id}
          creator_name={props.creator_name}
          creator_id={props.creator_id}
          content={props.content}
        />
  
      </>
    );
  };
  
  export default ClassRec;
  