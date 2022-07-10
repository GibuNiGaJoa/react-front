import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


const LoginForm = () => {
 

  
  

  return (
    <div id='LoginBody'>
      <LoginContainer>
        <LoginBox>
          <InputBox>
            <LoginTitle>
              로그인
            </LoginTitle>
            <form>
              <IdInput type={'text'} placeholder={"이메일 주소 또는 전화번호를 입력하세요."}></IdInput>
              <PasswordInput type={'text'} placeholder={'비밀번호를 입력하세요.'}></PasswordInput>
              <LoginBtn style>로그인</LoginBtn>
              <SignupText style={{ color : 'gainsboro'}}>같이가치의 회원이 아니세요?&nbsp;&nbsp;</SignupText>
              <NavLink to={'/signup'}>
                <SignupText style={{fontSize : "25px" , border : '1px solid white' , padding : '2px',borderRadius : '20px'}}>
                  지금 가입하세요!
                </SignupText>
              </NavLink>
            </form>
          </InputBox>
        </LoginBox>
      </LoginContainer>
      
    </div>
  )


}

const LoginContainer = styled.div`

position : relative;
display : flex;
justify-content : center;
align-items : center;
background-color : rgba(0,0,0, .75);
top : 30px;
width : 30vw;
height : 60vh;
margin : auto;
padding : 20px;
`;

const LoginBox = styled.div`
position : relative;
// border : 1px solid yellow;
width : 90%;
height : 90%;
padding : 0px 25px ;

`

const InputBox = styled.div`
position : relative;
width : 100%;
height : 100%;
// border : 2px solid blue;
// background-color : green;
`

const LoginTitle = styled.h1`
justify-content : center;
align-items : center;
width : 100%;
// background-color : white;
display : inline;
color : white;
`

const IdInput = styled.input`
margin : 50px 0px 0px 0px;
position : relative;
background-color : white;
border-radius : 15px;
border : 0;
outline : 0;
width : 100%;
height : 100px;
::placeholder {
  color : black;
}
`
const PasswordInput = styled.input`
margin : 50px 0px 0px 0px;
position : relative;
border-radius : 15px;
border : 0;
outline : 0;
background-color : white;
width : 100%;
height : 100px;
::placeholder {
  color : black;
}
`

const LoginBtn = styled.button`
margin : 50px 0px 0px 0px;
position : relative;
border-radius : 15px;
border : 0;
outline : 0;
background-color : white;
width : 100%;
height : 50px;
&:hover{
  cursor : pointer;
}

`

const SignupText = styled.h5`
margin : 30px 0px 0px 0px;
display : inline-block;
// background-color : blue;
color : white;
`



export default LoginForm;