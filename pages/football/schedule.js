import React from "react";
import styled from "styled-components";
import MatchCard from "../../components/Main/Matches/MatchCard";

export const getStaticProps = async () => {
  const Res = await fetch("http://localhost:3000/api/nextgame");
  const data = await Res.json();

  return {
    props: { NextGames: data },
  };
};

function schedule({ NextGames }) {
  const Events = NextGames.events;

  console.log(Events[0]);
  return (
    <StyledSchedule>
      <div className="Container">
        {Events.map((event, key) => {
          return (
            <MatchCard
              key={key}
              Competition={event.tournament.uniqueTournament.name}
              GameDate="2/2/2922"
              Opponent={"far"}
            />
          );
        })}
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
