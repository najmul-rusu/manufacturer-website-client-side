import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email, role} =user;
    const makeAdmin =()=>{
        fetch(`https://shielded-retreat-18256.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=> {
            refetch();
            toast.success('Successfully made an admin');
        })
    }
    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' &&<button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            
        </tr>
    );
};

export default UserRow;