import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function NewsCard({ title, desc, img, date }) {
  return (
    <StyledNewsCard>
      <div className="TopNewsCardHolder">
        <div
          className="TopNewsCard"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </div>
      <div className="BottomNewsCard">
        <h1>{title}</h1>
        <div className="BottomNewsCardBtnHolder">
          <button className="BottomNewsCardBtn">read more</button>
          <NavigateNextIcon />
        </div>
      </div>
    </StyledNewsCard>
  );
}

const StyledNewsCard = styled.div`
  width: 25%;
  height: 280px;
  margin: 1px 10px;
  background-color: white;
  border-radius: 5px;
  border: 3px solid white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  &:hover .TopNewsCardHolder .TopNewsCard {
    transform: scale(1.1);
  }

  .TopNewsCardHolder {
    height: 60%;
    overflow: hidden;
    .TopNewsCard {
      height: 100%;
      background-position: top center;
      background-size: cover;
      transition: 1.1s ease all;
    }
  }
  .BottomNewsCard {
    height: 40%;
    padding: 5px 10px;
    h1 {
      font-size: 1.1rem;
      font-family: var(--font-secondary);
    }

    .BottomNewsCardBtnHolder {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;
      .BottomNewsCardBtn {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export default NewsCard;
