import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import avatar from "../img/avatar05.png"
import { useDispatch } from 'react-redux';
import { getDonationMember } from '../actions/donationAction';
import axios from 'axios';
import { map } from 'jquery';

const MyPageForm = () => {
    const dispatch = useDispatch();
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('jwtToken')}`;
        dispatch(getDonationMember())
            .then((res) => {
                console.log(res.payload);
                setDonations(res.payload);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <Box>
            <Content>
                <NicknameContent>
                    <table>
                        <tr>
                            <td>
                                <tr>
                                    <td ><h4>기부천사</h4></td>
                                </tr>
                                <tr>
                                    <td ><h2>재원</h2></td>
                                </tr>
                                <tr>
                                    <td><a href='#'>설정</a></td>
                                </tr>
                            </td>
                            <td><img src={avatar}></img></td>
                        </tr>
                    </table>
                </NicknameContent>
                <DonationDetail>
                    <h3>기부내역</h3>
                    {donations.map((donation) => {
                        return (
                            <div>
                                <table>
                                    <tr>
                                        <td colSpan={2}><h5>{donation.donationDate.substr(0,10)}</h5></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}> <h5>{donation.postTitle}</h5></td>
                                    </tr>
                                    <tr>
                                        <td><h5>{donation.donationAmount}</h5></td>
                                        <td><h5>{donation.donationType}</h5></td>
                                    </tr>
                                </table>
                            </div>
                        )
                    })
                    }
                </DonationDetail>
                <CommentDetail>
                    <h3>댓글</h3>
                </CommentDetail>
            </Content>
        </Box>
    );
};
const NicknameContent = styled.div``;
const DonationDetail = styled.div``;
const CommentDetail = styled.div``;
const Box = styled.div`
font-size: 20px;
font-weight: 400;
font-family: "NavbarFont";
display:flex;
`;
const Content = styled.div`
margin: auto;
width:30%;
text-align : center;
`;

export default MyPageForm;