import React, { useState, useEffect } from "react";
import SingleStory from "./SingleStory.js";
import { get } from "../../utilities";
import Vote from "./Vote.js";
import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} course_id of the story
 * @param {string} course_name
 * @param {string} description
 * @param {string} hours of the story
 * @param {string} credits of the story
 * @param {string} eval of the story
 */
const Card = (props) => {
  const [vote, setVote] = useState("");
  const like = () => {
    setVote("Liked");
  };
  const dislike = () => {
    setVote("Disliked");
  };
  const save = () => {
    setVote("Saved!");
  };

  return (
    <div>
      <SingleStory
        course_id={props.course_id}
        course_name={props.course_name}
        description={props.description}
        hours={props.hours}
        credits={props.credits}
        eval={props.eval}
      />

      <div class="row">
        <div className="Card-buttonContainer column" onClick={like}>
          <div className="Card-upbutton" />
        </div>

        <div className="Card-buttonContainer column" onClick={dislike}>
          <div className="Card-downbutton" />
        </div>

        <div className="Card-buttonContainer column" onClick={save}>
          <div className="Card-savebutton"> Save </div>
        </div>
      </div>
      <div>
        <Vote vote={vote} />
      </div>
    </div>
  );
};

/*
<div class="row">
        <div className="Card-buttonContainer column" onClick={like}>
          <div className="Card-upbutton" />
        </div>

        <div className="Card-buttonContainer column" onClick={dislike}>
          <div className="Card-downbutton" />
        </div>
      </div>
      <div>
        <Vote vote={vote} />
      </div>
*/
export default Card;
