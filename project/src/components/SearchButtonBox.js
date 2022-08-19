import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink,  useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from "styled-components";
import { getSearchKeyword, getSearchRandomTag } from '../actions/searchAction';
import searchIcon from "../img/search.png";


const SearchButtonBox = (  ) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const didMount = useRef(false);
    const [searchParams, setSearchParams] = useSearchParams('');

    const searchKeyword = searchParams.get('keyword') ||'';
    

    useEffect(()=>{
      if(didMount.current) {

        dispatch(getSearchKeyword(`${location.search}`))
        .then((res)=>{
          console.log(res.payload);
        })
      } else {
        didMount.current = true; 
      }

    }, [location.search])


    const onClickHandler = (e) => {
      e.preventDefault();
      const tagAlt = e.target.alt;
      if(e.target.alt === undefined) {
        alert('다시한번 클릭해주세요')
      } else{
        navigate(`/tags/${tagAlt}`, {
          state : {
            name : tagAlt,
          }
        })
      }
    }

    // const onClickHandler = (e) => {
    //   e.preventDefault();
    //   const tagName = e.target.innerHTML.replace('#', '');
    //   console.log(e)
    //   navigate(`/tags/${tagName}`, {
    //     state: {
    //       name : tagName
    //     }
    //   })
    // } 
    
    

  
    return (<>

        <TopicTitle>주제별 찾기</TopicTitle>
        <TopicTag>
          <TopicBtn onClick={onClickHandler}> 모두의교육
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/bQjYnL/btqeTkRkzAP/IB4VKsziubpzV8kKuGCxR0/c160.jpg' alt='모두의교육' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler}> 기본생활지원
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/dfayUM/btqeS2cdK6X/FlDQlr0X6My32rDcwekgY1/c160.jpg' alt='기본생활지원' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler}> 안정된일자리
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/9kdhx/btqeSdZmGXT/KKE26ESkOu5KwKBlil2Fw1/c160.jpg' alt='안정된일자리' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler}> 건강한삶
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/8zxrh/btqeTEPHxVL/UOv4GIR6MDN9J89q7K6TGk/c160.jpg' alt='건강한삶' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler} > 인권평화와역사
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/cBGsiW/btqeUqDFmle/5t3Al23C3KXbPpG7MmgAs1/c160.jpg' alt='인권평화와역사' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler}> 동물
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/Bhaea/btqfGqi6rfE/FNXWp35egH4mZTvR5A02C0/c160.jpg' alt='동물' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler}> 지역공동체
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/8Fooq/btqeS2i0Gjy/J9Eacd99lo5f8WcdJt8ZVK/c160.jpg' alt='지역공동체' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler}> 더나은사회
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/CsgvK/btqeSKW5obk/ikiKdRhKa1ceBHj5kPDwmK/c160.jpg' alt='더나은사회' />
          </TopicBtn>
          <TopicBtn onClick={onClickHandler}> 환경
            <TopicImg src='https://mud-kage.kakaocdn.net/dn/bijvLv/btqfHG6PshT/4Lu4129OAJ0aRPXgRsm2kK/c160.jpg' alt='환경' />
          </TopicBtn>
        </TopicTag>
        <TargetTitle >대상별 찾기 </TargetTitle>
        <TargetTag>
          <TargetBtn onClick={onClickHandler}>아동|청소년
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/eE4eDt/btqeTEvo1oi/i3hCyjx9BasmNFN6Qnewz0/c160.jpg' alt='아동|청소년'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>청년
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/UcO28/btqeSczkjeJ/QIoX8Kg45A3hnVyzQatqz1/c160.jpg' alt='청년'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>여성
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/z41G3/btqeTE3fkJ7/8m34WVDUITvKA9HK5sP5yk/c160.jpg' alt='여성'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>실버세대
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/cekYgk/btqeP3QlYgW/iGZakpOWT5gfqBPLIzZW80/c160.jpg' alt='실버세대'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>장애인
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/frExg/btqeTDJ2jTL/CqkNDew6OjvYCBLpRBTCF1/c160.jpg' alt='장애인'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>이주민|다문화
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/bdDKwv/btqeQqknQLL/8h7PFHZZEaXKp7nO5mXNf1/c160.jpg' alt='이주민|다문화'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>지구촌
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/iz3uB/btqeSecVdjr/6FTKuCc940lx8umkW62yxK/c160.jpg' alt='지구촌'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>어려운이웃
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/c1NBO8/btqeSdyhf27/jiHPeyih8G4tXMP0jKALBk/c160.jpg' alt='어려운이웃'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>우리사회
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/brQVqD/btqeT7EeCWH/hcbrm9YzfqwSt7iu6tgaUk/c160.jpg' alt='우리사회'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>유기동물
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/cZHX7b/btqfFTy4RVF/QTNHn5utvQLjYLkkCCAtM1/c160.jpg' alt='유기동물'></TargetImg>
          </TargetBtn>
          <TargetBtn onClick={onClickHandler}>야생동물
            <TargetImg src='https://mud-kage.kakaocdn.net/dn/d5gPUJ/btqfHHdGVIP/Vu5fbI09DHvjCPCQDvhWX1/c160.jpg' alt='야생동물'></TargetImg>
          </TargetBtn>

        </TargetTag>
        
        
        
      </>
    );
};

const TopicImg = styled.img`
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
const TopicTitle = styled.h2`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 0px;
color :pink;
`
const TargetTitle = styled.h2`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 0px;
color :pink;
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
  transform:scale(1.1);
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
  transform:scale(1.1);
}
`

export default SearchButtonBox;