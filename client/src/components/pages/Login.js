import React, { useState, useEffect, Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import {navigate} from "@reach/router";
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "876948856050-m02nj91vv8in97n334u1ldug2010avfa.apps.googleusercontent.com";


const Login = (props) => {
  
  useEffect(()=>{
    if (props.userId){
      navigate("/")
  }
  }, [props.userId])
  
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
  );
};

export default Login;
