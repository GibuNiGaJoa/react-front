import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar'


const LoginPage = () => {
    return (
      <div className='main-container'>
        <Navbar />
        <p>로그인페이지</p>
        <LoginForm />

        <Footer />
      </div>
    )
}


export default LoginPage;