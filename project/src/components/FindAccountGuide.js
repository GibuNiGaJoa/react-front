import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar'
import hand from '../img/DonateHand.png';


const FindAccountGuide = () => {
  const navigate =useNavigate();

  const onClickPhoneHandler = (e) => {
    e.preventDefault();
    navigate('first');
  }
  const onClickNicknameHandler = (e) => {
    e.preventDefault();
    navigate('second');
  }

    return (
        <BtnContainer>
          <ServiceLogo>기부, 니가 좋아 </ServiceLogo>
          <BtnBox>
            <ServiceTitle>기부, 니가 좋아 <br /> 계정을 찾을 방법을 선택하세요</ServiceTitle>
            <PhoneBtn onClick={onClickPhoneHandler}>휴대폰으로 찾기</PhoneBtn>
            <PhoneBtn onClick={onClickNicknameHandler}>닉네임 혹은 이름/  전화번호로 찾기</PhoneBtn>
            <img alt='DonateHand' src={hand}  />
          </BtnBox>
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
const PhoneBtn = styled.button`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
&:hover {
  cursor : pointer;
}
// background : green;
`

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


export default FindAccountGuide;