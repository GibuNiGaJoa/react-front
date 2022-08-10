import React from 'react';
import Navbar from '../components/Navbar';
import TogetherDonateContent from '../components/TogetherDonateContent';
import Footer from '../components/Footer';

const TogetherDonatePage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <TogetherDonateContent />
            <Footer />
        </div>
    )
}

export default TogetherDonatePage;