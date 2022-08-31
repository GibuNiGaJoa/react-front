import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import {
  getPostingAllRandom
} from '../actions/getPostingAction';


const Area = styled.div`
`;

const BannerSlider = () => {

  const [slides, setSlides] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostingAllRandom())
      .then((res) => {
        console.log(res.payload);
        setSlides(res.payload.post.slice(0,3));
      })
      .catch((err) => console.log(err));

  }, []);

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
                    <h4>by {slide.proposer}</h4>
                    <h1>{slide.title}</h1>
                    <p>{slide.p}</p>
                  </Content>
                  <Img src={slide.image} />
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




