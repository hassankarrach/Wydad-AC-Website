import React from "react";
import styled from "styled-components";
import { WydadPresidents } from "../../data/Presidents";
import PersonCard from "../../components/Cards/PersonCard";
import SubNav from "../../components/Navbar/SubNav";

const SubNavList = [
  {
    title: "history",
  },
  {
    title: "Management",
  },
  {
    title: "wydad presidents",
  },
  {
    title: "Partners",
  },
  {
    title: "supporters",
  },
];

function presidents() {
  return (
    <>
      <StyledPresidents>
        <div className="CurrentPresident">
          <div className="CurrentPresidentImg">
            <img
              className="WacPresident"
              src={"/assets/Media/Presidents/19.png"}
            />
          </div>
          <div className="CurrentPresidentContent">
            <div className="PersInfo">
              <h1>Said Naciri</h1>
              <span>2014 - to present</span>
            </div>

            <div className="palmares">
              <h1>palmares</h1>
              <div className="Cards">
                <div className="Card">
                  <div
                    className="LeftCard"
                    style={{ backgroundColor: "#c45fbb" }}
                  >
                    <img
                      className="TitleLogo"
                      src={"/assets/Media/Titles/Botola.png"}
                    />
                  </div>
                  <div className="RightCard">
                    <h1>4 Botola Maroc</h1>
                  </div>
                </div>

                <div className="Card">
                  <div
                    className="LeftCard"
                    style={{ backgroundColor: "var(--yellow)" }}
                  >
                    <img
                      className="TitleLogo"
                      src={"/assets/Media/Titles/Cl.png"}
                    />
                  </div>
                  <div className="RightCard">
                    <h1>2 CAF Champions League</h1>
                  </div>
                </div>

                <div className="Card">
                  <div
                    className="LeftCard"
                    style={{ backgroundColor: "var(--yellow)" }}
                  >
                    <img
                      className="TitleLogo"
                      src={"/assets/Media/Titles/Sc.png"}
                    />
                  </div>
                  <div className="RightCard">
                    <h1>1 CAF Supercup</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="WydadPresidents">
          {WydadPresidents.map((President) => {
            return (
              <PersonCard
                key={President.id}
                name={President.EnName}
                img={`/assets/Media/Presidents/${President.id}.jpg`}
                sub={President.period}
              />
            );
          })}
        </div>
      </StyledPresidents>
    </>
  );
}

const StyledPresidents = styled.div`
  display: flex;
  padding: 10px 10%;
  display: flex;
  flex-direction: column;
  .CurrentPresident {
    margin-top: 0px;
    overflow: hidden;
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    border-bottom: 1px solid #ededed;
    display: flex;
    align-items: center;
    .CurrentPresidentImg {
      height: 100%;
      border: 1px solid #ededed;
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
      .WacPresident {
        height: 100%;
        position: relative;
      }
    }

    .CurrentPresidentContent {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 15px;

      .PersInfo {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1 {
          margin: 7px 0px;
        }
        span {
          color: var(--grey);
        }
      }

      .palmares {
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 1.4rem;
        }
        .Cards {
          display: flex;
          .Card {
            height: 50px;
            width: auto;
            background-color: white;
            border: 1px solid #f0efef;
            border-radius: 8px;
            display: flex;
            overflow: hidden;
            margin-right: 10px;
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
      }
    }
  }

  .WydadPresidents {
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

export default presidents;
