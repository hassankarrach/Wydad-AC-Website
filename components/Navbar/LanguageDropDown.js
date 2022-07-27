import { useState } from "react";

import styled from "styled-components"
import LanguageIcon from '@mui/icons-material/Language';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function LanguageDropDown() {
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
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
        <h3>EN</h3>
        <LanguageIcon className="LanguageIcon"/>
    </StyledLanguageDropDown>

    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Français</MenuItem>
        <MenuItem onClick={handleClose}>العربية</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
    </Menu>
   </>
  )
}


const StyledLanguageDropDown = styled.div`
 background-color : #f8f8f8;
 color : #1a1a1a;
 display :flex;
 justify-content :center;
 align-items: center;
 height :100%;
 padding : 0px 8px;
 border-radius : 3px;
 cursor: pointer;
 h3{
    margin-right : 3px;
    font-family : var(--font-secondary);
 }

 .LanguageIcon{
 }

`

export default LanguageDropDown