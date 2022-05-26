import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HomeReview from '../HomeReview/HomeReview';
import Tools from '../Tools/Tools';
import Footer from './../Footer/Footer';
import DownloadAppSection from './../DownloadAppSection/DownloadAppSection';
import Hiring from '../Hiring/Hiring';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinessSummary/>
            <HomeReview/>
            <DownloadAppSection/>
            <Hiring/>
            <Footer/>
        </div>
    );
};

export default Home;