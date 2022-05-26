import { useEffect, useState } from "react";

const ReviewData = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('review.json')
          .then(res => res.json())
          .then(data => setReviews(data))
    },[])
    return [reviews , setReviews]
}

export default ReviewData;