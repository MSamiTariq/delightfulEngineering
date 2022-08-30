import React from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import eleEng from '../../assets/img/eleEng.jpg';
import current from '../../assets/img/current.jpg';
import board from '../../assets/img/board.jpg';
import board2 from '../../assets/img/board2.jpg';
import grids from '../../assets/img/grids.webp';
import breaker from '../../assets/img/breaker.jpg';
import meter4 from '../../assets/img/meter4.jpg';

import BackgroundSlider from 'react-background-slider'
import BackgroundSlideshow from 'react-background-slideshow'

export default function Header() {
  return (
    <Wrapper id='home'>
      {/* <Img src={eleEng}></Img> */}
      <div style={{ opacity: '0.5', height: '100vh' }}>
        <BackgroundSlideshow images={[eleEng, meter4, board, grids]} animationDelay={4000} />
      </div>

      <Content className="content" style={{ zIndex: '99', width: '60vw' }}>
        Delightful Engineering
        <div className="font25 darkColor" style={{ marginLeft: '250px' }}>
          <Typewriter
            options={{
              strings: ['Delivering Results', 'Exceeding Expectations...'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

      </Content>
      {/* <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">We are Digital Agency.</h1>
          <HeaderP className="font13 semiBold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide> */}
    </Wrapper>
  );
}


const Wrapper = styled.section`
  // padding-top: 80px;
  width: 100%;
`;
const Content = styled.div`
  position: absolute;
  font-size: 60px;
  font-weight: bold;
  // top: 40%;
  // left: 20%;
//   left:0;
// right:0;
// margin-left:auto;
// margin-right:auto;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100vh;
  opacity: 0.5;
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


