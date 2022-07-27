import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function TopNav() {
  return (
    <StyledTopNav>
        <div className="Socials">
           <FacebookIcon className="TopNavSocialsIcon"/>
           <InstagramIcon className="TopNavSocialsIcon"/>
           <TwitterIcon className="TopNavSocialsIcon"/>
           <YouTubeIcon className="TopNavSocialsIcon"/>
        </div>
        <h3>Porter le Maillot du Wydad est un honneur, le mouiller est un devoir!</h3>
        <div className="Sponsors">
           <img src={'/assets/Media/Logos/Ingelec.png'} className='SponsorsIcon'/>
           <img src={'/assets/Media/Logos/Macron.png'}  className='SponsorsIcon'/>
        </div>
    </StyledTopNav>
  )
}

const StyledTopNav = styled.div`
height : 50px;
display :flex;
align-items :center;
justify-content :space-between;
background-color : var(--Red);
padding : 0px 10%;
h3{
  color : white;
  font-family : var(--font-secondary);
}

.Socials{
  color : white;

  .TopNavSocialsIcon{
    cursor: pointer;
  }
}
.Sponsors{
  display :flex;
  justify-content :center;
  align-items :center;
  .SponsorsIcon{
    width :80px;
    margin-left : 10px;
    cursor: pointer;
  }
}
`

export default TopNav