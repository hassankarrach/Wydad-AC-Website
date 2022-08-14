import React from "react";
import styled from "styled-components";

function Standings() {
  return (
    <StyledStandings>
      <div className="ContentHolder">
        <table class="styled-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>P</th>
              <th>GD</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr class="active-row">
              <td id="TeamPlace">1</td>
              <td>
                <img className="Icon" src="./assets/Media/Teams/wac.png" />
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td id="TeamPlace">2</td>
              <td>
                <img className="Icon" src="./assets/Media/Teams/Rsb.png" />
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td id="TeamPlace">3</td>
              <td>
                <img className="Icon" src="./assets/Media/Teams/far.png" />
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td id="TeamPlace">4</td>
              <td>
                <img className="Icon" src="./assets/Media/Teams/mas.png" />
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
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
