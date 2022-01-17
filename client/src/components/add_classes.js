import React, {useState, useEffect} from "react"
import { post } from "../utilities";
//import {classData} from "./full"
import axios from  'axios'



const add_classes = ()  => {
    const [courses, setCourses] = useState({data:[5,4,3]})
    const [count, setCount] = useState(0)
    
    useEffect(() =>{
        let index_arr = []
        let score_arr = []
        setCount(count+1)
        //console.log(courses.data[0])
        //console.log(count)
        if (count === 1) {
        for (let i = 0; i < courses.data.length; i++) {
            index_arr.push(courses.data[i].subject_id)
            score_arr.push(courses.data[i].rating/7.0)
            console.log(index_arr)
            const body = {course_id: courses.data[i].subject_id,
                course_name: courses.data[i].title,
                description: courses.data[i].description,
                hours: courses.data[i].out_of_class_hours + courses.data[i].in_class_hours,
                credits: courses.data[i].total_units,
                eval: courses.data[i].rating}

            //post('/api/course', body)
            //console.log(body.course_id)
          }
          const body = {all_course_id: index_arr}
          post('/api/courseindices', body)
          const body2 = {all_scores: score_arr}
          post('/api/defaultscores', body2)
        }
    }, [courses])

    useEffect(() => {
        axios(
            {
               method:"GET",
               url: 'https://fireroad-dev.mit.edu/courses/all',
               params: {full:true} , 
            }
        ).then((res) =>{
            setCourses(res)
        })
    }, [])
    

    
}

export default add_classes