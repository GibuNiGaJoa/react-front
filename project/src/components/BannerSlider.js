import React, { Component } from "react";
import img1 from "../img/bannerTest1.PNG";
import img2 from "../img/bannerTest2.PNG";
import img3 from "../img/bannerTest3.PNG";
import img4 from "../img/bannerTest4.PNG";
import img5 from "../img/bannerTest5.PNG";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Area = styled.div`

`;



const BannerSlider = () => {

  const littleTitle1 = "모두의 행동"
  const bigTitle1 = "우리 동네 가게, 행동으로 지켜요!"
  const p1 = "첫번째 테스트"

  const littleTitle2 = "같이기부"
  const bigTitle2 = "보행보조기와 함께하는 가벼운 걸음"
  const p2 = "두번째 테스트"

  const littleTitle3 = "모두의 행동"
  const bigTitle3 = "이제는 일터가 아닌 학교로!"
  const p3 = "세번째 테스트"

  const littleTitle4 = "모두의 행동"
  const bigTitle4 = "작은 가게에 정하는 모두의 운동"
  const p4 = "네번째 테스트"

  const littleTitle5 = "같이 기부"
  const bigTitle5 = "마지막 테스트다 시~발!"
  const p5 = "다섯번째 테스트"

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box>
      <div></div>
      <div>
        <Slider {...settings}>
          <Area>
            <ContainerText>
              <div>
                <h4>{littleTitle1}</h4>
                <h1>{bigTitle1}</h1>
                <p>{p1}</p>
              </div>
              <Img src={img1} />
            </ContainerText>
          </Area>
          <Area>
            <div>
              <h4>{littleTitle2}</h4>
              <h1>{bigTitle2}</h1>
              <p>{p2}</p>
            </div>
            <div>
              <img src={img2} />
            </div>
          </Area>
          <Area>
            <div>
              <h4>{littleTitle3}</h4>
              <h1>{bigTitle3}</h1>
              <p>{p3}</p>
            </div>
            <div>
              <img src={img3} />
            </div>
          </Area>
          <Area>
            <div>
              <h4>{littleTitle4}</h4>
              <h1>{bigTitle4}</h1>
              <p>{p4}</p>
            </div>
            <div>
              <img src={img4} />
            </div>
          </Area>
          <Area>
            <div>
              <h4>{littleTitle5}</h4>
              <h1>{bigTitle5}</h1>
              <p>{p5}</p>
            </div>
            <div>
              <img src={img5} />
            </div>
          </Area>
        </Slider>
      </div>
    </Box>
  );
}


const ContainerImg = styled.div`
width: 40%;
height: 100%;
right: 0;
`;

const ContainerText = styled.div`
display: flex;
justify-content: space-between;
align-item: center;

`;

const Img = styled.img`
width: 800px;
height: 500px;
// margin-left: 1000px;
`;

const Box = styled.div`
width:100%;
height: 50%;
`;

export default BannerSlider;




