import React, { useState, useEffect } from "react";
import "./ComponentHead.css"
import "../../utilities.css"

/**
 * ComponentHead is a component that serves as a header for other components.
 *
 * Proptypes
 * @param {string} content of the component head
 */

const ComponentHead = (props) => {
    return (
        <div className="ComponentHead-container u-bold">
            {props.content}
        </div>
    )
}