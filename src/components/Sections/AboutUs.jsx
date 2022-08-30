import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/meter.jpg";
import AddImage2 from "../../assets/img/meter2.jpg";
import AddImage3 from "../../assets/img/wiring.jpg";
import AddImage4 from "../../assets/img/tower.jpg";
import meter3 from "../../assets/img/meter3.jpg";
import umer from '../../assets/img/umer.jpeg';
import panels from "../../assets/img/panels.jpg";
import electricalServices from "../../assets/img/electricalServices.jpg";
import interiorDesigining from "../../assets/img/interiorDesigining.jpg";
import solarEnergy from '../../assets/img/solarEnergy.jpg';
import generalSupplies from '../../assets/img/generalSupplies.png';
import services from '../../assets/img/services.png';

export default function AboutUs() {
  return (
    <Wrapper id="aboutus">
      <div className="lightBg">
        <div className="container" style={{ marginTop: '120px' }}>
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <h2 className="font40 extraBold">About Us</h2>
              <p className="font17" style={{textAlign: 'justify'}}>
                Delightful Engineering is a customer focused
                Engineering company specializing in PLC,
                SCADA, Automation and control electrical
                engineering, and energy management systems.
                The business was incorporated in February
                2022 and is 100% Karachi owned. <br /> <br />
                As an electrical engineering company, we
                provide electrical design services to tightly
                integrate both the electrical infrastructure and
                control system to ensure the entire electrical
                system and associated processes function as
                intended.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Contact Us" action={() => alert("Email: delightfulengineering@gmail.com")} />
                </div>
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={umer} alt="office" style={{ width: '240px', height: '406px' }} />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={AddImage2} alt="office" style={{ height: '300px' }} />
                  </AddImgWrapp2>
                </div>
                <div className="flexNullCenter">
                  <AddImgWrapp3>
                    <img src={meter3} alt="office" style={{ height: '130px' }} />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={panels} alt="office" style={{ height: '200px' }} />
                  </AddImgWrapp4>
                </div>
              </AddRightInner>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Img = styled.img`
  filter: brightness(40%);
  height: 250px;
  width: 250px;
  border-radius: 5%;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
`;

const Img2 = styled.img`
  height: 50px;
  width: 50px;
`;