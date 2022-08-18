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
      setViewMode('all');
    }

    const onTitleViewHandler = (e) => {
      e.preventDefault();
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
                <Content>

                  <KeywordOnImg src={item.image}/>
                  <span style={{fontSize : '12px' , color : 'brown'}}>{item.title} </span><br/>
                  <span style={{fontSize : '12px' , color : 'blue'}}>{item.proposer} </span><br/>
                  <span style={{fontSize : '12px' , color : 'red'}}>{item.endDate} </span><br/>
                </Content>
              )
            })
          }

        </KeywordPost>
      </SearchContainer>
        
      </>
    );
};
const KeywordPost = styled.div`
margin: 25px 400px 50px 400px;
padding : 0px;
`
const Content = styled.ul`
display : inline-block;
width: 20%;
height : 20vh;
margin-bottom: 100px;
margin-right : 50px;
padding : 0px;

`;
const SearchSort = styled.li`
list-style-type : lower-roman;
margin-right : 100px;
display : inline;
font-size : 20px;
&:hover {
  cursor : pointer;
}
`

const KeywordTitle = styled.div`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 50px;
width : auto;
// color :pink;
`
const CountProject = styled.span`
font-size : 26px;
margin-right :350px;
`


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
const SearchContainer = styled.div`
`


export default SearchKeyword;