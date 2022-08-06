import React from 'react';
import Navbar from '../components/Navbar';
import BannerSlider from '../components/BannerSlider';
import TagContainer from '../components/TagContainer';
import BannerTogether from '../components/BannerTogether';
import BannerDonate from '../components/BannerDonate';
import Footer from '../components/Footer'
import { FullPage, Slide } from 'react-full-page';
import "../pages/HomePage.css"
import NavbarV2 from '../components/NavbarV2';

const HomePageV2 = () => {
    

    return (
            <FullPage controls controlsProps={{ className: "slide-navigation" }} >
                <Slide>
                    <NavbarV2 />
                    <BannerSlider />
                    <TagContainer />
                    <BannerTogether />
                </Slide>
                <Slide>
                    <NavbarV2 />
                    <BannerDonate />
                </Slide>
                <Slide>
                    
                    <NavbarV2 />
                    <Footer />
                </Slide>
            </FullPage>

    )
}

export default HomePageV2;