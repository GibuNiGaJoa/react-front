import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { getPostingInfo } from '../actions/postingAction';
import Modal from "../components/Modal"
import Comments from './Comments';
import { useLocation, useMatch, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BiDonateHeart } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import HeartButton from './HeartButton';
import Notification from './Notification';
import ShareModal from './ShareModal';
import { donatePost } from '../actions/donationAction';
import axios from 'axios';


const PostingTest = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [postId, setPostId] = useState('');
  const [Title, setTitle] = useState('');
  const [MainImage, setMainImage] = useState('');
  const [Content, setContent] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [SubTitle, setSubTitle] = useState('');

  const [Comment, setComment] = useState('');
  const [CommentLength, setCommentLength] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchOnKeyword = searchParams.get('keyword') || '';

  //기부내역
  const [totalAmount, setTotalAmount] = useState(0); //현재기부내역
  const [TargetAmount, setTargetAmount] = useState(0); //기부목표금액
  const [amountDirect, setAmountDirect] = useState(0);
  const [amountCheer, setAmountCheer] = useState(0);
  const [amountShare, setAmountShare] = useState(0);
  const [amountComment, setAmountComment] = useState(0);
  const [countDirect, setCountDirect] = useState(0); //직접기부 인원수
  const [countAttend,setCountAttend] = useState(0); //참여기부 인원수
  const [amountAttend,setAmountAttend] = useState(0); //참여기부 금액
  const [donationType, setDonationType] = useState(''); //기부 종류
  
  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var dateString = year + '-' + month  + '-' + day;

  //모달창
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const modalOpen = () => {
    if (localStorage.getItem('isLogin') === 'false') {
      Swal.fire({
        icon: 'question',
        title: 'Ooops...',
        text: '로그인 하셨나요??'
      }).then(() => {
        navigate('/login', {
          state: {
            from: `/fundraisings/now`
          }
        });
      })

    } else {
      setVisible(true);
    }

  }
  //찜하기 버튼
  const [like, setLike] = useState(false);
  const [notiStatus, setNotiStatus] = useState(false);

  const heartClick = () => {
    let body = {
      postId : location.state.id,
      donationType: "응원참여",
      donationDate: dateString
  };
    setLike(!like);
    if (!like) {
      setNotiStatus(true);
      console.log("응원됨");
      console.log(like);
      if(localStorage.getItem('isLogin') === 'false'){
        alert('로그인을 선행해주세요.');
        console.log(location);
        navigate('/login', {state:{
          from :location.pathname,
          id : location.state.id
        }});
      } else {
        axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
        console.log(body);
        dispatch(donatePost(body)).
        then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        })
      }
    } else {
      setNotiStatus(false);
      console.log(like);
    };
  }
  useEffect(() => {
    if (notiStatus) {
      setTimeout(() => {
        setNotiStatus(false);
      }, 1000)
    }
  }, [notiStatus])

  //공유 모달
  const [shareVisible, setShareVisible] = useState(false);
  const shareModalOpen = () => {
    if (localStorage.getItem('isLogin') === 'false') {
      Swal.fire({
        icon: 'question',
        title: 'Ooops...',
        text: '로그인 하셨나요??'
      }).then(() => {
        navigate('/login', { state: { from: "/fundraisings/10001" } });
      })
    } else {
      setShareVisible(true);
    }

  }


  // 내가 생각한건 -> 첫 렌더링 시 통신을 통해 해당 게시글번호에 대한 정보 받아오기 
  useEffect(() => {
    // 0809 14:00 -> content / endDate / startDate / subTitle / targetAmount / title
    dispatch(getPostingInfo(location.state.id))
      .then((res) => {
        console.log(res.payload);
        setMainImage(res.payload.image);
        setContent(res.payload.content);
        setStartDate(res.payload.startDate);
        setEndDate(res.payload.endDate);
        setTitle(res.payload.title);
        setSubTitle(res.payload.subTitle);
        setTargetAmount(res.payload.targetAmount);
        setMainImage(res.payload.image);
        setTotalAmount(res.payload.donation.totalAmount);
        setAmountCheer(res.payload.donation.amountCheer);
        setAmountComment(res.payload.donation.amountComment);
        setAmountShare(res.payload.donation.amountShare);
        setAmountDirect(res.payload.donation.amountDirect);
        setCountDirect(res.payload.donation.countDirect);
        setCountAttend((amountCheer+amountComment+amountShare)/100);
        setAmountAttend(amountCheer+amountComment+amountShare);
        // setPostId(location.state.id);

      })
      .catch((err) => {
        console.log(err);
        alert('해당 게시물이 없습니다.')

      });

  }, [totalAmount,amountCheer,amountComment,amountShare, amountDirect, countDirect, countAttend, amountAttend]);

  const onCommentHandler = (e) => {
    e.preventDefault();
    setCommentLength(e.target.value.length);
    setComment(e.target.value);

  }

  const onCommentPosingHandler = (e) => {
    e.preventDefault();

    let body = {
      content: Comment
    }
    dispatch()


  }


  return (
    <Wrapper>
      {/* 제목에 대한 정보가 있을 경우에만 렌더링 ! */}
      {(Title) && <HeaderBody img={MainImage}>
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
        <div>{totalAmount}원</div>
        <div>{TargetAmount}원 목표</div>
        <div>직접기부({countDirect}명) : {amountDirect}원</div>
        <div>참여기부({countAttend}명) : {amountAttend}원</div>
        <div>응원기부 : {amountCheer}원</div>
        <div>댓글기부 : {amountComment}원</div>
        <div>공유기부 : {amountShare}원</div>
        {/* <MainContent />
          {<div>기부 금액 {TargetAmount}</div>} */}
      </MainBody>

      <Comments id={location.state.id}>

      </Comments >
      <DonateContent>
        <table>
          <tr><HeartButton like={like} onClick={heartClick} /></tr>
          <tr><ShareBtn onClick={shareModalOpen}><BsShare /> 공유하기</ShareBtn>
            {/* 공유 모달창 */}
            {
              shareVisible ? <ShareModal closeModal={() => {
                // console.log('닫힘함수 불려짐')
                setShareVisible(!shareVisible)
              }} /> : null
            }</tr>
          <tr><ModalBtn onClick={modalOpen} ><BiDonateHeart /> 기부하기</ModalBtn>
            {/* 모달창 */}
            {
              visible ? <Modal closeModal={() => {
                // console.log('닫힘함수 불려짐')
                setVisible(!visible)
              }} /> : null
            }</tr>
        </table>
      </DonateContent>
      <Notification state={notiStatus} msg="100원 적립" />
    </Wrapper >
  )
}
const Wrapper = styled.div`
font-family: "NavbarFont";
`;
const DonateContent = styled.div`
position: fixed;
bottom:400px;
`;


const ShareBtn = styled.button`
width:300px;
height: 50px;
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 3px;
border: 3px solid #444;
background : #444;
color: white;
&:hover{
  background: #5a5a5a;
}`;
const ModalBtn = styled.button`
width:300px;
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
  }
`;

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
background-image : url(${props => props.img ? props.img : null});
background-repeat : no-repeat;
background-size : 100% 150%;
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




export default PostingTest;