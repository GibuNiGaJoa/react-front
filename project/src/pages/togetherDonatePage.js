import React from 'react';
import Navbar from '../components/Navbar';
import TogetherDonateContent from '../components/TogetherDonateContent';

const TogetherDonatePage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <TogetherDonateContent />
        </div>
    )
}

export default TogetherDonatePage;