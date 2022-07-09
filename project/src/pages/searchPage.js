import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SearchPage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <p>검색페이지</p>
            <Footer />
        </div>
    )
}

export default SearchPage;