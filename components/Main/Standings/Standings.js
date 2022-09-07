import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Standings() {
  const [TopTeams, setTopTeams] = useState();
  const [WydadStanding, setWydadStanding] = useState();

  useEffect(() => {
    async function GetStandings() {
      // Call then() after using fetch to pass the result into a callback that saves state
      fetch("/api/stats")
        .then((response) => response.json())
        .then((data) => {
          setTopTeams(data.standings[0].rows.slice(0, 4));
        });
    }
    GetStandings();
  }, []);

  return (
    <StyledStandings>
      <div className="ContentHolder">
        <table class="styled-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {TopTeams &&
              TopTeams.map((Club) => {
                return (
                  <tr>
                    <td id="TeamPlace">{Club.position}</td>
                    <td>
                      <img
                        className="Icon"
                        src={`./assets/Media/Teams/${Club.team.shortName}.png`}
                      />
                    </td>
                    <td>{Club.matches}</td>
                    <td>{Club.wins}</td>
                    <td>{Club.draws}</td>
                    <td>{Club.losses}</td>
                    <td>{Club.points}</td>
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
  width: 100%;
  padding: 10px;
  .ContentHolder {
    padding: 15px 30px 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .styled-table {
      border-collapse: collapse;
      font-size: 0.9em;
      width: 100%;
      font-family: "Lemon/Milk light", sans-serif;
      #TeamPlace {
        color: #dfbe6d;
        font-size: 1rem;
      }

      thead tr {
        background-color: transparent;
        color: black;
        text-align: left;
      }
      th,
      td {
        padding: 8px 10px;
      }
      tbody tr {
        border-bottom: 1px solid #f8f8f8;
        .Icon {
          width: 25px;
        }
      }
      tbody tr:nth-of-type(even) {
      }
      tbody tr:last-of-type {
        border-bottom: none;
      }
      tr.active-row {
        font-weight: bold;
        color: var(--Red);
      }
    }
  }
`;

export default Standings;
