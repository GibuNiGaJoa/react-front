import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink,  useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from "styled-components";
import { getSearchKeyword, getSearchRandomTag } from '../actions/searchAction';
import searchIcon from "../img/search.png";
import SearchButtonBox from './SearchButtonBox';



const SearchKeyword = ( {type} ) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const didMount = useRef(false);
    const [searchParams, setSearchParams] = useSearchParams('');

    const searchKeyword = searchParams.get('keyword') ||'';
    
  
      const [Image, setImage] = useState('');
      const [Title, setTitle] = useState('');
      const [Id, setId] = useState('');
      const [Proposer, setProposer] = useState('');
      
    
    // 첫 렌더링시, 태그찾기의 랜덤태그들 받음.
    // useEffect(()=> {
    //   dispatch(getSearchRandomTag())
    //   .then((res) => {
    //     setRandomTag([...res.payload.tag.map(e=>e.name)]);
    //   })
    // }, []);

    useEffect(()=> {

    }, []);

    // 쿼리스트링 입력되면 변화!(물론 첫렌더링시에는 안받음)
    


    const onClickHandler = (e) => {
      e.preventDefault();
      console.log('label 눌림');
    }
    
    

  
    return (<>
      <SearchContainer>
        <KeywordTitle>
          <CountProject>프로젝트 모금함 </CountProject>
          <SearchSort onClick={onClickHandler}>제목+본문 검색</SearchSort>
          <SearchSort>제목 검색</SearchSort>
        </KeywordTitle>
        <KeywordPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>
          <KeywordOnPost></KeywordOnPost>

        </KeywordPost>
      </SearchContainer>
        
      </>
    );
};

const KeywordTitle = styled.div`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 50px;
width : auto;
// color :pink;
`
const CountProject = styled.span`
font-size : 26px;
margin-right : 200px;
`
const SearchSort = styled.label`
margin-right : 200px;
font-size : 20px;
&:before{
  color : blue;
}
`
// const TitleOnly = styled.label`
// font-size : 20px;
// `
const SearchBtn = styled.button`
width : 10%;
justify-content : center;
align-item : center;
text-align : center;
border-radius: 150px;
// background-color : white;
border: 0;
&:hover {
  cursor : pointer;
}
`
const KeywordOnPost = styled.img`
width : 150px;
height : 150px;
border-radius : 70%;
overflow : hidden;
margin-bottom : 20px;
margin-top : 10px;
`
const TargetImg = styled.img`
width : 150px;
height : 150px;
border-radius : 70%;
overflow : hidden;
margin-bottom : 20px;
margin-top : 10px;
`


const TargetTitle = styled.h2`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 0px;
color :pink;
`

const KeywordPost = styled.div`
margin: 25px 400px 50px 400px;
`
const TopicTag = styled.div`
margin: 25px 400px 50px 400px;
`
const TargetTag = styled.div`
margin: 25px 400px 50px 400px;
`
const TopicBtn = styled.a`
text-align : center;
display : inline-block;
width : 150px;
height : 150px;
margin-right : 31.0px;
word-break:break-all;
&:hover {
  cursor : pointer;
}
`
const TargetBtn = styled.a`
text-align : center;
display : inline-block;
width : 150px;
height : 150px;
margin-right : 31.0px;
word-break:break-all;
&:hover {
  cursor : pointer;
}
`
const TagBtn = styled.button`
width : 120px;
height : 100px;
border-radius : 25px;
border : 0px;
outline :0px;
margin-right : 15px;
margin-bottom : 10px;
word-break:break-all;
&:hover {
  cursor : pointer;
}
`

const SearchTop = styled.div`
margin: 50px 400px 50px 400px;
background-color : #F0F0F0;
height : 10vh;
display : flex;
border-radius : 150px;
`;
const SearchInput = styled.input`
margin-top : 15px;
width : 85%;
height : 70%;
// border-radius : 100px;
border : 0;
outline : 0;
background-color : #F0F0F0;
font-size : 24px;
`
const SearchContainer = styled.div`
`


export default SearchKeyword;