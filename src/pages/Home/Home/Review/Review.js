import React from 'react';

const Review = ({ review }) => {
    const { _id, name, content, rating } = review;
    return (
        <div className='my-4'>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-12 ">
                <div className="flex justify-center md:justify-end -mt-16 ">
                    {/* {/ <h1>Review</h1 > /} */}
                    {/* < img src={picture} alt="" /> */}
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
                    <p className="mt-2 text-gray-600">{content.slice(0, 100)}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <p className="text-xl font-medium text-secondary">Ratting: <span className='text-primary'>{rating}</span></p>
                </div>
            </div>
        </div>
    );
};


export default Review;