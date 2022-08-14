import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LanguageDropDown from "./LanguageDropDown";
import MyWydad from "./MyWydad";

const StyledNavbar = styled.nav`
  background-color: white;
  padding: 0px 10%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;

  .LeftNav {
    display: flex;

    .NavLogo {
      width: 50px;
      cursor: pointer;
    }
    .List {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;

      @media (max-width: 768px) {
        display: none;
      }

      li {
        cursor: pointer;
        margin-right: 15px;
        font-size: 1rem;
        transition: 0.2s ease-in-out;

        &:hover {
          color: var(--Red);
        }
      }
    }
  }
  .RighNav {
    display: flex;
    height: 50%;
  }
`;

const StyledMegaMenu = styled.div`
  background-color: white;
  width: 100%;
  position: sticky;
  padding: 10px 10%;
  top: 70px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 98;
  ul {
    display: flex;
    margin-left: 50px;
    li {
      list-style: none;
      margin-right: 20px;
      color: var(--grey);
      font-size: 0.9rem;
    }
  }
`;

function Navbar() {
  const [MegaMenuToggle, setMegaMenuToggle] = useState(false);
  const [isMegaMenuHovered, setisMegaMenuHovered] = useState(false);

  return (
    <>
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
            <Link href={"/football"}>
              <li
                onMouseEnter={() => {
                  setMegaMenuToggle(true);
                }}
                onMouseLeave={() => {
                  if (isMegaMenuHovered === false) {
                    setMegaMenuToggle(false);
                  }
                }}
              >
                Football
              </li>
            </Link>
            <Link href={"/"}>
              <li>News</li>
            </Link>
            <Link href={"/club"}>
              <li>club</li>
            </Link>
            <li>Store</li>
            <li>Tickets</li>

            <li style={{ color: "blue" }}>{MegaMenuToggle}</li>
          </ul>
        </div>

        <div className="RighNav">
          <MyWydad />
          <LanguageDropDown />
        </div>
      </StyledNavbar>
      {MegaMenuToggle ? (
        <StyledMegaMenu
          onMouseEnter={() => {
            setisMegaMenuHovered(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              if (isMegaMenuHovered === false) {
                setMegaMenuToggle(false);
              }
            }, 500);
          }}
        >
          <ul>
            <li>First Team</li>
            <li>News</li>
            <li>Match Schedule</li>
            <li>Results</li>
            <li>Players</li>
            <li>Acheivements</li>
          </ul>
        </StyledMegaMenu>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
