import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "./modules/NavBar.js";
import PageNotFound from "./pages/NotFound.js";
//import Skeleton from "./pages/Skeleton.js";
import Friends from "./pages/Friends.js"
import Feed from "./pages/Feed.js";
import Profile from "./pages/Profile.js";
import Results from "./pages/Results.js";
import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <NavBar>
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        userId={userId}
      </NavBar>
      <div>
        <Router>
          <Feed path="/" userId={userId} />
          <Profile path="/profile:userID"/>
          <Results path="/results/" userID={userId}/>
          <Friends path="/friends/" userID={userId}/>
          <PageNotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
