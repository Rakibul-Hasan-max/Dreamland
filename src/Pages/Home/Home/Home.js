import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import ReviewShow from '../ReviewShow/ReviewShow';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Apartments></Apartments>
            <ReviewShow></ReviewShow>
            <Footer></Footer>
        </div>
    );
};

export default Home;