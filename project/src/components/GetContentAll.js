import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import {
    getPostingAllRandom, getPostingAllUpdate, getPostingAllEnddate,
    getPostingKids, getPostingYoung, getPostingWoman, getPostingOlds, getPostingDisabled, getPostingSocial,
    getPostingEarth, getPostingNeighborhood, getPostingAnimal, getPostingEnvironment
} from '../actions/getPostingAction';

const GetContentAll = ({ type }) => {

    const dispatch = useDispatch();

    const [contents, setContents] = useState([]);

    useEffect(() => {
        if (type === 'random') {
            dispatch(getPostingAllRandom())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'update') {
            dispatch(getPostingAllUpdate())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));

        } else if (type === 'enddate') {
            dispatch(getPostingAllEnddate())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'kids') {
            dispatch(getPostingKids())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'young') {
            dispatch(getPostingYoung())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        }
        else if (type === 'woman') {
            dispatch(getPostingWoman())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'olds') {
            dispatch(getPostingOlds())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'disabled') {
            dispatch(getPostingDisabled())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'social') {
            dispatch(getPostingSocial())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'earth') {
            dispatch(getPostingEarth())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        } else if (type === 'neighborhood') {
            dispatch(getPostingNeighborhood())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        }else if (type === 'animal') {
            dispatch(getPostingAnimal())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        }else if (type === 'environment') {
            dispatch(getPostingEnvironment())
                .then((res) => {
                    console.log(res.payload);
                    setContents(res.payload.post);
                })
                .catch((err) => console.log(err));
        }
    }, [type]);

    return (
        <ContentBox>
            {contents.map((content) => {
                return (
                    <Content>
                        <Img src={content.image} />
                        <InnerContent>
                            <h3>{content.title}</h3>
                            <p>by {content.proposer}</p>
                        </InnerContent>
                    </Content>
                )
            })}
        </ContentBox>
    );
};

const ContentBox = styled.div`
display: flex;
text-align: center;
flex-wrap: wrap;
`;
const Content = styled.div`
flex:auto;
width: 25%;
margin-bottom: 10px;
`;
const InnerContent = styled.div``;
const Img = styled.img`
width: 300px;
height: 200px;
border-radius: 10%;
transition: 0.3s;
&:hover{
    transform:scale(1.1);
}
`;

export default GetContentAll;