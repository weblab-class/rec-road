import { useEffect, useState } from "react";
import axios from "axios";
import { get } from "../../utilities";

const useCourseSearch = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [courses, setCourses] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(()=>{
  //     setCourses([])
  // }, [query])

  useEffect(() => {
    setLoading(true);
    setError(false);
    //let cancel
    get("/api/topfivecourses")
      .then((res) => {
        setCourses((prevCourses) => {
          return [...new Set([...prevCourses, ...res])];
        });
        //setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    //return () => cancel()
  }, [pageNumber]);

  return { loading, error, courses, hasMore };
};

export default useCourseSearch;
