import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink,  useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from "styled-components";
import { getSearchKeyword, getSearchRandomTag } from '../actions/searchAction';
import searchIcon from "../img/search.png";
import SearchButtonBox from './SearchButtonBox';
import SearchKeyword from './SearchKeyword';



const SearchForm = (  ) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const didMount = useRef(false);
    const [Input, setInput] = useState('');
    const [RandomTag, setRandomTag] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    const [getKeyPosting, setGetKeyPosting] = useState(<SearchKeyword type={''}/>)
    const searchOnKeyword = searchParams.get('keyword') ||'';
    
    // 첫 렌더링시, 태그찾기의 랜덤태그들 받음.
    useEffect(()=> {
      dispatch(getSearchRandomTag())
      .then((res) => {
        setRandomTag([...res.payload.tag.map(e=>e.name)]);
      })
    }, []);
    
    useEffect(()=>{
      if(didMount.current) {
        setGetKeyPosting(`${location.search}`);
      } else {
        didMount.current = true; 
      }
    }, [location.search]);

    const onInputHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };
    
    const onSubmitHandler = (e) => {
      e.preventDefault();
      if(!Input){
        navigate('/search');
        window.location.reload();
      } else{
        const qs = `?keyword=${Input}`;
        navigate(`${qs}`);
      }
    }

    const onClickHandler = (e) => {
      e.preventDefault();
      const tagName = e.target.innerHTML.replace('#', '');
      console.log(e)
      navigate(`/tags/${tagName}`, {
        state: {
          name : tagName
        }
      })
    } 

  
    return (<>
      <SearchContainer>
        <form onSubmit={onSubmitHandler}>
          <SearchTop>
            <SearchBtn type='submit'><img src={searchIcon} alt="검색이미지"></img></SearchBtn>
            <SearchInput onChange={onInputHandler} placeholder="검색어를 입력하세요." />
          </SearchTop>
        </form>
        {!location.search ? 
            <><TagTitle>태그로 찾기</TagTitle>
              <SearchTag >
                <TagBtn onClick={onClickHandler}>{RandomTag[0]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[1]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[2]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[3]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[4]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[5]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[6]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[7]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[8]}</TagBtn>
                <TagBtn onClick={onClickHandler}>{RandomTag[9]}</TagBtn>
              </SearchTag>
            <SearchButtonBox /> </> 
            : <SearchKeyword type={searchOnKeyword}/>}
        
        

        
        
      </SearchContainer>
        
      </>
    );
};
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

const TagTitle = styled.h2`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 0px;
color :pink;
`
const SearchTag = styled.div`
margin: 25px 400px 50px 400px;
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
  transform:scale(1.1);
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
const SearchContainer = styled.div``


export default SearchForm;