import { useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function LanguageDropDown() {
  //Router
  const { locale, locales, asPath } = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledLanguageDropDown
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <h3>{locale.toUpperCase()}</h3>
        <LanguageIcon className="LanguageIcon" />
      </StyledLanguageDropDown>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href={asPath} locale={"fr"}>
          <MenuItem onClick={handleClose}>Français</MenuItem>
        </Link>
        <Link href={asPath} locale={"ar"}>
          <MenuItem onClick={handleClose}>العربية</MenuItem>
        </Link>
        <Link href={asPath} locale={"en"}>
          <MenuItem onClick={handleClose}>English</MenuItem>
        </Link>
      </Menu>
    </>
  );
}

const StyledLanguageDropDown = styled.div`
  background-color: #f8f8f8;
  color: var(--grey);
  border: 1px solid #efefef;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0px 8px;
  border-radius: 3px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 50%;
  }
  h3 {
    margin-right: 3px;
    font-family: var(--font-secondary);
  }

  .LanguageIcon {
  }
`;

export default LanguageDropDown;
