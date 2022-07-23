import React, { useState } from 'react'
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Title from 'antd/lib/skeleton/Title';

const DonateSuggestForm = () => {

    const [suggestContent, setSuggestContent] = useState({
        title: '',
        subTitle: '',
        content: ''
    })

    const getValue = e => {
        const {name, value} = e.target;
        console.log(name, value);
    }

    return (
        <Box>
            <Content></Content>
            <Content>
                
                    <Tilte type='text' placeholder='제목' name="title" onchange={getValue} ></Tilte>
                    <SubTitle type={'subTitle'} placeholder='부제목' onchange={getValue} name='sub-title'></SubTitle>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                    <p>주제</p>
                    <p>대상</p>
                    <p>목표금액</p>
                    <p>시작일</p>
                    <p>종료일</p>
                    <p>링크</p>
                    <p>태그명</p>
                    {/* 수정                 */}
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

const Tilte = styled.input`
margin: 10px;`;
const SubTitle = styled.input`
margin: 10px;`;

export default DonateSuggestForm;