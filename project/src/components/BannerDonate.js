import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import actionTestImg from "../img/actionTest.PNG"

const BannerDonate = () => {

    const navigate = useNavigate()
    const contents = [
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        },
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        },
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        },
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        },
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        },
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        },
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        },
        {
            img: actionTestImg,
            title: '우리 동네 작은가게 한번만 도와줍쇼',
            organization: '사단법인 황재원'
        }
    ]

    const Click = () => {
        navigate('/togetherDonate')

    }

    return (
        <Box>
            <h3>가장 쉬운 나눔</h3>
            <InnerBox>
                {contents.map((content) => {
                    return (
                        <Content>
                            <Img src={content.img} />
                            <InnerContent>
                                <h3>{content.title}</h3>
                                <p>{content.organization}</p>
                            </InnerContent>
                        </Content>
                    )
                })}
            </InnerBox>
            <DonateButton onClick={Click}>더보기</DonateButton>
        </Box>
    )
}

const DonateButton = styled.button`
margin:auto;
display:block;
padding: 0.375rem 0.75rem;
border-radius: 50%;
font-size: 20px;
font-weight: 400;
border: 1px solid #bebebe;
background : white;
color: #bebebe;
&:hover{
    background: #bebebe;
    color: white;
  }
`;

const Box = styled.div`
font-family: "NavbarFont";
margin: 0 auto;
width: 70vw;
height: 80vh;
`;
const InnerBox = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
const Content = styled.div`
flex:auto;
width: 25%;
margin-bottom: 10px;
`;
const InnerContent = styled.div``;
const Img = styled.img`
width: 300px;
height: 200px;
border-radius: 10%;
transition: 0.3s;
&:hover{
    transform:scale(1.1);
}
`;


export default BannerDonate;