import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage2 from "../../assets/img/laptop.jpeg";

export default function Careers() {
  return (
    <Wrapper id="careers">
      <div className="lightBg">
        <div className="container">
          <AddLeft>
            <ImgWrapper className="flexCenter">
              <img className="radius8" src={AddImage2} alt="add" />
              <div class="text-overlay">
                <h2>Careers</h2>
              </div>
            </ImgWrapper>
          </AddLeft>
          <h2 className="font40 extraBold" style={{ textAlign: "center" }}>
            Latest Openings
          </h2>
          <p className="font20" style={{ textAlign: "center" }}>
            We currently don’t have any jobs available. Please check back
            regularly, as we frequently post new jobs. In the meantime, you can
            also send through your resume, which we’ll keep on file.
          </p>
          <ButtonsRow
            className="flexNullCenter"
            style={{ width: "50%", margin: "auto" }}
          >
            <FullButton
              style={{ width: "20px", }}
              title="Send Us Resume"
              action={() => alert("Email: delightfulengineering@gmail.com")}
            />
          </ButtonsRow>
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
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 100%;

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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 5% 0;
  img {
    filter: grayscale(100%);
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
