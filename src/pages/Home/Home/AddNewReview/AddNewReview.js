import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../../firebase.init';

const AddNewReview = ({ review, setReview, refetch }) => {
    const { _id, name } = review;
    const [user, loading, error] = useAuthState(auth);

    const handleReview = event => {
        event.preventDefault();
        // const content = event.target.content.value;
        // console.log(_id, name, slot);


        const reviews = {
            reviewId: _id,
            review: name,
            customer: user.email,
            customerName: user.displayName,
            content: event.target.content.value,
            rating: event.target.rating.value
        }

        fetch('https://shielded-retreat-18256.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                refetch();
                setReview(null);
            });
    }
    return (
        <div className="add-item mx-auto mx-96 mt-5 mb-5">

            <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-primary text-xl font-bold text-center">
                    {" "}
                    Please Add Review
                </h1>
                <form onSubmit={handleReview} className="">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input type="text" disabled value={user?.displayName || ''} name="name" placeholder="Your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"


                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Rating
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="rating"
                            type="text"
                            placeholder="Your Rating"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Picture
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Photo Url"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Review
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="textarea"
                            type="textarea"
                            placeholder="Type Here"

                        />
                    </div>

                    <div className="flex items-center justify-between">
                        

                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewReview;