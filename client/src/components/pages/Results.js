import React, { useState, useEffect, Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import ResultClasses from "../modules/ResultClasses.js";
import ButtonBox from "../modules/ButtonBox.js";
import ResultRightColumn from "../modules/ResultRightColumn.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Results.css";

/**
 * Results page
 *
 * Proptypes
 * @param {list} prereqs list of dictionaries, should contain a list of classes
 * @param {list} ocw_links list of dictionaries, should contain a list of classes                      
 */


const Results = (props) => {

  const [stories, setStories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    get("/api/topfivecourses").then((storyObjs) => {
      //console.log(storyObjs[0])
      setStories(storyObjs);
      setLoading(false);
    });
  }, []);
  useEffect(()=>{
    console.log(stories[0])
  }, [stories])

  if (isLoading) {
            return <div className="App">Loading...</div>;
          }
  else{
  return (
    <>
      <div className="u-row-made-by-containers">
        <ButtonBox/>
        
        <ResultClasses
          rec_classes={stories}
          other_classes={stories}
        />

        <ResultRightColumn
          // prereqs=
          // ocw_links=
        />


      </div>



    </>
  );}
};

export default Results;









  


