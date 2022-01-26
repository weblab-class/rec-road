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
const Adjacencies = require("./models/adjacencies")
const LikesDislikes = require("./models/savedLikesDislikes")
const SavedCourse = require("./models/savedCourse")

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

router.post("/removesavedcourse", auth.ensureLoggedIn, (req, res) => {
  SavedCourse.deleteOne({user_id:req.user._id, course_id:req.body.course_id}).then((response)=>{
    res.send(response)
  })
}) 

router.get('/alliinteractedcourses', (req, res)=>{
  const iterateCourses = async (courses)=>{
    const course_full_list = []
    for (let i=0; i < courses.length; i++){
      const course_full = await Course.findOne({course_id:courses[i].course_id})
      course_full_list.push(course_full)
    }
    return course_full_list
  }
  LikesDislikes.find({user_id:req.user._id}).then((all_interacted_courses)=>{
    const courses_full = iterateCourses(all_interacted_courses)
    return courses_full
  }).then((response)=>{
    res.send(response)
  })
})

router.get('/allsavedcourses', (req, res)=>{
  SavedCourse.find({}).then(course=>{
    res.send(course)
  })
})

router.get('/savedcourses', auth.ensureLoggedIn, (req, res)=>{
  SavedCourse.find({user_id:req.user._id}).then(course=>{
    res.send(course)
  })
})

router.post('/savecourse', auth.ensureLoggedIn, (req, res)=>{
  Course.findOne({course_id: req.body.course_id}).then(course=>{
    SavedCourse.updateOne({course_id: req.query.course_id, user_id: req.user._id}, 
      {user_id:  req.user._id,
        course_id: course.course_id,
        course_name: course.course_name,
        description: course.description,
        hours: course.hours,
        credits: course.credits,
        eval: course.eval},
      {upsert:true}).then(course=>{
        res.send(course)
      })
  })
  
})

router.get("/topscoreclasses", auth.ensureLoggedIn, (req, res)=>{
  function top10(arr) {
    var results = [[0,Number.MAX_VALUE],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
  
    for (var i=0; i<arr.length; i++) {
      // search from back to front
      for (var j=9; j>=0; j--) {
         if (arr[i] <= results[j][1]) {
           if (j==9)
             break;
           results.splice(j+1, 0, [i, arr[i]]);
           results.pop();
           break;
        }
      }
    }
    return results.slice(1);
  }

  const search10course = async (coursekeys) => {
    const course_list = [];
    for (let i=0; i < 10; i++){
      const list_item = await Course.findOne({course_id:coursekeys[i]});
      course_list.push(list_item);
    };
    return course_list
  };
  UserScores.findOne({user_id:req.user._id}).then((user_scores)=>{
    const top10scores = top10(user_scores.all_scores);
    const returntop10 = top10scores.map(a=>a[0]);
    CourseIndices.findOne({}).then((all_indices)=>{
      const actual_top_10 = returntop10.map(a=>all_indices.all_course_id[a]);
      return search10course(actual_top_10);
    }).then(bestcourses=>{
      res.send(bestcourses)
    
  })
  })
})

router.get("/getalllikedislike", (req, res)=>{
  LikesDislikes.find({})
  .then((story) => res.send(story));
})


router.post("/likeordislike", auth.ensureLoggedIn, (req, res)=>{
  const newLikeDislike = {
    course_id: req.body.course_id,
    user_id: req.user._id,
    course_like_neutral_dislike: req.body.course_like_neutral_dislike
  }
  LikesDislikes.updateOne({course_id: req.body.course_id, user_id:req.user._id}, 
                            newLikeDislike, {upsert:true}).then((story) => res.send(story));
})

router.get("/likeordislike", auth.ensureLoggedIn, (req, res)=>{
  LikesDislikes.find({course_id:req.query.course_id, user_id:req.user._id})
  .then((story) => res.send(story));
})

router.post("/postdefaultscores", (req, res) =>{
    const userscores = new UserScores({
      user_id: req.user._id,
      all_scores: []
    })
    DefaultScores.find({}).then((defaultscores) =>{
      userscores.all_scores = defaultscores[0].all_scores.map(a=>{
        let x = a
        if (!a){
          x = 0.5
        }
        return x/10.
      })
      userscores.save().then((scores) => res.send(scores))
    })
})
router.get("/userscores", auth.ensureLoggedIn, (req, res) => {
  UserScores.find({user_id:req.user._id}).then(scores => {
    res.send(scores)
  })
})

router.post("/deletealladjacencies", (req, res) =>{
  Adjacencies.deleteMany({}).then((status) => res.send(status))
})

router.get("/alladjlists", (req, res) =>{
  Adjacencies.find({}).then(output=>{
    res.send(output)
  })
})
router.get("/alluserscores", (req,res)=>{
  UserScores.find({}).then(output=>{
    res.send(output)
  })
})
router.post("/deletealluserscores", (req, res)=>{
  UserScores.deleteMany({}).then((status)=>res.send(status))
})

router.post("/adjacencylists", (req, res) => {
    
    const newList = new Adjacencies({
      course_id: req.body.course_id,
      course_adjacencies: req.body.course_adjacencies
    })
    newList.save().then(output=>{
      res.send(output)
    })
  
})

//router.post()

router.get("/existsuserscores", auth.ensureLoggedIn, (req, res) => {
  UserScores.countDocuments({user_id:req.user._id}).then((count) =>{
    res.send({existence:count})
  })
})



router.post("/updateuserscores", auth.ensureLoggedIn, (req, res) => {
  // req.body.vote should consist of a number, either 0.0 or 1.0 
  // 0 being downvote, 1 being upvote
  // req.body.course_id should be the course id
  const filter = {user_id:req.user._id}
  
  UserScores.find(filter).then((old_doc)=>{
    const new_scores = [...old_doc[0].all_scores]
    CourseIndices.find({}).then((all_course_indices)=>{
      const all_indices = all_course_indices[0].all_course_id
      Adjacencies.findOne({course_id:req.body.course_id}).then((base_course)=>{
          
          const all_neighbors = base_course.course_adjacencies.concat([req.body.course_id])
          for (let i=0; i < all_neighbors.length; i++){
            const actual_index = all_indices.indexOf(all_neighbors[i])
            new_scores[actual_index] = (new_scores[actual_index] + req.body.vote)/(new_scores[actual_index]+1.00)
          }
          const updateDoc = {
            user_id: req.user._id,
            all_scores:new_scores
          }
          UserScores.updateOne(filter, updateDoc).then((updated_doc)=>res.send(updated_doc))
        })
      })
    })
  
})

router.post("/deletedefaultscores", (req, res) => {
  DefaultScores.deleteMany({}).then((status) => res.send(status))
})

router.post("/deletecourses", (req, res) => {
  Course.deleteMany({}).then((status) => res.send(status))
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
    res.send(courses)});
});


router.get("/courseindices", (req, res) => {
  // empty selector means get all documents
  CourseIndices.find({}).then((index) => {
    res.send(index)});
});

router.get("/defaultscores", (req, res) => {
  // empty selector means get all documents
  DefaultScores.find({}).then((score) => {
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
  res.send(stories)});

});


router.get("/topfivecourses", (req, res) => {

  function add(accumulator, a) {
    return accumulator + a;
  }
  const cumulativeSum = (sum => value => sum += value)(0);


  const selectTopFiveIndices = (scores) => {
    const scores_copy = scores.slice()
    for (let i=0; i < scores.length; i++){
      if (scores_copy[i]===null){
        scores_copy[i] = 0.5
      }
    }
    const a_sum = scores_copy.reduce(add, 0)

    const probabilities = scores_copy.map(( a) => (a/a_sum))
    const cumsum_prob = probabilities.map(cumulativeSum)
    
    
    const top_idx = []

    loop1:
    for (let step=0; step<5; step++){
      let val_check = Math.random()
      let idx = 0
      loop2:
      for (let i=0; i < cumsum_prob.length; i++){

        if (cumsum_prob[i] > val_check){
          top_idx.push(idx)
          break loop2
        }
        idx = idx + 1
      }
    }
    return top_idx
  }

  const all_courses = [];

  let USERDB = DefaultScores;
  let filter = {};
  if(!req.user){
    USERDB = DefaultScores
    filter = {}
  } else{
    USERDB = UserScores
    filter = {user_id:req.user._id}
  }
 
  USERDB.find(filter).then((scores) => {
    const top_indices = selectTopFiveIndices(scores[0].all_scores)
    return top_indices
  }).then(top_indices => {
    CourseIndices.find({}).then((indices) =>{
      console.log(top_indices.map((a)=>
        indices[0].all_course_id[a]
      ))
      return top_indices.map(a=>indices[0].all_course_id[a])
    }).then((course_ids) =>{
        Course.find({course_id:course_ids[0]}).then(course_0 => {
          all_courses.push(course_0[0])
          Course.find({course_id:course_ids[1]}).then(course_1 =>{
            all_courses.push(course_1[0])
            Course.find({course_id:course_ids[2]}).then(course_2 =>{
              all_courses.push(course_2[0])
              Course.find({course_id:course_ids[3]}).then(course_3 =>{
                all_courses.push(course_3[0])
                Course.find({course_id:course_ids[4]}).then(course_4=>{
                  all_courses.push(course_4[0])
                  res.send(all_courses)
                })
              })
            })
          })
        })
  })
})
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


// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;