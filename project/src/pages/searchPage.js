import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';

const SearchPage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <SearchForm />
            <Footer />
        </div>
    )
}

export default SearchPage;