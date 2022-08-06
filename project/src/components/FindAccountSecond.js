import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { findAccountFirst, findAccountSecond } from '../actions/userAction';
import hand from '../img/DonateHand.png';


const FindAccountSecond = () => {
  const dispatch = useDispatch();
  const [Phone, setPhone] = useState('');
  const [NicknameOrName, setNicknameOrName] = useState('');
  //서버로 부터 받은 이메일 값 저장
  const [email, setEmail] = useState('');

  const onNameHandler = (e) => {
    setNicknameOrName(e.currentTarget.value)
  }

  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    const body = {
      nicknameOrName : NicknameOrName,
      phone : Phone
    };
    dispatch(findAccountSecond(body))
    .then((res)=> {
      setEmail(res.payload.email);
    })
    .catch((err)=>{
      setEmail(null);
      console.log(err);
    });
    // .catch(setEmail(null));
  }

    return (
        <BtnContainer>
          <ServiceLogo>기부, 니가 좋아 </ServiceLogo>
          <form onSubmit={onSubmitHandler}>
            <BtnBox>
              <ServiceTitle>닉네임/이름 혹은 휴대폰으로 찾기</ServiceTitle>
                <InputNick value={NicknameOrName} type={'nicknameOrName'}onChange={onNameHandler} placeholder='닉네임 또는 이름을 입력하세요'></InputNick>
                <InputPhone value={Phone} type={'phone'}onChange={onPhoneHandler} placeholder='휴대폰 번호를 입력하세요'></InputPhone>
                <FindBtn type='submit'>찾기</FindBtn>
                <div> 조회 결과</div>
                {email
                ? <GetEmail>성공<br/>{email}</GetEmail> 
                : null
                // <GetEmail> 실패<br/> </GetEmail>
                }
                
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

const BtnContainer = styled.div`
width : 100vw;
height : 80vh;
margin-top : 100px;
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
const InputNick = styled.input`
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
const InputPhone = styled.input`
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
const FindBtn = styled.button`
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
const GetEmail = styled.div`
position : relatvie;
width : auto;
height : 10vh;
margin : 30px 0 20px 0;
font-size : 26px;
border : 0;
border-radius : 25px;
outline :0;
color : brown;

// background : green;
`

const SubFooter = styled.div`
margin-top :50px;
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

`


export default FindAccountSecond;