import React, { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import {navigate} from "@reach/router";

import { get } from "../../utilities"

import "../../utilities.css";

import "./Profile.css";


const Profile = (props) => {
  

  const [user, setUser] = useState();
  // useEffect(()=>{
  //   if (props.userId){
  //     navigate("/profile/:{props.userId}")
  // }
  // }, [props.userId])
  // useEffect(() => {
  //   document.title = "Profile Page";
  //   get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  // }, []);

  // if (!user) {
  //   return (
  //     <>
  //       <div className="u-textCenter">
  //         <h2>Please login first:</h2>
  
  //         {user ? (
  //           <GoogleLogout
  //             clientId={GOOGLE_CLIENT_ID}
  //             buttonText="Logout"
  //             onLogoutSuccess={props.handleLogout}
  //             onFailure={(err) => console.log(err)}
  //           />
  //         ) : (
  //           <GoogleLogin
  //             clientId={GOOGLE_CLIENT_ID}
  //             buttonText="Login"
  //             onSuccess={props.handleLogin}
  //             onFailure={(err) => console.log(err)}
  //           />
  //         )}
  //       </div>
  //     </>
  //     )
  // }
  return (
    <div>
      hihi
    </div>
  )
  // return (
  //   <>
  //     <div
  //       className="Profile-avatarContainer"
  //     >
  //       <div className="Profile-avatar" />
  //     </div>
  //     <h1 className="Profile-name u-textCenter">{props.userId}</h1>
  //     <hr className="Profile-linejj" />
  //     <div className="u-flex">
  //       <div className="Profile-subContainer u-textCenter">
  //         <h4 className="Profile-subTitle">About Me</h4>
  //         <div id="profile-description">
  //           I am really allergic to cats i don't know why i have a catbook
  //         </div>
  //       </div>
  //       <div className="Profile-subContainer u-textCenter">
  //       </div>
  //       <div className="Profile-subContainer u-textCenter">
  //         <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
  //         <div id="favorite-cat">corgi</div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Profile;
