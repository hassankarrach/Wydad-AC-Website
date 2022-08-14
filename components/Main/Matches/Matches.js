import styled from "styled-components";
import MatchCard from "./MatchCard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Standings from "../../../components/Main/Standings/Standings";

function Matches() {
  return (
    <StyledMatches>
      <div className="box">
        <div className="LeftBox">
          <div className="TopLeftBox">
            <div className="TopLeftBoxTitleHolder">
              <h1>Next Match</h1>
            </div>
            <div className="TopLeftBoxContentHolder">
              <div className="GameData">
                <span>Serie A</span>
                <span>MATCHDAY 1</span>
                <span>13 August 2022 17:30</span>
              </div>
              <div className="TeamsLogos">
                <div className="TeamA">
                  <div className="TeamLogoHolder">
                    <img src="./assets/Media/Teams/wac.png" />
                    <span>Wydad Ac</span>
                  </div>
                </div>

                <div className="TeamsLogosMiddle">
                  <span>VS</span>
                  <button>
                    <ConfirmationNumberIcon className="TeamsLogosMiddleBtnIcon" />
                    Buy Ticket
                  </button>
                </div>

                <div className="TeamB">
                  <div className="TeamLogoHolder">
                    <img src="./assets/Media/Teams/fus.png" />
                    <span>Fus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Middlebox">
          <div className="Line"></div>
        </div>

        <div className="RightBox">
          <div className="RightBoxTitleHolder">
            <h1>STANDINGS</h1>
          </div>
          <Standings />
        </div>
      </div>
    </StyledMatches>
  );
}

const StyledMatches = styled.div`
  height: 280px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 75%;
    color: black;
    height: 400px;
    background-color: rgba(255, 255, 255);

    position: absolute;
    top: -40%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;

    .LeftBox {
      width: 49%;
      height: 100%;
      .TopLeftBox {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        .TopLeftBoxTitleHolder {
          height: 20%;
          h1 {
            font-size: 1.8rem;
          }
        }
        .TopLeftBoxContentHolder {
          height: 80%;
          width: 100%;
          .GameData {
            height: 20%;
            width: 100%;
            display: flex;
            flex-direction: column;
            h1 {
              font-size: 1.3rem;
            }
          }
          .TeamsLogos {
            height: 80%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 25px;
            .TeamA {
              width: 30%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .TeamLogoHolder {
                width: 90%;
                height: 200px;
                padding: 15px 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                  width: 90px;
                }
                span {
                  margin-top: auto;
                }
              }
            }
            .TeamsLogosMiddle {
              display: flex;
              flex-direction: column;
              height: 100%;
              justify-content: center;
              span {
                font-size: 2.6rem;
                margin-top: 35%;
              }
              button {
                padding: 10px 18px;
                background-color: var(--Red);
                border: none;
                color: white;
                cursor: pointer;
                border-radius: 3px;
                display: flex;
                align-items: center;
                transition: 0.2s ease-in-out;
                font-family: var(--font-secondary);
                margin-top: auto;

                &:hover {
                  color: var(--Red);
                  background-color: transparent;
                  border: 1px solid var(--Red);
                }
                .TeamsLogosMiddleBtnIcon {
                  margin-right: 5px;
                }
              }
            }
            .TeamB {
              width: 30%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .TeamLogoHolder {
                width: 90%;
                height: 200px;
                padding: 15px 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                  width: 90px;
                }
                span {
                  margin-top: auto;
                }
              }
            }
          }
        }
      }
    }
    .Middlebox {
      width: 2%;
      height: 100%;
      display: flex;
      justify-content: center;
      .Line {
        width: 1px;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(150, 150, 150, 0) 0%,
          rgba(150, 150, 150, 1) 50%,
          rgba(150, 150, 150, 0) 100%
        );
        opacity: 0.3;
      }
    }
    .RightBox {
      width: 49%;
      height: 100%;
      .RightBoxTitleHolder {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;
        h1 {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

export default Matches;
