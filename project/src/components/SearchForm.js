import React, {useState} from 'react';
import styled from "styled-components";
import searchIcon from "../img/search.png";

const SearchForm = () => {

  
    const [search,setSearch] = useState('')
    // const [Input, setInput] = useState('');


    const onInputHandler = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        
    };
    
    const onSubmitHandler = (e) => {
      e.preventDefault();
      // alert(search);
      console.log(search);

    }


    return (
      <SearchContainer>
        <form onSubmit={onSubmitHandler}>
          <SearchTop>
            <SearchBtn type='submit'><img src={searchIcon} alt="검색이미지"></img></SearchBtn>
            <SearchInput onChange={onInputHandler} placeholder="검색어를 입력하세요." />
          </SearchTop>
        </form>
      </SearchContainer>
        
        
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