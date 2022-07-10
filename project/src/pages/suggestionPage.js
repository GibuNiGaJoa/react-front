import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SuggestForm from '../components/SuggestForm'

const SuggestionPage = () => {
    return (
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <SuggestForm />
            <Footer />
        </div>
    )
}

export default SuggestionPage;