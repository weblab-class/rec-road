import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "177936818185-slf1osqsnja2cdhmfm1g8qlj8qk0f4f9.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="u-inlineBlock"><Link to="/" className="NavBar-title">Rec Road</Link></div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>

        {props.userId ? (
          <Link to={`/profile/${props.userId}`} className="NavBar-link">
            Profile
          </Link>
        ) : (
          <Link to='/login/' className="NavBar-link">
            Profile
          </Link>
        )}

        {props.userId ? (<Link to="/results/" className="NavBar-link">
          Results
        </Link>) : (
          <Link to="/login/" className="NavBar-link">
            Results
          </Link> 
        )}
        
        {props.userId ? (<Link to="/friends/" className="NavBar-link">
          Friends
        </Link>) : (
          <Link to="/login/" className="NavBar-link">
            Friends
          </Link>
        )}
        {props.userId ? (
          <Link to="/logout/" className="NavBar-link">
            Log out
          </Link>
        ) : (
          <Link to="/login/" className="NavBar-link">
            Log in
          </Link>
        )}
        {props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;