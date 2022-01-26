import React, { useState, useEffect } from "react";
import StoryBrief from "./StoryBrief.js";
import { get, post } from "../../utilities";
import "../../utilities.css";
import Vote from "./Vote.js";
import "./Card.css";

/**
 * CardBrief is a component for displaying past votes on courses
 *
 * Proptypes
 * @param {string} course_id of the story
 * @param {string} course_name
 * @param {string} hours
 * @param {string} credits
 * @param {string} eval
 * @param {string} userId of the user
 */
const CardBrief = (props) => {
  const [vote, setVote] = useState("");
  const [user, setUser] = useState();
  useEffect(()=>{
    get("/api/likeordislike", { course_id: props.course_id }).then((rate_doc)=>{
      if(
        Math.abs(rate_doc[0].course_like_neutral_dislike - 1.0) <= 0.0001
      ){
        setVote("Liked")
      } else if(
        Math.abs(rate_doc[0].course_like_neutral_dislike - .5) <= 0.0001
      ){
        setVote("Neutral")
      } else if(
        Math.abs(rate_doc[0].course_like_neutral_dislike - 0.0) <= 0.0001
      ){
        setVote("Disliked")
      }
    })
  }, [])

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
          setVote("Neutral");
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
          setVote("Neutral");
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

  return (
    <div className="u-component-body u-rounded-out-blocks u-subtle-block-shadow">
      <StoryBrief
        course_id={props.course_id}
        course_name={props.course_name}
        hours={props.hours}
        credits={props.credits}
      />

      <div className="row">
        <div className="Card-buttonContainer column" onClick={like}>
          <div className="Card-upbutton u-smooth-small-button" />
        </div>

        <div className="Card-buttonContainer column" onClick={dislike}>
          <div className="Card-downbutton u-smooth-small-button" />
        </div>
      </div>
      <div className="u-small-font">
        <p>{vote}</p>
      </div>
    </div>
  );
};


export default CardBrief;
