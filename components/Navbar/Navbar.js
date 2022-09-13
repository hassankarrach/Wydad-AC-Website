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
    title: "football",
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
    title: "club",
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
  height: 64px;
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
      height: 100%;
      width: auto;
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;
      h1 {
        display: none;
      }

      .NavLogo {
        height: 100%;
        cursor: pointer;
        margin-right: auto;
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
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          top: 6px;
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
        height: 25px;
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
        height: 3px;
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
        top: 10px;
      }
      #nav-icon3 span:nth-child(4) {
        top: 20px;
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
  const [toggleChildMenu, settoggleChildMenu] = useState(33);

  const ToggleSetter = (id) => {
    const TargetedUL = id;
    if (toggleChildMenu === TargetedUL) {
      settoggleChildMenu(33);
    } else {
      settoggleChildMenu(TargetedUL);
    }
  };

  //DisableScroll when menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggle]);

  const HandleShowMobileMenu = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <StyledNavbar className="Nav">
        <div className="LeftNav">
          <Link href={"/"}>
            <motion.div className="LogoHolder">
              <motion.img
                className="NavLogo"
                src={"/assets/Media/Logos/Wac.png"}
                alt="Wydad Ac Logo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <h1>wydad</h1>
            </motion.div>
          </Link>

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
                HandleShowMobileMenu();
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
      <StyledMenu
        style={{ transform: toggle ? "translateX(0%)" : "translateX(-100%)" }}
      >
        <div className="MobileMenu">
          <div className="TopButtons">
            <MyWydad />
            <LanguageDropDown />
          </div>

          <ul className="MainUl">
            {MobileMenu.map((item) => {
              return (
                <li className="MaiUlLi" key={item.id}>
                  <div
                    className="MainListTitle"
                    onClick={() => {
                      ToggleSetter(item.id);
                    }}
                  >
                    {item.title} {item.data && <ChevronRightIcon />}
                  </div>

                  {item.data && (
                    <ul
                      className={`NestedUl ${
                        toggleChildMenu === item.id ? "open" : ""
                      }`}
                    >
                      {item.data.map((page) => {
                        return (
                          <Link
                            href={`/${item.title}/${page.to}`}
                            key={page.id}
                          >
                            <li className="NestedUlLi">{page.title}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
            <Link href="news">
              <li className="MaiUlLi">
                <div
                  className="MainListTitle"
                  onClick={() => {
                    ToggleSetter(item.id);
                  }}
                >
                  news
                </div>
              </li>
            </Link>
            <Link href="Store">
              <li className="MaiUlLi">
                <div
                  className="MainListTitle"
                  onClick={() => {
                    ToggleSetter(item.id);
                  }}
                >
                  Store
                </div>
              </li>
            </Link>
            <Link href="tickets">
              <li className="MaiUlLi">
                <div
                  className="MainListTitle"
                  onClick={() => {
                    ToggleSetter(item.id);
                  }}
                >
                  Tickets
                </div>
              </li>
            </Link>
            <Link href="fantasy">
              <li className="MaiUlLi">
                <div
                  className="MainListTitle"
                  onClick={() => {
                    ToggleSetter(item.id);
                  }}
                >
                  fantasy
                </div>
              </li>
            </Link>
          </ul>

          <img
            className="BottomFullLogo"
            src={"./assets/Media/Logos/WydadFull.png"}
          />
        </div>
      </StyledMenu>
    </>
  );
}

export const StyledMenu = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: linear-gradient(
    90deg,
    rgba(220, 5, 45, 1) 0%,
    rgba(220, 5, 45, 0.7) 100%
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 92;
  transition: transform 250ms ease-in-out 0s;

  .MobileMenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 65px;
    li {
      cursor: pointer;
    }

    .TopButtons {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5px 20px;
    }
    .MainUl {
      margin-bottom: auto;
      width: 100%;
      align-items: center;
      list-style: none;
      margin: 0px;
      padding: 5px 25px;
      color: white;
      background: linear-gradient(
        90deg,
        rgba(220, 5, 45, 1) 0%,
        rgba(220, 5, 45, 0) 100%
      );

      .MaiUlLi {
        .MainListTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0px;
        }
        .NestedUl {
          list-style: none;
          padding: 0px;
          transition: max-height 0.2s ease-in-out 0s;
          overflow: hidden;
          max-height: 0px;
          .NestedUlLi {
            margin: 5px 15px;
          }
        }
        .NestedUl.open {
          max-height: 200px;
        }
      }
    }
    .BottomFullLogo {
      height: 80px;
      margin-top: auto;
    }
  }
`;

export default Navbar;
