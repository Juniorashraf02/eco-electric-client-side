import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HomeReview from '../HomeReview/HomeReview';
import Tools from '../Tools/Tools';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinessSummary/>
            <HomeReview/>
            <Footer/>
        </div>
    );
};

export default Home;