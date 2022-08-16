import React, {useEffect,    useState} from 'react';
import { useDispatch } from 'react-redux';
// import {   useLocation, useNavigate  } from 'react-router-dom';
import styled from "styled-components";
import { getSearchKeyword  } from '../actions/searchAction';




const SearchKeyword = ( {type} ) => {
    const dispatch = useDispatch();
    const [Contents, setContents]=  useState([]);
    const [CountContents, setCountContents] =  useState([]);
    const [ViewMode, setViewMode] = useState('all');
    // const [textColor, setTextColor] = useState('black');

    
    // 첫 렌더링시, 태그찾기의 랜덤태그들 받음.
    useEffect(()=> {
      if(ViewMode ===  'all') {
          dispatch(getSearchKeyword(type))
          .then((res) => {
            setContents(res.payload.post_all);
            setCountContents(res.payload.post_all.length);
          })
        } else {
          dispatch(getSearchKeyword(type))
          .then((res) => {
            setContents(res.payload.post_title);
            setCountContents(res.payload.post_title.length);
        })
      }
    }, [type , ViewMode]);

    
    const onAllViewHandler = (e) => {
      e.preventDefault();
      console.log('label 눌림');
      setViewMode('all');
    }

    const onTitleViewHandler = (e) => {
      e.preventDefault();
      console.log('라벨 눌림!');
      setViewMode('title');
    }
    
    

  
    return (<>
      <SearchContainer>
        <KeywordTitle>
          <CountProject>프로젝트 모금함 &nbsp;&nbsp;&nbsp;
             <span style={{color : "#DC287C"}}>{CountContents}</span>
             </CountProject>
          <SearchSort  onClick={onAllViewHandler} >제목+본문 검색</SearchSort>
          <SearchSort onClick={onTitleViewHandler}>제목 검색</SearchSort>
        </KeywordTitle>
        <KeywordPost>
          {
            Contents.map((item) => {
              return (
              <KeywordOnPost src={item.image}/>

              )
            })
          }

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
`

const KeywordOnPost = styled.img`
width : 150px;
height : 150px;
border-radius : 70%;
overflow : hidden;
margin-bottom : 20px;
margin-top : 10px;
`

const KeywordPost = styled.div`
margin: 25px 400px 50px 400px;
`

const SearchContainer = styled.div`
`


export default SearchKeyword;