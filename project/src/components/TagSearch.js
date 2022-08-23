import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { tagSearch } from '../actions/tagAction';
import Fundraiser from './Fundraiser';




const TagSearch = (  ) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const [subject, setSubject] = useState('');
  const [contents, setContents] = useState([]);
  const [randomColor, setRandomColor] = useState("#" + Math.floor(Math.random() * 16777215).toString(16));

  useEffect(()=> {
    dispatch(tagSearch(location.state.name))
    .then((res) => {
      setSubject(location.state.name);
      setContents(res.payload.post);
      setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));
      
    })
    .catch((err) => console.log(err));
  } ,[])
  
    return (<>
      <TotalWrapper>

        <SubjectInform backColor={randomColor}>
          <SubjectTitle >#{subject}</SubjectTitle>
        </SubjectInform>

        <DonateAmount>15,933,954,782원</DonateAmount>
        <DonateGroup>11,830,557명 기부</DonateGroup>
      </TotalWrapper>

        
      
      <Fundraiser data={contents}/>
      </>
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
export default TagSearch;