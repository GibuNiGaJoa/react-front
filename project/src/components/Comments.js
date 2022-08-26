import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { commentPost, getPostingInfo } from '../actions/postingAction';
import likebutton from '../img/likebtn.png'
import { pressLike } from '../actions/commentAction';
// import ava1 from '../img/avatar01.png'
// import ava2 from '../img/avatar02.png'
// import ava3 from '../img/avatar03.png'
// import ava4 from '../img/avatar04.png'
// import ava5 from '../img/avatar05.png'



const Comments = ( {list} ) => {
  const dispatch = useDispatch();
  const location = useLocation();
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
      content : Comment,
      date : new Date()
    }
    if(localStorage.getItem('isLogin') === 'false'){
      alert('로그인을 선행해주세요.');
      console.log(location);
      navigate('/login', {state:{
        from :location.pathname,
        id : location.state.id
      }});
    } else {
      console.log(body);
      axios.defaults.headers.common['Authorization'] =`${localStorage.getItem('jwtToken')}`;
      dispatch(commentPost(location.state.id, body))
      .then((res) => {
        console.log(res.payload);
        alert('등록완료!');
        window.location.reload();
      })
      .catch((err) => console.log(err));
      
    }
  }

  const pressLikeBtn = (e) => {
    if(localStorage.getItem('isLogin') === 'false'){
      alert("로그인을 선행해주세요.");
      navigate('/login', {state:{
        from: location.pathname,
        id : location.state.id
      }})
    } else{
      const postId = e.target.alt;
      axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`
      dispatch(pressLike(postId))
      .then((res) => {
        console.log(res.payload);
        
        window.location.reload();
      })
      .catch((err) => console.log(err))
    }
  }



  return (
  <>
  
  
    

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
  
  <CommentInfo>
      <CommentsCount>
        <strong>댓글
          <span style={{color:"#DC287C"}}>&nbsp;&nbsp;&nbsp;{list.length}</span>
        </strong>
      </CommentsCount>
      <DonatePeopleShowBtn/>
      <DonatePeopleShow>
        <strong>직접 기부자만 보기</strong>
      </DonatePeopleShow>
  </CommentInfo>

      {list.map((item) => {
        return (
          <div>
            <ShowComment>
              <PeoplePicture />
              <ShowBox>
                <PeopleName><strong>{item.nickname}&nbsp;</strong>
                    {
                      item.donationAmount !== null && 
                      <strong>{item.donationAmount}원</strong>
                    }
                </PeopleName>
                <PeopleComment>{item.content}&nbsp;</PeopleComment>
                <SubBtn>
                  <CommentDate>{item.date}</CommentDate>
                  <LikeBtn onClick={pressLikeBtn} >
                    <img style={{width : "30px" , height : '30px'}}src={likebutton} alt={item.id}/>
                    <span style={{fontSize : "20px"}}>좋아요</span>
                    <span style={{fontSize : "22px"}}>&nbsp;&nbsp;{item.likes}</span>
                  </LikeBtn>

                </SubBtn>


              </ShowBox>
              
              {/* {item.id}&nbsp;  */}
            </ShowComment>
          </div>
        )
      })}
    

  </>
    
  )
}

const CommentInfo = styled.div`
margin-left : 400px;
margin-right : 400px;
height : 10vh;

display : flex;
// justify-content : center;
// margin-bottom : 125px;
`
const ShowBox = styled.div`

width : 100%;
display : flex;
flex-direction : column;
padding-left : 10px;
padding
`
const DonatePeopleShowBtn = styled.button`
margin-left : 600px;
height : 2vh;
border-radius : 100%;
margin-right : 5px;
`
const SubBtn = styled.div`
display : flex;
justify-content : right;
`
const LikeBtn = styled.button`
// width : 300px;
outline : 0px;
border : 0px;
background-color : white;
margin-left : 550px;
margin-right: 50px;
margin-top :10px;



`
const DonatePeopleShow = styled.div`
`
const CommentDate = styled.span`
display : flex;
width : 250px;
font-size : 14px;
padding-left :10px;
margin-top : 10px;
// width : auto;
`
const PeopleComment = styled.div`
text-align : left;
background-color : #f7f8f9;
border-radius : 12px;
padding-left : 10px;
padding-top : 10px;
min-height : 3vh;

`
const PeopleName = styled.span`

`
const PeoplePicture = styled.div`
width : 5vw;
heigth : 10vw;
background-image : url('https://yt3.ggpht.com/ytc/AMLnZu88fElvXTdbMhtfvYjqbMGb3ULvOF_jPcBM_LPhIA=s900-c-k-c0x00ffffff-no-rj');
background-size: 100% 100%;
`

const CommentsCount = styled.div`
width : 300px;
display : flex;
`
const ShowComment = styled.div`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 50px;
height : 7.5vh;
// width : 100%;
display : flex;
font-size : 20px;
`
// const CommentDonateAmount = styled.div`
// margin-left : 400px;
// margin-right : 400px;
// margin-bottom : 10px;
// // height : 10vh;
// width : auto;
// display : flex;
// // color : #DC287C;
// `

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
margin-bottom : 125px;
`

export default Comments;