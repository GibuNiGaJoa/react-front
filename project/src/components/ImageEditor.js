import React, { useState, useMemo, useRef } from 'react';
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from 'react-redux';
import { imageConverter } from '../actions/sugggestAction';
import ImageResize from 'quill-image-resize';
import styled from "styled-components";
import Swal from 'sweetalert2'
Quill.register('modules/ImageResize', ImageResize);


const ImageEditor = ({values, getValues}) => {

  const [value, setValue] = useState(''); // 에디터 속 콘텐츠를 저장하는 state
  const quillRef = useRef();

  const dispatch =useDispatch();

  const imageHandler = () => {
    console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작');

    //1. 이미지를 저장할 input type=file 만든다.
    const input  = document.createElement('input');
    //속성 써주기
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.
    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files[0];
      const formData = new FormData();
      formData.append('img', file); // formData는 키-밸류 구조
      // 백엔드에 이미지를 보낸다.
      // for(var key of formData.keys()){
      //   console.log(key);
      // }
      // for(var value of formData.values()){
      //   console.log(value);
      // }

      dispatch(imageConverter(formData)).then((res) => {
        console.log(res);
        if(res.payload){
          console.log(res.payload);
          const IMG_URL = res.payload;
          // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
        // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
        // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.

        // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        // // 1. 에디터 root의 innerHTML을 수정해주기
        // // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // editor.root.innerHTML =
        //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.

        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range, 'image', IMG_URL);
        }
        else{
          console.log("이미지 업로드 실패");
        }
      })
      .catch((err) => {
        console.log(err);
      })
    });
  }

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['image'],
        ],
        handlers: {
          // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import('parchment')
      }
    };
  }, []);

  const formats = [
    'image',
  ];

  const onClickContents = () => {
    const editor = quillRef.current.getEditor();
    // console.log(editor);
    // console.log(editor.root); // 에디터 안의 내용 HTML 태그
    // 현재 에디터 안에 어떤 데이터가 들어있는지 확인해 보자
    console.log(quillRef.current.getEditorContents());
    getValues(quillRef.current.getEditorContents());
    if(!quillRef.current.getEditorContents()||quillRef.current.getEditorContents()=='<p><br></p>'){
      Swal.fire({
        icon: 'error',
        title:'Oops...',
        text: '이미지를 선택하세요!'
    })
    }
    else{
      Swal.fire({
        icon: 'success',
        title:'Good job',
        text: '등록 완료'
    })
    }
  };

 
  return (
    <div style={{height:"50vh"}}>
      
      <ReactQuill
        style={{height:"35vh", width:"20vw"}}
        ref={quillRef}
        theme='snow'
        placeholder='이미지를 선택하세요'
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
      <CheckBtn type='button' onClick={onClickContents} variant="outline-light">이미지 등록</CheckBtn>
    </div>
  );
};

const CheckBtn = styled.button`
margin-top:70px;
font-size: normal;
font-weight:bold;
padding: 0.375rem 0.75rem;
border-radius: 5px;
border: 2px solid black;
background : white;
color: black;
&:hover{
    background: black;
    color: white;
  }
`;
export default ImageEditor;