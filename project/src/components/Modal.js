import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const close = () => {
    props.closeModal();
    // console.log('닫힘버튼 실행됨')
  }

  const [pay, setPay] = useState(0);

  const plusPay100 = () => {
    setPay(pay + 100);
    console.log(pay);
  }
  const plusPay1000 = () => {
    setPay(pay + 1000);
    console.log(pay);
  }
  const plusPay5000 = () => {
    setPay(pay + 5000);
    console.log(pay);
  }
  const plusPay10000 = () => {
    setPay(pay + 10000);
    console.log(pay);
  }
  const plusPay50000 = () => {
    setPay(pay + 50000);
    console.log(pay);
  }
  const plusPay100000 = () => {
    setPay(pay + 100000);
    console.log(pay);
  }
  const plusPay500000 = () => {
    setPay(pay + 500000);
    console.log(pay);
  }
  const plusPay0 = () => {
    setPay(0);
    console.log(pay);
  }

  return (
    <ModalContainer onClick={close}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={close}>close</CloseBtn>
        <table>
          <tr>
            <td colSpan={4}><h2>기부금 결제</h2></td>
          </tr>
          <tr>
            <td colSpan={4}><p>무통장은 3천원, 결제는 1천원부터 가능합니다.</p></td>
          </tr>
          <tr>
            <td>
              <OnehundredBtn type='button' onClick={plusPay100}>+ 1백원</OnehundredBtn>
              <FivemillionBtn type='button' onClick={plusPay50000}>+ 5만원</FivemillionBtn>
            </td>
            <td>
              <OnethousandBtn type='button' onClick={plusPay1000}>+ 1천원</OnethousandBtn>
              <TenmillionBtn type='button' onClick={plusPay100000}>+ 10만원</TenmillionBtn>
            </td>
            <td>
              <FivethousandBtn type='button' onClick={plusPay5000}>+ 5천원</FivethousandBtn>
              <FiftymillionBtn type='button' onClick={plusPay500000}>+ 50만원</FiftymillionBtn>
            </td>
            <td>
              <OnemillionBtn type='button' onClick={plusPay10000}>+ 1만원</OnemillionBtn>
              <ZeroBtn type='button' onClick={plusPay0}>다시 입력</ZeroBtn>
            </td>
          </tr>
          <tr>
            <Td2 colSpan={4}>{pay}</Td2>
            <Td>원</Td>
          </tr>
          <tr>
            <td colSpan={4}>
              <h2>응원 댓글 쓰기</h2>
              <CommentInput type={'text'} placeholder={'따뜻한 한마디를 남겨주세요.'}></CommentInput>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <p>결제 수수료는 카카오가 대신 부담합니다.<br />결제 완료 알림은 카카오톡으로 발송해드려요.</p>
            </td>
          </tr>
          <tr>
            <Td3 colSpan={4}>
              <PayBtn type={'button'}>결제하기</PayBtn>
            </Td3>
          </tr>
        </table>

      </ModalContent>
    </ModalContainer>

  );
};

const CommentInput = styled.input`
width:450px;
height:50px;
`;

const Td3 = styled.td`
text-align: center;`;
const Td2 = styled.td`
text-align: right;
font-size:40px;
color: red;`;

const Td = styled.td`
text-align: right;
font-size: large;
font-weight:bold;`;

const OnehundredBtn = styled.button`
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }
`;
const OnethousandBtn = styled.button`
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }`;
const FivethousandBtn = styled.button`
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }`;
const FivemillionBtn = styled.button`
margin-top: 5px;
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }`;
const TenmillionBtn = styled.button`
margin-top: 5px;
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }`;
const FiftymillionBtn = styled.button`
margin-top: 5px;
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }`;
const OnemillionBtn = styled.button`
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }`;
const ZeroBtn = styled.button`
margin-top: 5px;
width: 110px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #828282;
background : #828282;
color: white;
&:hover{
   cursor: pointer;
  }`;

const PayBtn = styled.button`
width:450px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #dc287c;
background : #dc287c;
color: white;
&:hover{
    background: #FF1493;
  }`;
const ModalContainer = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;`;
const CloseBtn = styled.button`
position: absolute;
top: 15px;
right: 15px;
border: none;
color: rgba(0, 0, 0, 0.7);
background-color: transparent;
font-size: 20px;`;
const ModalContent = styled.button`
position: absolute;
font-family: "NavbarFont";
  width: 550px;
  height: 600px;
  padding: 40px;
  top: 50px;
  text-align: left;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  &:hover{
    cursor: pointer;
  }
  `;



export default Modal;