import React from 'react';
import banner from '../../../../Images/back-banner.jpg'
const Banner = () => {
    return (


        <div style={{
            background: `url(${banner}) `
        }}
        className="hero min-h-screen" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">MF Action Gimbal</h1>
                    <p className="mb-5">All of the action, non of the shakes</p>
                    <p className="mb-5">With 3-Axis there is more flexibility in the angles you shoot. 320° Pan/Tilt rotation lets you get the desired angle with smooth footage.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>


    );
};

export default Banner;