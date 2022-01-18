import React, { Component } from "react";
import "../../utilities.css";

/**
 * Component that renders vote
 *
 * Proptypes
 * @param {string} vote is whether you voted up or down or not yet
 */
const Vote = (props) => {
  return (
    <div className="u-small-font">
      <p>{props.vote}</p>
    </div>
  );
};

export default Vote;
