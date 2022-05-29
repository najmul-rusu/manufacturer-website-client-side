import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const AddNewReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const [user] = useAuthState(auth);

    // //load user
    const { data, isLoading } = useQuery('user', () => fetch(`https://mighty-beach-10745.herokuapp.com/reviews`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    // const handleReview = e => {
    //     e.preventDefault();
    //     const name = data?.name;
    //     const email = data?.email;
    //     const img = data?.img;
    //     const rating = e.target.rating.value;
    //     const feedback = e.target.feedback.value;

    //     const review = {
    //         name,
    //         email,
    //         img,
    //         rating,
    //         feedback
    //     }
    //     fetch('https://mighty-beach-10745.herokuapp.com/reviews', {
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

    const onSubmit = e => {

        const doctor = {
            name: data.name,
            email: data.email,


        }

        fetch('https://mighty-beach-10745.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Doctor added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the doctor');
                }
            })
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="flex justify-center h-[60vh] items-center">
            
            <div>
                <h2 className="text-2xl">Add a New Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" className="input w-full input-bordered" value={data?.name} />
                    <input type="email" className="input w-full input-bordered my-3" value={data?.email} />

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>

        </div>
    );
};

export default AddNewReview;