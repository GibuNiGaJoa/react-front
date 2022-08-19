import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import TagSearch from '../components/TagSearch';

const SearchTagPage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <TagSearch />
            <Footer />
        </div>
    )
}

export default SearchTagPage;