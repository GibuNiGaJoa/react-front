import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { findPassword } from '../actions/userAction';
import hand from '../img/DonateHand.png'


const FindPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Tk, setTk] = useState('');
  const didMount = useRef(false);

  // 첫 렌더링을 막고, 렌더링 이후 함수 호출 가능하게끔
  // -> useRef을 사용, 첫 마운트(렌더링) 시 false값으로 그 이후엔 바로 true로 설정
  // Tk값(통신에 성공시 토글하는 state)을 변경하여 렌더링하게끔 유도
  // Tk값 존재 O -> 재설정페이지로, 존재 X -> 입력값 및 입력 방식 확인유도
  useEffect(()=>{
    if(didMount.current){
        if(Tk){
          navigate('change_password');
        } else{
          alert('등록된 이메일이나 전화번호가 없습니다.');
          alert('입력값을 확인하여 다시 입력해주세요.');
        }
    } else {
      didMount.current = true;
    }
  },[Tk]);

  const onNameHandler = (e) => {
    setEmail(e.currentTarget.value)
  }

  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    // 서버에 전달할 값
    const body = {
      email : Email,
      phone : Phone
    };
    
    // 회원검증 통신 
    dispatch(findPassword(body))
    // 성공
    .then((res)=> {
      console.log(res);
      const token = res.payload.token;
      localStorage.setItem('pwdToken', token);
      // axios.defaults.headers.common['Authorization'] = `${token}`;
      setTk(res.payload.status);
    })
    // 실패
    .catch((err)=>{
      setTk(false);
      console.log(err);
    });
    
  }


    return (
      
      <BtnContainer>
          <ServiceLogo>기부, 니가 좋아 </ServiceLogo>
          <form onSubmit={onSubmitHandler}>
            <BtnBox>
              <ServiceTitle>비밀번호 재설정을 위해<br/>
                이메일과 전화번호를 입력하세요
              </ServiceTitle>
              <InputEmail value={Email} type={'nicknameOrName'}onChange={onNameHandler} placeholder='이메일을 입력하세요'></InputEmail>
              <InputPhone value={Phone} type={'phone'}onChange={onPhoneHandler} placeholder='휴대폰 번호를 입력하세요'></InputPhone>
              <FindBtn type='submit'>다음</FindBtn>
              <img alt='DonateHand' src={hand}  />
          </BtnBox>
          </form>
          <SubFooter>
            <SubTitle>이용약관 </SubTitle>
            <SubTitle>개인정보 처리방침 </SubTitle>
            <SubTitle>운영정책 </SubTitle>
            <SubTitle>고객센터 </SubTitle>
            <SubTitle>공지사항 </SubTitle>
            <SubTitle>한국어 </SubTitle>
          </SubFooter>
          <SubTitle>Copyright @Donate, Like you. All rights reserved.</SubTitle>
        </BtnContainer>
    )
}


const BtnContainer = styled.div`
width : 100vw;
height : 80vh;
margin-top : 75px;
// background-color : ivory;
// justify-content : center;
flex-direction : column;
display : flex;
align-items : center;
`
const ServiceLogo = styled.div`
font-size : 36px;
color : black;
`

const ServiceTitle = styled.div`
// background : purple;
font-size : 40px;
`

const BtnBox = styled.div`
position : relative;
margin-top : 50px;
padding : 25px;

// background : yellow;
width : 33vw;
height : 50vh;
flex-direction : column;
display : flex;
// align-items : center;
// justify-content : center;

`
const InputEmail = styled.input`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
background : ivory;
`
const InputPhone = styled.input`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
background : ivory;
`
const FindBtn = styled.button`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
// background : green;
&:hover {
  cursor : pointer;
}
`

// const SubFooter = styled.div`
// margin-top :50px;
// display : flex;
// justify-content : center;
// align-items : center;

// `
const SubFooter = styled.div`
// position :absolute;
margin-top :250px;
display : flex;
justify-content : center;
align-items : center;
`
const SubTitle = styled.div`
width : auto;
color : black;
position : relative;
margin-right: 40px;
margin-bottom : 40px;

`



export default FindPassword;