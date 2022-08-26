import React from 'react';
import styled from "styled-components";
import backGround from "../img/bg_handinhand.png"

const LastPageForm = () => {
    return (
        <Box>
            <ImgContent>
                <h1>카카오같이가치는<br />누구나 참여하고 변화를 만들어나가는<br />카카오의 사회공헌 플랫폼입니다.</h1>
                <img src={backGround}></img>
                <h3>누구나 사회를 변화시킬 수 있습니다.</h3>
                <p>더 나은 사회를 만들고 싶다면 누구나 공익 프로젝트를 제안하고 모금을 진행할 수 있습니다.</p>
                <h3>공익을 위한 모든 것을 제안할 수 있습니다.</h3>
                <p>이웃과 함께 하는 마을사업, 청년들을 위한 일자리 캠페인 등 더 나은 사회를 위한 프로젝트라면 모두 환영합니다. 다양한 프로젝트를 만들고 만나보세요.</p>
                <h3>함께 할 수 있기에 더욱 즐겁습니다.</h3>
                <p>주위 사람들에게 같이가치 콘텐츠를 알리는 것 만으로도 충분합니다. ♡응원이나 공유만 해도 카카오가 여러분의 이름으로 대신 기부합니다.</p>
            </ImgContent>
        </Box>
    );
};
const Box = styled.div`
text-align: center;`
const ImgContent = styled.div`
color: white;
background-color: #5dcfd0 `;
const Content = styled.div`
`;
export default LastPageForm;