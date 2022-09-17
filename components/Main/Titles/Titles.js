import styled from "styled-components";
import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
//Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
//ImportWydadTitlesData
import { WydadTytles } from "../../../data/Titles";
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

function Titles({ locale }) {
  const [ActifSlide, SetActifSlide] = useState();
  // ActifSlide

  return (
    <StyledTitles>
      <div className="TitlesCard">
        <div
          className="ImgHolder"
          style={{ backgroundImage: "url(./assets/Media/Textures/White.png)" }}
        ></div>
        <div className="TitlesCardData">
          <div className="RightTitlesCardData">
            <div className="TopRightTitlesCardData">
              <h1 className={`${locale === "ar" ? styles.ArTitle : ""}`}>
                {locale === "ar"
                  ? WydadTytles[ActifSlide || 0].ArName
                  : locale === "fr"
                  ? WydadTytles[ActifSlide || 0].FrName
                  : WydadTytles[ActifSlide || 0].name}
              </h1>
            </div>
            <div className="MiddleRightTitlesCardData">
              <div className="LeftImgClubHolder">
                <img
                  className="LeftImgClub"
                  src="/assets/Media/Extras/Team.png"
                />
              </div>
              <Swiper
                className="SwiperHolder"
                breakpoints={{
                  100: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 480px
                  1280: {
                    slidesPerView: 4,
                  },
                  1500: {
                    slidesPerView: 5,
                  },
                }}
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                onSlideChange={(swiper) => SetActifSlide(swiper.realIndex)}
              >
                {WydadTytles.slice(0, 6).map((Title) => {
                  return (
                    <SwiperSlide key={Title.id} className="SlideItem">
                      {({ isActive }) => (
                        <div
                          className={`TrophyHolder ${isActive ? "Actif" : ""}`}
                        >
                          <img src={`/assets/Media/Titles/${Title.Link}.png`} />
                          <span>{Title.times.length}</span>
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="BottomRightTitlesCardData">
              <img src={"/assets/Media/Logos/wydadLogos.png"} />
              <Link href={"/football/achievements"}>
                <button>
                  See all <ArrowForwardIosIcon fontSize="20" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyledTitles>
  );
}

const StyledTitles = styled.div`
  width: 100%;
  padding: 0px 10%;
  margin: 50px 0px;
  @media (max-width: 768px) {
    padding: 0px 5%;
    overflow: hidden;
  }
  .TitlesCard {
    height: 350px;
    border-radius: 8px;
    position: relative;
    border: 1px solid #eeeeee;
    @media (max-width: 768px) {
      overflow: hidden;
      height: 450px;
    }

    .ImgHolder {
      width: 100%;
      height: 100%;
      background-position: top center;
      background-size: cover;
      mix-blend-mode: exclusion;
      opacity: 0.8;
      overflow: hidden;
      border-radius: 8px;
    }
    .TitlesCardData {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      .RightTitlesCardData {
        width: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        position: relative;
        .LeftImgClubHolder {
          @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            position: absolute;

            &:after {
              width: 100%;
              height: 80%;
              position: absolute;
              content: "";
              background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 1) 20%,
                rgba(255, 255, 255, 0) 100%
              );
              z-index: 1;
              bottom: 0;
            }
          }
          .LeftImgClub {
            position: absolute;
            height: 120%;
            bottom: 0;
            z-index: 2;
            left: -40px;

            @media (max-width: 768px) {
              height: 100%;
              left: -35%;
              z-index: 1;

              /* left: -50%; */
            }
          }
        }

        .TopRightTitlesCardData {
          width: 70%;
          height: 20%;
          align-items: center;
          display: flex;
          justify-content: center;
          @media (max-width: 768px) {
            width: 100%;
            z-index: 4;
            font-size: 0.8rem;
          }
        }
        .MiddleRightTitlesCardData {
          width: 70%;
          height: 60%;

          @media (max-width: 768px) {
            width: 100%;
            height: 100%;
          }
          .SwiperHolder {
            height: 100%;
            .SlideItem {
              display: flex;
              justify-content: center;
            }
          }
          .TrophyHolder.Actif {
            filter: none;
            background: linear-gradient(
              0deg,
              rgba(217, 217, 217, 1) 0%,
              rgba(217, 217, 217, 0) 30%
            );

            @media (max-width: 768px) {
              background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 80%
              );
              border-bottom: 1px solid #e7e7e7;
            }
            img {
              width: 100%;
              margin-bottom: 5px;
              filter: none;
            }
            span {
              color: var(--Red);
            }
          }
          .TrophyHolder {
            height: 90%;
            width: 170px;
            z-index: 98;
            background: linear-gradient(
              0deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            cursor: pointer;
            position: relative;
            transition: 0.2s ease-in-out;
            &:hover {
              background: linear-gradient(
                0deg,
                rgba(217, 217, 217, 1) 0%,
                rgba(217, 217, 217, 0) 30%
              );
              img {
                width: 100%;
                margin-bottom: 5px;
                filter: none;
              }
              span {
                color: var(--Red);
              }
            }
            img {
              width: 80%;
              margin-bottom: 8px;
              transition: 0.2s ease-in-out;
              filter: grayscale(100%);
            }
            span {
              position: absolute;
              right: 10px;
              bottom: 2px;
              color: var(--grey);
              transition: 0.2s ease-in-out;
            }
          }
        }
        .BottomRightTitlesCardData {
          width: 70%;
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          @media (max-width: 768px) {
            width: 100%;
            z-index: 2;

            img {
              position: absolute;
              left: 10px;
              height: 30px;
            }
          }
          button {
            position: absolute;
            right: 20px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            &:hover {
              color: var(--Red);
            }
          }
        }
      }
    }
  }
`;

export default Titles;
