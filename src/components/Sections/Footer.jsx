import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import logo from "../../assets/img/logo.png";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="greyBg whiteColor">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "10px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <Img src={logo} />
              <h1 className="font15 extraBold" style={{ marginLeft: "15px" }}>
              </h1>
            </Link>
            <StyleP className="font13">
              © {getCurrentYear()} - <span className="font13">Delightfull Engineering</span> All Right Reserved
            </StyleP>

            <Link className="animate pointer font13 whiteColor" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const Img = styled.img`
  height: 100px;
`;