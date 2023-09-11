import React from "react";
import styled from "styled-components";
// Components
import BrandSlider from "../Elements/BrandSlider";
// Assets
import electricalServices from "../../assets/img/electricalServices.jpg";
import interiorDesigining from "../../assets/img/interiorDesigining.jpg";
import solarEnergy from '../../assets/img/solarEnergy.jpg';
import generalSupplies from '../../assets/img/generalSupplies.png';

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <h1 className="textCenter font30">
            We deal in sales of these brands
          </h1>

          <BrandSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold textCenter">Services We Offer</h1>
            <p className="font20 textCenter">
              We provide all facets of Electrical and Automation system
              engineering services from project management and conceptual design
              right through to final site commissioning
              <br />
            </p>
          </HeaderInfo>

          <div className="flexSpaceCenter serviceContainer">
            <div className="servicesDiv">
              <Img src={electricalServices} alt="Electrical Services" />
              <div
                style={{ position: "relative", top: "-180px", color: "white" }}
              >
                <h3 className="textCenter">Electrical Services</h3>
                <ol
                  style={{
                    listStyleType: "lower-roman",
                    position: "relative",
                    left: "40px",
                  }}
                >
                  <li>Industrial</li>
                  <li>Residential</li>
                  <li>Commercial</li>
                </ol>
              </div>
            </div>

            <div className="servicesDiv">
              <Img src={generalSupplies} alt="Electrical Services" />
              <div
                style={{ position: "relative", top: "-180px", color: "white" }}
              >
                <h3 className="textCenter">General Supplies</h3>
                <ol
                  style={{
                    listStyleType: "lower-roman",
                    position: "relative",
                    left: "40px",
                  }}
                >
                  <li>Electrical & Electronics</li>
                  <li>Industrial Machinery</li>
                  <li>Safety Gadgets</li>
                  <li>Hardware & Tools</li>
                </ol>
              </div>
            </div>

            <div className="servicesDiv">
              <Img src={solarEnergy} alt="Electrical Services" />
              <div
                style={{ position: "relative", top: "-180px", color: "white" }}
              >
                <h3 className="textCenter">Solar Power Energy</h3>
                <ol
                  style={{
                    listStyleType: "lower-roman",
                    position: "relative",
                    left: "40px",
                  }}
                >
                  <li>5kw Energy Solution</li>
                  <li>10kw Energy Solution</li>
                  <li>15kw Energy Solution</li>
                  <li>20kw Energy Solution</li>
                </ol>
              </div>
            </div>

            <div className="servicesDiv">
              <Img src={interiorDesigining} alt="Electrical Services" />
              <div
                style={{ position: "relative", top: "-180px", color: "white" }}
              >
                <h3 className="textCenter">Interior Designing</h3>
                <ol
                  style={{
                    listStyleType: "lower-roman",
                    position: "relative",
                    left: "40px",
                  }}
                >
                  <li>Corporate Office</li>
                  <li>Residential</li>
                  <li>Commercial</li>
                </ol>
              </div>
            </div>
          </div>
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