import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { WydadTytles } from "../../data/Titles";

function achievements() {
  return (
    <StyledAchievements>
      <Header
        img={"/assets/Media/History/titles.jpg"}
        text={"the most titled in morocco"}
      />

      <div className="Container">
        <TitleCard TitleName="Botola" name="Botola" id="0" color="fd67ff" />
        <TitleCard
          TitleName="Cl"
          name="CAF Champions League"
          id="1"
          color="eabe00"
        />
        <TitleCard TitleName="Sc" name="CAF Super Cup" id="2" color="eabe00" />
        <TitleCard TitleName="Cdt" name="Moroccan cup" id="3" color="5aa586" />
      </div>
    </StyledAchievements>
  );
}

const StyledAchievements = styled.div`
  padding: 0px 10%;
  @media (max-width: 768px) {
    padding: 0px;
  }
  .Container {
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

const TitleCard = ({ TitleName, name, id, color }) => {
  return (
    <StyledTitleCard>
      <div
        className="LeftCard"
        color_={color}
        style={{ borderColor: `#${color}` }}
      >
        <img src={`/assets/Media/Titles/${TitleName}_.png`} />
      </div>

      <div className="RightCard">
        <h1>{name}</h1>
        <div className="Titles">
          <span>
            {WydadTytles[id].times.map((title) => {
              return ` - ${title}`;
            })}
          </span>
        </div>
      </div>
    </StyledTitleCard>
  );
};

const StyledTitleCard = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  position: relative;
  margin: 5px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .LeftCard {
    height: 100%;
    width: 20%;
    border-right: 1px solid #f0f0f0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    border: 3px solid black;
    border-right: none;
    border-bottom: none;
    border-top: none;

    @media (max-width: 768px) {
      height: 30%;
      overflow: hidden;
      width: 100%;
      border-top: 3px solid black;
      border-left: none;
    }
    img {
      height: 140px;
    }
  }
  .RightCard {
    padding: 10px 20px;
    width: 80%;
    text-align: left;
    @media (max-width: 768px) {
      width: 100%;
      height: 70%;
    }
    .Titles {
      height: 80%;
      width: 100%;
      span {
        margin: 10px;
      }
    }
    h1 {
      margin: 10px 0px;
    }
  }
`;

export default achievements;
