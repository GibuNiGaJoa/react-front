import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import axios from 'axios';


const Comments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Comment, setComment] = useState('');
  const [CommentLength, setCommentLength] = useState(0);

  const onCommentHandler = (e) => {
    e.preventDefault();
    setCommentLength(e.target.value.length);
    setComment(e.target.value);
  }

  const onCommentPosingHandler = (e) => {
    e.preventDefault();

    let body = {
      content : Comment
    }
    // 로그인 없이 댓글 작성하다 버튼 눌렀을 떄 
    // 로그인 정보 없으면 login화면으로 보내는데, 이때 from이란 인자를 넣어서 전달
    // 로그인폼에서 확인하고 해당 from으로 다시 돌아오게끔함.
    if(localStorage.getItem('isLogin') === 'false'){
      alert('로그인을 선행해주세요.');
      navigate('/login', {state:{from :"/fundraisings/10001"}});
    } else {
      console.log(body.content);
      axios.defaults.headers.common['Authorizaion'] =`${localStorage.getItem('jwtToken')}`;
      // dispatch()
      // alert(body.content);
    }
  }


  return (
  <>
  <CommentDonateAmount >
    <strong>카카오 지원 댓글 기부금 &nbsp;&nbsp;&nbsp;69,900원</strong>
  </CommentDonateAmount >

  <PostingCommentBody>
    <CommentBox onSubmit={onCommentPosingHandler}>

      <CommnentBoxTop>
        <CompmentUserImg />
        <CommenttInput onChange={onCommentHandler} placeholder='댓글을 입력해주세요.' />

      </CommnentBoxTop>
      <CommentBoxBottom>
          <CommentCountLen>{CommentLength}/500</CommentCountLen>
          <CommentPushBtn type='submit'><strong>등록</strong></CommentPushBtn>
      </CommentBoxBottom>

    </CommentBox>
  </PostingCommentBody>
  </>
    
  )
}
const CommentDonateAmount = styled.div`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 10px;
// height : 10vh;
width : auto;
display : flex;
color : #DC287C;
`
const CommentPushBtn = styled.button`
margin-left : 50px;
border : 0;
outline : 0;
border-radius : 50px;
width : 5vw;
font-size : 20px;
heigth : 1vh;
&:hover {
  cursor : pointer;
}
`
const CommnentBoxTop = styled.div`
display : flex;
height : 13vh;
`
const CommentBoxBottom = styled.div`
margin-bottom : 10px;
height : 5vh;
justify-content : right;
align-items : center;
text-align : right;
display : flex;
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
const CommentCountLen = styled.div`
background-color : yellow;
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
resize : none;
`
const CommentBox = styled.form`
margin-left : 400px;
margin-right : 400px;
height : 18vh;
width : 100vw;
display : flex;
flex-direction : column;
border-top: 2px solid #555;
border-bottom: 2px solid #555;
// justify-content : center;
// align-items : center;
`
const PostingCommentBody = styled.div`
height : 10vh;
width : 100vw;
display : flex;
justify-content : center;
margin-bottom : 100px;
`

export default Comments;