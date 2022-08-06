
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findPassword } from '../actions/userAction';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


const FindPasswordPage = () => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [ret, setRet] = useState('');

  const onEmailHandler = (e) => {

    setEmail(e.currentTarget.value);
  }
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  }

  
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      emailOrPhone : Phone,
    };

    dispatch(findPassword(body))
    .then((res) => {
      console.log(res);
      // setRet(res.payload.id);
      
      
    })
    .catch((err) => console.log(err));

  }


    return (
      <div className='Find_Password-container'>
        <Navbar />
        <div>비밀번호 찾기

        <form onSubmit={onSubmitHandler}>
            {/* <input onChange={onEmailHandler} type={'email'} value={Email}></input> */}
            <input onChange={onPhoneHandler} type={'phone'} value={Phone}></input>
            <button type='submit'>보내기</button>
            <div >
              {ret}
            </div>
          </form>
        </div>
        
        <Footer />
      </div>
    )
}


export default FindPasswordPage;