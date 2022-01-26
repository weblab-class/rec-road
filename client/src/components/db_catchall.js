/**
 * 
 * This file contains very hacky code to work with the database 
 * because I don't know how api works. 
 * fix and delete later.
 */

 const Course = require("../../../server/models/course");
 const CourseIndices = require("../../../server/models/courseIndices");
 const DefaultScores = require("../../../server/models/defaultScores");

 const addCourse_indexCourse_scoreCourse = () =>{
    

     const add_index_score = (courses) => {
        let index_arr = []
        let score_arr = []
        for (let i = 0; i < courses.data.length; i++) {
            index_arr.push(courses.data[i].subject_id)
            score_arr.push(courses.data[i].rating/7.0)
            const newCourse = new Course({course_id: courses.data[i].subject_id,
                course_name: courses.data[i].title,
                description: courses.data[i].description,
                hours: courses.data[i].out_of_class_hours + courses.data[i].in_class_hours,
                credits: courses.data[i].total_units,
                eval: courses.data[i].rating})
            newCourse.save().then((course) => {
            })
        const courseIndices = new CourseIndices({all_course_id: index_arr})
        const courseScores = new DefaultScores({all_scores: score_arr})
        courseIndices.save().then((index) => {
        })
        courseScores.save().then((index) =>{
        })
            
          }
     }
    useEffect(() => {
        axios(
            {
               method:"GET",
               url: 'https://fireroad-dev.mit.edu/courses/all',
               params: {full:true} , 
            }
        ).then((courses) =>{
            add_index_score(courses)
        })
    }, [])
 }

 export {addCourse_indexCourse_scoreCourse}