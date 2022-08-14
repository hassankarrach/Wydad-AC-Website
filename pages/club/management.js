import { useState } from "react";
import styled from "styled-components";
import PersonCard from "../../components/Cards/PersonCard";
import { WydadManagement } from "../../data/Management";
import Header from "../../components/Header/Header";

function management() {
  const [ActiveTag, setActiveTag] = useState("All");
  return (
    <StyledManagement>
      <Header text="Management" />
      <StyledFilterHolder>
        <div className="PlayersFilter">
          <ul>
            <li
              className={`${ActiveTag === "All" ? "active" : ""} `}
              onClick={() => {
                setActiveTag("All");
              }}
            >
              All
            </li>
            <li
              className={`${
                ActiveTag === "ManagementStructure" ? "active" : ""
              } `}
              onClick={() => {
                setActiveTag("ManagementStructure");
              }}
            >
              Management Structure
            </li>
            <li
              className={`${ActiveTag === "TechnicalStaff" ? "active" : ""} `}
              onClick={() => {
                setActiveTag("TechnicalStaff");
              }}
            >
              Technical staff
            </li>
            <li
              className={`${ActiveTag === "medicalStaff" ? "active" : ""} `}
              onClick={() => {
                setActiveTag("medicalStaff");
              }}
            >
              medical staff
            </li>
          </ul>
        </div>
      </StyledFilterHolder>
      <div className="Cards">
        {WydadManagement.map((item) => {
          return (
            <PersonCard
              key={item.id}
              name={item.En_name}
              position={item.En_Position}
              img={item.img}
            />
          );
        })}
      </div>
    </StyledManagement>
  );
}

const StyledManagement = styled.div`
  padding: 10px 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Cards {
    width: 100%;
    --auto-grid-min-size: 15rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    column-gap: 10px;
    row-gap: 25px;
    grid-auto-flow: row;
    justify-items: center;
    margin: 30px 0px;
  }
`;

const StyledFilterHolder = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .PlayersFilter {
    width: 100%;
    width: 80%;
    background-color: white;
    height: 100px;
    position: absolute;
    top: -50%;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      li {
        margin: 15px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: var(--Red);
        }
      }
      li.active {
        color: red;
      }
    }
  }
`;

export default management;
