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
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Name, setName] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender, setGender] = useState("");

  const [EmailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(false);
  const [NameError, setNameError] = useState(false);
  const [NicknameError, setNicknameError] = useState(false);
  const [BirthdayError, setBirthdayError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [AddressError, setAddressError] = useState(false);
  const [GenderError, setGenderError] = useState(false);

  

  const onEmailHandler = (e) => {
    // setEmail(e.currentTarget.value);
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value))
          setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
  };

  const onNameHandler = (e) => {
    if(e.target.value.length >=2 && e.target.value.length <= 6){
      setNameError(false);
    } else{
      setNameError(true);
    }
    setName(e.target.value);
  };

  const onPasswordHanlder = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if ((!e.target.value || (passwordRegex.test(e.target.value)))) 
      setPasswordError(false);
    else 
      setPasswordError(true);

    setPassword(e.target.value);
  };

  const onConfirmPasswordHandler = (e) => {
    // setConfirmPasword(e.currentTarget.value);
    if (Password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };

  const onNicknameHandler = (e) => {
    // setNickname(e.currentTarget.value);
    if((e.target.value.length < 2 || e.target.value.length > 8) && e.target.value) {
      setNicknameError(true);
    }else{
      setNicknameError(false);
    }
    setNickname(e.target.value);
  };

  const onBirthdayHandler = (e) => {
    const birtdayRegex = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
    if (!e.target.value || birtdayRegex.test(e.target.value)){
      setBirthdayError(false);
    }  else {
      setBirthdayError(true);
    }
    setBirthday(e.target.value);
  };

  const onPhoneHandler = (e) => {
    // setPhone(e.currentTarget.value);
    // const phoneRegex =  /^01(?:0|1|[6-9])[.-]?(\\d{3}|\\d{4})[.-]?(\\d{4})$/;
    const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!e.target.value || phoneRegex.test(e.target.value)){
      setPhoneError(false);
    }  else {
      setPhoneError(true);
    }
    setPhone(e.target.value);

  };

  const onAddressHandler = (e) => {
    // setAddress(e.currentTarget.value);
    if(e.target.value.length > 4)  {
      setAddressError(false);
    }else{
      setAddressError(true);
    }
    setAddress(e.target.value);
  };

  const onGenderHandler = (e) => {
    // setGender(e.currentTarget.value);
    // if((e.target.value.length < 2 || e.target.value.length > 8) && e.target.value) 
    if(e.target.value === 'Man' || e.target.value === 'Woman' )   {
      setGenderError(false);
    }else if(!e.target.value){
      setGenderError(true);
    } else{
      setGenderError(true);
    }
    setGender(e.target.value);
  };


  const validation = () => {
    if(!Name) setNameError(true);
    if(!Email) setEmailError(true);
    if(!Password) setPasswordError(true);
    if(!ConfirmPassword) setConfirmPasswordError(true);
    if(!Phone) setPhoneError(true);
    if(!Nickname) setNicknameError(true);
    if(!Address) setAddressError(true);
    if(!Birthday) setBirthdayError(true);
    if(!Gender) setGenderError(true);

    if(Email && Password && ConfirmPassword && Name && Nickname && Birthday && Phone && Address && Gender)
    return true;
    else return false;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (Password === ConfirmPassword) 
    if(validation()) {
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
      alert("회원가입 필수 조건을 확인하세요.");
    }
  };
  
  return(
    <SignupBody>
      <SignupContainer> 
          <SignupBox>
            <SignupTitle>
              회원가입
            </SignupTitle>
          <form onSubmit={onSubmitHandler}>
            <InputBox>
              <NameInput onChange={onNameHandler} type={"name"} value={Name} placeholder='이름을 입력하세요.'/>
                {NameError && <ValidInfo>Required.  Name must be 2-6 letters.</ValidInfo>}
              <EmailInput onChange={onEmailHandler} type={'email'} value={Email} placeholder='이메일 주소를 입력하세요' />
                {EmailError && <ValidInfo >Please enter valid email format</ValidInfo>}
              <PasswordInput onChange={onPasswordHanlder} type={"password"} value={Password} placeholder='비밀번호를 입력하세요'/>
                {PasswordError && <ValidInfo>8글자 이상, 숫자+영문자+특수문자 조합으로 입력하세요.</ValidInfo>}
              <PasswordInput onChange={onConfirmPasswordHandler} type={"password"} value={ConfirmPassword} placeholder='비밀번호를 다시 한번 입력하세요.'/>
                {ConfirmPasswordError && <ValidInfo>Those passwords didn't match.</ValidInfo>}
              <PasswordInput onChange={onPhoneHandler} type={"phone"} value={Phone} placeholder='전화번호를 입력하세요.'/>
                {PhoneError && <ValidInfo>Please Check the phone.</ValidInfo>}
              <PasswordInput onChange={onNicknameHandler} type={"nickname"} value={Nickname} placeholder='닉네임을 입력하세요'/>
                {NicknameError && <ValidInfo>Nickname must 2 letters at least.</ValidInfo>}
              <PasswordInput onChange={onAddressHandler} type={"address"} value={Address} placeholder='주소를 입력하세요' />
                {AddressError && <ValidInfo>Please Check the address.</ValidInfo>}
              <PasswordInput onChange={onBirthdayHandler} type={"text"} value={Birthday} placeholder='생일을 입력하세요'/>
                {BirthdayError && <ValidInfo>Please Try the birthday  'YYYY-MM-DD' </ValidInfo>}
              <PasswordInput onChange={onGenderHandler} type={"gender"} value={Gender} placeholder='성별을 입력하세요'/>
                {GenderError && <ValidInfo>Please Enter "Woman" or "Man". </ValidInfo>}

              <SignupBtn type='submit' style={{fontSize : "20px" , border : '1px solid white' , padding : '2px',borderRadius : '20px'}} >계정 만들기</SignupBtn>
            </InputBox>
          </form>
        </SignupBox>
      </SignupContainer>
    </SignupBody>
  )
    
}

const ValidInfo = styled.div`
color : red;
`
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