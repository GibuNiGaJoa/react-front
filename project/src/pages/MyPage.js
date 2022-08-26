import React from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MyPageForm from "../components/MyPageForm";


const MyPage = () => {

    return(
        <div className='main-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <MyPageForm />
            <Footer />
        </div>
    )
}

export default MyPage;