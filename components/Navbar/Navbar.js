import styled from "styled-components"
import Image from 'next/image'
import Logo from '../../public/assets/Media/Logos/Wac.png'

const StyledNavbar = styled.div`
  background-color : grey;
  height : 80px;
  display : flex;
  justify-content : space-between;
  padding :0px 5%;
  

`

function Navbar() {
  return (
    <StyledNavbar> 
      <Image className="NavLogo" src={Logo} alt="Wydad Ac Logo"/>
      <h3>Hello</h3>
    </StyledNavbar>
  )
}




export default Navbar