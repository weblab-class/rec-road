import {useEffect, useState} from 'react'
import axios from 'axios'

const useCourseSearch = (query, pageNumber) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [courses, setCourses] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        let cancel
        axios(
            {
               method:"GET",
               url: 'http://openlibrary.org/search.json',
               params: {q:query, page:pageNumber} , 
               cancelToken: new axios.CancelToken(c => cancel=c)
            }
        ).then(res =>{
            setCourses(prevCourses => {
                return [...new Set([...prevCourses, res.data.docs.map(b => b.title)])]
            })
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])
    return {loading, error, courses, hasMore}
}

export default useCourseSearch