import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SuggestionPage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <p>제안하기 페이지</p>
            <Footer />
        </div>
    )
}

export default SuggestionPage;