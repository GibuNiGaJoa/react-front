import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { loginUser } from '../actions/userAction';
import axios from 'axios';




const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location  = useLocation();
  
  const [Email, setEmail] = useState("");
  const [Pw, setPw] = useState("");
  const [EmailError, setEmailError] = useState(false);
  const [PwError, setPwError] = useState(false);

  const onEmailHandler = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!e.target.value || emailRegex.test(e.target.value)){
      setEmailError(false);
    } else {
      setEmailError(true)
    };

    setEmail(e.target.value);
  }
  const onPwHandler = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if ((!e.target.value || (passwordRegex.test(e.target.value)))) {
      setPwError(false);
    }else {
      setPwError(true);
    }

    setPw(e.target.value);
  }

  const loginValid = () => {
    if(!Email) setEmailError(true);
    if(!Pw) setPwError(true);

    if(Pw && Email) return true;
    else return false;
  }

    //로그인용
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //로그인을 진행하기 위해
    // 첫번째 useDispatch(액션)을 활용하여 액션을 dispatch 해준다.
    const body = {
      email: Email,
      pw: Pw,
    };
    dispatch(loginUser(body))
    .then((res) => {
      console.log(res);
      if(res.payload) {
        alert("로그인에 성공하였습니다!")
        // navigate("/");
        if(res.payload.status){
          if(!location.state?.from){
            navigate('/');
          } else{
            console.log(location.state);
            navigate(location.state.from, {state:{
              id : location.state.id
            }})
          }
        }
        const token = res.payload.token;
        localStorage.setItem('jwtToken',token);
        localStorage.setItem('isLogin' , 'true');
        localStorage.setItem('gender', res.payload.gender);
        axios.defaults.headers.common['Authorization'] = `${token}`;
        // window.location.reload();

      } else {
        alert("로그인에 실패하였습니다!");
      }
    })
    .catch((err) => {
      // localStorage.setItem('isLogin', false)
      console.log(err);
    });

  }


  return (
    <LoginBody>
      
      <LoginContainer>
        <LoginBox>
          <InputBox>
            <LoginTitle>
              로그인
            </LoginTitle>
            <form onSubmit={onSubmitHandler}>
              <IdInput type={'email'} placeholder={"이메일 주소를 입력하세요."} value={Email} onChange={onEmailHandler} />
                {EmailError && <ValidInfo>이메일 형식을 확인하세요.</ValidInfo>}
              <PasswordInput type={'password'} placeholder={'비밀번호를 입력하세요.'} value={Pw} onChange={onPwHandler} />
                {PwError && <ValidInfo>비밀번호를 다시 확인해주세요.</ValidInfo>}
              <LoginBtn type='submit'>로그인</LoginBtn>
              
              <SubBtn>
                <SearchText>이미 회원이신가요?</SearchText>
                <NavLink to={'find_account_guide'}>
                  <FindBtn>아이디 찾기</FindBtn>
                </NavLink>
                <NavLink to={'find_password'}>
                  <FindBtn>비밀번호 찾기&nbsp;&nbsp;&nbsp;&nbsp;</FindBtn>
                </NavLink>
              </SubBtn>
              <SignupText style={{ color : 'gainsboro'}}>'기부, 니가 좋아'의 회원이 아니세요?&nbsp;&nbsp;</SignupText>
              <NavLink to={'/login/create_account'}>
                <SignupText style={{fontSize : "20px" , border : '1px solid white' , padding : '2px',borderRadius : '20px'}}>
                  지금 가입하세요!
                </SignupText>
              </NavLink>
            </form>

          </InputBox>
        </LoginBox>
      </LoginContainer>
    </LoginBody>
  )
}

const ValidInfo = styled.div`
color : red;
`
const LoginBody = styled.div`
background-image : url('https://www.gijangbok.or.kr/img/guide/sub2_img01.png');
background-repeat : no-repeat;
background-size : 100% 100%;
`
const LoginContainer = styled.div`
position : relative;
flex-direction: column;
display : flex;
justify-content : center;
align-items : center;
border-radius:20px;
background-color : rgba(0,0,0, .75);
top : 30px;
width : 30vw;
// min-height : 100vh;
height : 70vh;
margin : auto auto 50px;
padding : 20px;
`;

const LoginBox = styled.div`
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
height : 7vh;
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
height : 7vh;
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

const SignupText = styled.h2`
justify-content : center;
align-items: center;
margin : 6% 0px 0px 0px;
display : flex;
color : yellow;
`
const SubBtn = styled.div`
position : relative;
margin : 7.5% 0 0 10%;
display : flex;
width : 100%;
`
const SearchText = styled.h4`
margin : 0 15% 0% 0;
color : gainsboro;
`
const FindBtn = styled.div`

margin-right : 30px;
display : inline;
font-size : 16px;
color : yellow;
`




export default LoginForm;