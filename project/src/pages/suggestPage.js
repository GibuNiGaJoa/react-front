import React from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DonateSuggestForm from "../components/DonateSuggestForm";

// suggest에서 회원번호 매개변수로 받아서 이동하도록 해야함
// 실제 제안하는 페이지

const SuggestPage = () => {

    return(
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <DonateSuggestForm />
            <Footer />
        </div>
    )
}

export default SuggestPage;