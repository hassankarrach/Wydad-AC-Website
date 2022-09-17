import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { PlayersData } from "../../../data/Players";
//Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

function Players({ locale }) {
  return (
    <StyledPlayers>
      <div className="PlayersCard">
        <div
          className="ImgHolder"
          style={{ backgroundImage: "url(./assets/Media/Textures/White.png)" }}
        >
          <img
            className="StadiumLamp"
            src={"./assets/Media/Extras/StadiumLamp.webp"}
          />
        </div>

        <div className="PlayersCardData">
          <Swiper
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="SwiperHolder"
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
          >
            {PlayersData.map((Player) => {
              return (
                <SwiperSlide key={Player.id}>
                  {({ isActive }) => (
                    <Link href={`football/players/${Player.id}`}>
                      <div
                        className={`PlayerCard ${isActive ? "Actif" : ""} ${
                          locale === "ar" ? "Ar_" : ""
                        }`}
                      >
                        <img
                          className="PlayerImg"
                          src={`/assets/Media/Players/${Player.id}.png`}
                        />
                        <div className="OverlayDetails">
                          <h1>
                            <span>{Player.Number}</span>
                            {locale === "ar"
                              ? Player.ArName
                              : Player["Full Name"]}
                          </h1>
                          <span>
                            {locale != "ar"
                              ? Player.Position
                              : Player.Position === "Goalkeeper"
                              ? "حارس مرمى"
                              : Player.Position === "Centre-Back"
                              ? "قلب دفاع"
                              : Player.Position === "Left-Back"
                              ? "ظهير أيسر"
                              : Player.Position === "Right-Back"
                              ? "ظهير أيمن"
                              : Player.Position === "Defensive Midfield"
                              ? "وسط مدافع"
                              : Player.Position === "Central Midfield"
                              ? "خط وسط"
                              : Player.Position === "Attacking Midfield"
                              ? "صانع العاب"
                              : Player.Position === "Left Winger"
                              ? "جناح ايسر"
                              : Player.Position === "Right Winger"
                              ? "جناح أيمن"
                              : Player.Position === "Centre-Forward"
                              ? "رأس الحربة"
                              : ""}
                          </span>
                        </div>
                      </div>
                    </Link>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </StyledPlayers>
  );
}

const StyledPlayers = styled.div`
  width: 100%;
  padding: 0px 10%;
  @media (max-width: 768px) {
    padding: 0px 5%;
  }
  .PlayersCard {
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    background-color: black;
    .ImgHolder {
      width: 100%;
      height: 100%;
      background-position: top center;
      background-size: cover;
      mix-blend-mode: difference;
      opacity: 0.8;
      display: flex;
      justify-content: center;
      .StadiumLamp {
        mix-blend-mode: lighten;
        transition: 0.2s ease-in-out;
        filter: brightness(1);

        &:hover {
          filter: brightness(9);
        }
      }
    }

    .PlayersCardData {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .SwiperHolder {
        height: 100%;
        width: 100%;
      }
      .PlayerCard.Actif {
        .PlayerImg {
          height: 95%;
          filter: none;
        }
        .OverlayDetails {
        }
      }

      .PlayerCard.Ar_ {
        .OverlayDetails {
          h1 {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
            font-family: var(--Arabic);
            line-height: 40px;
            margin: 0px;
            span {
              margin-left: 10px;
            }
          }
          span {
            font-family: "Cairo", sans-serif;
          }
        }
      }

      .PlayerCard {
        cursor: pointer;
        height: 100%;
        width: 100%;
        position: relative;
        text-align: center;
        border-radius: 8px;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        /* background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.6) 50%
        ); */

        &:after {
          width: 100%;
          height: 100%;
          content: "";
          background-image: url("./assets/Media/Logos/LogoWhite.png");
          background-position: center;
          background-repeat: no-repeat;
          position: absolute;
          top: -20px;
          z-index: -2;
        }

        &:hover {
          .PlayerImg {
            height: 95%;
            filter: none;
          }
          .OverlayDetails {
          }
        }
      }
      .OverlayDetails {
        display: none;
        width: 100%;
        position: absolute;
        color: white;

        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
        h1 {
          margin: 5px;
        }
        span {
        }
      }
      .PlayerImg {
        height: 85%;
        position: absolute;
        transition: 0.35s ease-in-out;
        filter: grayscale(70%);
      }
    }
  }
`;

export default Players;
