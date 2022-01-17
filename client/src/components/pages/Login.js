import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "876948856050-td58609auad8ed94lnprebpiimkndkt2.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      <div className="u-textCenter">
      <h2>
        Please login first: 
      </h2>
      
      {userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}

      </div>
    </>
  );
};

export default Skeleton;
