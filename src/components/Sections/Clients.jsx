import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";

export default function Clients() {
  return (
    <Wrapper id="clients">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <h1 className="textCenter font30">Our Valuable Clients</h1>
          <ClientSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Img = styled.img`
  filter: brightness(50%);
  height: 250px;
  width: 250px;
  border-radius: 5%;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
`;
