import React from 'react';
import Navbar from '../components/Navbar';
import BannerSlider from '../components/BannerSlider';
import TagContainer from '../components/TagContainer';
import BannerTogether from '../components/BannerTogether';
import { FullPage, Slide } from 'react-full-page';
import "../pages/HomePage.css"

const HomePage = () => {
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
                    <h2>가장 쉬운 나눔</h2>
                </Slide>
            </FullPage>   
    )
}

export default HomePage;