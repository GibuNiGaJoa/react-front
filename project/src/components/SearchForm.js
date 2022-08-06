import React, {useState} from 'react';
import styled from "styled-components";

const SearchForm = () => {

    const [search,setSearch] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(search);
    }

    const onChangeSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <SearchInput type={'text'} value={search} placeholder="검색어를 입력하세요." onChange={onChangeSearch}></SearchInput>
            <SearchBtn type='submit'>검색</SearchBtn>
        </form>
        
    );
};

const SearchInput = styled.input``;
const SearchBtn = styled.button``;

export default SearchForm;