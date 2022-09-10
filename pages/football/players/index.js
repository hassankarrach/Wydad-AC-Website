import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Header from "../../../components/Header/Header";
import { PlayersData } from "../../../data/Players";

//MaterialUI DropDown
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const getStaticProps = async () => {
  // const Res = await fetch("http://localhost:3000/api/players");
  // const data = await Res.json();

  return {
    props: { PlayersData: PlayersData },
  };
};

const Index = ({ PlayersData }) => {
  const [ActiveTag, setActiveTag] = useState("All");

  const FilterPlayersByPosition = (Position) => {
    return PlayersData.filter((Player) => {
      return Player.Position == Position;
    });
  };

  const handleChange = (event) => {
    setActiveTag(event.target.value);
  };

  return (
    <StyledContainer>
      <Header img={"/assets/Media/Header/TheFamily.jpg"} text="Wydad Players" />
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
              className={`${ActiveTag === "Goalkeepers" ? "active" : ""} `}
              onClick={() => {
                setActiveTag("Goalkeepers");
              }}
            >
              Goalkeepers
            </li>
            <li
              className={`${ActiveTag === "Defenders" ? "active" : ""} `}
              onClick={() => {
                setActiveTag("Defenders");
              }}
            >
              Defenders
            </li>
            <li
              className={`${ActiveTag === "Midfielders" ? "active" : ""} `}
              onClick={() => {
                setActiveTag("Midfielders");
              }}
            >
              Midfielders
            </li>
            <li
              className={`${ActiveTag === "Forwards" ? "active" : ""} `}
              onClick={() => {
                setActiveTag("Forwards");
              }}
            >
              Forwards
            </li>
          </ul>

          <Select
            className="DropDown"
            value={ActiveTag}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="All">
              <em>ALL</em>
            </MenuItem>
            <MenuItem value={"Goalkeepers"}>Goalkeepers</MenuItem>
            <MenuItem value={"Defenders"}>Defenders</MenuItem>
            <MenuItem value={"Midfielders"}>Midfielders</MenuItem>
            <MenuItem value={"Forwards"}>Forwards</MenuItem>
          </Select>
        </div>
      </StyledFilterHolder>
      {ActiveTag === "Goalkeepers" || ActiveTag === "All" ? (
        <div className="Container">
          {FilterPlayersByPosition("Goalkeeper").map((Player) => {
            return (
              <Link key={Player.id} href={"/football/players/" + Player.id}>
                <StyledCard>
                  <div className="TopStyledCard">
                    <img className="img" src={"/assets/Media/Pre.png"} />
                  </div>
                  <div className="BottomStyledCard">
                    <h1>{Player["Full Name"]}</h1>
                    <h3>{Player.Position}</h3>
                  </div>
                  <div className="NumberStyledCard">
                    <h1>{Player.Number}</h1>
                  </div>
                </StyledCard>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {ActiveTag === "Defenders" || ActiveTag === "All" ? (
        <>
          <div className="Container">
            {FilterPlayersByPosition("Centre-Back").map((Player) => {
              return (
                <Link key={Player.id} href={"/football/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>
          <div className="Container">
            {FilterPlayersByPosition("Left-Back").map((Player) => {
              return (
                <Link key={Player.id} href={"/football/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>
          <div className="Container">
            {FilterPlayersByPosition("Right-Back").map((Player) => {
              return (
                <Link key={Player.id} href={"/football/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {ActiveTag === "Midfielders" || ActiveTag === "All" ? (
        <>
          <div className="Container">
            {FilterPlayersByPosition("Defensive Midfield").map((Player) => {
              return (
                <Link key={Player.id} href={"/football/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>

          <div className="Container">
            {FilterPlayersByPosition("Central Midfield").map((Player) => {
              return (
                <Link key={Player.id} href={"/football/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>

          <div className="Container">
            {FilterPlayersByPosition("Attacking Midfield").map((Player) => {
              return (
                <Link key={Player.id} href={"/football/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {ActiveTag === "Forwards" || ActiveTag === "All" ? (
        <>
          <div className="Container">
            {FilterPlayersByPosition("Left Winger").map((Player) => {
              return (
                <Link key={Player.id} href={"/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>

          <div className="Container">
            {FilterPlayersByPosition("Right Winger").map((Player) => {
              return (
                <Link key={Player.id} href={"/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>

          <div className="Container">
            {FilterPlayersByPosition("Centre-Forward").map((Player) => {
              return (
                <Link key={Player.id} href={"/players/" + Player.id}>
                  <StyledCard>
                    <div className="TopStyledCard">
                      <img className="img" src={"/assets/Media/Pre.png"} />
                    </div>
                    <div className="BottomStyledCard">
                      <h1>{Player["Full Name"]}</h1>
                      <h3>{Player.Position}</h3>
                    </div>
                    <div className="NumberStyledCard">
                      <h1>{Player.Number}</h1>
                    </div>
                  </StyledCard>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </StyledContainer>
  );
};

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
    @media (max-width: 768px) {
      width: 90%;
    }
    .DropDown:focus {
      border: 2px solid red;
    }
    .DropDown {
      display: none;
      width: 90%;

      @media (max-width: 768px) {
        display: block;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      @media (max-width: 768px) {
        display: none;
      }
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

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 10%;
  @media (max-width: 768px) {
    padding: 0px 5%;
  }

  .Container {
    --auto-grid-min-size: 19rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    column-gap: 10px;
    row-gap: 25px;
    grid-auto-flow: row;
    justify-items: center;
    margin-bottom: 30px;
    background: linear-gradient(
      90deg,
      rgba(238, 238, 238, 1) 0%,
      rgba(238, 238, 238, 0) 100%
    );
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    padding: 10px;
    border-left: 5px solid var(--Red);
  }
`;

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 2px 2px 0px;
  position: relative;
  cursor: pointer;
  .TopStyledCard {
    height: 75%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  .BottomStyledCard {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 0;
      font-size: 1.3rem;
    }
    h3 {
      font-size: 1rem;
      font-family: var(--font-secondary);
      color: #949494;
    }
  }
  .NumberStyledCard {
    position: absolute;
    right: 5%;
  }
`;

export default Index;
