import React, { useState } from 'react'
import styled from "styled-components";
import Editor from './Editor';


const DonateSuggestForm = () => {
    const [title, setTitle] = useState('');
    const [subtitle,setSubtitle] = useState('');
    const [editorValue, setEditorValue] = useState('');
    const [topic,setTopic] = useState('');
    const [target,setTarget] = useState('');
    const [targetAmount,setTargetAmount] = useState();
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [link,setLink] = useState('');
    const[tag,setTag] = useState('')

    const EditorChangeInput = (value) => {
        setEditorValue(value);
        console.log(value);
    }
    const onTitleHandler = (e) => {
        setTitle(e.currentTarget.value);
        console.log(title);
    };

    const onSubTitleHandler = (e) => {
        setSubtitle(e.currentTarget.value);
        console.log(subtitle);
    }

    const onTopicHandler = (e) => {
        setTopic(e.currentTarget.value);
        console.log(topic);
    }
    const onTargetHandler = (e) => {
        setTarget(e.currentTarget.value);
        console.log(target);
    }
    const onTargetAmountHandler = (e) => {
        setTargetAmount(e.currentTarget.value);
        console.log(targetAmount);
    }
    const onStartDateHandler = (e) => {
        setStartDate(e.currentTarget.value);
        console.log(startDate);
    }
    const onEndDateHandler = (e) => {
        setEndDate(e.currentTarget.value);
        console.log(endDate);
    }
    const onLinkHandler = (e) => {
        setLink(e.currentTarget.value);
        console.log(link);
    }
    const onTagHandler = (e) => {
        setTag(e.currentTarget.value);
        console.log(tag);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Box>
            <Content></Content>
            <Content>
                <form onSubmit={onSubmitHandler}>
                    <TitleInput onChange={onTitleHandler} type={"title"} value={title} placeholder='제목을 입력하세요.' ></TitleInput>
                    <SubTitleInput onChange={onSubTitleHandler} type={"sub-title"} value={subtitle} placeholder='부제목을 입력하세요.' ></SubTitleInput>
                    <Editor value={editorValue} onChange={EditorChangeInput} />
                    <TopicInput onChange={onTopicHandler} type={"topic"} value={topic} placeholder='주제를 입력하세요.' ></TopicInput>
                    <TargetInput onChange={onTargetHandler} type={"target"} value={target} placeholder='대상을 입력하세요.' ></TargetInput>
                    <TargetAmountInput onChange={onTargetAmountHandler} type={"number"} value={targetAmount} placeholder='목표금액을 입력하세요.' ></TargetAmountInput>
                    <StartDateInput onChange={onStartDateHandler} type={"date"} value={startDate} placeholder='시작일을 입력하세요.' ></StartDateInput>
                    <EndDateInput onChange={onEndDateHandler} type={"date"} value={endDate} placeholder='종료일을 입력하세요.' ></EndDateInput>
                    <LinkInput onChange={onLinkHandler} type={"link"} value={link} placeholder='관련링크를 입력하세요.' ></LinkInput>
                    <TagInput onChange={onTagHandler} type={"tag"} value={tag} placeholder='관련 태그를 입력하세요.' ></TagInput>
                    <SuggestBtn type='submit'>제출하기</SuggestBtn>
                </form>
            </Content>
            <Content></Content>
        </Box>
    )
}

const Box = styled.div`
font-size: 20px;
font-weight: 400;
font-family: "NavbarFont";
display:flex;
width: 100vw;
height: 60vh;
`;
const Content = styled.div`
margin: auto;
width:30%;
justify-content : center;
text-align : center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
`;

const TitleInput = styled.input``;
const SubTitleInput = styled.input``;
const TopicInput = styled.input``;
const TargetInput = styled.input``;
const TargetAmountInput = styled.input``;
const StartDateInput = styled.input``;
const EndDateInput = styled.input``;
const LinkInput = styled.input``;
const TagInput = styled.input``;

const SuggestBtn = styled.button``;


export default DonateSuggestForm;