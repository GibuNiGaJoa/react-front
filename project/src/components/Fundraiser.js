import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';


import styled from "styled-components";
import { tagSearch } from '../actions/tagAction';




const Fundraiser = ( {data} ) => {
  useEffect(() => {

  })


    return (
      <TotalWrapper>
        
        {
          data.map((i) => {
            return (
              <div>
                {/* {i.id} */}
                <img src={i.image} alt="이미지 없음"></img>
              </div>
            )
          })
        }

      </TotalWrapper>
      

        
        
      
    );
};

const TotalWrapper = styled.div`
margin: 20px 400px 25px 400px;
// background-color : yellow;
`
const SubjectInform = styled.div`
margin-bottom : 25px;
background-color : ${props => props.backColor};
width : 100%;
height : 28vh;
border-radius : 25px;
justify-content : center;
align-item : center;
text-align : center;

`
const SubjectTitle = styled.h1`
position : relative;
top : 43%;
color : black;
font-family: KakaoBig Bold,sans-serif;
`

const DonateAmount = styled.div`
text-align : center;
font-size : 28px;

margin-bottom : 20px;
`
const DonateGroup = styled.div`
text-align : center;
font-size : 16px;
font-weight: 400;
font-family : "NavbarFont";

margin-bottom : 20px;
`
export default Fundraiser;