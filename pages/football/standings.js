import React from "react";
import styled from "styled-components";

export const getStaticProps = async () => {
  const Res = await fetch(
    "https://api.sofascore.com/api/v1/unique-tournament/937/season/45552/standings/total"
  );
  const data = await Res.json();

  return {
    props: { standingsData: data },
  };
};

function standings({ standingsData }) {
  return (
    <StyledStandings>
      <div className="StandingsContainer">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Position</th>
              <th></th>
              <th className="TeamName">Team</th>
              <th>Points</th>
              <th>Matches</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals For</th>
              <th>Goals Against</th>
              <th>Goals Difference</th>
            </tr>
          </thead>

          <tbody>
            {standingsData.standings[0].rows.map((team) => {
              return (
                <tr
                  className={`${
                    team.team.name === "Wydad AC" ? "active-row" : ""
                  }`}
                  key={team.id}
                >
                  <td id="TeamPlace">{team.position}</td>
                  <td
                    className={`TeamIcon ${
                      team.team.name === "Wydad AC" ? "Wydad" : ""
                    }`}
                  >
                    <img
                      className={`Icon `}
                      src={`/assets/Media/Teams/${team.team.shortName}.png`}
                    />
                  </td>
                  <td>{team.team.name}</td>
                  <td>{team.points}</td>
                  <td>{team.matches}</td>
                  <td>{team.wins}</td>
                  <td>{team.draws}</td>
                  <td>{team.losses}</td>
                  <td>{team.scoresFor}</td>
                  <td>{team.scoresAgainst}</td>
                  <td>{team.scoresFor - team.scoresAgainst}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledStandings>
  );
}

const StyledStandings = styled.div`
  padding: 10px 10%;
  @media (max-width: 768px) {
    padding: 10px 5%;
  }
  .StandingsContainer {
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10% 0px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    @media (max-width: 768px) {
      padding: 5px;
      max-width: 100vw;
    }

    .styled-table {
      border-collapse: collapse;
      font-size: 0.9em;
      width: 100%;
      font-family: "Lemon/Milk light", sans-serif;

      #TeamPlace {
        color: #dfbe6d;
        font-size: 1rem;
      }
      .TeamIcon {
        @media (max-width: 768px) {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          position: sticky;
          left: -5px;
        }
      }
      thead tr {
        background-color: transparent;
        color: black;
        text-align: left;

        .TeamName {
          width: 20%;
        }
      }
      th {
        padding: 25px 0px;
        color: var(--grey);
        font-family: var(--font-secondary);
        font-size: 0.8rem;
        @media (max-width: 768px) {
          margin: 0px 10px;
          padding: 20px;
        }
      }
      td {
        padding: 8px 10px;
        width: 100px;
      }
      td.Wydad {
        @media (max-width: 768px) {
          background: linear-gradient(
            90deg,
            rgba(174, 36, 61, 1) 0%,
            rgba(174, 36, 61, 0) 100%
          );
        }
      }

      tbody tr {
        border-bottom: 1px solid #e7e7e7;
        .Icon {
          width: 25px;
        }
      }
      tbody tr:nth-of-type(even) {
        background-color: #f8f8f8;
      }
      tbody tr:last-of-type {
        border-bottom: none;
      }
      tr.active-row {
        font-weight: bold;
        color: var(--Red);
        background: linear-gradient(257deg, #c8102e 0%, #ae243d 100%);
        color: white;
      }
    }
  }
`;

export default standings;
