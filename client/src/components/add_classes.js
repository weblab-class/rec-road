import React, {useState, useEffect} from "react"
import { get, post } from "../utilities";
//import {classData} from "./full"
import axios from  'axios'

// Citations
// https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array


const add_classes = ()  => {
    const [courses, setCourses] = useState({data:[5,4,3]})
    const [count, setCount] = useState(0)
    const compute_avg_with_null = (arr) => {
        const length = arr.length
        let total_sum = 0
        let present_length = 0
        for (let i=0; i < arr.length; i++){
            if (arr[i]){
                total_sum  = total_sum + arr[i]
                present_length = present_length + 1
            }
        }
        return total_sum / present_length
    }

    const iterateOverClasses = async () => {
        let index_arr = []
        let score_arr = []
        for (let i = 0; i < courses.data.length; i++) {
            index_arr.push(courses.data[i].subject_id)
            score_arr.push(courses.data[i].rating/7.0)
            const body = {course_id: courses.data[i].subject_id,
                course_name: courses.data[i].title,
                description: courses.data[i].description,
                hours: courses.data[i].out_of_class_hours + courses.data[i].in_class_hours,
                credits: courses.data[i].total_units,
                eval: courses.data[i].rating}
            // await post('/api/adjacencylists', {course_id: courses.data[i].subject_id,
            //     course_adjacencies: courses.data[i].related_subjects}) 
            //courses.data[i].related_courses
            // get('/api/querycourses', {course_id: courses.data[i].subject_id}).then(course =>{
            //     // if (course.length == 0) {
            //await post('/api/course', body)
            //     // }
            // }).catch((err) => {
            //     post('/api/course', body)
            // })
            
            //post('/api/course', body)//.then((res)=>{
            //}
                
            //)
          }
        // const average = compute_avg_with_null(score_arr)
        // for (let i = 0; i < courses.data.length; i++){
        //     if (!score_arr[i]){
        //         score_arr[i] = average
        //     }
        // }
        const body2 = {all_scores: score_arr}
        //const body2 = {all_scores: score_arr.slice(0, Math.floor(score_arr.length/2))}
        //await post('/api/defaultscores', body2)
    }
    useEffect(() =>{
        
        setCount(count+1)
        
        const adjacencies = {}
        if (count === 1) {
            iterateOverClasses();
        
          //const body = {all_course_id: index_arr}
          //post('/api/courseindices', body)
        //const body2 = {all_scores: score_arr}
        //post('/api/defaultscores', body2)
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