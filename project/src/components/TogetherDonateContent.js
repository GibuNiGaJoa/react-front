import React from 'react';
import styled from "styled-components";
import GetContent from './GetContent';
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
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_all" alt="ico_all" src={ico_all} /><p>전체</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_kidz" alt="ico_kidz" src={ico_kidz} /><p>아동|청소년</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_young" alt="ico_young" src={ico_young} /><p>청년</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_woman" alt="ico_woman" src={ico_woman} /><p>여성</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_old" alt="ico_old" src={ico_old} /><p>실버세대</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_accessible" alt="ico_accessible" src={ico_accessible} /><p>장애인</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_social" alt="ico_social" src={ico_social} /><p>우리사회</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_earth" alt="ico_earth" src={ico_earth} /><p>지구촌</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_neighborhood" alt="ico_neighborhood" src={ico_neighborhood} /><p>어려운이웃</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_animal" alt="ico_animal" src={ico_animal} /><p>동물</p></A></Li>
                        <Li><A href='#'>
                            <img style={{ width: 40, height: 40 }} className="ico_culture" alt="ico_culture" src={ico_culture} /><p>환경</p></A></Li>
                    </Ul>
                </CategoryBox>
                <GetContent />
            </Wrapper>
            <Wrapper></Wrapper>
          
        </Box>
    );
};

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

const Li = styled.li`
margin-left: 20px;
border: 0;`;

const A = styled.a`
text-decoration: none;
color: black;
&:hover{
    color: #828282;
  }
`;

export default TogetherDonateContent;
