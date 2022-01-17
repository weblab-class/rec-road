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
const UserScores = require("./models/userScores");

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

router.post("/updateuserscores", auth.ensureLoggedIn, (req, res) => {
  const filter = {user_id:req.user._id}
  const options = { upsert: true };
  const updateDoc = {
    user_id: req.user._id,
    allScores: req.body.content
  }
  UserScores.updateOne(filter, updateDoc, options).then((course) => res.send(course))
})

router.post("/deletedefaultscores", (req, res) => {
  DefaultScores.deleteMany({}).then((status) => console.log(status))
})

router.post("/deletecourses", (req, res) => {
  Course.deleteMany({}).then((status) => console.log(status))
})

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
  Course.find({}).then((courses) => {
    console.log(courses.length)
    res.send(courses)});
});


router.get("/courseindices", (req, res) => {
  // empty selector means get all documents
  CourseIndices.find({}).then((index) => {
    console.log(index[0].all_course_id.length)
    res.send(index)});
});

router.get("/defaultscores", (req, res) => {
  // empty selector means get all documents
  DefaultScores.find({}).then((score) => {
    console.log(score[0].all_scores.length)
    res.send(score)});
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

router.get("/querycourses", (req, res) => {
  Courses.find({course_id: req.query.course_id}).then((course) => {
    res.send(course)
  })

})



router.get("/stories", (req, res) => {
  // empty selector means get all documents
  
  Story.find({}).then((stories) => {
  console.log(typeof stories)
  res.send(stories)});

});

router.get("/topfiveindices", (req, res) => {

  function add(accumulator, a) {
    return accumulator + a;
  }
  const cumulativeSum = (sum => value => sum += value)(0);


  const selectTopFiveIndices = (scores) => {
    console.log(scores.length)
    //console.log(scores.slice(0,30))
    const scores_copy = scores.slice()
    for (let i=0; i < scores.length; i++){
      if (scores_copy[i]===null){
        scores_copy[i] = 0.5
      }
    }
    //console.log(scores_copy.slice(0,30))
    //console.log(scores_copy.reduce(add, 0))
    const a_sum = scores_copy.reduce(add, 0)

    const probabilities = scores_copy.map(( a) => (a/a_sum))
    const cumsum_prob = probabilities.map(cumulativeSum)
    
    //console.log(cumsum_prob.slice(0, 20))
    //console.log(cumsum_prob)
    
    const top_idx = []

    loop1:
    for (let step=0; step<5; step++){
      let val_check = Math.random()
      //console.log(val_check)
      let idx = 0
      loop2:
      for (let i=0; i < cumsum_prob.length; i++){
        //console.log(val_check)
        //console.log(cumsum_prob[i])
        if (cumsum_prob[i] > val_check){
          top_idx.push(idx)
          break loop2
        }
        idx = idx + 1
        //console.log(idx)
      }
    }
    //console.log(top_idx)
    return top_idx
  }
  const indices_to_classes = (indices) =>{
    const class_id = indices.map()
  }

  let r1;
  DefaultScores.find({}).then((scores) => {
    //console.log(scores)
    const top_indices = selectTopFiveIndices(scores[0].all_scores)
    //console.log(top_indices)
    //console.log(tyopeof top_indices)
    r1 = top_indices
    return top_indices
  }).then((top_indices) => {
    //console.log('here')

    res.send( top_indices)
  })
  //   return CourseIndices.find({})
  // }).then((input) =>{
  //   return r1.map(a=>{
  //     input[0][a]
  //   })

  // }).then((course_ids) => {
  //   const all_courses = []
  //   for (let i=0; i<course_ids.length; i++){
  //    all_courses.push(Course.find({course_id:course_ids[i]}))
  //   }
  //   return all_courses
  // }).then((all_courses)=>
  //   {res.send(all_courses)}
  // )


  // Story.find({}).then((stories)=>{
  //   const compare (a, b) =>{
  //     if ( a.s < b.last_nom ){
  //       return -1;
  //     }
  //     if ( a.last_nom > b.last_nom ){
  //       return 1;
  //     }
  //     return 0;

  //   }
  //   const storiesSorted = stories.slice().sort(compare)
  //   const scoreFilter = (story) =>{

  //   }
  //   res.send(stories.filter(scoreFilter))
  // })
})

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;