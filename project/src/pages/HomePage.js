import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BannerSlider from '../components/BannerSlider';
import TagContainer from '../components/TagContainer';
import BannerTogether from '../components/BannerTogether';
import BannerDonate from '../components/BannerDonate';
import Footer from '../components/Footer'
import { FullPage, Slide } from 'react-full-page';
import "../pages/HomePage.css"
import LastPageForm from '../components/LastPageForm';
// import NavbarV2 from '../components/NavbarV2';

const HomePage = (props) => {
    
    return (
            <FullPage controls controlsProps={{ className: "slide-navigation" }} >
                <Slide>
                    <Navbar />
                    <BannerSlider />
                    <TagContainer />
                    <BannerTogether />
                </Slide>
                <Slide>
                    <Navbar />
                    <BannerDonate />
                </Slide>
                <Slide>
                    <Navbar />
                    <LastPageForm />
                    <Footer />
                </Slide>
            </FullPage>

    )
}

export default HomePage;