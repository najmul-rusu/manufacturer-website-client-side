import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewData from '../../hook/ReviewData';
import ShowReview from './ShowReview';

const Review = () => {
    const [reviews] = ReviewData()
    const SeeAllBtn = useNavigate()
    return (
        <div>
            <div className='grid grid-cols-3 px-12'>
                    {
                        reviews.slice(0, 3).map(review => <ShowReview
                            review={review}
                            key={review.id}
                        ></ShowReview>)
                    }
                </div>
            </div>
    );
};

export default Review;