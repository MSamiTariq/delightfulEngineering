import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage2 from "../../assets/img/meter.jpg";

export default function DirectorMessage() {
  return (
    <Wrapper id="directorMessage">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddRight>
              <h2 className="font40 extraBold">Director's Message</h2>
              <p className="font17" style={{ textAlign: "justify" }}>
                Delightful Engineering has aspired to achieve excellence through
                innovation, quality and commitment to our clients. It is our
                duty to provide the highest level of professionalism and
                performance to meet the needs of our customers as we continue to
                assess and examine new business opportunities. Our
                accomplishments would not be possible without the dedication of
                our employees and management. We appreciate the continuous
                support received from our clients and pledge to provide the best
                service you deserve. To meet the challenges ahead and fulfill
                all our client’s expectations, we have identified a number of
                key growth areas that we intend to focus on in the coming years.
                I look forward to detailing all these and other developments at
                the appropriate time, and our website will remain the ideal
                source of updated information. Thank you for taking the time to
                visit the Delightful Engineering’s Official website and I
                wholeheartedly welcome any constructive feedback you may have.
              </p>
              <div
                style={{
                  marginTop: "20px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                <p>Shahid Aziz</p>
                <p>Managing Director</p>
                <p>Delightful Engineering</p>
              </div>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              ></ButtonsRow>
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
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  width: 100%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
