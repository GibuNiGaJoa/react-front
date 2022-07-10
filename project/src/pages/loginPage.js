import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar'


const LoginPage = () => {
    return (
      <div className='Login-container'>
        <Navbar />
        <LoginForm />
        <Footer />
      </div>
    )
}


export default LoginPage;