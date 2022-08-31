import React ,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import {
    getPostingAllEnddate
} from '../actions/getPostingAction';


const BannerDonate = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [contents, setContents] = useState([]);

    useEffect(()=> {
        dispatch(getPostingAllEnddate())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post.slice(0,8));
                })
                .catch((err) => console.log(err));

    },[]);
   
        


    const Click = () => {
        navigate('/fundraisings/now')

    }

    return (
        <Box>
            <h3>종료 임박한 나눔</h3>
            <InnerBox>
                {contents.map((content) => {
                    return (
                        <Content>
                            <Img src={content.image} />
                            <InnerContent>
                                <h3>{content.title}</h3>
                                <p>by {content.proposer}</p>
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