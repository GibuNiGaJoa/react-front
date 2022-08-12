import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink,  useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from "styled-components";
import { getSearchRandomTag } from '../actions/searchAction';
import searchIcon from "../img/search.png";
import SearchForm from './SearchForm';

const SearchKeyword = () => {
    
  const [getKeyword, setGetKeyword] = useState(<SearchForm type={'a'}/>);
  const [visible, setVisible] = useState(true);

    
  const onClickHandler = (e) => {
    e.preventDefault();
    setGetKeyword(<SearchForm type={'b'} />);


  }

  
    return (
     <div>
      {/* 서치키워드 */}
        {/* <button onClick={onClickHandler}></button> */}
     </div>
        
    );
};


export default SearchKeyword;