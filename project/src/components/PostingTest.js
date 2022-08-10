import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { getPostingInfo } from '../actions/postingAction';
import Modal from "../components/Modal"
import Footer from './Footer';




const PostingTest = () => {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState('');
  const [MainImage, setMainImage] = useState('');
  const [Content, setContent] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [SubTitle, setSubTitle] = useState('');
  const [TargetAmount, setTargetAmount] = useState('');
  const [Comment, setComment] = useState('');

  //모달창
  const [visible, setVisible] = useState(false);
  const modalOpen = () => {
    setVisible(true);
  }

  const onCommentHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value.length);

  }

  // 내가 생각한건 -> 첫 렌더링 시 통신을 통해 해당 게시글번호에 대한 정보 받아오기 
  useEffect(() => {
    // 0809 14:00 -> content / endDate / startDate / subTitle / targetAmount / title
    dispatch(getPostingInfo())
      .then((res) => {
        console.log(res.payload);
        setContent(res.payload.content);
        setStartDate(res.payload.startDate);
        setEndDate(res.payload.endDate);
        setTitle(res.payload.title);
        setSubTitle(res.payload.subTitle);
        setTargetAmount(res.payload.targetAmount);
        setMainImage(res.payload.image);
      })
      .catch((err) => {
        console.log(err);
        alert('해당 게시물이 없습니다.')

      });

  }, []);

  return (
    <div>
      {/* 제목에 대한 정보가 있을 경우에만 렌더링 ! */}
      {(Title) && <HeaderBody>
        <HeaderTitle><strong>{Title}</strong></HeaderTitle>
        <HeaderSubTitle><strong>{SubTitle}</strong></HeaderSubTitle>
        <Badge>
          {/* <HeaderBadge1 href='/'></HeaderBadge1>
          <HeaderBadge2 href='/'></HeaderBadge2> */}

        </Badge>
      </HeaderBody>}
      <MainBody>
        <MainContent dangerouslySetInnerHTML={{ __html: Content }}></MainContent>
        {/* <MainContent>{Content}</MainContent> */}
        <MainContent />
        {StartDate && <div>시작일:{StartDate}</div>}
        <MainContent />
        {EndDate && <div>종료일 : {EndDate}</div>}
        <MainContent />
        {TargetAmount && <div>기부 금액 {EndDate}</div>}
        {/* <MainContent />
          {<div>기부 금액 {TargetAmount}</div>} */}
      </MainBody>
      <CommentDonateAmount><strong>카카오 지원 댓글 기부금</strong>&nbsp;&nbsp;&nbsp;69,900원</CommentDonateAmount>
      <CommentBody>
        <CommentBox>

          <CommnetBoxTop>
            <CompmentUserImg />
            <CommenttInput onChange={onCommentHandler} placeholder='댓글을 입력해주세요.' />
          </CommnetBoxTop>

          <CommnetBoxBottom>
            <CommentCountLen>{Comment}/500</CommentCountLen>
          </CommnetBoxBottom>

        </CommentBox>
      </CommentBody>
      <DonateContent>
        <CheerupBtn>응원</CheerupBtn>
        <ShareBtn>공유</ShareBtn>
        <ModalBtn onClick={modalOpen} >모달창 열기</ModalBtn>
        {/* 모달창 */}
        {
          visible ? <Modal closeModal={() => {
            // console.log('닫힘함수 불려짐')
            setVisible(!visible)
          }} /> : null
        }
      </DonateContent>


    </div>
  )
}

const DonateContent = styled.div`
position: fixed;
left:1000px;
bottom:400px;;`;

const CheerupBtn =styled.button``;
const ShareBtn = styled.button``;
const ModalBtn = styled.button`
`;

const CommnetBoxTop = styled.div`
margin-left : 400px;
margin-right : 400px;
height : 9vh;
width : 100vw;
display : flex;

border-top: 2px solid #555;
// border-bottom: 2px solid #555;
// justify-content : center;
// align-items : center;
// text-align : center;
`
const CommnetBoxBottom = styled.div`
margin-left : 400px;
margin-right : 400px;
height : 18vh;
width : 100vw;
display : flex;

// border-top: 2px solid #555;
// border-bottom: 2px solid #555;
justify-content : center;
align-items : center;
text-align : center;
`
const CommentCountLen = styled.span`
margin-top : 150px;
// justify-content : center;
// align-items : center;
// text-align : center;
`
const CommentDonateAmount = styled.div`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 10px;
// height : 10vh;
width : 100vw;
display : flex;
// justify-content : center;
// align-items : center;
// text-align : center;
`

const CompmentUserImg = styled.div`
margin-top : 30px;
margin-right : 30px;
border-radius : 100px;
width : 6.5vw;

height : 7.5vh;
background-image : url('https://t1.kakaocdn.net/together_image/common/avatar/avatar02.png');
background-size : 100% 105%;

`
const CommentBody = styled.div`
height : 10vh;
width : 100vw;
display : flex;
justify-content : center;
// align-items : center;
// text-align : center;
margin-bottom : 100px;
`
const CommentBox = styled.div`
margin-left : 400px;
margin-right : 400px;
height : 18vh;
width : 100vw;
display : flex;

// border-top: 2px solid #555;
// border-bottom: 2px solid #555;
// justify-content : center;
// align-items : center;
// text-align : center;
`

const CommenttInput = styled.textarea`
display : inline-block;
margin-top : 30px;
width : 50vw;
height : 7.5vh;
// justify-content : center;
// align-items : center;
text-align : top;
word-wrap:break-all;
resize : none
`

const HeaderBody = styled.div`
height : 30vh;
width : 100vw;
// margin : 0 100px 0 100px;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
text-align : center;

border-radius : 0 0 100px 100px;
background-image : url('https://mud-kage.kakaocdn.net/dn/AqJsP/btrF6Jyjjo3/69hb6GedUfaZK1AkYMvtLk/c360.jpg');
background-repeat : no-repeat;
background-size : 100% 100%;
`
const HeaderTitle = styled.div`
color : yellow;
font-size : 30px;
margin-bottom : 30px;
`
const HeaderSubTitle = styled.div`
color : yellow;
font-size : 20px;
margin-bottom : 30px;
`
const Badge = styled.div`
display :flex;

`
const HeaderBadge1 = styled.a`
width : 75px;
height : 75px;
margin-right : 30px;
background-image : url('https://mud-kage.kakaocdn.net/dn/cRjwbj/btqcJZu03fz/LJSNXRJJn559j5BLYyqWmk/img.png');
background-size : 100% 100%;
// https://mud-kage.kakaocdn.net/dn/dI7DWU/btqcJRwYRKy/jj9bqXHm7Es7Ui0r9dVIMk/img.png
`
const HeaderBadge2 = styled.a`
width : 75px;
height : 75px;
background-image : url('https://mud-kage.kakaocdn.net/dn/dI7DWU/btqcJRwYRKy/jj9bqXHm7Es7Ui0r9dVIMk/img.png');
background-size : 100% 100%;
`

const MainBody = styled.div`
height : 100vh;
width : 100vw;
display : inline-block;
justify-content : center;
// align-items : center;
text-align : center;
`
const MainContent = styled.div`
margin-right  : 400px;
margin-left : 400px;
// overflow : hidden;
word-break:break-all;
`

const ModalOpenBtn = styled.button``;
// const LoginContainer = styled.div`
// position : relative;
// flex-direction: column;
// display : flex;
// justify-content : center;
// align-items : center;
// border-radius:20px;
// background-color : rgba(0,0,0, .75);
// top : 30px;
// width : 30vw;
// // min-height : 100vh;
// height : 70vh;
// margin : auto auto 50px;
// padding : 20px;
// `;

// const LoginBox = styled.div`
// position : relative;
// // border-radius : 20px;
// width : 90%;
// height : 90%;
// padding : 0px 25px ;

// `

// const InputBox = styled.div`
// position : relative;
// width : 100%;
// height : 100%;
// // border : 2px solid blue;
// // background-color : green;
// `

// const LoginTitle = styled.h1`
// justify-content : center;
// align-items : center;
// width : 100%;
// // background-color : white;
// display : inline;
// color : white;
// `

// const IdInput = styled.input`

// margin : 50px 0px 0px 0px;
// position : relative;
// background-color : white;
// border-radius : 15px;
// border : 0;
// outline : 0;
// width : 100%;
// height : 7vh;
// ::placeholder {
//   color : black;
// }
// `
// const PasswordInput = styled.input`
// margin : 50px 0px 0px 0px;
// position : relative;
// border-radius : 15px;
// border : 0;
// outline : 0;
// background-color : white;
// width : 100%;
// height : 7vh;
// ::placeholder {
//   color : black;
// }
// `

// const LoginBtn = styled.button`
// margin : 50px 0px 0px 0px;
// position : relative;
// border-radius : 15px;
// border : 0;
// outline : 0;
// background-color : white;
// width : 100%;
// height : 50px;
// &:hover{
//   cursor : pointer;
// }
// `

// const SignupText = styled.h2`
// justify-content : center;
// align-items: center;
// margin : 6% 0px 0px 0px;
// display : flex;
// color : yellow;
// `
// const SubBtn = styled.div`
// position : relative;
// margin : 7.5% 0 0 10%;
// display : flex;
// width : 100%;
// `
// const SearchText = styled.h4`
// margin : 0 15% 0% 0;
// color : gainsboro;
// `
// const FindBtn = styled.div`

// margin-right : 30px;
// display : inline;
// font-size : 16px;
// color : yellow;
// `




export default PostingTest;