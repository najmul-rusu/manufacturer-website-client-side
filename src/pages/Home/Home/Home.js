import React from 'react';
import Slider from '../../../components/HomeComponents/Slider'
import Banner from '../../../components/HomeComponents/Banner'
import CallToAction from '../../../components/HomeComponents/CallToAction'
import HomeProducts from '../../../components/HomeComponents/HomeProducts'
import BusinessSummery from '../../../components/HomeComponents/BusinessSummery'


const Home = () => {
    return (
        <div>
            <Slider/>
            <Banner/>
            <CallToAction/>
            <HomeProducts/>
            <BusinessSummery/>
            {/* <HomeReviews/>
            <Review/> */}
        </div>
    );
};

export default Home;