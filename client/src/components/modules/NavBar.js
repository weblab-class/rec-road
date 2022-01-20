import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "876948856050-m02nj91vv8in97n334u1ldug2010avfa.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container Navbar-row Navbar-padding">
      <div className="u-inlineBlock u-flex-alignLeft"><Link to="/" className="NavBar-title">Rec Road</Link></div>
      <div className="NavBar-linkContainer u-inlineBlock u-flex-alignRight">
        <Link to="/" className="NavBar-link">
          Home
        </Link>

        {/* {props.userId ? (
          <Link to={`/profile/${props.userId}`} className="NavBar-link">
            Profile
          </Link>
        ) : (
          <Link to='/login/' className="NavBar-link">
            Profile
          </Link>
        )} */}

        {props.userId ? (<Link to="/results/" className="NavBar-link">
          Saved
        </Link>) : (
          <Link to="/login/" className="NavBar-link">
            Saved
          </Link> 
        )}
        {/* {props.userId ? (
          <Link to="/history/" className="NavBar-link">
            History
          </Link>
        ) : (
          <Link to="/history/" className="NavBar-link">
            History
          </Link>
        )}
        {props.userId ? (<Link to="/friends/" className="NavBar-link">
          Friends
        </Link>) : (
          <Link to="/login/" className="NavBar-link">
            Friends
          </Link>
        )} */}
        
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