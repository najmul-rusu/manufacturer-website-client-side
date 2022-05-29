import React from 'react';

const ShowReview = ({ review }) => {
    const { img, name, rating, reviewTitle } = review;
    return (
        <div>
            <div className='border border-gray-400 m-5 h-72  rounded-3xl'>
                <div className='m-10'>
                <img className='mx-auto rounded-3xl w-14 h-14 drop-shadow-lg rounded-full' src={img} alt="" />
                <h1 className='text-xl font-bold m-3'>{name}</h1>
                <p className='text-lg font-thin'>{reviewTitle}</p>
                <p className='font-bold m-2'>Rating: ( {rating} )</p>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;