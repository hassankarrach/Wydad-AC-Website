import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import cheerio from "cheerio";
import styled from "styled-components";

//Icons
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import RectangleRoundedIcon from "@mui/icons-material/RectangleRounded";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//Chart.Js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { PlayersData } from "../../../data/Players";
ChartJS.register(ArcElement, Tooltip, Legend);

//GetData
export const getStaticPaths = async () => {
  // const res = await fetch("http://localhost:3000/api/players");
  // const data = await res.json();
  // map data to  an array of path objects with params (id)
  const paths = PlayersData.map((player) => {
    return {
      params: { id: player.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  // const res = await fetch("http://localhost:3000/api/players/" + id);
  const res = PlayersData.find((Player) => Player.id === parseInt(id));
  // const data = await res.json();
  const data = res;
  //GetScrappedStats

  return {
    props: { PlayersData: data, CurrentID: id },
  };
};

const PlayerId = ({ PlayersData, CurrentID }) => {
  const PlayerStats = {
    labels: ["Caf CL", "Botola", "Coupe du Trône"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(234, 190,0, 0.5)",
          "rgba(196, 95, 187, 0.2)",
          "rgba(5, 120, 72, 0.2)",
        ],
        borderColor: [
          "rgba(234, 190, 0, 1)",
          "rgba(196, 95, 187, 1)",
          "rgba(5, 120, 72, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <StyledContainer id={PlayersData.id}>
      <div
        className="StyledBanner"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(200,16,46,1) 0%, rgba(200,16,46,0) 100%), url(/assets/Media/Header/TheFamily.jpg)",
        }}
      >
        <Link
          href={`${
            CurrentID > 1
              ? parseInt(CurrentID) - 1
              : CurrentID === 1
              ? "30"
              : "30"
          }`}
        >
          <ArrowBackIosIcon className="BannerIcon" />
        </Link>
        <Link
          href={`${
            CurrentID > 0 && CurrentID < 30
              ? parseInt(CurrentID) + 1
              : CurrentID === 30
              ? "1"
              : "1"
          }`}
        >
          <ArrowForwardIosIcon className="BannerIcon" />
        </Link>
        <div className="Avatar"></div>
        <div className="PlayerData">
          <div className="PlayerNumber">
            <h1>{PlayersData.Number}</h1>
          </div>
          <div className="PlayerName">
            <h1>{PlayersData["Full Name"]}</h1>
            <h2>{PlayersData.Position}</h2>
          </div>
        </div>
      </div>

      <div className="DataContainer">
        <div className="Title">
          <h1>Profile</h1>
        </div>

        <div className="PlayerProfile">
          <div className="Joined item">
            <h1>JOINED</h1>
            <h2>30 JUN 2018</h2>
          </div>
          <div className="Divider"></div>

          <div className="Country item">
            <h1>Country</h1>
            <h2>{PlayersData.Citizenship}</h2>
          </div>

          <div className="Divider"></div>

          <div className="DateOfBirth item">
            <h1>Date Of Birth</h1>
            <h2>{PlayersData.BirthDate}</h2>
          </div>

          <div className="Divider"></div>

          <div className="MarketValue item">
            <h1>Market Value</h1>
            <h2>{PlayersData["Current market value"]}</h2>
          </div>
        </div>

        <div className="Title">
          <h1>Titles</h1>
        </div>

        <div className="PlayerTitles">
          {PlayersData.titles["CAF Champions League"] != undefined ? (
            <div className="Card">
              <div className="LeftCard">
                <img
                  className="TitleLogo"
                  src={"/assets/Media/Titles/Cl.png"}
                />
              </div>
              <div className="RightCard">
                <h1>
                  {PlayersData.titles["CAF Champions League"]} CAF Champions
                  League
                </h1>
              </div>
            </div>
          ) : (
            ""
          )}

          {PlayersData.titles.Botola != undefined ? (
            <div className="Card">
              <div className="LeftCard" style={{ backgroundColor: "#c45fbb" }}>
                <img
                  className="TitleLogo"
                  src={"/assets/Media/Titles/Botola.png"}
                />
              </div>
              <div className="RightCard">
                <h1>{PlayersData.titles.Botola} Botola Maroc</h1>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="Title">
          <h1>Stats</h1>
        </div>

        <div className="InnerContainer">
          <div className="LeftMainContainer">
            <div className="PlayerGoals">
              <div className="Charts">
                <div className="ChartHolder">
                  <h1>Goals :</h1>
                  <Doughnut
                    className="Doughnut"
                    data={PlayerStats}
                    borderColor={"red"}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                    }}
                  />
                  <h1 className="TotalNumber">8</h1>
                </div>
                <div className="ChartHolder">
                  <h1>Assists :</h1>
                  <Doughnut
                    className="Doughnut"
                    data={PlayerStats}
                    borderColor={"red"}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                    }}
                  />
                  <h1 className="TotalNumber">8</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="RightSmallContainer">
            <DataItem
              icon_={<SportsSoccerIcon className="Icon" />}
              text="Appearances"
              value="0"
            />
            <div className="Divider"></div>
            <DataItem
              icon_={<QueryBuilderIcon className="Icon" />}
              text="Minutes played"
              value="0"
            />
            <div className="Divider"></div>

            <DataItem
              icon_={<RectangleRoundedIcon className="Icon" />}
              color="red"
              transform
              text="Red Cards"
              value="0"
            />
            <div className="Divider"></div>

            <DataItem
              icon_={<RectangleRoundedIcon className="Icon" />}
              color="yellow"
              transform
              text="Yellow Cards"
              value="0"
            />
            <div className="Divider"></div>

            <div className="PlayerHeatMap">
              <svg width="32" height="32" viewBox="0 0 544 340" fill="#404040">
                <path
                  fill="#FFFFFF"
                  d="M273.5,0h-3H0v71.4v3v49.7v3v85.7v3v49.8v3V340h270.5h3H544v-71.4v-3v-49.8v-3v-85.7v-3V74.4v-3V0H273.5z M541,11.3c-4.2-0.8-7.5-4.1-8.3-8.3h8.3V11.3z M270.5,173.7v36.2c-21.3-0.8-38.4-18.4-38.4-39.9c0-21.5,17.1-39.1,38.4-39.9v36.2 c-1.5,0.6-2.5,2-2.5,3.7C268,171.7,269,173.1,270.5,173.7z M273.5,173.7c1.5-0.6,2.5-2,2.5-3.7c0-1.7-1-3.1-2.5-3.7v-36.2 c21.3,0.8,38.4,18.4,38.4,39.9c0,21.5-17.1,39.1-38.4,39.9V173.7z M11.3,3c-0.8,4.2-4.1,7.5-8.3,8.3V3H11.3z M3,127.1h28v85.7H3 V127.1z M3,215.9h31v-91.7H3V74.4h90.7v191.2H3V215.9z M3,328.7c4.2,0.8,7.5,4.1,8.3,8.3H3V328.7z M14.3,337 c-0.9-5.8-5.5-10.5-11.3-11.3v-57.1h93.7v-71.5c10.1-5.8,16.4-16,16.4-27.1c0-11-6.3-21.3-16.4-27.1V71.4H3V14.3 C8.8,13.5,13.5,8.8,14.3,3h256.2v124.1c-23,0.8-41.4,19.7-41.4,42.9c0,23.2,18.5,42.1,41.4,42.9V337H14.3z M96.7,146.4 c8.3,5.3,13.4,14.2,13.4,23.6c0,9.4-5.1,18.2-13.4,23.6V146.4z M532.7,337c0.8-4.2,4.1-7.5,8.3-8.3v8.3H532.7z M541,212.9h-28 v-85.7h28V212.9z M541,124.1h-31v91.7h31v49.8h-90.7V74.4H541V124.1z M447.3,71.4v71.5c-10.1,5.8-16.4,16-16.4,27.1 c0,11,6.3,21.3,16.4,27.1v71.5H541v57.1c-5.8,0.9-10.5,5.5-11.3,11.3H273.5V212.9c23-0.8,41.4-19.7,41.4-42.9 c0-23.2-18.5-42.1-41.4-42.9V3h256.2c0.9,5.8,5.5,10.5,11.3,11.3v57.1H447.3z M447.3,193.6c-8.3-5.3-13.4-14.2-13.4-23.6 c0-9.4,5.1-18.2,13.4-23.6V193.6z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M64.4,166c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C68.4,167.8,66.6,166,64.4,166z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M479.6,174c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4c-2.2,0-4,1.8-4,4C475.6,172.2,477.4,174,479.6,174z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

const DataItem = ({ icon_, text, value, transform, color }) => {
  return (
    <StyledDataItem transform={transform} cardColor={color}>
      <div className="LeftStatsNumbers">
        {icon_}
        <span>{text}</span>
      </div>
      <div className="RightStatsNumbers">
        <h1>{value}</h1>
      </div>
    </StyledDataItem>
  );
};

const StyledDataItem = styled.div`
  display: flex;
  border-radius: 8px;
  .LeftStatsNumbers {
    display: flex;
    align-items: center;
    width: 80%;
    .Icon {
      margin-right: 10px;
      transform: ${(props) => (props.transform ? "rotate(90deg)" : "")};
      color: ${(props) =>
        props.cardColor === "red"
          ? "red"
          : props.cardColor === "yellow"
          ? "yellow"
          : ""};
    }
    span {
      font-size: 1.1rem;
      color: var(--grey);
    }
  }
  .RightStatsNumbers {
    color: var(--Red);
    font-size: 1rem;
    width: 20%;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: auto;

  .StyledBanner {
    margin-top: 70px;
    height: 250px;
    background-color: blue;
    position: "relative";
    display: flex;
    background-position: center;
    background-size: cover;
    background-position-y: 68%;
    padding: 0px 10%;
    position: relative;
    @media (max-width: 768px) {
      justify-content: center;
    }

    .PlayerData {
      color: white;
      margin-left: 20px;
      margin-top: auto;
      display: flex;
      align-items: center;
      align-items: flex-end;
      @media (max-width: 768px) {
        position: absolute;
        bottom: 0;
      }

      .PlayerNumber {
        padding: 0px 20px;
        display: flex;
        align-items: center;
        align-items: flex-end;
        font-size: 2.1rem;
        h1 {
          margin-bottom: auto;
        }

        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }

      .PlayerName {
        h1 {
          margin: 0px;
          padding: 0px;
          @media (max-width: 768px) {
            font-size: 1.5rem;
          }
        }
        h2 {
          font-family: var(--font-secondary);
          font-weight: 80;
          font-size: 1.4rem;
          margin: 0px;
          padding: 0px;
          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }
    }

    .Avatar {
      height: 120%;
      width: 250px;
      background: white;
      @media (max-width: 768px) {
        width: 190px;
        height: 160px;
      }

      background-repeat: no-repeat;
      background-image: ${(props) =>
        `url(/assets/Media/Players/${props.id}.png)`};
      border-bottom: 1px solid #e5e5e5;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      position: relative;
      overflow: hidden;

      ::after {
        width: 100%;
        height: 100%;
        content: "";
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(255, 255, 255, 0) 50%
        );
        position: absolute;
      }
    }

    .BannerIcon {
      color: white;
      position: absolute;
      cursor: pointer;
      &:first-child {
        left: 20px;
        top: 45%;
      }
      &:nth-child(2) {
        right: 20px;
        top: 45%;
      }
    }
  }

  .DataContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 10%;
    @media (max-width: 768px) {
      padding: 0px 5%;
    }

    .Title {
      width: 100%;
      margin-top: 3%;
    }
    .PlayerProfile {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 64%
      );
      border-radius: 8px;
      padding: 10px 40px;
      border-bottom: 1px solid rgba(209, 209, 209, 0.3);
      @media (max-width: 768px) {
        flex-direction: column;
      }

      .Divider {
        width: 1px;
        height: 100px;
        background: linear-gradient(
          0deg,
          rgba(209, 209, 209, 0) 0%,
          rgba(209, 209, 209, 0.7) 50%,
          rgba(209, 209, 209, 0) 100%
        );
        @media (max-width: 768px) {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(209, 209, 209, 0) 0%,
            rgba(209, 209, 209, 1) 50%,
            rgba(209, 209, 209, 0) 100%
          );
        }
      }

      .item {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 0px 30px;
        @media (max-width: 768px) {
          text-align: center;
        }
        h1 {
          line-height: 0.5;
          font-size: 1.4rem;
          @media (max-width: 768px) {
            line-height: 1.2;
          }
        }
        h2 {
          line-height: 0.5;
          font-size: 1.2rem;
          color: var(--grey);
          font-weight: 100;
          font-family: var(--font-secondary);
        }
      }
    }

    .PlayerTitles {
      display: flex;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 64%
      );
      border-radius: 8px;
      padding: 10px 40px;
      border-bottom: 1px solid rgba(209, 209, 209, 0.3);
      @media (max-width: 768px) {
        flex-direction: column;
      }

      .Card {
        height: 50px;
        width: auto;
        background-color: white;
        border: 1px solid #f0efef;
        border-radius: 8px;
        display: flex;
        overflow: hidden;
        margin-right: 10px;
        @media (max-width: 768px) {
          margin: 2px 0px;
        }
        .LeftCard {
          background-color: #eabe00;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px;
          img {
            height: 35px;
            padding: 0px 15px;
          }
        }

        .RightCard {
          width: auto;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            font-size: 1rem;
            padding: 0px 15px;
          }
        }
      }
    }
    .InnerContainer {
      width: 100%;
      height: 1000px;
      display: flex;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      .LeftMainContainer {
        width: 70%;
        height: 100%;
        @media (max-width: 768px) {
          width: 100%;
        }

        .PlayerGoals {
          width: 100%;
          display: flex;
          flex-direction: column;
          h1 {
            font-size: 1rem;
            color: var(--grey);
          }
          .Charts {
            display: flex;
            width: 90%;
            .ChartHolder {
              min-width: 20%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin: 10px 30px;
              position: relative;
              .TotalNumber {
                position: absolute;
                font-size: 2.5rem;
                top: 49%;
                left: 47%;
              }
            }
          }
        }
      }
      .RightSmallContainer {
        width: 30%;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px 20px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border: 1px solid #ededed;
        @media (max-width: 768px) {
          width: 100%;
        }
        .Divider {
          background: linear-gradient(
            90deg,
            rgba(209, 209, 209, 0) 0%,
            rgba(209, 209, 209, 0.6) 50%,
            rgba(209, 209, 209, 0) 100%
          );
          height: 1px;
          width: 100%;
        }
        .PlayerHeatMap {
          width: 100%;
          height: 300px;
          background-color: grey;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 100%;
            height: 80%;
          }
          canvas {
            width: 214.6px;
            height: 136px;
          }
        }
      }
    }
  }
`;

export default PlayerId;
