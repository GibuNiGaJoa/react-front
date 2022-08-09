import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import SuggestImg from '../img/suggestImg.PNG'

const SuggestForm = () => {
    const navigate = useNavigate();

    
    // 기부 제안 전 토큰확인 -> 있으면 진행 없으면 로그인 선행 유도
    const moveToSuggest = () => {
        if(localStorage.getItem('jwtToken')){
            navigate('/fundraisings/propose/project');
        } else {
            alert('로그인을 선행해주십시오.');
            navigate('/login');
        }
    }

    return(
        <Box>
            <Content></Content>
            <Content>
                <Img src={SuggestImg} />
                <TextContent>
                    <h3>프로젝트 모금함</h3>
                    <p>직접 기획한 프로젝트에 기부금을 사용할 수 있어요.</p>
                    <p>전문기관의 심사를 받습니다<br/>모금 후 결과보고는 필수!<br/><a>모금 제안 가이드</a></p>
                    <SuggestButton onClick={moveToSuggest} >제안하기</SuggestButton>
                </TextContent>
            </Content>
            <Content></Content>
        </Box>
    )
}

const Box = styled.div`
font-size: 20px;
font-weight: 400;
font-family: "NavbarFont";
display:flex;
width: 100vw;
height: 60vh;
`;
const Content = styled.div`
margin: auto;
width:30%;
justify-content : center;
text-align : center;
`;
const Img = styled.img`
width: 250px;
height: 200px;
`;
const TextContent = styled.div``;
const SuggestButton = styled.button`
padding: 0.375rem 0.75rem;
border-radius: 10%;
border: 1px solid #FF9E9B;
background : white;
color: #FF9E9B;
&:hover{
    background: #FF9E9B;
    color: white;
  }

`;

export default SuggestForm;