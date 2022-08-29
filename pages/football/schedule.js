import React from "react";
import styled from "styled-components";
import MatchCard from "../../components/Main/Matches/MatchCard";

function schedule() {
  return (
    <StyledSchedule>
      <div className="Container">
        <MatchCard Competition="Botola" GameDate="2/2/2922" Opponent={"far"} />
        <MatchCard Competition="Botola" GameDate="2/2/2922" Opponent={"dhj"} />
      </div>
    </StyledSchedule>
  );
}

const StyledSchedule = styled.div`
  height: 100vh;
  padding: 20px 10%;
  @media (max-width: 768px) {
    padding: 20px 2%;
  }

  .Container {
    height: 100%;
    margin-top: 5%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default schedule;
