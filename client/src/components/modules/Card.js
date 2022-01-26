import React, { useState, useEffect } from "react";
import SingleStory from "./SingleStory.js";
import { get, post } from "../../utilities";
import "../../utilities.css";
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
      get("/api/likeordislike", { course_id: props.course_id }).then((rate_doc) => {
        if (
          rate_doc.length === 0 ||
          Math.abs(rate_doc[0].course_like_neutral_dislike - 1.0) >= 0.0001
        ) {
          setVote("Liked");
          post("/api/updateuserscores", { course_id: props.course_id, vote: 1.0 }).then((res) => {
            post("/api/likeordislike", {
              course_id: props.course_id,
              course_like_neutral_dislike: 1.0,
            }).then((res) => {
            });
          });
        } else {
          setVote("Like removed");
          post("/api/updateuserscores", { course_id: props.course_id, vote: 0.5 }).then((res) => {
            post("/api/likeordislike", {
              course_id: props.course_id,
              course_like_neutral_dislike: 0.5,
            }).then((res) => {
            });
          });
        }
      });
    } else {
      setVote("Please Login to Vote");
    }
  };

  const dislike = () => {
    if (props.userId) {
      get("/api/likeordislike", { course_id: props.course_id }).then((rate_doc) => {
        if (
          rate_doc.length === 0 ||
          Math.abs(rate_doc[0].course_like_neutral_dislike - 0.0) >= 0.01
        ) {
          setVote("Disliked");
          post("/api/updateuserscores", { course_id: props.course_id, vote: 0.0 }).then((res) => {
            post("/api/likeordislike", {
              course_id: props.course_id,
              course_like_neutral_dislike: 0.0,
            }).then((res) => {
            });
          });
        } else {
          setVote("Dislike removed");
          post("/api/updateuserscores", { course_id: props.course_id, vote: 0.5 }).then((res) => {
            post("/api/likeordislike", {
              course_id: props.course_id,
              course_like_neutral_dislike: 0.5,
            }).then((res) => {
            });
          });
        }
      });
    } else {
      setVote("Please Login to Vote");
    }
  };

  const save = () => {
    if (props.userId) {
      setVote("Saved!");
      post("/api/savecourse", { course_id: props.course_id }).then((res) => {
      });
    } else {
      setVote("Please Login to Save");
    }
  };

  return (
    <div className="u-component-body u-rounded-out-blocks u-subtle-block-shadow">
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
          <div className="Card-upbutton u-smooth-small-button" />
        </div>

        <div className="Card-buttonContainer column" onClick={dislike}>
          <div className="Card-downbutton u-smooth-small-button" />
        </div>

        <div className="Card-buttonContainer column" onClick={save}>
          <div className="Card-savebutton u-smooth-small-button"> Save </div>
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
