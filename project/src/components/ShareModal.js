import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScript } from "../hook";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import kakaoLogo from "../img/kakao.png"


const ShareModal = (props) => {
    const close = () => {
        props.closeModal();
        // console.log('닫힘버튼 실행됨')
    }
    const currentUrl = window.location.href;
    // kakao SDK import하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("ff97517dba277b039555c6db19670343");
			}
		}
	}, [status]);
    const handleKakaoButton = () => {
        window.Kakao.Link.sendScrap({
            requestUrl: currentUrl,
        });
    };


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
                    <KakaoShareBtn onClick={handleKakaoButton}><KakaoIcon src={kakaoLogo}></KakaoIcon></KakaoShareBtn>
                </ShareBtns>
            </ModalContent>
        </ModalContainer>


    );
};

const ShareBtns = styled.div``;

const KakaoShareBtn = styled.button`
width: 48px;
height: 48px;
color: white;
border-radius: 24px;
border: 0px;
cursor: pointer;`;
const KakaoIcon = styled.img`
width: 48px;
height: 48px;
`;

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