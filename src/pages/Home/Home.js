import React from 'react';
import Banner from '../../components/HomeComponents/Banner';
import BusinessSummery from '../../components/HomeComponents/BusinessSummery';
import CallToAction from '../../components/HomeComponents/CallToAction';
import HomeProducts from '../../components/HomeComponents/HomeProducts';
import HomeReviews from '../../components/HomeComponents/HomeReviews';
import Slider from '../../components/HomeComponents/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Banner/>
            <CallToAction/>
            <HomeProducts/>
            <BusinessSummery/>
            <HomeReviews/>
        </div>
    );
};

export default Home;