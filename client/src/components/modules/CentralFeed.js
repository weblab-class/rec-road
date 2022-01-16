import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../modules/Card.js";
//import { socket } from "../../client-socket.js";
import { get } from "../../utilities";
import useCourseSearch from "./useCourseSearch.js";


const CentralFeed = () =>{
    // const [stories, setStories] = useState([])
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const {courses, hasMore, loading, error} = useCourseSearch(query, pageNumber)

    const observer = useRef()
    
    const lastCourseElementRef = useCallback( node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore){
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const handleSearch = (e) => {
      setQuery(e.target.value)
      setPageNumber(1)
    }
    
    // useEffect(() => {
    //     get("/api/stories").then((storyObjs) => {
    //       setStories(storyObjs);
    //     });
    //   }, []);
    return <div>
        <input type="text" value={query} onChange={handleSearch}></input>
        {courses.map((course, index) => {
          if (course.length === index + 1){
            return <div ref={lastCourseElementRef} key={course}>{course}</div>
          } else {
            return <div key={course}>{course}</div>
          }
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error...'}</div> 
    </div>
}

export default CentralFeed