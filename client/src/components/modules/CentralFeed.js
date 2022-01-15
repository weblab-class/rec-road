import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
//import { socket } from "../../client-socket.js";
import { get } from "../../utilities";
import useCourseSearch from "./useCourseSearch.js";


const CentralFeed = () =>{
    const [stories, setStories] = useState([])
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    
    
    const handleSearch = (e) => {
      setQuery(e.target.value)
      setPageNumber(1)
    }
    const {courses, hasMore, loading, error} = useCourseSearch(query, pageNumber)
    useEffect(() => {
        get("/api/stories").then((storyObjs) => {
          setStories(storyObjs);
        });
      }, []);
    return <div>
        <input type="text" onChange={handleSearch}></input>
        {courses.map(course => {
          return <div key={course}>{course}</div>
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error...'}</div> 
    </div>
}

export default CentralFeed