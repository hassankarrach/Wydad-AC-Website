import styled from "styled-components"

function Titles() {
  return (
    <StyledTitles>
        <div className="TitlesCard">
            <div className="ImgHolder"></div>
            <div className="TitlesCardData">
            </div>
        </div>
    </StyledTitles>
  )
}

const StyledTitles = styled.div`
  width: 100%;
  padding : 0px 10%;
  .TitlesCard{
  height : 350px;
  overflow : hidden;
  border-radius : 8px;
  position : relative;  
     .ImgHolder{
     width : 100%;
     height : 100%;
     background-image : url('./assets/Media/Textures/White.png');
     background-position : top center;
     background-size: cover;
     mix-blend-mode: exclusion;
     opacity : 0.8;
     }
     .TitlesCardData{
      position : absolute;
      top :0;
      width : 100%;
      height :100%;
     }
  }
`

export default Titles