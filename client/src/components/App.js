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
import History from "./pages/History.js";
import add_classes from "./add_classes.js";
//import {addCourse_indexCourse_scoreCourse} from "./db_catchall";
import "../utilities.css";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  // const [scores, setScores] = useState([]);

  useEffect(() =>{
    if (userId) {
      
      get("/api/existsuserscores").then((existence_obj)=>{
        const existence = existence_obj.existence
        if (!existence) {
          post("/api/postdefaultscores").then((scores) =>{
            //pass
          })
        } 
        // else {
        //   get("/api/userscores").then(scores => {
        //   })
        // }
      })
    }
  }, [userId])

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);
  // // useEffect(() =>{


  //post("/api/deletealluserscores")
  //post("/api/deletedefaultscores")
  // // post("/api/deletecourses")
  // // add_classes()
  // // //addCourse_indexCourse_scoreCourse()
  // // }, [])
  //post("/api/deletecourses")
  //add_classes()
  //post("/api/deletealladjacencies")
  

  useEffect(() => {
    document.title = "RecRoad";
  }, []);

  const handleLogin = (res) => {
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
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
          <Profile path="/profile/:userId" handleLogin={handleLogin}
            handleLogout={handleLogout}/>
          <Results path="/results/" userId={userId} results={["hi", "hello", "howdy"]} handleLogin={handleLogin}
            handleLogout={handleLogout}/>
          <Friends path="/friends/" userId={userId} />
          <Login
            path="/login/"
            userId={userId}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            redirectPage="/"
          />
          <History path="/history/" userId={userId} handleLogin={handleLogin}
            handleLogout={handleLogout}></History>
          <PageNotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
