import styled from "styled-components"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function NewsCard() {
  return (
    <StyledNewsCard>
      <div className="TopNewsCardHolder">
      <div className="TopNewsCard"
      style={{backgroundImage: `url("https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1216x446:1218x444)/origin-imgresizer.eurosport.com/2022/05/30/3384604-69172348-2560-1440.jpg")` }}
      >
      </div>
      </div>
      <div className="BottomNewsCard">
        <h1>Morocco's Wydad AC Wins its 3rd CAF Champions League Title</h1>
        <div className="BottomNewsCardBtnHolder">
          <button className="BottomNewsCardBtn">read more</button>
          <NavigateNextIcon/>
        </div>
      </div>
    </StyledNewsCard>
  )
}

const StyledNewsCard = styled.div`
  width : 100%;
  height: 280px;
  background-color :white;
  border-radius : 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition :0.2s ease-in-out;
  overflow :hidden;
  cursor: pointer;
  &:hover .TopNewsCardHolder .TopNewsCard{
    transform: scale(1.1);
  }

  .TopNewsCardHolder{
    height : 60%;
    overflow : hidden;
  .TopNewsCard{
    height :100%;
    background-position : top center;
    background-size: cover;
    transition: 1.1s ease all; 
  }
   }
  .BottomNewsCard{
   height : 40%;
   padding : 5px 10px;
   h1{
    font-size : 1.1rem;
    font-family : var(--font-secondary);
   }

    .BottomNewsCardBtnHolder{
      display : flex;
      justify-content :flex-end;
      align-items :center;
      cursor: pointer; 
      .BottomNewsCardBtn{
      background-color :transparent;
      border : none;
      cursor: pointer; 
      }
    }
  }

  &:hover{
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`

export default NewsCard