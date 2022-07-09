import react from "react";
import styled from "styled-components";

const TagContainer = () => {

    const tags = [
        {
          tagText: '#건강한삶',
          tagColor: 'pink'
        },
        {
          tagText: '#계곡에서',
          tagColor: 'green'
        },
        {
          tagText: '#지구촌',
          tagColor: 'blue'
        },
        {
          tagText: '#작은가게가치가게',
          tagColor: 'brown'
        },
        {
          tagText: '#생계지원',
          tagColor: 'yellow'
        }
      ]

    return(
        <Container>
            {tags.map((tag) => {
                return(
                    <ButtonContainer>
                        <a href="#"><Button>{tag.tagText}</Button></a>
                    </ButtonContainer>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
display: inline;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
width:auto;
height: 50px;
`;

export default TagContainer;