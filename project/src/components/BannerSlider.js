import React from "react";
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

  const slides = [
    {
      littleTitle: littleTitle1,
      bigTitle: bigTitle1,
      p: p1,
      img: img1
    },
    {
      littleTitle: littleTitle2,
      bigTitle: bigTitle2,
      p: p2,
      img: img2
    },
    {
      littleTitle: littleTitle3,
      bigTitle: bigTitle3,
      p: p3,
      img: img3
    },
    {
      littleTitle: littleTitle4,
      bigTitle: bigTitle4,
      p: p4,
      img: img4
    },
    {
      littleTitle: littleTitle5,
      bigTitle: bigTitle5,
      p: p5,
      img: img5
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box>
      <div>
        <Slider {...settings}>
          {slides.map((slide) => {
            return (
              <Area>
                <ContainerText>
                  <Content>
                    <h4>{slide.littleTitle}</h4>
                    <h1>{slide.bigTitle}</h1>
                    <p>{slide.p}</p>
                  </Content>
                  <Img src={slide.img} />
                </ContainerText>
              </Area>
            );
          })}
        </Slider>
      </div>
    </Box>
    
  );
}

const Content = styled.div`
margin: 100px auto;
font-family: "NavbarFont";
`;


const ContainerText = styled.div`
display: flex;
justify-content: space-between;
align-item: center;
`;

const Img = styled.img`
  display: block;
  width: 500px;
  height: 300px;
  margin: 100px auto;
  border-radius: 10%;
  overflow: hidden;
  transition: 0.3s;
  &:hover{
    transform:scale(1.2);
  }
`;

const Box = styled.div`
width:70%;
height: 30%;
margin-left: 300px;
`;

export default BannerSlider;




