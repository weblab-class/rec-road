import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../modules/Card.js";
//import { socket } from "../../client-socket.js";
import { get } from "../../utilities";
import useCourseSearch from "./useCourseSearch.js";
import "./CentralFeed.css";

// Citations
// https://stackoverflow.com/questions/63711013/how-to-trigger-useeffects-before-render-in-react


/**
 * CentralFeed is a component for displaying the center part of the feed
 *
 * Proptypes
 * @param {string} userId of the user
 */

const CentralFeed = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { courses, hasMore, loading, error } = useCourseSearch(pageNumber);

  const observer = useRef();

  const lastCourseElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="u-center-container">
      {courses.map((courseObj, index) => {
        if (courses.length === index + 1) {
          return (
            <div ref={lastCourseElementRef} key={courseObj.course_id}>
              <Card
                course_id={courseObj.course_id}
                course_name={courseObj.course_name}
                description={courseObj.description}
                hours={courseObj.hours}
                credits={courseObj.credits}
                eval={courseObj.eval}
                userId={props.userId}
              />
            </div>
          );
        } else {
          return (
            <div key={courseObj.course_id}>
              <Card
                course_id={courseObj.course_id}
                course_name={courseObj.course_name}
                description={courseObj.description}
                hours={courseObj.hours}
                credits={courseObj.credits}
                eval={courseObj.eval}
                userId={props.userId}
              />
            </div>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </div>
  );
};

export default CentralFeed;
