import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <StyledFooter>
        <div className="FooterTop">
          <img src='./assets/Media/Logos/WydadFull.png'/>
        </div>
 
        <div className="FooterBottom">
            <h1>Copyright © 2022 Wydad Ac. All rights reserved.</h1>
        </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
 width :100%;
 height :300px;
 background-color : black;
 background-image : linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url('./assets/Media/Textures/footer.webp');
 background-position :center;
 background-size :cover;
 display : flex;
 flex-direction : column;
 justify-content : space-between;
 .FooterTop{
    display : flex;
    justify-content : center;
    align-items :center;
    img{
        width : 300px;
    }
 }

 .FooterBottom{
    display : flex;
    justify-content : center;
    align-items :center;
    h1{
        color :white;
        font-size : 1.2rem;
    }
 }
`

export default Footer