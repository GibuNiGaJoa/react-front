import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';


import styled from "styled-components";
import { tagSearch } from '../actions/tagAction';




const TagSearch = (  ) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const [subject, setSubject] = useState('');

  useEffect(()=> {
    dispatch(tagSearch(location.state.name))
    .then((res) => {
      setSubject(location.state.name);
      console.log(res);
    })
    .catch((err) => console.log(err));
  } ,[])
  
    return (<>
      <TotalWrapper>

        <SubjectInform>
          <SubjectTitle>{subject}</SubjectTitle>
        </SubjectInform>

        <DonateAmount>15,933,954,782원</DonateAmount>
        <DonateGroup>11,830,557명 기부</DonateGroup>

      </TotalWrapper>
        
      </>
    );
};

const TotalWrapper = styled.div`
margin: 20px 400px 25px 400px;
background-color : yellow;
`
const SubjectInform = styled.div`
margin-bottom : 25px;
background-image : url('https://mud-kage.kakaocdn.net/dn/8zxrh/btqeTEPHxVL/UOv4GIR6MDN9J89q7K6TGk/img.jpg');
background-size : 100% 100%;
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
color : white;
font-family: KakaoBig Bold,sans-serif;
`

const DonateAmount = styled.div`
text-align : center;
font-size : 28px;
background-color : green;
margin-bottom : 20px;
`
const DonateGroup = styled.div`
text-align : center;
font-size : 16px;
font-weight: 400;
font-family : "NavbarFont";
background-color : brown;
margin-bottom : 20px;
`



export default TagSearch;