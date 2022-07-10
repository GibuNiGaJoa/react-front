import React from 'react';
import styled from "styled-components";
import logoImg from "../img/logo.jpg"
import TypeAnimation from 'react-type-animation';
import './type.css'

const FootertForm = () => {
    return (

        <Box>
            <Content></Content>
            <Content>
                <Img src={logoImg} />
                <TextContent>
                    <TypeAnimation
                        cursor={true}
                        sequence={['', 2000, '기부,',2000,'기부, 니가',2000,'기부, 니가 좋아',2000]}
                        wrapper="h1"
                        repeat={Infinity}
                        className= "type"
                    />
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
height: 72vh;
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
border: 1px solid
border-bottom: 1px solid black;
box-shadow: 0 5px 5px 5px black;
border-radius: 50%;
`;
const TextContent = styled.div``;

export default FootertForm;