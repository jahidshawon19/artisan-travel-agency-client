import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import LoadDestination from './LoadDestination/LoadDestination';
import Poster from './Poster/Poster';
import Testimonial from './Testimonial/Testimonial';

const TourHome = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <LoadDestination></LoadDestination>
            <Poster></Poster>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Footer></Footer>
         
        </>
    );
};

export default TourHome;