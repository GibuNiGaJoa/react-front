import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { getPostingAllRandom } from '../actions/getPostingAction';

const GetContent = () => {

    const dispatch =useDispatch();

    const [contents,setContents] = useState([]);

    useEffect(() => {
        dispatch(getPostingAllRandom())
        .then((res) => {
          console.log(res.payload);
          setContents(res.payload.post);
        })
        .catch((err) => console.log(err));
    
      }, []);

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

export default GetContent;