import React, { useState } from 'react';
import styled from "styled-components";
import GetContentAll from './GetContentAll';
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

    const [getPosting, setGetPosting] = useState(<GetContentAll type={'random'} />);
    const [visible, setVisible] = useState(true);

    const randomPosting = () => {
        setGetPosting(<GetContentAll type={'random'} />)
        setVisible(true);
    }
    const updatePosting = () => {
        setGetPosting(<GetContentAll type={'update'} />)
        setVisible(true);
    }
    const enddatePosting = () => {
        setGetPosting(<GetContentAll type={'enddate'} />)
        setVisible(true);
    }
    const kidsPosting = () => {
        setGetPosting(<GetContentAll type={'kids'} />)
        setVisible(false);
    }
    const youngPosting = () => {
        setGetPosting(<GetContentAll type={'young'} />)
        setVisible(false);
    }
    const womanPosting = () => {
        setGetPosting(<GetContentAll type={'woman'} />)
        setVisible(false);
    }
    const oldsPosting = () => {
        setGetPosting(<GetContentAll type={'olds'} />)
        setVisible(false);
    }
    const disabledPosting = () => {
        setGetPosting(<GetContentAll type={'disabled'} />)
        setVisible(false);
    }
    const socialPosting = () => {
        setGetPosting(<GetContentAll type={'social'} />)
        setVisible(false);
    }
    const earthPosting = () => {
        setGetPosting(<GetContentAll type={'earth'} />)
        setVisible(false);
    }
    const neighborhoodPosting = () => {
        setGetPosting(<GetContentAll type={'neighborhood'} />)
        setVisible(false);
    }
    const animalPosting = () => {
        setGetPosting(<GetContentAll type={'animal'} />)
        setVisible(false);
    }
    const environmentPosting = () => {
        setGetPosting(<GetContentAll type={'environment'} />)
        setVisible(false);
    }

    const epiloguePosting = (e) => {
        e.preventDefault();
        setGetPosting(<GetContentAll type={'epilogue'} />)
        setVisible(false);
    }
    const getNowPosting = (e) => {
        e.preventDefault();
        setGetPosting(<GetContentAll type={'random'} />)
    }

    return (
        <Box>
            <ViewBox>
                <ViewBtn onClick={getNowPosting}>모금중</ViewBtn>
                <ViewBtn onClick={epiloguePosting}>모금후기</ViewBtn>
            </ViewBox>
            <Wrapper></Wrapper>
            <Wrapper>
                <CategoryBox>
                    <Ul>
                        <Li><A href='#' onClick={randomPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_all" alt="ico_all" src={ico_all} /><p>전체</p></A></Li>
                        <Li><A href='#' onClick={kidsPosting} >
                            <img style={{ width: 40, height: 40 }} className="ico_kidz" alt="ico_kidz" src={ico_kidz} /><p>아동|청소년</p></A></Li>
                        <Li><A href='#' onClick={youngPosting} >
                            <img style={{ width: 40, height: 40 }} className="ico_young" alt="ico_young" src={ico_young} /><p>청년</p></A></Li>
                        <Li><A href='#' onClick={womanPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_woman" alt="ico_woman" src={ico_woman} /><p>여성</p></A></Li>
                        <Li><A href='#' onClick={oldsPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_old" alt="ico_old" src={ico_old} /><p>실버세대</p></A></Li>
                        <Li><A href='#' onClick={disabledPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_accessible" alt="ico_accessible" src={ico_accessible} /><p>장애인</p></A></Li>
                        <Li><A href='#' onClick={socialPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_social" alt="ico_social" src={ico_social} /><p>우리사회</p></A></Li>
                        <Li><A href='#' onClick={earthPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_earth" alt="ico_earth" src={ico_earth} /><p>지구촌</p></A></Li>
                        <Li><A href='#' onClick={neighborhoodPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_neighborhood" alt="ico_neighborhood" src={ico_neighborhood} /><p>어려운이웃</p></A></Li>
                        <Li><A href='#' onClick={animalPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_animal" alt="ico_animal" src={ico_animal} /><p>동물</p></A></Li>
                        <Li><A href='#' onClick={environmentPosting}>
                            <img style={{ width: 40, height: 40 }} className="ico_culture" alt="ico_culture" src={ico_culture} /><p>환경</p></A></Li>
                    </Ul>
                </CategoryBox>
                {
                    visible
                        ? (
                            <Ul2>
                                <Li><A href='#' onClick={randomPosting}>추천순</A></Li>
                                <Li><A href='#' onClick={updatePosting}>최신순</A></Li>
                                <Li><A href='#' onClick={enddatePosting}>종료임박순</A></Li>
                            </Ul2>
                        )
                        : null
                }
                {getPosting}
            </Wrapper>
            <Wrapper></Wrapper>

        </Box>
    );
};

const ViewBox = styled.div`
background-color : ivory;
text-align : center;
align-item : center;
justify-content : center;
width : auto;
height : 10vh;

`
const ViewBtn = styled.button`
background-color :yellow;
margin-top : 15px;
// height : 8vh;
padding : 20px;
border: 2px solid #444;
border-radius : 50%;
margin-left :75px;
font-size : 20px;
color : #444;
&: hover {
    cursor : pointer;
}
`

const Box = styled.div`
width: 100vw;

`;

const Wrapper = styled.div`
`;

const CategoryBox = styled.div`
`;

const Ul = styled.ul`
list-style: none;
font-size: large;
font-weight: bold;
display:flex;
justify-content:center;
text-align: center;
`;

const Ul2 = styled.ul`
font-size: large;
font-weight: bold;
display:flex;
justify-content:center;
text-align: center;
`;
const Li = styled.li`
margin-left: 40px;
border: 0;`;

const A = styled.a`
text-decoration: none;
color: black;
&:hover{
    color: #828282;
  }
`;

export default TogetherDonateContent;
