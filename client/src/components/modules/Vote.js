import React, { Component } from "react";

/**
 * Component that renders vote
 *
 * Proptypes
 * @param {string} vote is whether you voted up or down or not yet
 */
const Vote = (props) => {
  return (
    <div>
      <p>{props.vote}</p>
    </div>
  );
};

export default Vote;
