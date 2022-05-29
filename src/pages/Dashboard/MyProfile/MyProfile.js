import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import ProfileUpdateModal from '../ProfileUpdateModal/ProfileUpdateModal'

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [openModal, setOpenModal] = useState(false);

    // const { data: user, isLoading, refetch } = useQuery('user', () => fetch('https://mighty-beach-10745.herokuapp.com/user', {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));

    const { data: dbuser, isLoading, refetch } = useQuery(['user', user?.email], () => fetch(`https://mighty-beach-10745.herokuapp.com/user/${user?.email}`).then(res => res.json()))

    if (dbuser) {
        console.log(dbuser);
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div className="flex mx-auto px-12 py-6">
            <section className="">

                <div className="avatar">
                    <h1 className='text-primary text-2xl text-bold m-4'>My Profile</h1>
                    <div className="w-24 rounded-xl m-4">
                        <img src={dbuser?.img || "https://api.lorem.space/image/face?hash=64318"} />
                    </div>
                </div>
                <form className="flex flex-col sm:max-w-sm md:w-[300px] lg:w-[350px]">
                    <input type="text" value={user?.displayName} className="input w-full input-bordered " readOnly />
                    <input type="email" value={user?.email} className="input my-3 w-full input-bordered " readOnly />
                    <input type="text" placeholder='Date of birth' name="age" value={dbuser?.birthDay} className="input w-full mb-3 input-bordered" readOnly />
                    <input type="text" placeholder='Your University / College' name="institute" value={dbuser.institutte} className="input w-full input-bordered" readOnly />
                    <textarea name="presentAddress" placeholder="Present Address" className="textarea textarea-bordered my-3" value={dbuser.presentAddress} readOnly></textarea>
                    <textarea name="parmanentAddress" placeholder="Permanent Address" className="textarea textarea-bordered" value={dbuser.parmanentAddress} readOnly></textarea>
                </form>
                <label type="submit" value="Update" onClick={() => setOpenModal(true)} for="profileModal" className="btn btn-primary mt-3">Edit Profile</label>
                {
                    openModal && <ProfileUpdateModal refetch={refetch} setOpenModal={setOpenModal} />
                }
            </section>

        </div>
    );
};

export default MyProfile;