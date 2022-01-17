import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../modules/Card.js";
//import { socket } from "../../client-socket.js";
import { get } from "../../utilities";
import useCourseSearch from "./useCourseSearch.js";
import "./CentralFeed.css";

const CentralFeed = () => {
  const [stories, setStories] = useState([]);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { courses, hasMore, loading, error } = useCourseSearch(query, pageNumber);

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

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  useEffect(() => {
    get("/api/courses").then((storyObjs) => {
      setStories(storyObjs);
    });
  }, []);

  /*useEffect(() => {
    console.log(stories);
  }, [stories]);*/

  let storiesList = null;
  const hasStories = stories.length !== 0;
  if (hasStories) {
    storiesList = stories.map((storyObj) => (
      <div>
        <Card
          course_id={storyObj.course_id}
          course_name={storyObj.course_name}
          description={storyObj.description}
          hours={storyObj.hours}
          credits={storyObj.credits}
          eval={storyObj.eval}
        />
        <img src="/Users/helenaliu/weblab/HelenaELiu-klin37-bli46/client/src/components/corgi.jpg"></img>
        {/*<img src="../../public/downvote.png" />*/}
        {/*<div className="buttonContainer" />*/}
      </div>
    ));
  } else {
    storiesList = <div>{loading && "Loading..."}</div>;
  }

  /* TURN THESE INTO CARDS
        do a for loop and pass each course (story) into its own card
        and make an html card with that
        use component header for the title
        format css for the component header
        */

  return <div>{storiesList}</div>;

  /*return (
    <div class="u-textCenter">
      <input type="text" value={query} onChange={handleSearch}></input>
      <link rel="stylesheet" href="../../utilities.css" />
      <div>
        {courses.map((course, index) => {
          if (course.length === index + 1) {
            return (
              <div ref={lastCourseElementRef} key={course}>
                {course}
              </div>
            );
          } else {
            return <div key={course}>{course}</div>;
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </div>
  );*/
};

export default CentralFeed;
