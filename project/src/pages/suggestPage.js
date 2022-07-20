import React from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// suggest에서 회원번호 매개변수로 받아서 이동하도록 해야함

const SuggestPage = () => {

    return(
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <Footer />
        </div>
    )
}

export default SuggestPage;