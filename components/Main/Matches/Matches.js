import { useState, useEffect } from "react";
import styled from "styled-components";
import MatchCard from "./MatchCard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Standings from "../../../components/Main/Standings/Standings";
import Loader from "../../Loader/Loader";

//Skeleton
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

//CountDown
import Countdown from "react-countdown";

const StyledLive = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .pulse {
    width: 20px;
    height: 20px;
    background: rgb(255, 0, 64);
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    animation: animate 2s linear infinite;
    margin-right: 10px;
  }

  @keyframes animate {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 0, 64, 0.7), 0 0 0 0 rgba(255, 0, 64, 0.7);
    }

    40% {
      box-shadow: 0 0 0 50px rgba(255, 0, 64, 0), 0 0 0 0 rgba(255, 0, 64, 0.7);
    }

    80% {
      box-shadow: 0 0 0 50px rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0);
    }
  }
`;

const StyledTimer = styled.div`
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 8px;

  .Timer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 3px 10px;

    .TimerItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0px 10px;
      .Time_ {
        font-size: 1.3rem;
      }
      .TimeTitle_ {
        font-size: 0.9rem;
        font-weight: 100;
        color: var(--grey);
      }
    }
  }
`;

const StyledGameBoard = styled.div`
  width: 300px;
  height: 60px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  display: flex;
  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 1) 0%,
    rgba(240, 240, 240, 0) 100%
  );

  .CurrentGameTimestamp,
  .HomeGoals,
  .AwayGoals {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: 800;
      font-size: 1.2rem;
    }
  }
  .HomeGoals {
    width: 20%;
    height: 100%;
    border-right: 1px solid #f0f0f0;
    margin-right: auto;
  }

  .CurrentGameTimestamp {
    span {
      color: grey;
    }
  }
  .AwayGoals {
    width: 20%;
    height: 100%;
    border-left: 1px solid #f0f0f0;
    margin-left: auto;
  }
`;
const renderer = ({ hours, days, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return "";
  } else {
    // Render a countdown
    return (
      <StyledTimer>
        <div className="Timer">
          <div className="TimerItem">
            <span className="Time_">{days}</span>
            <span className="TimeTitle_">days</span>
          </div>
          <span>:</span>
          <div className="TimerItem">
            <span className="Time_">{hours}</span>
            <span className="TimeTitle_">hours</span>
          </div>
          <span>:</span>
          <div className="TimerItem">
            <span className="Time_">{minutes}</span>
            <span className="TimeTitle_">minutes</span>
          </div>
          <span>:</span>
          <div className="TimerItem">
            <span className="Time_">{seconds}</span>
            <span className="TimeTitle_">seconds</span>
          </div>
        </div>
      </StyledTimer>
    );
  }
};

function Matches({ NextGameData, LastGameData, DisplayedGame, isLive }) {
  // const [isNextGameLive, setisNextGameLive] = useState(false);
  // const [DisplayedGame, setDisplayedGame] = useState();

  // useEffect(() => {
  //   const HandleShowedGame = async () => {
  //     const currentTimeStamp = new Date(Date.now());
  //     //GetNextAndLastGame
  //     const NextGame = NextGameData;
  //     const LastGame = LastGameData;
  //     //CalcTime;
  //     const GameStartTime = TimeStampToDate(LastGame.event.startTimestamp);
  //     const GameEndTime = TimeStampToDate(
  //       LastGame.event.startTimestamp + 3 * 3600
  //     );
  //     if (
  //       currentTimeStamp >= GameStartTime &&
  //       currentTimeStamp <= GameEndTime
  //     ) {
  //       setisNextGameLive(true);
  //       setDisplayedGame(LastGame);
  //     } else {
  //       setDisplayedGame(NextGame);
  //     }
  //   };
  //   HandleShowedGame();
  // }, []);

  const TimeStampToDate = (TimeStamp_) => {
    var timestamp = TimeStamp_;
    var date = new Date(timestamp * 1000 + 60 * 60); //60*60 =360
    return date;
  };

  return (
    <StyledMatches>
      <div className="box">
        <div className="LeftBox">
          {isLive && (
            <StyledLive>
              <div className="pulse"></div>
              <span>LIVE</span>
            </StyledLive>
          )}
          <div className="LeftBoxContentHolder">
            <div className="TopData">
              <h1>Next Match</h1>
              {DisplayedGame ? (
                <div className="GameDetails">
                  <div className="Tournament">
                    <img
                      src={`./assets/Media/competitions/${
                        DisplayedGame.event.tournament.uniqueTournament.name ===
                        "Botola Pro"
                          ? "botola"
                          : DisplayedGame.event.tournament.uniqueTournament
                              .name === "CAF Super Cup"
                          ? "Sc"
                          : "botola"
                      }.png`}
                    />
                    <span>
                      {DisplayedGame.event.tournament.uniqueTournament.name}
                    </span>
                  </div>

                  <div className="Divider"></div>
                  <span className="GameRound">
                    {DisplayedGame.event.tournament.uniqueTournament.name ===
                    "Botola Pro"
                      ? "Botola Pro"
                      : DisplayedGame.event.roundInfo.name}{" "}
                  </span>
                </div>
              ) : (
                <div>
                  <Skeleton width={200} height={40} animation="wave" />
                </div>
              )}
            </div>

            <div className="Clubs">
              <div className="HomeClubeContainer">
                <div className="ClubCard">
                  <div className="imgHolder">
                    {DisplayedGame ? (
                      <img
                        src={`./assets/Media/Teams/${DisplayedGame.event.homeTeam.shortName}.png`}
                      />
                    ) : (
                      <Skeleton variant="circular" width={130} height={130} />
                    )}
                  </div>
                  <div className="titleHolder">
                    {DisplayedGame ? (
                      <span>{DisplayedGame.event.homeTeam.name}</span>
                    ) : (
                      <Skeleton
                        variant="text"
                        width={150}
                        height={30}
                        animation="wave"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="VsHolder">
                <span>VS</span>
              </div>

              <div className="AwayClubeContainer">
                <div className="ClubCard">
                  <div className="imgHolder">
                    {DisplayedGame ? (
                      <img
                        src={`./assets/Media/Teams/${DisplayedGame.event.awayTeam.shortName}.png`}
                      />
                    ) : (
                      <Skeleton variant="circular" width={130} height={130} />
                    )}
                  </div>
                  <div className="titleHolder">
                    {DisplayedGame ? (
                      <span>{DisplayedGame.event.awayTeam.name}</span>
                    ) : (
                      <Skeleton
                        variant="text"
                        width={150}
                        height={30}
                        animation="wave"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="CountDown">
              {DisplayedGame ? (
                <div className="CountDownHolder">
                  {!isLive ? (
                    <Countdown
                      date={TimeStampToDate(DisplayedGame.event.startTimestamp)}
                      renderer={renderer}
                    ></Countdown>
                  ) : (
                    <StyledGameBoard>
                      <div className="HomeGoals">
                        <span>{DisplayedGame.event.homeScore.current}</span>
                      </div>
                      <div className="CurrentGameTimestamp">
                        <span>{DisplayedGame.event.status.description}</span>
                      </div>
                      <div className="AwayGoals">
                        <span>{DisplayedGame.event.awayScore.current}</span>
                      </div>
                    </StyledGameBoard>
                  )}
                </div>
              ) : (
                <Skeleton variant="rounded" width={210} height={60} />
              )}
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
          {DisplayedGame ? (
            <Standings />
          ) : (
            <div className="StandingsSkelet">
              <Skeleton width="100%" height={40}>
                <Typography>.</Typography>
              </Skeleton>

              <Skeleton width="100%" height={40}>
                <Typography>.</Typography>
              </Skeleton>
              <Skeleton width="100%" height={40}>
                <Typography>.</Typography>
              </Skeleton>
              <Skeleton width="100%" height={40}>
                <Typography>.</Typography>
              </Skeleton>
            </div>
          )}
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
  @media (max-width: 768px) {
    height: 550px;
  }
  .box {
    width: 80%;
    color: black;
    height: 400px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: -40%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 90%;
      height: auto;
    }

    .LeftBox {
      width: 49%;
      height: 100%;
      .SkeletonHolder {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px 10%;

        .Skelet {
          margin: 5px 0px;
        }
      }
      .LeftBoxContentHolder {
        display: flex;
        flex-direction: column;
        height: 100%;
        .TopData {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          h1 {
            margin: 20px 0px;
            @media (max-width: 768px) {
              font: 0.9rem;
            }
          }
          .GameDetails {
            padding: 5px 20px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #f0f0f0;
            .Tournament {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 30px;
              img {
                height: 100%;
                margin-right: 10px;
              }
            }
            .Divider {
              width: 1px;
              margin: 0px 10px;
              height: 100%;
              background: linear-gradient(
                0deg,
                rgba(229, 229, 229, 0) 0%,
                rgba(219, 219, 219, 1) 50%,
                rgba(219, 219, 219, 0) 100%
              );
            }
            .GameRound {
              font-weight: 100;
            }
          }
        }

        .Clubs {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          align-items: center;
          .HomeClubeContainer,
          .AwayClubeContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .ClubCard {
              width: 190px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              /* background: linear-gradient(
                0deg,
                rgba(246, 246, 246, 1) 0%,
                rgba(246, 246, 246, 0) 100%
              ); */
              border-radius: 8px;
              .imgHolder {
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 130px;
                img {
                  width: 60%;
                  margin-bottom: 20px;
                }
              }
              .titleHolder {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 30px;
                text-align: center;
                span {
                  font-size: 1.2rem;
                  line-height: 20px;
                }
              }
            }
          }

          .VsHolder {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            height: 180px;
            span {
              font-size: 1.8rem;
              background: linear-gradient(257deg, #c8102e 0%, #ae243d 100%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .CountDown {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          @media (max-width: 768px) {
            margin-bottom: 20px;
          }
        }
      }
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    }
    .Middlebox {
      width: 2%;
      height: 100%;
      display: flex;
      justify-content: center;
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
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
        @media (max-width: 768px) {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(150, 150, 150, 0) 0%,
            rgba(150, 150, 150, 1) 50%,
            rgba(150, 150, 150, 0) 100%
          );
        }
      }
    }
    .RightBox {
      width: 49%;
      height: 100%;
      .StandingsSkelet {
        padding: 50px;
      }
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
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
