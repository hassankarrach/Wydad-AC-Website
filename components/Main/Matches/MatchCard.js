import styled from "styled-components";

function MatchCard({
  Opponent,
  WacGoals,
  OpponentGoals,
  GameDate,
  GameTime,
  Competition,
}) {
  return (
    <StyledMatchCard>
      <img
        src={
          Competition === "Botola"
            ? "./assets/Media/Matches/Botola.png"
            : Competition === "Cdt"
            ? "./assets/Media/Matches/Cdt.png"
            : Competition === "Cl"
            ? "./assets/Media/Matches/Cl.png"
            : ""
        }
        className="BgMatchCard"
      />
      <div className="MatchCardData">
        <div className="MatchCardDataLeft">
          <div className="TeamA">
            <img
              src={`./assets/Media/Teams/${Opponent}.png`}
              className="OpponentLogo"
            />
          </div>
          <div className="TeamB">
            <img src={"./assets/Media/Teams/wac.png"} />
          </div>
        </div>

        <div className="MatchCardDataRight">
          {GameDate ? (
            <h1 className="Date">
              {GameDate} <br />
              <span>{GameTime}</span>
            </h1>
          ) : (
            <h1>
              {OpponentGoals} - {WacGoals}
            </h1>
          )}
        </div>
      </div>
    </StyledMatchCard>
  );
}

const StyledMatchCard = styled.div`
  height: 110px;
  width: 100%;
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  .BgMatchCard {
    position: absolute;
    right: -30px;
    z-index: 1;
    height: 100%;
    opacity: 0.8;
  }
  .MatchCardData {
    display: flex;
    height: 100%;
    .MatchCardDataLeft {
      display: flex;
      align-items: center;
      width: 60%;
      height: 100%;
      .TeamA {
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 78%;
        }
      }
      .TeamB {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 90%;
        }
      }
    }
    .MatchCardDataRight {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      justify-content: center;
      z-index: 2;

      .Date {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default MatchCard;
