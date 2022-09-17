import styled from "styled-components";

function MatchCard({
  AwayClub,
  AwayClubLogo,
  HomeClub,
  HomeClubLogo,
  GameDate,
  GameTime,
  Competition,
}) {
  return (
    <StyledMatchCard>
      <img
        src={
          Competition === "Botola"
            ? "/assets/Media/Matches/Botola.png"
            : Competition === "Cdt"
            ? "/assets/Media/Matches/Cdt.png"
            : Competition === "Cl"
            ? "/assets/Media/Matches/Cl.png"
            : Competition === "CAF Super Cup"
            ? "/assets/Media/Matches/Sc.png"
            : ""
        }
        className="BgMatchCard"
      />
      <div className="MatchCardData">
        <div className="LeftCard">
          <div className="CompName">
            <img
              src={
                Competition === "Botola Pro"
                  ? "/assets/Media/competitions/botola.png"
                  : Competition === "CAF Super Cup"
                  ? "/assets/Media/competitions/Sc.png"
                  : Competition === "Cl"
                  ? "/assets/Media/competitions/botola.png"
                  : Competition === "Cdt"
                  ? "/assets/Media/competitions/botola.png"
                  : ""
              }
            />
            <h1>{Competition}</h1>
          </div>
        </div>

        <div className="Data">
          <div className="GameTeams">
            <div className="Team">
              <img src={`/assets/Media/Teams/${HomeClubLogo}.png`} />
              <span>{HomeClub}</span>
            </div>

            <div className="Vs">
              <h1>VS</h1>
            </div>

            <div className="Team">
              <img src={`/assets/Media/Teams/${AwayClubLogo}.png`} />
              <span>{AwayClub}</span>
            </div>
          </div>
          <div className="GameDate">
            <span className="date">{GameDate}</span>
            <span className="time">{GameTime}</span>
          </div>
        </div>
      </div>
    </StyledMatchCard>
  );
}

const StyledMatchCard = styled.div`
  height: 70px;
  width: 100%;
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  position: relative;
  margin: 5px 0px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (max-width: 768px) {
    height: 140px;
    width: 100%;
    margin: 5px 0px;
  }

  .BgMatchCard {
    position: absolute;
    right: -20px;
    z-index: 1;
    height: 100%;
    opacity: 0.6;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .MatchCardData {
    display: flex;
    height: 100%;

    .LeftCard {
      width: 20%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(149, 67, 151, 1) 0%,
        rgba(149, 67, 151, 0) 200%
      );
      display: flex;
      justify-content: center;
      align-items: center;

      .CompName {
        height: 100%;
        width: 100%;

        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        img {
          height: 40px;
          margin-right: 10px;
          @media (max-width: 768px) {
            margin-right: 0px;
          }
        }
        h1 {
          font-size: 1.3rem;
          text-align: center;
        }
      }
    }

    .Data {
      display: flex;
      width: 80%;
      @media (max-width: 768px) {
        flex-direction: column;
        .GameDate {
          height: 30%;
          width: 100%;
        }
        .GameTeams {
          height: 70%;
          width: 100%;
        }
      }
      .GameDate {
        width: 30%;
        margin-left: auto;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        @media (max-width: 768px) {
          width: 100%;
          flex-direction: row;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .time {
          color: var(--Red);
          width: 120px;
          font-weight: 900;
          font-size: 1.3rem;
          background-color: var(--Red);
          border-radius: 5px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: 768px) {
            font-size: 1rem;
            margin-left: 8px;
            width: auto;
            padding: 0px 10px;
          }
        }
        .date {
          font-size: 1.3rem;
          font-weight: 100;
          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }

      .GameTeams {
        width: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
          border-bottom: 1px solid #f0f0f0;
          width: 100%;
        }
        .Team {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 50%;
          background: linear-gradient(
            90deg,
            rgba(245, 245, 245, 1) 0%,
            rgba(245, 245, 245, 0) 100%
          );

          border-top-left-radius: 15px;
          border-left: 2px solid #f0f0f0;
          margin: 0px 10px;
          padding: 5px;

          @media (max-width: 768px) {
            margin: 0px 10px;
            width: 100px;
          }
          img {
            height: 90%;
            margin-right: 20px;
          }
          span {
            @media (max-width: 768px) {
              display: none;
            }
          }
        }

        .Vs {
          h1 {
            background: linear-gradient(257deg, #c8102e 0%, #ae243d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            @media (max-width: 768px) {
              font-size: 1rem;
            }
          }
        }
      }
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
    }
  }
`;

export default MatchCard;
