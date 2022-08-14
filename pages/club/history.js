import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header/Header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

import { WydadHistoryAr } from "../../data/History";

function history() {
  const [currentID, setcurrentID] = useState(0);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <StyledHistory img={currentID}>
      <Header text={"Wydad History"} img={"/assets/Media/History/banner.jpg"} />

      <div className="Content">
        <div className="TimeLindeNavigation"></div>
        <div className="ContentData">
          <div className="ContentLeft">
            <div
              className="ImgHolder"
              style={{
                backgroundImage: `url(/assets/Media/History/${WydadHistoryAr[currentID].img})`,
              }}
            ></div>
          </div>
          <div className="ContentRight">
            <div className="ContentRight_">
              <h1 className={styles.ArTitle}>
                {WydadHistoryAr[currentID].title}
              </h1>
              <p className={styles.ArText}>
                {WydadHistoryAr[currentID].content}
              </p>
            </div>

            <div className="timeline">
              <ArrowBackIosIcon className="Icon" ref={navigationNextRef} />
              <Swiper
                style={{ direction: "rtl" }} //ltr for En or Fr
                className="SwiperHolder"
                spaceBetween={0}
                slidesPerView={3}
                loop={false}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                onSlideChange={(swiper) => {
                  setcurrentID(swiper.realIndex);
                }}
                breakpoints={
                  // when window width is >= 320px
                  {
                    100: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 3,
                    },
                  }
                }
              >
                {WydadHistoryAr.map((item) => {
                  return (
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div className={`item ${isActive ? "actif" : ""}`}>
                          <p className="year">{item.id}</p>
                          <p className={`title ${styles.ArText}`}>
                            {item.title}
                          </p>
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <ArrowForwardIosIcon className="Icon" ref={navigationPrevRef} />
            </div>
          </div>
        </div>
      </div>
    </StyledHistory>
  );
}

const StyledHistory = styled.div`
  height: auto;
  padding: 0px 10%;
  @media (max-width: 768px) {
    padding: 0px 2%;
  }
  .Content {
    width: 100%;
    height: auto;

    .ContentData {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 5% 0;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      .ContentLeft {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 1%;
        position: relative;

        @media (max-width: 768px) {
          width: 100%;
          height: 50%;
          flex-direction: column;
          margin-bottom: 30px;
        }

        .ImgHolder {
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          position: relative;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          border-left: 10px solid var(--yellow);

          @media screen and (max-width: 768px) {
            border-left: none;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-top: 10px solid var(--yellow);
          }

          &::after {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              rgba(248, 248, 248, 0) 0%,
              rgba(248, 248, 248, 1) 100%
            );
            content: "";

            @media screen and (max-width: 768px) {
              background: linear-gradient(
                180deg,
                rgba(248, 248, 248, 0) 0%,
                rgba(248, 248, 248, 1) 100%
              );
            }
          }

          @media (max-width: 768px) {
            width: 100%;
            height: 300px;
          }
        }
      }
      .ContentRight {
        width: 75%;
        padding: 40px;
        display: flex;
        @media (max-width: 768px) {
          width: 100%;
          padding: 0px;
          flex-direction: column-reverse;
        }

        flex-direction: column;
        .ContentRight_ {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          height: 80%;
          h1 {
            z-index: 2;
            position: relative;
            &::before {
              right: 0;
              bottom: 0;
              position: absolute;
              width: 100%;
              height: 16px;
              z-index: -1;
              background: linear-gradient(
                90deg,
                rgba(249, 185, 8, 0) 0%,
                rgba(249, 185, 8, 1) 100%
              );
              content: "";
            }
          }
        }
        .timeline {
          height: 20%;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 1px;
            background: linear-gradient(
              90deg,
              rgba(210, 210, 210, 0) 0%,
              rgba(210, 210, 210, 1) 50%,
              rgba(210, 210, 210, 0) 100%
            );
          }
          .SwiperHolder {
            width: 100%;
            .item.actif {
              &::after {
                border: 3px solid white;
                outline: 3px solid var(--Red);
              }
              .title {
                color: var(--Red);
              }
            }
            .item {
              position: relative;
              height: 100%;
              display: flex;
              flex-direction: column-reverse;
              align-items: center;
              justify-content: center;
              margin: 0px 30px;
              transition: 0.2s ease-in-out;
              .title {
                transition: 0.2s ease-in-out;
                margin-top: 0px;
              }

              &:hover::after {
                border: 3px solid white;
                outline: 3px solid var(--Red);
              }
              &::after {
                display: inline-block;
                background-color: var(--Red);
                width: 15px;
                height: 15px;
                content: "";
                border-radius: 50%;
                position: absolute;
                z-index: 4;
                transition: 0.2s ease;
                cursor: pointer;
              }
            }
          }
          .Icon {
            cursor: pointer;
            color: grey;
            transition: 0.2s ease-in-out;
            &:hover {
              color: var(--Red);
            }
          }
        }
      }
    }
  }
`;

export default history;
