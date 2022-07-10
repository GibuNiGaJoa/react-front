import styled from 'styled-components'
import React from 'react'
import {  NavLink, useNavigate } from "react-router-dom";
import instaIcon from "../img/footer_instaicon.png";
import fbIcon from "../img/footer_fbicon.png";
import twitterIcon from "../img/footer_twittericon.png";
import kakaoIcon from "../img/footer_ksicon.png";



const Footer = () => {
  
  const navigate = useNavigate();

  const fundingBtn = () => {
    navigate('/suggest');
  }

  return (
    <div id='Footer'>
      <Outer >
        <Inner > 
          <InnerTop>
            기부, 니가 좋아
            <InnerTopInfo>당신의 착한 마음을 응원합니다.<br />
            더 좋은 세상을 꿈꾼다면 지금 시작해보세요.
            </InnerTopInfo>
          </InnerTop>
          <InnerMid>
            <FundingButton onClick={fundingBtn}>제안하기</FundingButton>
          </InnerMid>
          <InnerBot>
            <NavLink to={"/"}>
              <InnerBtnText>@Kakao Corp.</InnerBtnText>
              <InnerBtnText>도움말</InnerBtnText>
              <InnerBtnText>문의하기</InnerBtnText>
              <InnerBtnImg src={instaIcon} alt='인스타이미지'></InnerBtnImg>
              <InnerBtnImg src={fbIcon} alt='페북이미지'></InnerBtnImg>
              <InnerBtnImg src={twitterIcon} alt='트위터이미지'></InnerBtnImg>
              <InnerBtnImg src={kakaoIcon} alt='카카오이미지'></InnerBtnImg>
            </NavLink>
          </InnerBot>
        </Inner>
      </Outer>

    </div>
  )
}

const Outer = styled.div`
flex-direction: column;
min-height: 100vh;
width : 100vw;
height : 22.5vh;
color : #999;
left : 0px;
background-color : #202020;
bottom : 0;
padding : 35px 400px;
`;

const Inner = styled.div`
  background-color : #202020;
  position : relative;
  height :100%;
  display : column;
`;

const InnerTop = styled.div`
  // background-color : yellow;
  position : relative;
  height : 60px;
`;
const InnerTopInfo  = styled.div`
  position :relative;
  padding : 0px;
  border : 0px;
  width : 350px;
  right : -800px;
  top : -20px;
`;
const InnerMid = styled.div`
  position : relative;
  width : 800px;
  height : 60px;
  // background-color : white;
`;

const FundingButton = styled.button`
  position : relative;
  right : -900px;
  height : 60px;
  width : 120px;
  border-radius : 30px;
  border : 1px solid #666;
  // outline : 0;
  background-color : #202020;
  color : #999;
  ::hover : {
    cursor :pointer;
  }
`;

const InnerBot = styled.div`
position : relative;
height : 60px;
width : 800px;
// background-color : green;
// display : flex;
text-decoration : none;
`;

const InnerBtnImg = styled.img`
position : relative;
width : 50px;
height : 50px;
top : 20px;
right : -600px;
padding : 8px;
`;

const InnerBtnText = styled.div`
display : inline;
position:relative;
width : 50px;
height : 50px;
right : -575px;
padding : 8px;
color : #999;
text-decoration : none;

`;





export default Footer;