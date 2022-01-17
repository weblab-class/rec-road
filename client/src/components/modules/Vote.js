import React, { Component } from "react";

/**
 * Component that renders vote
 *
 * Proptypes
 * @param {string} vote is whether you voted up or down or not yet
 */
const Vote = (props) => {
  return (
    <div className="Vote-container">
      <div className="Vote-story">
        <p className="Vote-storyContent">{props.vote}</p>
      </div>
    </div>
  );
};

export default Vote;
