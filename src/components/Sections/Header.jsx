import React from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
// Assets
import eleEng from '../../assets/img/eleEng.jpg';
import board from '../../assets/img/board.jpg';
import grids from '../../assets/img/grids.webp';
import meter4 from '../../assets/img/meter4.jpg';
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
      
    </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;
const Content = styled.div`
  position: absolute;
  font-size: 60px;
  font-weight: bold;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`;



