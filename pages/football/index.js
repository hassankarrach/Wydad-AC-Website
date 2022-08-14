import styled from "styled-components";
import SubNav from "../../components/Navbar/SubNav";
import MatchCard from "../../components/Main/Matches/MatchCard";
import PlayerOfTheMonth from "../../components/Main/PlayerOfTheMonth/PlayerOfTheMonth";
import Standings from "../../components/Main/Standings/Standings";
import Header from "../../components/Header/Header";

const SubNavList = [
  {
    title: "First Team",
  },
  {
    title: "News",
  },
  {
    title: "Match Schedule",
  },
  {
    title: "Results",
  },
  {
    title: "Players",
  },
  {
    title: "Acheivements",
  },
];

function football() {
  return (
    <StyledFootball>
      <SubNav Items={SubNavList} />
      <div className="InnerContainer">
        <Header />
        <div className="InnerCont">
          <div className="LeftMainContainer"></div>
          <div className="RightSmallContainer">
            <div className="Item">
              <h1>MATCHES</h1>
              <MatchCard
                className="MathCard"
                Opponent="far"
                Competition="Botola"
                WacGoals="2"
                OpponentGoals="1"
              />
            </div>
            <div className="Divider"></div>
            <div className="Item">
              <h1>Standings</h1>
              <Standings />
            </div>
            <div className="Divider"></div>
            <div className="Item">
              <h1>Player Of the month</h1>
              <PlayerOfTheMonth />
            </div>
          </div>
        </div>
      </div>
    </StyledFootball>
  );
}

const StyledFootball = styled.div`
  height: auto;

  .InnerContainer {
    padding: 0px 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .InnerCont {
      display: flex;
      padding: 10px 0px;
      .LeftMainContainer {
        width: 70%;
      }
      .RightSmallContainer {
        width: 30%;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px 20px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border: 1px solid #ededed;
        position: sticky;
        top: 15%;
        .Divider {
          background: linear-gradient(
            90deg,
            rgba(209, 209, 209, 0) 0%,
            rgba(209, 209, 209, 0.6) 50%,
            rgba(209, 209, 209, 0) 100%
          );
          height: 1px;
          width: 100%;
        }
        .Item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 0px;
          margin-bottom: 15px;
          h1 {
            font-size: 1.4rem;
          }
          .MathCard {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default football;
