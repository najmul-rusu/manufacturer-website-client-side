import React from 'react';
import ReviewData from '../../hooks/ReviewData';
import ShowReview from './ShowReview';

const AllReview = () => {
    const [reviews] = ReviewData()
    return (
        <div>
            <h3 className='mt-10 text-3xl font-bold'>All Reviews</h3>
            

            <div className='grid grid-cols-3'>
            {
                reviews.map(review => <ShowReview key={review.id} review={review}></ShowReview>)
            }
            </div>

        </div>
    );
};
export default AllReview;