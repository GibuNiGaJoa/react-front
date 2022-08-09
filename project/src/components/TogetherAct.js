import React , { useState}from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useNavigate } from 'react-router-dom';

const TogetherAct = () => {

  return (
    <TotalContainer>
      모두의 페이지 랑께?
    </TotalContainer>
  )
}

const TotalContainer = styled.div`
display : flex;
width : 100vw;
`

export default TogetherAct