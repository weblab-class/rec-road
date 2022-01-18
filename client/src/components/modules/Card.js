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
 * @param {string} hours
 * @param {string} credits
 * @param {string} eval
 * @param {string} userId of the user
 */
const Card = (props) => {
  const [vote, setVote] = useState("");
  const [user, setUser] = useState();

  const like = () => {
    if (props.userId) {
      setVote("Liked");
    } else {
      setVote("Please Login to Vote");
    }
  };

  const dislike = () => {
    if (props.userId) {
      setVote("Disliked");
    } else {
      setVote("Please Login to Vote");
    }
  };
  const save = () => {
    if (props.userId) {
      setVote("Saved!");
    } else {
      setVote("Please Login to Vote");
    }
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

      <div className="row">
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
