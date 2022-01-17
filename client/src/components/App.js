import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "./modules/NavBar.js";
import PageNotFound from "./pages/NotFound.js";
//import Skeleton from "./pages/Skeleton.js";
import Friends from "./pages/Friends.js";
import Feed from "./pages/Feed.js";
import Profile from "./pages/Profile.js";
import Results from "./pages/Results.js";
import Login from "./pages/Login.js";
import add_classes from "./add_classes.js";
//import {addCourse_indexCourse_scoreCourse} from "./db_catchall";
import "../utilities.css";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);
  // // useEffect(() =>{

  // // post("/api/deletedefaultscores")
  // // post("/api/deletecourses")
  // // add_classes()
  // // //addCourse_indexCourse_scoreCourse()
  // // }, [])
  //post("/api/deletecourses")
  //add_classes()

  useEffect(() => {
    document.title = "Rec Road";
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    console.log(`User token is ${userToken}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      console.log(`User ID is ${user._id}`);
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />

      <div>
        <Router>
          <Feed path="/" userId={userId} />
          <Profile path="/profile:userId" />
          <Results path="/results/" userId={userId} results={["hi", "hello", "howdy"]} />
          <Friends path="/friends/" userIdd={userId} />
          <Login
            path="/login/"
            userId={userId}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
          <History path="/history/" userId={userId}></History>
          <PageNotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
