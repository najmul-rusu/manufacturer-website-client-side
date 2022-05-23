import React from 'react';
import Banner1 from '../../assets/images/banner-1.jpg'
import Banner2 from '../../assets/images/banner-2.jpg'
import Banner3 from '../../assets/images/banner-3.jpg'

const Banner = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className="">
                <img src={Banner1} alt="" />
            </div>
            
            <div className=""><
                img src={Banner2} alt="" />
            </div>
            
            <div className="">
                <img src={Banner3} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;