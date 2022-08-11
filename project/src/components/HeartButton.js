import React from "react";
import styled from "styled-components";
import HeartImg from "../img/Heart.png";
import EmptyHeartImg from "../img/EmptyHeart.png";



const HeartButton = ({ like, onClick }) => {
    return (
        <CheerupBtn onClick={onClick}><img style={{width:25,height:25}} src={like?HeartImg:EmptyHeartImg} />응원하기</CheerupBtn>
    );
};

const CheerupBtn = styled.button`
width:300px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #444;
background : #444;
color: white;
&:hover{
  background: #5a5a5a;
}
`;

export default HeartButton;
