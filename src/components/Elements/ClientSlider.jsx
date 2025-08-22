import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/Aspin.jpeg";
import ClientLogo02 from "../../assets/img/Gatronova.jpeg";
import ClientLogo03 from "../../assets/img/HiltonPharma.jpeg";
import ClientLogo04 from "../../assets/img/Krystalite.jpeg";
import ClientLogo05 from "../../assets/img/PinnacleFibre.jpeg";
import ClientLogo06 from "../../assets/img/Saami.jpeg";
import ClientLogo07 from "../../assets/img/shafiGlucoChem.jpeg";
import ClientLogo08 from "../../assets/img/MatEnergy.jpeg";
import ClientLogo10 from "../../assets/img/SecurityPapersLogo.jpg";
import ClientLogo11 from "../../assets/img/LuckyElectricPowerCompanyLogo.jpg";
import ClientLogo12 from "../../assets/img/Alrahim.jpg";
import ClientLogo13 from "../../assets/img/SoSafe.jpg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo07} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo08} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo10} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo11} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo12} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo13} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
