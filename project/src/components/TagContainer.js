import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchRandomTag } from "../actions/searchAction";

const TagContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [randTag, setRandTag] = useState([]);
    useEffect(()=> {
      dispatch(getSearchRandomTag())
      .then((res) => {
        setRandTag(res.payload.tag.slice(0,5));
        console.log(randTag);
      })
    }, [])
    const tagColor = ['#FF7A85', '#369F36', '#6E6ED7', '#0A6E0A', '#D79F59']
    
      const Click = (e) => {
        navigate(`/tags/${e.target.innerHTML}`,
          {
            state : {name : e.target.innerHTML}
          }
        )
      }

    return(
        <Container>
            {randTag.map((tag, index) => {
                return(
                  <ButtonContainer>
                  <TagButton color={tagColor[index]} onClick={Click}>{tag.name}</TagButton>
                  </ButtonContainer>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
display: inline;
position: absolute;
top: 30%;
right:85%;
`;

const ButtonContainer = styled.div`
margin-left:50px;
margin-top:10px;
`;

const TagButton = styled.button`
padding: 0.375rem 0.75rem;
border-radius: 10%;
font-size: 20px;
font-weight: 400;
font-family: "NavbarFont";
border: 1px solid ${(props) => props.color};
background : white;
color: ${(props) => props.color};
&:hover{
    background: ${(props) => props.color};
    color: white;
  }

`;


export default TagContainer;