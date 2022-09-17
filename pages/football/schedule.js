import React from "react";
import styled from "styled-components";
import MatchCard from "../../components/Main/Matches/MatchCard";

export const getStaticProps = async () => {
  const Res = await fetch(
    "https://api.sofascore.com/api/v1/team/36268/events/next/0"
  );
  const data = await Res.json();
  return {
    props: { NextGames: data },
  };
};

function schedule({ NextGames }) {
  const Events = NextGames.events;
  // startTimestamp
  console.log(Events[0]);

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
    return {
      date: (time = date + " " + month + " " + year),
      time: hour + ":" + min,
    };
  }
  return (
    <StyledSchedule>
      <div className="Container">
        <h1>First Team Schedule</h1>
        {Events.map((event, key) => {
          return (
            <MatchCard
              key={key}
              Competition={event.tournament.uniqueTournament.name}
              AwayClub={event.awayTeam.name}
              AwayClubLogo={event.awayTeam.shortName}
              HomeClub={event.homeTeam.name}
              HomeClubLogo={event.homeTeam.shortName}
              GameDate={timeConverter(event.startTimestamp).date}
              GameTime={timeConverter(event.startTimestamp).time}
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
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 768px) {
      padding: 10px 3%;
    }

    h1 {
      @media (max-width: 768px) {
        margin-top: 8%;
        font-size: 1.3rem;
      }
    }
  }
`;

export default schedule;
