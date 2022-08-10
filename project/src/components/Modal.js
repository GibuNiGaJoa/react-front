import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    const close = () => {
        props.closeModal();
        // console.log('닫힘버튼 실행됨')
    }


    return (
        <ModalContainer onClick={close}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseBtn onClick={close}>close</CloseBtn>
                <h4>제목</h4>
                <p>상세 내용</p>
                <PayBtn type={'button'}>결제하기</PayBtn>
            </ModalContent>
        </ModalContainer>

    );
};

const PayBtn = styled.button`
&:hover{
    cursor: pointer;
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
  width: 300px;
  height: 500px;
  padding: 40px;
  top: 100px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  &:hover{
    cursor: pointer;
  }
  `;



export default Modal;