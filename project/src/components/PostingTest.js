import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { getPostingInfo } from '../actions/postingAction';
import Modal from "../components/Modal"
import Comments from './Comments';
import { useLocation, useMatch, useNavigate, useParams, } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BiDonateHeart } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import HeartButton from './HeartButton';
import Notification from './Notification';
import ShareModal from './ShareModal';
import { donatePost } from '../actions/donationAction';
import axios from 'axios';
import walkAnimation from "../icons/walk_move_ing.gif"
import walk from "../img/img_chart.png"


const PostingTest = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [Title, setTitle] = useState('');
  const [MainImage, setMainImage] = useState('');
  const [Content, setContent] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [SubTitle, setSubTitle] = useState('');

  const [Comment, setComment] = useState('');
  const [CommentLength, setCommentLength] = useState(0);
  const [commentList, setCommentList] = useState([]);


  //기부내역
  const [totalAmount, setTotalAmount] = useState(0); //현재기부내역
  const [TargetAmount, setTargetAmount] = useState(0); //기부목표금액
  const [amountDirect, setAmountDirect] = useState(0);
  const [amountCheer, setAmountCheer] = useState(0);
  const [amountShare, setAmountShare] = useState(0);
  const [amountComment, setAmountComment] = useState(0);
  const [countDirect, setCountDirect] = useState(0); //직접기부 인원수
  const [countAttend, setCountAttend] = useState(0); //참여기부 인원수
  const [amountAttend, setAmountAttend] = useState(0); //참여기부 금액
  const [percent, setPercent] = useState(0); //기부 진행정도

  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var dateString = year + '-' + month + '-' + day;



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
            from: location.pathname,
            id: location.state.id
          }
        });

      })

    } else {
      setVisible(true);
    }

  }
  //찜하기 버튼
  const [like, setLike] = useState();
  

  const heartClick = () => {
    let body = {
      postId: location.state.id,
      donationType: "응원참여",
      donationDate: dateString
    };
    if (like === false) {
      if (localStorage.getItem('isLogin') === 'false') {
        alert('로그인을 선행해주세요.');
        console.log(location);

        navigate('/login', {
          state: {
            from: location.pathname,
            id: location.state.id
          }
        })
      }

      else {
        axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
        console.log(body);
        setLike(true);

        dispatch(donatePost(body)).
          then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }else{
      console.log(like);
      console.log("이미 찜 하였던 게시글입니다.")
    }

  }

  //공유 모달
  const [shareVisible, setShareVisible] = useState(false);
  const shareModalOpen = () => {
    if (localStorage.getItem('isLogin') === 'false') {
      Swal.fire({
        icon: 'question',
        title: 'Ooops...',
        text: '로그인 하셨나요??'
      }).then(() => {
        navigate('/login', {
          state: {
            from: location.pathname,
            id: location.state.id
          }
        });
      })
    } else {
      setShareVisible(true);
    }

  }

  // 내가 생각한건 -> 첫 렌더링 시 통신을 통해 해당 게시글번호에 대한 정보 받아오기 
  useEffect(() => {
    // 0809 14:00 -> content / endDate / startDate / subTitle / targetAmount / title
    // axios.defaults.headers.common['Authorization'] =`${localStorage.getItem('jwtToken')}`;
    dispatch(getPostingInfo(location.state.id))
      .then((res) => {
        // console.log(res.payload);
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
        setCountAttend((amountCheer + amountComment + amountShare) / 100);
        setAmountAttend(amountCheer + amountComment + amountShare);
        setCommentList(res.payload.comment);
        setPercent((totalAmount / TargetAmount * 100).toFixed(2));
        setLike(res.payload.donateCheer);
      })
      .catch((err) => {
        console.log(err);
        alert('해당 게시물이 없습니다.')

      });

  }, [like]);

  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') {
      axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
      dispatch(getPostingInfo(location.state.id))
        .then((res) => {
          // console.log(res.payload);
          setCommentList(res.payload.comment);
        })
        .catch((err) => {
          console.log(err);
          alert('해당 게시물이 없습니다.')

        });
    }
  }, [localStorage.getItem('isLogin')]);

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
        <DonationContent>
          <TotalAmountDiv>{totalAmount}원</TotalAmountDiv>
          <TargetAmountDiv>{TargetAmount}원 목표<br /></TargetAmountDiv>

          <DonateDiv><br />직접기부({countDirect}명) : {amountDirect}원</DonateDiv>
          <DonateDiv>참여기부({countAttend}명) : {amountAttend}원</DonateDiv>
          <div>ㄴ 응원기부 : {amountCheer}원</div>
          <div>ㄴ 댓글기부 : {amountComment}원</div>
          <div>ㄴ 공유기부 : {amountShare}원</div>
        </DonationContent>
        <DonationAnimate>
          <div><img src={walkAnimation}></img>
            <Percent>{percent}%</Percent></div>
        </DonationAnimate>
      </MainBody>

      <CommentDonateAmount >
        <strong>카카오 지원 댓글 기부금
          <span style={{ color: "#DC287C" }}>&nbsp;&nbsp;{amountComment}</span>
        </strong>
      </CommentDonateAmount >
      <Comments list={commentList}>

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
      {/* <Notification state={notiStatus} msg="100원 적립" /> */}
    </Wrapper >
  )
}
const CommentDonateAmount = styled.div`
margin-left : 400px;
margin-right : 400px;
margin-bottom : 10px;
// height : 10vh;
width : auto;
display : flex;
// color : #DC287C;
`
const Percent = styled.span`
font-weight: 500;
font-size:30px;
color: #dc287c;
`;
const DonationAnimate = styled.div``;

const TotalAmountDiv = styled.div`
font-weight: 500;
font-size:70px;
color: #dc287c;`;
const TargetAmountDiv = styled.div`
font-weight: 500;
font-size:25px;
`;
const DonateDiv = styled.div`
font-weight: 500;
font-size:25px;`;
const DonationContent = styled.div`
text-align: center;`;

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
width : 100%;
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
width : 100%;
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