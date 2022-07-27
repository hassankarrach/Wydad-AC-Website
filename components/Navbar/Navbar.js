import styled from "styled-components"
import Image from 'next/image'
import LanguageDropDown from './LanguageDropDown'
import MyWydad from "./MyWydad"


const StyledNavbar = styled.nav`
  background-color : white;
  padding : 0px 10%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  display: flex;
  align-items :center;
  justify-content :space-between;
  z-index:99;


  .LeftNav{
    display :flex;

    .NavLogo{
    width : 50px;
    cursor: pointer;
     }
    .List{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media(max-width:768px) {
      display: none;
    }

    li{
        cursor : pointer;
        margin-right : 15px;
        font-size :1.2rem;
        transition : 0.2s ease-in-out;

        &:hover{
          color : var(--Red);
        }
    }
     }
  }
  .RighNav{
    display : flex;
    height: 50%;
  }

`

function Navbar() {
  return (
    <StyledNavbar className="Nav"> 
      <div className="LeftNav">
      <img className="NavLogo" src={'/assets/Media/Logos/Wac.png'} alt="Wydad Ac Logo" layout="intrinsic"/>
      <ul className="List">
        <li>Football</li>
        <li>News</li>
        <li>Team</li>
        <li>Store</li>
        <li>Tickets</li>
      </ul>
      </div>

      <div className="RighNav">
      <MyWydad/>
      <LanguageDropDown/>
      </div>
    </StyledNavbar>
  )
}




export default Navbar