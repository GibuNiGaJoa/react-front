import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TagContainer = () => {
    const navigate = useNavigate();

    const tags = [
        {
          tagText: '# 건강한삶',
          tagColor: '#FF7A85'
        },
        {
          tagText: '# 계곡에서',
          tagColor: '#369F36'
        },
        {
          tagText: '# 지구촌',
          tagColor: '#6E6ED7'
        },
        {
          tagText: '# 작은가게가치가게',
          tagColor: '#0A6E0A'
        },
        {
          tagText: '# 생계지원',
          tagColor: '#D79F59'
        }
      ]
    
      const Click = () => {
        navigate('/suggest')
      }

    return(
        <Container>
            {tags.map((tag) => {
                return(
                    <ButtonContainer>
                        <TagButton color={tag.tagColor} onClick={Click}>{tag.tagText}</TagButton>
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