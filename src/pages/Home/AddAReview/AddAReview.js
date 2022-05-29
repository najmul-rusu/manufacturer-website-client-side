import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const AddAReview = () => {
    // const [user] = useAuthState(auth);

    // //load user
    // const { data, isLoading } = useQuery('user', () => fetch(`http://localhost:5000/user/${user?.email}`, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem("accessToken")}`
    //     }
    // }).then(res => res.json()))

    // const handleReview = e => {
    //     e.preventDefault();
    //     const name = data?.name;
    //     const rating = e.target.rating.value;
    //     const content = e.target.content.value;

    //     const review = {
    //         name,
    //         rating,
    //         content
    //     }
    //     fetch('http://localhost:5000/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem("accessToken")}`
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 e.target.reset();
    //                 toast.success("Thanks for your feedback!")
    //             }
    //         })



    // }
    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        // <div className="flex justify-center h-[60vh] items-center">
        //     <form className="shadow-xl w-96 p-4 rounded-lg" onSubmit={handleReview}>
        //         <input type="text" className="input w-full input-bordered" value={data?.name} />
        //         {/* <input type="email" className="input w-full input-bordered my-3" value={data?.email} /> */}
        //         <label htmlFor="rating" className="label label-text text-accent">Select your rating </label>
        //         <select name="rating" className="input w-full input-bordered">
        //             <option value="1">1</option>
        //             <option value="2">2</option>
        //             <option value="3">3</option>
        //             <option value="4">4</option>
        //             <option value="5">5</option>
        //         </select>
        //         <textarea name="content" className="textarea textarea-bordered w-full my-3" placeholder="Write your feedback"></textarea>
        //         <input type="submit" className="uppercase w-full text-white btn btn-accent" value="Post Review" />
        //     </form>
        // </div>
        <div>
            <h1>Hello from add review</h1>
        </div>
    );
};

export default AddAReview;