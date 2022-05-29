import React from 'react';
import SectionTitle from '../../components/Title/SectionTitle';
import ReviewData from '../../hooks/ReviewData';
import ShowReview from './ShowReview';

const Review = () => {
    const [reviews] = ReviewData()
    return (
        <div>
            <SectionTitle>Customer Reviews</SectionTitle>
            <div>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    {
                        reviews.map(review => <ShowReview
                            review={review}
                            key={review._id}
                        ></ShowReview>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Review;