import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import logo from "../../assets/img/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Lab2Handout from '../../assets/Lab2handout.pdf'

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  const downloadFile = () => {
    fetch("https://violet-linda-4.tiiny.site", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        link.href = url;
        link.download = "company profile";

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
      });
  };

  function handleDownload() {
    console.log("Hello");
    const link = document.createElement("a");
    link.href =
      "../../assets/Lab2handout.pdf"; // Replace with the actual path to your PDF file
    link.download = "Lab2handout.pdf"; // Specify the desired filename for the downloaded file
    link.target = "_blank"; // Open the download in a new tab/window
    link.click();
  }

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
          {/* <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <Img src={logo}></Img>
          </Link> */}
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
            <li className="semiBold font20 pointer">
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
            </li>

            <li className="semiBold font20 pointer dropdown">
              {" "}
              {/* Add 'dropdown' class here */}
              <span>About Us</span> {/* Display the dropdown trigger text */}
              <ul className="dropdown-menu">
                {" "}
                {/* Add 'dropdown-menu' class to the nested unordered list */}
                {/* Add the dropdown menu items */}
                <li>
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="history"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    History
                  </Link>
                </li>
                {/* Add more dropdown menu items as needed */}
              </ul>
            </li>

            {/* <li className="semiBold font20 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Projects
              </Link>
            </li> */}
            <li className="semiBold font20 pointer">
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
                Contact
              </Link>
            </li>
            <li onClick={handleDownload} className="semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Company Profile
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
        <button onClick={() => downloadFile()}>
          Download file
        </button>
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
