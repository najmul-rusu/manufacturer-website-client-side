import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

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
            {/* <form className="shadow-xl w-96 p-4 rounded-lg">
                <input type="text" className="input w-full input-bordered" value={data?.name} />
                {/* <input type="email" className="input w-full input-bordered my-3" value={data?.email} />
                <label htmlFor="rating" className="label label-text text-accent">Select your rating </label>
                <select name="rating" className="input w-full input-bordered">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea name="feedback" className="textarea textarea-bordered w-full my-3" placeholder="Write your feedback"></textarea> */}
            {/* <input type="submit" className="uppercase w-full text-white btn btn-accent" value="Post Review" /> */}
            {/* </form>  */}
            <div>
                <h2 className="text-2xl">Add a New Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div> */}


                    <input type="text" className="input w-full input-bordered" value={data?.name} />
                    <input type="email" className="input w-full input-bordered my-3" value={data?.email} />


                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>

        </div>
    );
};

export default AddNewReview;