import React from 'react';
import styled from "styled-components";
import BannerDonate from './BannerDonate'
import { NavLink, useNavigate } from 'react-router-dom';
import ico_all from "../img/ico_all.png"
import ico_kidz from "../img/ico_kidz.png"
import ico_young from "../img/ico_young.png"
import ico_woman from "../img/ico_woman.png"
import ico_old from "../img/ico_old.png"
import ico_accessible from "../img/ico_accessible.png"
import ico_social from "../img/ico_social.png"
import ico_earth from "../img/ico_earth.png"
import ico_neighborhood from "../img/ico_neighborhood.png"
import ico_animal from "../img/ico_animal.png"
import ico_culture from "../img/ico_culture.png"



const TogetherDonateContent = () => {

    return (
        <Box>
            <Wrapper></Wrapper>
            <Wrapper>
                <CategoryBox>
                    <Ul>
                        <Li><NavLink exact to="/togetherDonate" style={{ textDecoration: 'none', }}>
                            <img style={{ width: 50, height:50 }} className="ico_all" alt="ico_all" src={ico_all} /><p>전체</p></NavLink></Li>
                        <Li><NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_kidz" alt="ico_kidz" src={ico_kidz} /><p>어린이</p></NavLink></Li>
                        <Li><NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_young" alt="ico_young" src={ico_young} /><p>청년</p></NavLink></Li>
                        <Li>
                            <NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                                <img style={{ width: 50, height:50 }} className="ico_woman" alt="ico_woman" src={ico_woman} /><p>여성</p></NavLink></Li>
                        <Li> <NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_old" alt="ico_old" src={ico_old} /><p>어르신</p></NavLink></Li>
                        <Li> <NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_accessible" alt="ico_accessible" src={ico_accessible} /><p>장애인</p></NavLink></Li>
                        <Li><NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_social" alt="ico_social" src={ico_social} /><p>우리사회</p></NavLink></Li>
                        <Li> <NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_earth" alt="ico_earth" src={ico_earth} /><p>지구촌</p></NavLink></Li>
                        <Li>  <NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_neighborhood" alt="ico_neighborhood" src={ico_neighborhood} /><p>어려운이웃</p></NavLink></Li>
                        <Li><NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_animal" alt="ico_animal" src={ico_animal} /><p>동물</p></NavLink></Li>
                        <Li> <NavLink exact to="/togetherDonate" style={{ textDecoration: 'none' }}>
                            <img style={{ width: 50, height:50 }} className="ico_culture" alt="ico_culture" src={ico_culture} /><p>환경</p></NavLink></Li>
                    </Ul>
                </CategoryBox>
                <ContentBox>
                    <h2>같이기부 게시글들</h2>
                    <h2>이미지</h2>
                    <h2>제목</h2>
                </ContentBox>
            </Wrapper>
            <Wrapper></Wrapper>
        </Box>
    );
};

const Box = styled.div`
display:flex;
width: 100vw;`;

const Wrapper = styled.div`
margin: auto;
justify-content : center;
text-align : center;
`;
const CategoryBox = styled.div`
`;
const ContentBox = styled.div`
`;

const Ul = styled.ul`
list-style: none;
font-size: large;
font-weight: bold;
`;
const Li = styled.li`
margin-left: 20px;
float: left;
border: 0;`;


export default TogetherDonateContent;
