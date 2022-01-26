import React, { useState, useEffect, Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import ResultClasses from "../modules/ResultClasses.js";
import ButtonBox from "../modules/ButtonBox.js";
import ResultRightColumn from "../modules/ResultRightColumn.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Results.css";

const GOOGLE_CLIENT_ID = "876948856050-m02nj91vv8in97n334u1ldug2010avfa.apps.googleusercontent.com";


/**
 * Results page
 *
 * Proptypes
 * @param {list} prereqs list of dictionaries, should contain a list of classes
 * @param {list} ocw_links list of dictionaries, should contain a list of classes                      
 */


const Results = (props) => {

  if (!props.userId) {
    return (
    <>
      <div className="u-textCenter">
        <h2>Please login first:</h2>

        {props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
        )}
      </div>
    </>
    )
  }


  const [stories, setStories] = useState([]);
  const [storiesOther, setStoriesOther] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isCourseDeleted, setIsCourseDeleted] = useState(false);

  // useEffect(() => {
  //   document.title = "Profile Page";
  //   get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  // }, []);

  useEffect(() => {
    get("/api/savedcourses").then((storyObjs) => {
      get("/api/topscoreclasses").then((storyObjOther)=>{
        setStories(storyObjs);
        setStoriesOther(storyObjOther.filter(a=>!(stories.filter(course=>course.course_id===a.course_id).length>0)))
        setLoading(false);
        })
        setIsCourseDeleted(false);  
      })}, [isCourseDeleted])

  useEffect(()=>{
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
          remove_course_function={setIsCourseDeleted}
          rec_classes={stories}
          other_classes={storiesOther}
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









  


