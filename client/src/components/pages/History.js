import React, { useState, useEffect } from "react";
import "../../utilities.css";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import ComponentHead from "../modules/ComponentHead"
import CardBrief from "../modules/CardBrief"

import { get } from "../../utilities";

/**
 * Feed is a component for displaying the feed
 *
 * Proptypes
 * @param {string} userId of the user
 */
 const GOOGLE_CLIENT_ID = "876948856050-m02nj91vv8in97n334u1ldug2010avfa.apps.googleusercontent.com";


const History = (props) => {

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


//   const [stories, setStories] = useState([]);

const [courses, setCourses] = useState()
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    get('/api/alliinteractedcourses').then(response=>{
      setCourses(response)
      setLoaded(true)
    })
  })
  useEffect(() => {
    document.title = "History";
  }, []);

  if (loaded){
  return (
    <>
      <div className="u-row-made-by-containers">
        <div className="u-result-rightbar u-hidden-text">There will be either any empty space or something else implemented here soon. </div>
        
        <div className="u-center-container u-component-body u-rounded-out-blocks">
            <ComponentHead
                content={"Voting History"}
            />
            {courses.map((class_dict) => 
              <CardBrief
                course_id={class_dict.course_id}
                course_name={class_dict.course_name}
                hours={class_dict.hours}
                credits={class_dict.credits}
              />
            )} 
        </div>
        <div className="u-result-rightbar u-hidden-text">There will be either any empty space or something else implemented here soon. </div>
      </div>
    </>
  );
            }
  else {
    return (<div>
      Loading
    </div>)
  }

};

export default History;
