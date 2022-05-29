import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

import useToken from '../../../../src/hooks/useToken';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    //user info save krbo
    const [token] = useToken(user || gUser);





    let signInError;
    if (error || gError || updating) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small> </p>
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('updated');
        // navigate('/home')
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (gUser || user) {
        console.log(gUser || user)
    }

    if (token) {
        navigate('/home');
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* form */}


                        {/* name */}
                        <div className="form-control w-full max-w-xs">

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
                                    },

                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}



                            </label>
                        </div>











                        {/* email */}
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
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>







                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or Longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>

                        {signInError}


                        <input className='btn  w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>

                    <p><small>Already Have an account? <Link className='text-primary' to="/login">Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;