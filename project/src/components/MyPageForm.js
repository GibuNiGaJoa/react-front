import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDonationMember, getMyMember } from '../actions/donationAction';
import axios from 'axios';
import man from "../icons/man.gif";
import girl from "../icons/girl.gif";
import Swal from 'sweetalert2';
import { pressLike, removeComment, removeLike } from '../actions/commentAction';
import HeartImg from "../img/Heart.png";
import EmptyHeartImg from "../img/EmptyHeart.png";

const MyPageForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [donations, setDonations] = useState([]);
    const [myContents, setMyContents] = useState([]);
    const [comments,setComments] = useState([]);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
        dispatch(getDonationMember())
            .then((res) => {
                console.log(res.payload);
                setDonations(res.payload);
            })
            .catch((err) => console.log(err));

        dispatch(getMyMember())
            .then((res) => {
                console.log(res.payload);
                console.log(res.payload.comments);
                setMyContents(res.payload);
                setComments(res.payload.comments);
            })
            .catch((err) => console.log(err.respose.data.code));
    }, []);

    const pressLikeBtn = (e) => {
        e.preventDefault();
        console.log(e.target.title);

        if(e.target.title === 'false'){
          const postId = e.target.alt;
          axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`
          dispatch(pressLike(postId))
          .then((res) => {
            console.log(res.payload);
            
            window.location.reload();
          })
          .catch((err) => console.log(err))
        } else if(e.target.title === 'true') {
          const postId = e.target.alt;
          axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`
          dispatch(removeLike(postId))
          .then((res) => {
            console.log(res.payload);
            window.location.reload();
          })
          .catch((err) => console.log(err))
        }
    }
    const onClickTitle = (e) => {
        e.preventDefault();
        const postNum = e.target.className.replace(/[^0-9]/g,'');
        console.log(postNum);
        navigate(`/fundraisings/${postNum}` , {
            state : {
                id : postNum
            }
        })
        
    }

    const removeClick = (e) => {
        Swal.fire({
          icon: 'question',
                text: '댓글을 삭제하시겠습니까?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
                    const postNum=e.target.className.replace(/[^0-9]/g,'');
                    console.log(postNum);
                    dispatch(removeComment(postNum))
                    .then((res) => {
                    window.location.reload();
                    })
                    .catch((err) => {
                    console.log(err);
                    console.log('댓글삭제실패!')
                    });
                    
                }
        })
      }

    return (
        <Box>
            <Content>
                <NicknameContent>
                    {
                        myContents.gender === 'Man'
                        ? <ImgGender src={man}></ImgGender>
                        : <ImgGender src={girl}></ImgGender>
                    }
                    <Nickname><h3>{myContents.memberName}</h3></Nickname>
                </NicknameContent>

                <Donations>
                    <Div>
                        <div>
                            <h2>기부내역</h2>
                            <p><h5>총 기부금</h5></p>
                            <h3>{myContents.totalAmount}원</h3>
                        </div>
                        <div>
                            <Table>
                                <tr>
                                    <td><h5>기부 횟수</h5></td>
                                    <td>{myContents.countDonation}회</td>
                                </tr>
                                <tr>
                                    <td><h5>직접 기부</h5></td>
                                    <td>{myContents.amountDirect}원</td>
                                </tr>
                                <tr>
                                    <td><h5>참여 기부</h5></td>
                                    <td>{myContents.amountParticipation}원</td>
                                </tr>
                            </Table>
                        </div>
                    </Div>
                    {donations.map((donation) => {
                        return (
                            <DonationDetail>
                                <table>
                                    <tr>
                                        <td colSpan={2}>{donation.donationDate.substr(0,10)}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><TitleLink onClick={onClickTitle}className={donation.postId}>{donation.postTitle}</TitleLink></td>
                                    </tr>
                                    <tr>
                                        <td>{donation.donationAmount}원</td>
                                        <td>{donation.donationType}</td>
                                    </tr>
                                </table>
                            </DonationDetail>
                        )
                    })
                    }
                </Donations>
                <br />
                <CommentDetail>
                    <table>
                        <tr>
                            <td><h2>댓글</h2></td>
                            <td style={{color:"red"}}>{myContents.countComment}</td>
                        </tr>
                    </table>
                    {comments.map((comment) => {
                        return (
                            <DonationDetail>
                                <table>
                                    <tr>
                                        <td>{comment.date}</td>
                                    </tr>
                                    <tr>
                                        <td><TitleLink onClick={onClickTitle} className={comment.postId}>{comment.postTitle}</TitleLink></td>
                                    </tr>
                                    <tr>
                                        <td><CommentContentTr>{comment.content}</CommentContentTr></td>
                                    </tr>
                                    <tr>
                                        <td>
                                          <LikeBtnImg onClick={pressLikeBtn} src={comment.likeStatus?HeartImg:EmptyHeartImg} 
                                              alt={comment.commentId} title={`${comment.likeStatus}`}/>
                                        <LikeButton title={`${comment.likeStatus}`} onClick={pressLikeBtn}>좋아요</LikeButton>
                                        <DeleteButton className={comment.commentId} onClick={removeClick}>삭제</DeleteButton></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </table>
                            </DonationDetail>
                        )
                    })
                    }             
                    </CommentDetail>
                <br />
            </Content>
        </Box>
    );
};

const TitleLink = styled.span`
&:hover {
    cursor : pointer;
}
background-color : yellow;
`
const LikeBtnImg = styled.img`
width : 30px;
hegight : 30px;
&:hover {
  cursor : pointer;
}
`
const LikeButton = styled.button`
outline : 0px;
margin-right : 100px;
background-color : #ed789c;
border-radius : 25%;
border : 0px;
&:hover {
  cursor : pointer;
}
`

const DeleteButton = styled.button`
outline : 0px;
margin-right : 100px;
background-color : #789dc5;
border-radius : 25%;
border : 0px;
&:hover {
  cursor : pointer;
}
`

const CommentContentTr = styled.div`
text-align : left;
background-color : #c8c8c8;
border-radius : 12px;
padding-left : 10px;
padding-top : 10px;
min-height : 3vh;
`;
const Table = styled.table`
text-align: right;
`;
const Div = styled.div`
display: flex;
justify-content: space-between;
`;
const ImgGender = styled.img`
width: 200px;
height: 200px;
border-radius: 10%;
`;
const Nickname = styled.div``;
const NicknameContent = styled.div``;
const Donations = styled.div`
text-align: left;
box-shadow: 0 5px 20px silver;`;
const DonationDetail = styled.div`
font-size:20px;
font-weight: 700;
box-shadow: 0 5px 20px silver inset;
`;
const CommentDetail = styled.div`
text-align: left;
box-shadow: 0 5px 20px silver;`;
const Box = styled.div`
font-size: 20px;
font-weight: 400;
font-family: "NavbarFont";
display:flex;
`;
const Content = styled.div`
margin: auto;
width:70%;
text-align : center;
`;

export default MyPageForm;