import React from "react";
import styled from "styled-components";
import { AiOutlineTeam } from "react-icons/ai";
import actionTestImg from "../img/actionTest.PNG"

const BannerTogether = () => {
    return (
        <Box>
            <Content>
                <TitleContent>
                    <AiOutlineTeam size="50" />
                    <h3>지금은</h3>
                    <h3>모두의 행동중</h3>
                    <p>모두의행동이 새롭게 오픈했습니다.</p>
                    <button>자세히 보기</button>
                </TitleContent>
                <DetailContent>
                    <LittleContent><h5>더 나은 세상을 위한 행동에 참여해보세요.</h5></LittleContent>
                    <Wrap>
                        <Img src={actionTestImg} />
                        <InnerContent>
                            <h4>우리동네 작은가게 응원하고 오래오래 함께해요!</h4>
                            <p>나만 알기 아까운 작은 가게가 있다면, 지금 바로 행동하세요!</p>
                        </InnerContent>
                    </Wrap>
                </DetailContent>
            </Content>
        </Box>
    )
}

const Box = styled.div`
position: absolute;
bottom:20px;
font-family: "NavbarFont";
width: 100vw;
height: 28vh;
background:	#CBB8EE; 
`;

const Content = styled.div`
display:flex;
justify-content: center;
align-item: center;
width: 100vw;
height: 28vh;
background:	#CBB8EE; 
`;

const DetailContent = styled.div`
height: 120px;
width: 50vw;
`;

const TitleContent = styled.div`
display: inline;
width: 250px;
height: 200px;
margin-top: 20px;
`;

const Img = styled.img`
width: 350px;
height: 180px;
border-radius: 10%;
`;

const LittleContent = styled.div`
text-align: center;
`;

const Wrap = styled.div`
display: flex;
margin-left:50px;
`;
const InnerContent = styled.div`
margin-left:50px;
margin-bottom: 10px;
`;

export default BannerTogether;