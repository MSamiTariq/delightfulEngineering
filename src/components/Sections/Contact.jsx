import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font20">
              Phone: 03492998565, 03322616722 (For Technical Support)<br />
              Whatsapp: 03324379223 (For RFQ)
              <br />
              Email: delightfulengineering@gmail.com
              <br />
              Address: Mezzanine floor, Chase-Up University Road, Opposite to Sir Syed
              University, Gulshan – Iqbal, Karachi - Pakistan.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
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
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;










