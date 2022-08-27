import React, {useEffect,    useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import {   useLocation, useNavigate  } from 'react-router-dom';
import styled from "styled-components";
import { getSearchKeyword  } from '../actions/searchAction';

const SearchKeyword = ( {type} ) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Contents, setContents]=  useState([]);
    const [CountContents, setCountContents] =  useState([]);
    const [countTag, setCountTag] = useState();
    const [tagArray, setTagArray] = useState([]);
    const [ViewMode, setViewMode] = useState('all');

    // 첫 렌더링시, 태그찾기의 랜덤태그들 받음.
    useEffect(()=> {
      if(ViewMode ===  'all') {
        dispatch(getSearchKeyword(type))
        .then((res) => {
          setContents(res.payload.post_all);
          setCountContents(res.payload.post_all.length);
          setCountTag(res.payload.tag.length);
          setTagArray(res.payload.tag.map(e => e.name));
        })
      } else {
        dispatch(getSearchKeyword(type))
        .then((res) => {
          setContents(res.payload.post_title);
          setCountContents(res.payload.post_title.length);
          setCountTag(res.payload.tag.length);
          setTagArray(res.payload.tag.map((e) => e.name ));
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

    const onClickHandler = (e) => {
      e.preventDefault();
      const tagName = e.target.innerHTML.replace(/#/g, '');
      navigate(`/tags/${tagName}`, {
        state : {
          name : tagName
        }
      })
    }

    const showPost = (e) => {
      e.preventDefault();
      // console.log(e.target.className);
      const postNum=e.target.className.replace(/[^0-9]/g,'');
      navigate(`/fundraisings/${postNum}`, {
        state : {
          id : postNum
        }
      });

    }

  
    return (<>
      <SearchContainer>
        { !(countTag === 0) &&
        <><ResultKeyword>태그&nbsp;&nbsp;&nbsp;
            <span style={{color:'#DC287C'}}>{countTag}</span>
          </ResultKeyword>
          <KeywordPost>
            {tagArray.map((item) => {
                return (<ResultTagBtn onClick={onClickHandler}>#{item}</ResultTagBtn>
                )})}
          </KeywordPost></>
          
        }
          
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
                  
                  <KeywordOnImg onClick={showPost} className={item.id} src={item.image}/>
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
const ResultKeyword = styled.div`
margin: 25px 400px 50px 400px;
font-size : 26px;
`
const ResultTagBtn = styled.button`
border : 0;
border-radius : 25px;
margin : 0 50px 50px 0;
width : auto;
min-width : 7vw;
padding: 0 25px 0 25px;
font-size : 26px;
background-color : #bc77a9;

&:hover {
  cursor : pointer;
  transform : scaleY(1.3);
}
`
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