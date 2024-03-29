import React from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";

import { Router, useRouter } from "next/router";
import { WydadPresidents } from "../../data/Presidents";
import PersonCard from "../../components/Cards/PersonCard";

function Presidents() {
  //GetCurrentLocale
  const router = useRouter();
  const CurrentLocale = router.locale;
  return (
    <>
      <StyledPresidents>
        <div
          className={`CurrentPresident ${CurrentLocale === "ar" ? "Ar_" : ""}`}
        >
          <div className="CurrentPresidentImg">
            <img
              className="WacPresident"
              src={"/assets/Media/Presidents/19.png"}
            />
          </div>
          <div className="CurrentPresidentContent">
            <div className="PersInfo">
              <h1 className={`${CurrentLocale === "ar" ? styles.ArTitle : ""}`}>
                {CurrentLocale === "ar" ? "سعيد الناصري" : "Said Naciri"}
              </h1>
              <span
                className={`${CurrentLocale === "ar" ? styles.ArText : ""}`}
              >
                {CurrentLocale === "ar"
                  ? "من 2014 الى الوقت الحاضر"
                  : "2014 - to present"}
              </span>
            </div>

            <div className="palmares">
              <h1 className={`${CurrentLocale === "ar" ? styles.ArTitle : ""}`}>
                {CurrentLocale === "ar" ? "الانجازات" : "palmares"}
              </h1>
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
          {WydadPresidents.slice(0)
            .reverse()
            .map((President) => {
              return (
                <PersonCard
                  key={President.id}
                  name={
                    CurrentLocale === "ar" ? President.ArName : President.EnName
                  }
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
  @media (max-width: 768px) {
    padding: 0px 5%;
  }
  .CurrentPresident {
    margin-top: 70px;
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
    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
    .CurrentPresidentImg {
      height: 100%;
      border: 1px solid #ededed;
      border-radius: 10px;
      border-bottom-right-radius: 0px;
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
              margin: 3px 0px;
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
      }
    }
  }
  .CurrentPresident.Ar_ {
    flex-direction: row-reverse;
    .CurrentPresidentContent {
      .PersInfo {
        width: 100%;
        span {
          text-align: right;
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

export default Presidents;
