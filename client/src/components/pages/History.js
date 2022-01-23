import React, { useState, useEffect } from "react";
import "../../utilities.css";

import { get } from "../../utilities";

/**
 * Feed is a component for displaying the feed
 *
 * Proptypes
 * @param {string} userId of the user
 */

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


  useEffect(() => {
    document.title = "History";
  }, []);

  return (
    <>
      <div className="u-row-made-by-containers">
        <div className="u-result-rightbar u-hidden-text">There will be either any empty space or something else implemented here soon. </div>
        
        <div className="u-center-container u-component-body u-rounded-out-blocks">
            <ComponentHead
                content={"Voting History"}
            />
            {courses.map((class_dict) => (
              <CardBrief
                course_id={props.course_id}
                course_name={props.course_name}
                hours={props.hours}
                credits={props.credits}
              />
            ))} 
        </div>
        <div className="u-result-rightbar u-hidden-text">There will be either any empty space or something else implemented here soon. </div>
      </div>
    </>
  );

};

export default History;
