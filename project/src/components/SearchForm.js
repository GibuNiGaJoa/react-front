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
    const [PostAll, setPostAll] = useState([]);
    const [PostTitle, setPostTitle] = useState([]);
    const [OnTag, setOnTag] = useState([]);
    const [RandomTag, setRandomTag] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    const searchOnKeyword = searchParams.get('keyword') ||'';
    
    // 첫 렌더링시, 태그찾기의 랜덤태그들 받음.
    useEffect(()=> {
      dispatch(getSearchRandomTag())
      .then((res) => {
        setRandomTag([...res.payload.tag.map(e=>e.name)]);
      })
    }, []);

    // 쿼리스트링 입력되면 변화!(물론 첫렌더링시에는 안받음)
    useEffect(()=>{
      if(didMount.current) {
        dispatch(getSearchKeyword(`${location.search}`))
        .then((res)=>{
            console.log(res.payload);
          // setPostAll(res.payload.post_all);
          // setPostTitle(...res.payload.post_title);
          // setOnTag(...res.payload.tag);
        })
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
      console.log(PostAll);
      console.log(PostTitle);
      console.log(OnTag);
      
      if(!Input){
        navigate('/search');
        window.location.reload();
      } else{
        // const qs = encodeURI(encodeURIComponent(`?keyword=${Input}`));
        const qs = `?keyword=${Input}`;
        navigate(`${qs}`);
      }
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
            <><TagTitle><strong>태그로 찾기</strong></TagTitle>
              <SearchTag>
                <TagBtn><strong>#{RandomTag[0]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[1]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[2]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[3]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[4]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[5]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[6]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[7]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[8]}</strong></TagBtn>
                <TagBtn><strong>#{RandomTag[9]}</strong></TagBtn>
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
const TagTitle = styled.h2`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 0px;
color :pink;
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

const SearchTag = styled.div`
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
const SearchContainer = styled.div``


export default SearchForm;