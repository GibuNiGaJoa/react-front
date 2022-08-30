import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { tagSearch } from '../actions/tagAction';




const TagSearch = (  ) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [subject, setSubject] = useState('');
  const [contents, setContents] = useState([]);
  const [donatePeople, setDonatePeople] = useState('');
  const [tagTotalAmount , setTagTotalAmount] = useState('');
  const [randomColor, setRandomColor] = useState("#" + Math.floor(Math.random() * 16777215).toString(16));

  useEffect(()=> {
    dispatch(tagSearch(location.state.name))
    .then((res) => {
      console.log(res.payload);
      setSubject(location.state.name);
      setContents(res.payload.posts);
      setDonatePeople(res.payload.totalDonationCount);
      setTagTotalAmount((res.payload.totalDonationAmount.toLocaleString()));
      setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));
      
    })
    .catch((err) => console.log(err));
  } ,[])


  const showPost = (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    const postNum=e.target.className.replace(/[^0-9]/g,'');
    navigate(`/fundraisings/${postNum}`, {
      state : {
        id : postNum
      }
    });
  };
  
    return (
      <TotalWrapper>

        <SubjectInform backColor={randomColor}>
          <SubjectTitle >#{subject}</SubjectTitle>
        </SubjectInform>

        <DonateAmount>{tagTotalAmount}원</DonateAmount>
        <DonateGroup>{donatePeople}명 기부</DonateGroup>
        {
          contents.map((item) => {
            return(
              <Content>
                  
                  <KeywordOnImg onClick={showPost} className={item.id} src={item.image}/>
                  <div style={{width : '250px'}}>
                    <span style={{fontSize : '12px' , color : 'brown'}}>{item.title} </span><br/>
                    <span style={{fontSize : '12px' , color : 'blue'}}>{item.proposer} </span><br/>
                    <span style={{fontSize : '12px' , color : 'red'}}>{item.endDate} </span><br/>
                  </div>
                </Content>
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
const Content = styled.ul`
display : inline-block;
width: 20%;
height : 20vh;
margin-bottom: 100px;
margin-right : 50px;
padding : 0px;

`;
const KeywordOnImg = styled.img`
width : 100%;
height : 100%;
border-radius : 10%;
overflow : hidden;
margin-bottom : 20px;
// margin-right : 10px;
// margin-top : 10px;
&:hover{
  transform:scale(1.12);
  cursor : pointer;
}
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