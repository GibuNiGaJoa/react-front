import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { AiOutlineTeam } from "react-icons/ai";
import actionTestImg from "../img/actionTest.PNG"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
    getPostingAllUpdate
} from '../actions/getPostingAction';

const BannerTogether = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [content, setContent] = useState([]);

    useEffect(()=> {
        dispatch(getPostingAllUpdate())
                .then((res) => {
                    console.log(res.payload);
                    setContent(res.payload.post[0]);
                })
                .catch((err) => console.log(err));

    },[]);


    const goToClick = () =>{
        navigate('/togetherAct')
        //글 상세 페이지로 이동하도록!
    }

    return (
        <Box>
            <Content>
                <TitleContent>
                    <AiOutlineTeam size="50" />
                    <h3>모두의</h3>
                    <h3>관심이 필요합니다!</h3>
                    <p>가장 최신 모금입니다.</p>
                    <button onClick={goToClick}>자세히 보기</button>
                </TitleContent>
                <DetailContent>
                    <LittleContent><h5>더 나은 세상을 위한 행동에 참여해보세요.</h5></LittleContent>
                    <Wrap>
                        <Img src={content.image} />
                        <InnerContent>
                            <h3>{content.title}</h3>
                            <p>by {content.proposer}</p>
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
transition: 0.3s;
&:hover{
    transform:scale(1.1);
}
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