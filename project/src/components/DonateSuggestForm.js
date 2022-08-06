import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Editor from './Editor';
import Swal from 'sweetalert2'



const DonateSuggestForm = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [editorValue, setEditorValue] = useState('');
    const [topic, setTopic] = useState('');
    const [target, setTarget] = useState('');
    const [targetAmount, setTargetAmount] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [link, setLink] = useState('');
    const [tag, setTag] = useState('')

    const topicSelectList = ['주제선택', '모두의교육', '기본생활지원', '안정된일자리', '건강한삶', '인권평화와역사', '동물', '지역공동체', '더나은사회', '환경'];
    const targetSelectList = ['대상선택', '아동|청소년', '청년', '여성', '실버세대', '장애인', '이주민|다문화', '지구촌', '어려운이웃', '우리사회', '유기동물', '야생동물'];

    const navigate = useNavigate();

    const goBack = () => {
        Swal.fire({
            icon: 'question',
            title: 'Are you sure?',
            text: '뒤로 이동하시겠습니까?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if(result.isConfirmed){
                navigate('/suggest');
            }
        }) 
    }

    const check =
        title == '' ||
        subtitle == '' ||
        editorValue == '' ||
        topic == '' ||
        target == '' ||
        targetAmount == '' ||
        startDate == endDate ||
        tag == '';

    const EditorChangeInput = (values) => {
        setEditorValue(values);
        console.log(values);
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
        let body = {
            title: title,
            subtitle: subtitle,
            content: editorValue,
            topic: topic,
            target: target,
            targetAmount: targetAmount,
            startDate: startDate,
            endDate: endDate,
            link: link,
            tag: tag
        };

        //필수항목 검사
        if (check) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '필수항목을 모두 기입해주세요!'
            })
        }
        else if (editorValue == '' || editorValue == '<p><br></p>') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '게시글 내용 검사 버튼을 클릭해주세요!'
            })
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: '글 등록완료!'
            }).then(()=>{
                navigate('/');
            })
        }

        console.log(body);
    };

    return (
        <Box>
            <Content></Content>
            <Content>

                <form onSubmit={onSubmitHandler}>
                    <table>
                        <caption><h1>기부 제안하기</h1></caption>
                        <tr>
                            <td colSpan={"4"}><em style={{ color: 'red' }}>* </em>은 필수항목입니다</td>
                        </tr>
                        <tr>
                            <td><h3>주제</h3></td>
                            <td><em style={{ color: 'red' }}>* </em>
                                <TopicSelect onChange={onTopicHandler} value={topic} defaultValue={topic} >
                                    {topicSelectList.map((topic) => (
                                        <option value={topic} key={topic}>{topic}</option>
                                    ))}
                                </TopicSelect>
                            </td>
                            <td><h3>대상</h3></td>
                            <td><em style={{ color: 'red' }}>* </em>
                                <TargetSelect onChange={onTargetHandler} value={target} defaultValue={target} >
                                    {targetSelectList.map((target) => (
                                        <option value={target} key={target}>{target}</option>
                                    ))}
                                </TargetSelect>
                            </td>
                        </tr>
                        <tr>
                            <td><h3>제목</h3></td>
                            <td colSpan={"3"}><em style={{ color: 'red' }}>* </em><TitleInput onChange={onTitleHandler} type={"title"} value={title} placeholder='제목을 입력하세요.' ></TitleInput></td></tr>
                        <tr>
                            <td><h3>부제목</h3></td>
                            <td colSpan={"3"}><em style={{ color: 'red' }}>* </em><SubTitleInput onChange={onSubTitleHandler} type={"sub-title"} value={subtitle} placeholder='부제목을 입력하세요.' ></SubTitleInput></td></tr>
                        <tr>
                            <td><h3>목표금액</h3></td>
                            <td colSpan={"3"}><em style={{ color: 'red' }}>* </em><TargetAmountInput onChange={onTargetAmountHandler} type={"number"} value={targetAmount} placeholder='목표금액을 입력하세요.' ></TargetAmountInput></td></tr>
                        <tr>
                            <td colSpan={"4"}><h3>게시글 내용</h3><em style={{ color: 'red' }}>* </em>
                                <Editor values={editorValue} getValues={EditorChangeInput} /></td>
                        </tr>
                        <tr>
                            <td><h3>시작일</h3></td>
                            <td><em style={{ color: 'red' }}>* </em><StartDateInput onChange={onStartDateHandler} type={"date"} value={startDate} placeholder='시작일을 입력하세요.' ></StartDateInput></td>
                            <td><h3>종료일</h3></td>
                            <td><em style={{ color: 'red' }}>* </em><EndDateInput onChange={onEndDateHandler} type={"date"} value={endDate} placeholder='종료일을 입력하세요.' ></EndDateInput></td></tr>
                        <tr>
                            <td><h3>관련 링크</h3></td>
                            <td><em style={{ color: 'white' }}>* </em><LinkInput onChange={onLinkHandler} type={"url"} value={link} placeholder='관련링크를 입력하세요.' ></LinkInput></td>
                            <td><h3>관련태그</h3></td>
                            <td><em style={{ color: 'red' }}>* </em><TagInput onChange={onTagHandler} type={"tag"} value={tag} placeholder='관련 태그를 입력하세요.' ></TagInput></td></tr>
                        <tr>
                            <td><SuggestBtn type='submit'>제출하기</SuggestBtn></td>
                            <td><GobackBtn type="button" onClick={goBack}>뒤로가기</GobackBtn></td>
                        </tr>
                    </table>
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
width:60%;
justify-content : center;
flex-wrap: wrap;
flex-direction: column;
`;

const TitleInput = styled.input`
width: 40vw;
height: 5vh;
`;
const SubTitleInput = styled.input`
width: 40vw;
height: 5vh;`;
const TopicSelect = styled.select`
width:15vw;
height:5vh;
`;
const TargetSelect = styled.select`
width:15vw;
height:5vh;
`;
const TargetAmountInput = styled.input`
width: 15vw;
height: 5vh;`;
const StartDateInput = styled.input`
width:15vw;
height:5vh;`;
const EndDateInput = styled.input`
width:15vw;
height:5vh;`;
const LinkInput = styled.input`
width:15vw;
height:5vh;`;
const TagInput = styled.input`
width:15vw;
height:5vh;`;

const SuggestBtn = styled.button`
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 5px;
border: 3px solid black;
background : white;
color: black;
&:hover{
    background: black;
    color: white;
  }`;
const GobackBtn = styled.button`
font-size: large;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 5px;
border: 3px solid black;
background : white;
color: black;
&:hover{
    background: black;
    color: white;
  }`;


export default DonateSuggestForm;