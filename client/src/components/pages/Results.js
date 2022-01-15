import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Results.css";

const GOOGLE_CLIENT_ID = "177936818185-slf1osqsnja2cdhmfm1g8qlj8qk0f4f9.apps.googleusercontent.com";

const Results = (props) => {

  return (

    {props.results.map(result => (<div>{result}</div>))}
    <ComponentHead>
      <SingleStory
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        content={props.content}
      />

    </div>


  );
};

export default Results;



