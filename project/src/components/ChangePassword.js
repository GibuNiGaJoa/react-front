
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { changePassword, findPassword } from '../actions/userAction';
import hand from '../img/DonateHand.png'


const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Pw, setPw] = useState('');
  const [Pw2, setPw2] = useState('');
  const [PwError, setPwError] = useState(false);
  const [Pw2Error, setPw2Error] = useState(false);
  

  // 회원검증 선행 필수요건 -> 첫 렌더링 시 pwdToken이 없다?
  // 재검증 --> url검색만을 이용하여 
  // 이전 과정을 거치지 않고 들어오는 경우 방지 
  useEffect(()=>{
    if(!localStorage.getItem('pwdToken')){
      alert('회원검증을 선행해주십시오.');
      navigate('/login/find_password');
    }
  },[]);

  const onPwHandler = (e) => {
    // setPw(e.currentTarget.value);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if ((!e.target.value || (passwordRegex.test(e.target.value)))) 
      setPwError(false);
    else 
      setPwError(true);

    setPw(e.target.value);
  }
  const onPw2Handler = (e) => {
    if(Pw === e.target.value) 
      setPw2Error(false);
    else
      setPw2Error(true); 
    setPw2(e.target.value);
  }

  const passwordvalid = () => {
    if(!Pw) setPwError(true);
    if(!Pw2) setPw2Error(true);

    if(Pw === Pw2) return true
    else return false;

  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    // 서버에 전달할 값
    const body = {
      pw : Pw
    };
    
    // 통신 전 비밀번호 입력값 일치여부 확인
    if(passwordvalid()) {
      // 통신
      axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('pwdToken')}`;
      dispatch(changePassword(body))
      .then((res)=> {
        console.log(res);
        localStorage.removeItem('pwdToken');
        alert('비밀번호 재설정이 완료되었습니다.')
        navigate('/login')
        
      })
      // 실패
      .catch((err)=>{
        console.log(err);
      });
    }else{
      alert("입력값을 확인해주세요.");
    }
  }

    return (
      
      <BtnContainer>
          <ServiceLogo>기부, 니가 좋아 </ServiceLogo>
          <form onSubmit={onSubmitHandler}>
            <BtnBox>
              <ServiceTitle>새로운 비밀번호를 입력해 주세요.
              </ServiceTitle>
              <InputNewPw value={Pw} type={'password'}onChange={onPwHandler} placeholder='비밀번호(8~32자리)'/>
                {PwError && <ValidInfo>비밀번호 양식은 숫자+영문자+특수문자 8글자 이상입니다.</ValidInfo>}
              <InputNewPw2 value={Pw2} type={'password'}onChange={onPw2Handler} placeholder='비밀번호 재입력' />
                {Pw2Error && <ValidInfo>비밀번호가 동일하지 않습니다.</ValidInfo>}
              <ExplainTitle>! 비밀번호는 8 ~ 32 자의 영문 대소문자, 숫자, 특수문자를 조합하여 설정해 주세요. </ExplainTitle>
              <ExplainTitle>! 다른사이트에서 사용하는 것과 동일하거나 쉬운 비밀번호는 사용하지 마세요.</ExplainTitle>
              <ExplainTitle>! 안전한 계정 사용을 위해 비밀번호는 주기적으로 변경해 주세요.</ExplainTitle>
              <SuccessBtn type='submit'>완료</SuccessBtn>
              <img alt='DonateHand' src={hand}  />
          </BtnBox>
          </form>
          <SubFooter>
            <SubTitle>이용약관 </SubTitle>
            <SubTitle>개인정보 처리방침 </SubTitle>
            <SubTitle>운영정책 </SubTitle>
            <SubTitle>고객센터 </SubTitle>
            <SubTitle>공지사항 </SubTitle>
            <SubTitle>한국어 </SubTitle>
          </SubFooter>
            <SubTitle>Copyright @Donate, Like you. All rights reserved.</SubTitle>
        </BtnContainer>
    )
}

const ValidInfo = styled.div`
color : red;
`
const ExplainTitle = styled.div`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 0px 0;
font-size : 16px;
border : 0;
border-radius : 25px;
outline :0;
color : blue;
`


const BtnContainer = styled.div`
width : 100vw;
height : 80vh;
margin-top : 75px;
// background-color : ivory;
// justify-content : center;
flex-direction : column;
display : flex;
align-items : center;
`
const ServiceLogo = styled.div`
font-size : 36px;
color : black;

`

const ServiceTitle = styled.div`
// background : purple;
font-size : 40px;

`

const BtnBox = styled.div`
position : relative;
margin-top : 50px;
padding : 25px;

// background : yellow;
width : 33vw;
height : 50vh;
flex-direction : column;
display : flex;
// align-items : center;
// justify-content : center;

`
const InputNewPw = styled.input`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
background : ivory;
`


const InputNewPw2 = styled.input`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
background : ivory;
`
const SuccessBtn = styled.button`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
// background : green;
&:hover {
  cursor : pointer;
}
`
const SubFooter = styled.div`
// position :absolute;
margin-top :250px;
display : flex;
justify-content : center;
align-items : center;
`

const SubTitle = styled.div`
width : auto;
color : black;
position : relative;
margin-right: 40px;
margin-bottom : 40px;
// color : blue;
`



export default ChangePassword;