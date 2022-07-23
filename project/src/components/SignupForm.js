import React , { useState}from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useNavigate } from 'react-router-dom';

const SignupForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPasword] = useState("");
  const [Name, setName] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender, setGender] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPasword(e.currentTarget.value);
  };
  const onNicknameHandler = (e) => {
    setNickname(e.currentTarget.value);
  };
  const onBirthdayHandler = (e) => {
    setBirthday(e.currentTarget.value);
  };
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };
  const onAddressHandler = (e) => {
    setAddress(e.currentTarget.value);
  };
  const onGenderHandler = (e) => {
    setGender(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password === ConfirmPassword) {
      let body = {
        email: Email,
        pw: Password,
        name: Name,
        phone : Phone,
        address : Address,
        gender : Gender,
        nickname : Nickname,
        birthday : Birthday
      };
      dispatch(registerUser(body)).then((res) => {
        console.log(res);
        if(res.payload){
          alert("가입이 정상적으로 완료되었습니다");
          navigate("/");
        }
      });
    } else {
      alert("비밀번호가 일치하지 않습니다");
    }
  };
  //성별 체크박스 하나만 선택하기 !
  // const checkOnlyOne = (checkThis) => {
  //   const checkboxes = document.getElementsByName('gender')
  //   for (let i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i] !== checkThis) {
  //       checkboxes[i].checked = false
  //     }
  //   }
  // }

  return(
    <SignupBody>
      <SignupContainer> 
          <SignupBox>
            <SignupTitle>
              회원가입
            </SignupTitle>
          <form onSubmit={onSubmitHandler}>
            <InputBox>
              <NameInput onChange={onNameHandler} type={"name"} value={Name} placeholder='이름을 입력하세요.'></NameInput>
              <EmailInput onChange={onEmailHandler} type={'email'} value={Email} placeholder='이메일 주소를 입력하세요' ></EmailInput>
              {/* <BirthInput type={'date'}></BirthInput> */}
              <PasswordInput onChange={onPasswordHanlder} type={"password"} value={Password} placeholder='비밀번호를 입력하세요'></PasswordInput>
              <PasswordInput onChange={onConfirmPasswordHandler} type={"password"} value={ConfirmPassword} placeholder='비밀번호를 다시 한번 입력하세요.'></PasswordInput>
              <PasswordInput onChange={onPhoneHandler} type={"phone"} value={Phone} placeholder='전화번호를 입력하세요.'></PasswordInput>
              <PasswordInput onChange={onNicknameHandler} type={"nickname"} value={Nickname} placeholder='닉네임을 입력하세요'></PasswordInput>
              <PasswordInput onChange={onAddressHandler} type={"address"} value={Address} placeholder='주소를 입력하세요'></PasswordInput>
              <PasswordInput onChange={onBirthdayHandler} type={"birthday"} value={Birthday} placeholder='생일을 입력하세요'></PasswordInput>
              <PasswordInput onChange={onGenderHandler} type={"gender"} value={Gender} placeholder='성별을 입력하세요'></PasswordInput>
              {/* <Gender>
                <GenderText>남성</GenderText>
                <GenderInput id={'male'}type={'checkbox'}></GenderInput>
                <GenderInput type="checkbox" name="gender"  value="1" onChange={(e) => checkOnlyOne(e.target)}></GenderInput>
                <GenderText>여성</GenderText>
                <GenderInput type="checkbox" name="gender"  value="2" onChange={(e) => checkOnlyOne(e.target)}></GenderInput>
                test builder!
              </Gender> */}

              <SignupBtn type='submit' style={{fontSize : "20px" , border : '1px solid white' , padding : '2px',borderRadius : '20px'}} >계정 만들기</SignupBtn>
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
height : 100vh;
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
height : 3vh;
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
height : 3vh;
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
height : 3vh;
text-size : 30px;
margin : 50px 0px 0px 0px;
`
const Gender = styled.div`
display : flex;
position : relative;
border-radius : 15px;
// background-color : white;
border : 0;
outline :0;
width : 100%;
text-align : center;
align-items : center;
justify-content : center;
height : 1vh;
// text-size : 30px;
margin : 50px 0px 0px 0px;
`

const GenderText = styled.p`
color : white;
margin : 0px 25px 0px;
`

const GenderInput = styled.input`
appearance: none;
border: 1.5px solid gainsboro;
border-radius: 0.35rem;
width: 1.5rem;
height: 1.5rem;

&:checked {
  border-color: transparent;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: limegreen;
}
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
height : 3vh;
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