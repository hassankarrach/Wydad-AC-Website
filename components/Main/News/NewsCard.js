import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import moment from "moment";
import Link from "next/dist/client/link";

function NewsCard({ title, desc, img, date, slug }) {
  moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ",
      s: "sec",
      m: "%d M",
      mm: "%d M",
      h: "%d h",
      hh: "%d h",
      d: "%d d",
      dd: "%d d",
      w: "%d w",
      ww: "%d w",
      M: "a mth",
      MM: "%d mths",
      y: "y",
      yy: "%d y",
    },
  });

  return (
    <Link href={`/news/${slug}`}>
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
            <span>{moment(new Date(date)).fromNow()}</span>
            <div className="ButtonHolder">
              <button className="BottomNewsCardBtn">read more</button>
              <NavigateNextIcon />
            </div>
          </div>
        </div>
      </StyledNewsCard>
    </Link>
  );
}

const StyledNewsCard = styled.div`
  height: 280px;
  margin: 1px 10px;
  background-color: white;
  border-radius: 5px;
  border: 3px solid white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 150px;
    margin: 5px 0px;
    flex-direction: row;
  }

  .TopNewsCardHolder {
    height: 60%;
    width: 100%;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 30%;
      height: 100%;
    }
    .TopNewsCard {
      height: 100%;
      background-position: top center;
      background-size: cover;
      transition: 1.1s ease all;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .BottomNewsCard {
    height: 40%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      height: 100%;
      width: 80%;
    }

    h1 {
      font-size: 1.1rem;
      font-family: var(--font-secondary);
    }
    .BottomNewsCardBtnHolder {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      margin-top: auto;
      span {
        font-weight: 80;
        font-size: 0.9rem;
      }
      .ButtonHolder {
        display: flex;
        align-items: center;
        justify-content: center;
        .BottomNewsCardBtn {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }
  }

  &:hover .TopNewsCardHolder .TopNewsCard {
    transform: scale(1.1);
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export default NewsCard;
