import React, { useEffect, useState } from 'react';

import Review from '../Home/Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })


    return (

        <div className='px-12'>
            <div className='lg:py-12 sm:py-0'>
                <div className='text-center'>
                    <h2 className='text-3xl py-2 text-primary font-bold'>Customer Review</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;