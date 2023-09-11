import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import CompanyProfile from "../../assets/DE-CompanyProfile.pdf";
import "./nav.css";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={
          y > 100
            ? {
                height: "100px",
                backgroundColor: "white",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }
            : { height: "100px", backgroundColor: "transparent" }
        }
      >
        <NavInner className="container">
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li className="dropdown semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-80}
              >
                About Us
              </Link>
              <div className="dropdown-content">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="directorMessage"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Director's Message
                </Link>
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="mission"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Mission
                </Link>
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="ourTeam"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Our Team
                </Link>
              </div>
            </li>
            <li className="semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="clients"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Clients
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="careers"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Careers
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact Us
              </Link>
            </li>

            <li className="semiBold font20 pointer">
              <a
                href={CompanyProfile}
                download="DE-CompanyProfile.pdf" // Specify the file name with extension
                target="_blank"
                rel="noreferrer"
              >
                Company Profile
              </a>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

const Img = styled.img`
  margin-top: 20px;
  height: 100px;
`;
