import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageDropDown from "./LanguageDropDown";
import MyWydad from "./MyWydad";
//Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//FramerMotion
import { motion, AnimatePresence } from "framer-motion";
import Fade from "@mui/material/Fade";
//I18N
import useTranslation from "next-translate/useTranslation";

const Football = [
  {
    title: "Players",
    ArTitle: "الفريق الأول",
    frTitle: "Première équipe",
    to: "players",
    id: 0,
  },
  {
    title: "News",
    ArTitle: "الأخبار",
    frTitle: "Actualités",
    to: "news",
    id: 1,
  },
  {
    title: "Match Schedule",
    ArTitle: "جدول المباريات",
    frTitle: "Calendrier des matchs",
    to: "schedule",
    id: 2,
  },
  {
    title: "Standings",
    ArTitle: "جدول الترتيب",
    frTitle: "Classement",
    to: "standings",
    id: 6,
  },
  {
    title: "Results",
    ArTitle: "نتائج المباريات",
    frTitle: "Résultats",
    to: "fixtures-results/0",
    id: 3,
  },
  {
    title: "achievements",
    ArTitle: "الإنجازات",
    frTitle: "Accomplissements",
    to: "achievements",
    id: 5,
  },
];

const Club = [
  {
    title: "history",
    ArTitle: "تاريخ النادي",
    FrTitle: "Histoire du club",
    to: "history",
    id: 0,
  },
  {
    title: "management",
    FrTitle: "Membres du conseil d'administration",
    ArTitle: "مجلس الإدارة",
    to: "management",
    id: 1,
  },
  {
    title: "wydad presidents",
    FrTitle: "Présidents",
    ArTitle: "رؤساء الوداد",
    to: "presidents",
    id: 2,
  },
  {
    title: "partners",
    FrTitle: "Les partenaires",
    ArTitle: "الشركاء",
    to: "partners",
    id: 3,
  },
  {
    title: "supporters",
    FrTitle: "Partisans Du Wydad",
    ArTitle: "أنصار النادي",
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
        title: "Achievements",
        to: "achievements",
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
  background-color: var(--Red);
  color: white;
  padding: 0px 10%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 99;

  &.AR_ {
    flex-direction: row-reverse;
    .LeftNav {
      flex-direction: row-reverse;

      .List {
        height: 100%;
        flex-direction: row-reverse;
        font-weight: 700;

        .NavItem {
          white-space: nowrap;
          font-size: 1.03rem;
          font-family: var(--Arabic);

          .MegaMenu {
            flex-direction: row-reverse;

            .MegaMenuUl {
              width: 100%;

              li {
                font-family: var(--Arabic);
              }
            }
            .WydadLogogs {
              margin-right: auto;
            }
          }
        }
      }
    }
    .RightNav {
      position: absolute;
      left: 10%;
      flex-direction: row;
      flex-direction: row-reverse;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 5%;
  }

  .LeftNav {
    display: flex;
    height: 100%;
    align-items: center;

    .NavLogo {
      height: 90%;
      cursor: pointer;
      margin-right: auto;
    }
    .List {
      list-style: none;
      display: flex;
      margin: 0px 20px;
      width: auto;
      padding: 0px 20px;
      @media (max-width: 768px) {
        display: none;
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
          /* background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.5) 100%
          );
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px); */
          background-color: white;
          height: auto;
          left: 0;
          width: 100%;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          top: 64px;
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
          /* color: var(--Red); */
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
        background: white;
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
  const router = useRouter();
  //I18N
  let { t } = useTranslation();

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

  const HandleClick = (to) => {
    setToggle(false);
    router.push(to);
  };
  return (
    <>
      <StyledNavbar
        className={`Nav ${router.locale === "ar" ? "AR_ ArText" : ""}`}
      >
        <div className="LeftNav">
          <Link href={"/"}>
            <img
              className="NavLogo"
              src={"/assets/Media/Logos/LogoWhite.png"}
              alt="Wydad Ac Logo"
            />
          </Link>

          <ul className={`List`}>
            <li className="NavItem">
              {t("navbar:football")}
              <div className="MegaMenu">
                <ul
                  className={`MegaMenuUl ${
                    router.locale === "ar" ? styles.ArTitle : ""
                  }`}
                >
                  {Football.map((Item) => {
                    return (
                      <Link href={`/football/${Item.to}`} key={Item.id}>
                        <li key={Item.id}>
                          {router.locale === "en"
                            ? Item.title
                            : router.locale === "fr"
                            ? Item.frTitle
                            : router.locale === "ar"
                            ? Item.ArTitle
                            : ""}
                        </li>
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
              <li className="NavItem">{t("navbar:News")}</li>
            </Link>
            <li className="NavItem">
              {t("navbar:club")}
              <div className="MegaMenu">
                <ul
                  className={`MegaMenuUl ${
                    router.locale === "ar" ? styles.ArTitle : ""
                  }`}
                >
                  {Club.map((Item) => {
                    return (
                      <Link href={`/club/${Item.to}`} key={Item.id}>
                        <li>
                          {router.locale === "en"
                            ? Item.title
                            : router.locale === "fr"
                            ? Item.FrTitle
                            : router.locale === "ar"
                            ? Item.ArTitle
                            : ""}
                        </li>
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
            <li className="NavItem"> {t("navbar:store")}</li>
            <li className="NavItem"> {t("navbar:Tickets")}</li>
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
            <div
              onClick={() => {
                setToggle(false);
              }}
              style={{ width: "50%" }}
            >
              <MyWydad />
            </div>

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
                          <li
                            className="NestedUlLi"
                            key={page.id}
                            onClick={() => {
                              HandleClick(`/${item.title}/${page.to}`);
                            }}
                          >
                            {page.title}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}

            <li
              className="MaiUlLi"
              onClick={() => {
                HandleClick("news");
              }}
            >
              <div className="MainListTitle">news</div>
            </li>

            <li
              className="MaiUlLi"
              onClick={() => {
                HandleClick("store");
              }}
            >
              <div className="MainListTitle">Store</div>
            </li>

            <li
              className="MaiUlLi"
              onClick={() => {
                HandleClick("tickets");
              }}
            >
              <div className="MainListTitle">Tickets</div>
            </li>

            <li
              className="MaiUlLi"
              onClick={() => {
                HandleClick("fantasy");
              }}
            >
              <div className="MainListTitle">fantasy</div>
            </li>
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
  top: 0;
  left: 0;
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
