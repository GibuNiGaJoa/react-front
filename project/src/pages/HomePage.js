import React from 'react';
import Navbar from '../components/Navbar';
import BannerRandom from '../components/BannerRandom';
import RepresentDonate from '../components/RepresentDonate';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <BannerRandom />
            <RepresentDonate />
        </div>
            
    )
}

export default HomePage;