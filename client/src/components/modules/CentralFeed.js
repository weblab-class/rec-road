import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../modules/Card.js";
//import { socket } from "../../client-socket.js";
import { get } from "../../utilities";
import useCourseSearch from "./useCourseSearch.js";
import "./CentralFeed.css";
import Vote from "./Vote.js";

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

  const [vote, setVote] = useState("");
  const like = () => {
    setVote("Liked");
  };
  const dislike = () => {
    setVote("Disliked");
  };

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

        <div className="Feed-buttonContainer" onClick={like}>
          <div className="Feed-upbutton" />
        </div>

        <div className="Feed-buttonContainer" onClick={dislike}>
          <div className="Feed-downbutton" />
        </div>

        <div className="Profile-subContainer u-textCenter">
          <Vote vote={vote} />
        </div>
      </div>
    ));
  } else {
    storiesList = <div>{loading && "Loading..."}</div>;
  }

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
