import React , {useEffect, useState}from 'react';
import styled from 'styled-components';

const SignupForm = () => {



  return(
    <SignupBody>
      <SignupContainer> 
          <SignupBox>
            <SignupTitle>
              회원가입
            </SignupTitle>
          <form>
            <InputBox>
              <NameInput type={"name"}placeholder='이름을 입력하세요.'></NameInput>
              <EmailInput type={'email'}  placeholder='이메일 주소를 입력하세요' ></EmailInput>
              <BirthInput type={'date'}></BirthInput>
              <PasswordInput type={"password"}placeholder='비밀번호를 입력하세요'></PasswordInput>
              <PasswordInput type={"password"} placeholder='비밀번호를 다시 한번 입력하세요.'></PasswordInput>
              <SignupBtn style={{fontSize : "20px" , border : '1px solid white' , padding : '2px',borderRadius : '20px'}} >계정 만들기</SignupBtn>
            </InputBox>
          </form>
        </SignupBox>
      </SignupContainer>
    </SignupBody>
  )

}

const SignupBody = styled.div`
background-image : url('https://www.gijangbok.or.kr/img/guide/sub2_img01.png');
background-repeat : no-repeat;
background-size : 100% 100%;
`

const SignupContainer = styled.div`
position : relative;
flex-direction: column;
display : flex;
justify-content : center;
align-items : center;
border-radius:20px;
background-color : rgba(0,0,0, .75);
top : 30px;
width : 30vw;
height : 84vh;
margin : auto auto 50px;
padding : 20px;
color : white;
`

const SignupTitle = styled.h1`
// position : relative;
// // border-radius : 20px;
// width : 90%;
// font-size : 30px;
// height : 90%;
// padding : 0px 25px ;
justify-content : center;
align-items : center;
width : 100%;
// background-color : white;
display : inline;
color : yellow;
`
const SignupBox = styled.div`
position : relative;
// border-radius : 20px;
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


const NameInput = styled.input`
margin : 50px 0px 0px 0px;
position : relative;
text-align : center;
background-color : white;
border-radius : 15px;
border : 0;
outline : 0;
width : 100%;
height : 7vh;
::placeholder {
  color : black;
}
`
const EmailInput = styled.input`
margin : 50px 0px 0px 0px;
position : relative;

background-color : white;
border-radius : 15px;
text-align : center;
border : 0;
outline : 0;
width : 100%;
height : 7vh;
::placeholder {
  color : black;
}
`
const BirthInput = styled.input`
type : date;
position : relative;
border-radius : 15px;
border : 0;
outline :0;
width : 100%;
text-align : center;
height : 7vh;
text-size : 30px;
margin : 50px 0px 0px 0px;
`

const PasswordInput = styled.input`
margin : 50px 0px 0px 0px;
position : relative;
border-radius : 15px;
border : 0;
text-align : center;
outline : 0;
background-color : white;
width : 100%;
height : 7vh;
::placeholder {
  color : black;
}
`
const SignupBtn = styled.button`
justify-content : center;
align-items: center;
// text-align : center;margin : 6% 0px 0px 0px;
display : flex;
color : yellow;
background-color : transparent;


margin : 50px 0px 0px 0px;
position : relative;
border-radius : 15px;
border : 0;
outline : 0;
// background-color : white;
width : 100%;
height : 50px;

&:hover{
  cursor : pointer;
}
`



export default SignupForm;