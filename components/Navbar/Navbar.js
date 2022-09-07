import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LanguageDropDown from "./LanguageDropDown";
import MyWydad from "./MyWydad";

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
    to: "results",
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

    .NavLogo {
      width: 50px;
      cursor: pointer;
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
  .RighNav {
    display: flex;
    margin-left: auto;
  }
`;

function Navbar() {
  return (
    <StyledNavbar className="Nav">
      <div className="LeftNav">
        <Link href={"/"}>
          <img
            className="NavLogo"
            src={"/assets/Media/Logos/Wac.png"}
            alt="Wydad Ac Logo"
            layout="intrinsic"
          />
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
          <Link href={"/"}>
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

      <div className="RighNav">
        <MyWydad />
        <LanguageDropDown />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
