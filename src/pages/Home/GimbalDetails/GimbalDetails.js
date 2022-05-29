import React from 'react';
import gimble01 from '../../../Images/gimble01.png'
const GimbalDetails = () => {
    return (

        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={gimble01} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">6-8 Hours Battery Life</h1>
                    <p className="py-6 text-2xl">Two 13250 batteries each with a 850mAh capacity gives the MF Action Gimbal a battery life of up to 8 hours on a single charge.</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default GimbalDetails;