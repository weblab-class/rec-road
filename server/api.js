/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database


const Story = require("./models/story");
const User = require("./models/user");
const Course = require("./models/course");
const CourseIndices = require("./models/courseIndices");
const DefaultScores = require("./models/defaultScores");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const socketManager = require("./server-socket");

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.post("/defaultscores", (req, res) => {
  const newScore = new DefaultScores({
    all_scores: req.body.all_scores
  })
  newScore.save().then((score) => res.send(score));

})
router.post("/courseindices", (req, res) => {
  const newIndex = new CourseIndices({
    all_course_id: req.body.all_course_id
  })
  newIndex.save().then((course) => res.send(course));
})

router.post("/course", (req, res) => {
  const newCourse = new Course({
    course_id: req.body.course_id,
    course_name: req.body.course_name,
    description: req.body.description,
    hours: req.body.hours,
    credits: req.body.credits,
    eval: req.body.eval
  });

  newCourse.save().then((course) => res.send(course));
});
router.get("/courses", (req, res) => {
  // empty selector means get all documents
  Course.find({}).then((courses) => res.send(courses));

});
router.get("/stories", (req, res) => {
  // empty selector means get all documents
  Story.find({}).then((stories) => res.send(stories));

});

router.get("/courseindices", (req, res) => {
  // empty selector means get all documents
  CourseIndices.find({}).then((index) => res.send(index));

});
router.get("/defaultscores", (req, res) => {
  // empty selector means get all documents
  DefaultScores.find({}).then((score) => res.send(score));

});

router.get("/userparams", (req, res) => {
  res.send([{prompt:"Do you want a Hass?", value:true}, {prompt:60.0, value:30.0}])
});

router.post("/story", (req, res) => {
  const newStory = new Story({
    course_id: req.body.course_id,
    course_name: req.body.course_name,
    description: req.body.description,
    hours: req.body.hours,
    credits: req.body.credits,
    eval: req.body.eval
  });

  newStory.save().then((story) => res.send(story));
});



router.post("/login", auth.login);
router.post("/logout", auth.logout);

router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});


// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;