import React from 'react';
import Banner from '../../components/HomeComponents/Banner';
import CallToAction from '../../components/HomeComponents/CallToAction';
import HomeParts from '../../components/HomeComponents/HomeParts';
import Slider from '../../components/HomeComponents/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Banner/>
            <CallToAction/>
            <HomeParts/>
        </div>
    );
};

export default Home;