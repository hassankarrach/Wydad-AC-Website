import React from "react";
import styled from "styled-components";

function PlayerOfTheMonth() {
  return (
    <StyledPlayerOfTheMonth>
      <div className="PlayerTop">
        <img className="Player" src={"./assets/Media/Players/1.png"} />
      </div>
      <div className="PlayerBottom">
        <h1>Reda Tagnaouti</h1>
      </div>
    </StyledPlayerOfTheMonth>
  );
}

const StyledPlayerOfTheMonth = styled.div`
  height: 400px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ececec;
  .PlayerTop {
    height: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-position: center;
    background-size: cover;

    .Player {
      position: absolute;
      bottom: 0;
      height: 100%;
    }
  }
  .PlayerBottom {
    height: 20%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      color: white;
    }
  }
`;

export default PlayerOfTheMonth;
