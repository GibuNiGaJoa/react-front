import React from 'react';
import Navbar from '../components/Navbar';
import TogetherAct from '../components/TogetherAct';

const TogetherActPage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <TogetherAct />

        </div>
    )
}

export default TogetherActPage;