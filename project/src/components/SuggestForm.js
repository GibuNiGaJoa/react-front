import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { suggestTokenCheck } from '../actions/sugggestAction';
import SuggestImg from '../img/suggestImg.PNG'

const SuggestForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    
    


    const onSubmitHandler = (e) => {
        e.preventDefault();
        // 기부 제안 전 토큰확인 -> 있으면 진행 없으면 로그인 선행 유도
        // 통신 전, 로그인 여부 확인
        if(localStorage.getItem('jwtToken')){
            // 헤더에 토큰담기
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
            dispatch(suggestTokenCheck())
            .then((res)=>{
                console.log(res.payload);
                navigate('project');
            }).catch((err)=> console.log(err));
        } else{
            alert('로그인을 먼저 선행해주십시오.');
            navigate('/login');
        }

    }

    return(
        <Box>
            <Content></Content>
            <Content>
                <Img src={SuggestImg} />
                    <TextContent>
                    <form onSubmit={onSubmitHandler}>
                        <h3>프로젝트 모금함</h3>
                        <p>직접 기획한 프로젝트에 기부금을 사용할 수 있어요.</p>
                        <p>전문기관의 심사를 받습니다<br/>모금 후 결과보고는 필수!<br/><a>모금 제안 가이드</a></p>
                        <SuggestButton type='submit' >제안하기</SuggestButton>
                    </form>
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