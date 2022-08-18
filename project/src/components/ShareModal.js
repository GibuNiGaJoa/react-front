import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";


const ShareModal = (props) => {
    const close = () => {
        props.closeModal();
        // console.log('닫힘버튼 실행됨')
    }
    const currentUrl = window.location.href;


    return (
        <ModalContainer onClick={close}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseBtn onClick={close}>close</CloseBtn>
                <h2>공유하기</h2>
                <ShareBtns>
                    <FacebookShareButton url={currentUrl}>
                        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton url={currentUrl}>
                        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                    </TwitterShareButton>
                    <CopyToClipboard text={currentUrl}>
                        <URLShareBtn>URL</URLShareBtn>
                    </CopyToClipboard>
                    <button>카카오API</button>
                </ShareBtns>
            </ModalContent>
        </ModalContainer>


    );
};

const ShareBtns = styled.div``;

const URLShareBtn =styled.button`
width: 48px;
height: 48px;
color: white;
border-radius: 24px;
border: 0px;
font-weight: 800;
font-size: 18px;
cursor: pointer;
background-color: #7362ff;
&:hover {
	background-color: #a99fee;
}
`;

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
  height: 300px;
  padding: 40px;
  top: 200px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  &:hover{
    cursor: pointer;
  }
  `;



export default ShareModal;