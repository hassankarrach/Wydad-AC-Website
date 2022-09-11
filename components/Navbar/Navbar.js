import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LanguageDropDown from "./LanguageDropDown";
import MyWydad from "./MyWydad";
//Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//FramerMotion
import { motion, AnimatePresence } from "framer-motion";
import Fade from "@mui/material/Fade";

const Football = [
  {
    title: "Players",
    to: "players",
    id: 0,
  },
  {
    title: "News",
    to: "news",
    id: 1,
  },
  {
    title: "Match Schedule",
    to: "schedule",
    id: 2,
  },
  {
    title: "Standings",
    to: "standings",
    id: 6,
  },
  {
    title: "Results",
    to: "fixtures-results/0",
    id: 3,
  },
  {
    title: "Acheivements",
    to: "acheivements",
    id: 5,
  },
];

const Club = [
  {
    title: "history",
    to: "history",
    id: 0,
  },
  {
    title: "management",
    to: "management",
    id: 1,
  },
  {
    title: "wydad presidents",
    to: "presidents",
    id: 2,
  },
  {
    title: "partners",
    to: "partners",
    id: 3,
  },
  {
    title: "supporters",
    to: "supporters",
    id: 4,
  },
];

const MobileMenu = [
  {
    id: 0,
    title: "Football",
    data: [
      {
        title: "Players",
        to: "players",
        id: 0,
      },
      {
        title: "News",
        to: "news",
        id: 1,
      },
      {
        title: "Match Schedule",
        to: "schedule",
        id: 2,
      },
      {
        title: "Standings",
        to: "standings",
        id: 6,
      },
      {
        title: "Results",
        to: "fixtures-results/0",
        id: 3,
      },
      {
        title: "Acheivements",
        to: "acheivements",
        id: 5,
      },
    ],
  },
  {
    id: 1,
    title: "Club",
    data: [
      {
        title: "history",
        to: "history",
        id: 0,
      },
      {
        title: "management",
        to: "management",
        id: 1,
      },
      {
        title: "wydad presidents",
        to: "presidents",
        id: 2,
      },
      {
        title: "partners",
        to: "partners",
        id: 3,
      },
      {
        title: "supporters",
        to: "supporters",
        id: 4,
      },
    ],
  },
];

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  display: block;
  background-color: white;
  padding: 0px 10%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 99;
  @media (max-width: 768px) {
    padding: 0px 5%;
  }

  .LeftNav {
    display: flex;
    height: 100%;
    .LogoHolder {
      background-color: red;
      padding: 6px;
      .NavLogo {
        height: 100%;
        cursor: pointer;
      }
    }

    .List {
      list-style: none;
      display: flex;
      margin: 0;
      width: auto;
      padding: 0px 20px;
      @media (max-width: 768px) {
        display: none;
      }
      .special {
        color: var(--Red);
      }
      .NavItem {
        cursor: pointer;
        font-size: 1rem;
        transition: 0.2s ease-in-out;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 8px;

        :hover .MegaMenu,
        :focus .MegaMenu {
          opacity: 1;
          visibility: visible;
        }
        .MegaMenu {
          position: absolute;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.5) 100%
          );

          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          height: auto;
          left: 0;
          width: 100%;
          top: 70px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
          padding: 0px 10%;
          opacity: 0;
          visibility: hidden;
          transition: 0.25s ease-in-out;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .WydadLogogs {
            width: 20%;
            margin-left: auto;
            opacity: 0.2;
          }

          .MegaMenuUl {
            padding: 30px;
            list-style: none;

            li {
              color: #181818;
              margin: 10px;
              &:hover {
                color: var(--Red);
              }
            }
          }
        }

        &:hover {
          color: var(--Red);
        }
      }
    }
  }
  .RightNav {
    display: flex;
    margin-left: auto;
    .MyWydadHolder {
      @media (max-width: 768px) {
        display: none;
      }
    }
    .LanguageDropDown {
      @media (max-width: 768px) {
        display: none;
      }
    }

    .HambergerMenu {
      display: none;
      z-index: 999;
      @media (max-width: 768px) {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #nav-icon3 {
        width: 40px;
        height: 30px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        z-index: 999;
      }
      #nav-icon3 span {
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background: var(--Red);
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
      }
      #nav-icon3 span:nth-child(1) {
        top: 0px;
      }
      #nav-icon3 span:nth-child(2),
      #nav-icon3 span:nth-child(3) {
        top: 13px;
      }
      #nav-icon3 span:nth-child(4) {
        top: 26px;
      }
      #nav-icon3.open span:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
      #nav-icon3.open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      #nav-icon3.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      #nav-icon3.open span:nth-child(4) {
        width: 0%;
        left: 50%;
      }
    }
  }
`;

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [MobileItemToggle, setMobileItemToggle] = useState(false);
  const [ClubMobileItemToggle, setClubMobileItemToggle] = useState(false);
  return (
    <>
      <StyledNavbar className="Nav">
        <div className="LeftNav">
          <div className="LogoHolder">
            <Link href={"/"}>
              <img
                className="NavLogo"
                src={"/assets/Media/Logos/Wac.png"}
                alt="Wydad Ac Logo"
                layout="intrinsic"
              />
            </Link>
          </div>

          <ul className="List">
            <li className="NavItem">
              Football
              <div className="MegaMenu">
                <ul className="MegaMenuUl">
                  {Football.map((Item) => {
                    return (
                      <Link href={`/football/${Item.to}`} key={Item.id}>
                        <li key={Item.id}>{Item.title}</li>
                      </Link>
                    );
                  })}
                </ul>
                <img
                  className="WydadLogogs"
                  src={"/assets/Media/Logos/wydadLogos.png"}
                />
              </div>
            </li>
            <Link href={"/news"}>
              <li className="NavItem">News</li>
            </Link>
            <li className="NavItem">
              club
              <div className="MegaMenu">
                <ul className="MegaMenuUl">
                  {Club.map((Item) => {
                    return (
                      <Link href={`/club/${Item.to}`} key={Item.id}>
                        <li>{Item.title}</li>
                      </Link>
                    );
                  })}
                </ul>

                <img
                  className="WydadLogogs"
                  src={"/assets/Media/Logos/wydadLogos.png"}
                />
              </div>
            </li>
            <li className="NavItem">Store</li>
            <li className="NavItem">Tickets</li>
            <Link href={"/fantasy"}>
              <li className="NavItem special">Fantasy</li>
            </Link>
          </ul>
        </div>

        <div className="RightNav">
          <div className="MyWydadHolder">
            <MyWydad />
          </div>
          <div className="LanguageDropDown">
            <LanguageDropDown />
          </div>

          <div className="HambergerMenu">
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              id="nav-icon3"
              className={`${toggle ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </StyledNavbar>
      <Fade in={toggle} timeout={460}>
        <StyledMenu
          isActive={MobileItemToggle}
          isAClubActive={ClubMobileItemToggle}
        >
          <div className="OverlayContent">
            <ul>
              <li className="Item">
                <div
                  className="UlTitle"
                  onClick={() => {
                    setMobileItemToggle(!MobileItemToggle);
                  }}
                >
                  Football
                  <ChevronRightIcon className="Icon" />
                </div>
                <ul className={`InnerUL ${MobileItemToggle ? "open" : ""}`}>
                  <li>Players</li>
                  <li>News</li>
                  <li>Match Schedule</li>
                  <li>Standings</li>
                  <li>Results</li>
                  <li>Achievements</li>
                </ul>
              </li>

              <li className="Item">
                <div
                  className="UlTitle"
                  onClick={() => {
                    setClubMobileItemToggle(!ClubMobileItemToggle);
                  }}
                >
                  club
                  <ChevronRightIcon className="Icon" />
                </div>
                <ul className={`InnerUL ${ClubMobileItemToggle ? "open" : ""}`}>
                  <li>history</li>
                  <li>management</li>
                  <li>wydad presidents</li>
                  <li>partners</li>
                  <li>supporters</li>
                </ul>
              </li>

              <li className="Item">
                <div className="UlTitle">News</div>
              </li>
              <li className="Item">
                <div className="UlTitle">Store </div>
              </li>

              <li className="Item">
                <div className="UlTitle">Tickets </div>
              </li>
            </ul>

            <img
              className="BottomLogo"
              src={"./assets/Media/Logos/WydadFull.png"}
            />
          </div>
        </StyledMenu>
      </Fade>
    </>
  );
}

export const StyledMenu = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 100%
  ); */
  background: linear-gradient(
    0deg,
    rgba(200, 16, 46, 0.4) 0%,
    rgba(200, 16, 46, 1) 100%
  );
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 92;

  .OverlayContent {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    ul {
      list-style: none;
      padding: 15px 5%;
      margin-bottom: auto;
      width: 100%;
      color: white;
      /* background: linear-gradient(
        0deg,
        rgba(200, 16, 46, 0) 0%,
        rgba(200, 16, 46, 1) 100%
      ); */
      li {
        transition: 0.2s linear;

        .UlTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          color: white;
          .Icon {
            transform: rotate(${(props) => (props.isActive ? 0 : 90)}deg);
            transition: all 0.2s ease-in-out;
          }
        }

        .InnerUL.open {
          display: flex;
          flex-direction: column;
          li {
            margin: 5px 30px;
          }
        }
        .InnerUL {
          padding: 20px 0px;
          display: none;

          li {
            color: white;
          }
        }
      }
    }

    .BottomLogo {
      width: 40%;
    }
  }
`;

export default Navbar;
