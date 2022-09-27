import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
//Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
//Loader
import Skeleton from "@mui/material/Skeleton";

//------------------------------------------------//
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
    ],
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://api.sofascore.com/api/v1/team/36268/events/last/" + id
  );
  const data = await res.json();
  //GetScrappedStats

  return {
    props: { LastGamesData: data, CurrentID: id },
  };
};
//------------------------------------------------//

const Matches = ({ LastGamesData, CurrentID }) => {
  const router = useRouter();
  const HandlePrev = (e) => {
    if (CurrentID > 0) {
      e.preventDefault();
      router.push(`/football/fixtures-results/${CurrentID - 1}`);
    }
  };
  const HandleNext = (e) => {
    if (CurrentID < 7) {
      e.preventDefault();
      router.push(`/football/fixtures-results/${Number(CurrentID) + 1}`);
    }
  };
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + " " + month + " " + year + " | " + hour + ":" + min;
    return time;
  }
  return (
    <StyledResults>
      <h1>First Team Results</h1>
      {LastGamesData ? (
        LastGamesData.events
          .slice(0)
          .reverse()
          .filter((game) => game.status.code != 60 && game.status.code != 70)
          .map((game, key) => {
            return (
              <ResultCard
                key={key}
                homeTeam={game.homeTeam.name}
                homeTeamImg={game.homeTeam.shortName}
                awayTeam={game.awayTeam.name}
                awayTeamImg={game.awayTeam.shortName}
                homeScore={game.homeScore.current}
                awayScore={game.awayScore.current}
                tournament={game.tournament.name}
                Time={timeConverter(game.startTimestamp)}
                // Round={game.roundInfo.name}
              />
            );
          })
      ) : (
        <div style={{ height: "100vh" }} className="SkeletHolder">
          <Skeleton className="SkeletItem" />
          <Skeleton className="SkeletItem" />
          <Skeleton className="SkeletItem" />
          <Skeleton className="SkeletItem" />
          <Skeleton className="SkeletItem" />
          <Skeleton className="SkeletItem" />
          <Skeleton className="SkeletItem" />
        </div>
      )}

      <div className="Pagination">
        <div
          className={`Icon ${CurrentID == 0 ? "Last" : ""}`}
          onClick={HandlePrev}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div
          className={`Icon ${CurrentID == 7 ? "Last" : ""}`}
          onClick={HandleNext}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </StyledResults>
  );
};

const StyledResults = styled.div`
  height: auto;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    @media (max-width: 768px) {
      margin-top: 8%;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 10% 5%;
  }

  .Pagination {
    margin-top: 40px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    .Right {
      margin-left: 8px;
    }
    .Icon {
      background-color: #f5f5f5;
      border: 1px solid #e9e9e9;
      padding: 10px;
      border-radius: 3px;
      color: grey;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: #e7e7e7;
      }
    }
    .Last {
      cursor: not-allowed;
    }
  }
  .SkeletHolder {
    width: 100%;
    .SkeletItem {
      height: 120px;
      margin: 0px 0px;
    }
  }
`;

const ResultCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  tournament,
  Round,
  homeTeamImg,
  awayTeamImg,
  Time,
}) => {
  return (
    <StyledResultCard>
      <div className="StyledResultCardTop">
        <span>{Time}</span>
        <div className="Divider"></div>
        <span>{tournament}</span>
      </div>

      <div className="StyledResultCardMain">
        <div className="ContentHolder">
          <div className="HomeClub">
            <span>{homeTeam}</span>
            <img
              src={`/assets/Media/Teams/${homeTeamImg}.png`}
              onError={(e) => (
                (e.target.onerror = null),
                (e.target.src = "/assets/Media/Teams/Team.svg")
              )}
            />
          </div>

          <div className="FinalResult">
            <span>
              {homeScore} - {awayScore}
            </span>
          </div>

          <div className="AwayClub">
            <span>{awayTeam}</span>
            <img
              src={`/assets/Media/Teams/${awayTeamImg}.png`}
              onError={(e) => (
                (e.target.onerror = null),
                (e.target.src = "/assets/Media/Teams/Team.svg")
              )}
            />
          </div>
        </div>
      </div>
    </StyledResultCard>
  );
};

const StyledResultCard = styled.div`
  width: 100%;
  height: 120px;

  border-radius: 6px;
  border: 1px solid #e9e9e9;
  overflow: hidden;
  margin: 15px 0px;

  .StyledResultCardTop {
    height: 40px;
    display: flex;
    border-bottom: 1px solid #e9e9e9;
    align-items: center;
    padding-left: 10px;
    background-color: #f5f5f5;
    color: grey;
    font-weight: 100;
    font-size: 0.9rem;
    .Divider {
      width: 1px;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(215, 215, 215, 0) 0%,
        rgba(215, 215, 215, 1) 50%,
        rgba(215, 215, 215, 0) 100%
      );

      margin: 0px 10px;
    }
  }

  .StyledResultCardMain {
    height: 80px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    .ContentHolder {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .AwayClub {
        text-align: right;
        flex-direction: row-reverse;
        span {
          margin-left: auto;
        }
        img {
          margin-right: 10px;
        }
      }
      .HomeClub {
        span {
          margin-right: auto;
        }
        img {
          margin-left: 10px;
        }
      }
      .HomeClub,
      .AwayClub {
        padding: 2px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;

        img {
          width: 30px;
        }
      }

      .FinalResult {
        background-color: black;
        border-radius: 5px;
        color: white;
        padding: 5px 20px;
      }
    }
  }
`;

export default Matches;
