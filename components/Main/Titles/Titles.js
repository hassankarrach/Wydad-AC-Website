import styled from "styled-components";
import { useState } from "react";
//Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

function Titles() {
  const [ActifSlide, SetActifSlide] = useState();
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
              <h1>
                {ActifSlide === 0
                  ? "MOROCCON CHAMPION"
                  : ActifSlide === 1
                  ? "CAF Champions League"
                  : ActifSlide === 2
                  ? "MOROCCON CUP"
                  : ActifSlide === 3
                  ? "CAF SUPER CUP"
                  : ActifSlide === 4
                  ? "afro-Asiatic cup"
                  : ActifSlide === 5
                  ? "CAF Cup Winners Cup"
                  : ActifSlide === 6
                  ? "Mohammed V Cup"
                  : ""}
              </h1>
            </div>
            <div className="MiddleRightTitlesCardData">
              <img
                className="LeftImgClub"
                src="/assets/Media/Extras/Team.png"
              />
              <Swiper
                className="SwiperHolder"
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                onSlideChange={(swiper) => SetActifSlide(swiper.realIndex)}
              >
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`TrophyHolder ${isActive ? "Actif" : ""}`}>
                      <img src={"/assets/Media/Titles/Botola_.png"} />
                      <span>X22</span>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`TrophyHolder ${isActive ? "Actif" : ""}`}>
                      <img src={"/assets/Media/Titles/Cl_.png"} />
                      <span>X22</span>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`TrophyHolder ${isActive ? "Actif" : ""}`}>
                      <img src={"/assets/Media/Titles/Cdt_.png"} />
                      <span>X9</span>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`TrophyHolder ${isActive ? "Actif" : ""}`}>
                      <img src={"/assets/Media/Titles/Sc_.png"} />
                      <span>X1</span>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`TrophyHolder ${isActive ? "Actif" : ""}`}>
                      <img src={"/assets/Media/Titles/Afro_.png"} />
                      <span>X1</span>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`TrophyHolder ${isActive ? "Actif" : ""}`}>
                      <img src={"/assets/Media/Titles/CafCupWinnersCup.png"} />
                      <span>X1</span>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`TrophyHolder ${isActive ? "Actif" : ""}`}>
                      <img src={"/assets/Media/Titles/MohamedV.png"} />
                      <span>X1</span>
                    </div>
                  )}
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="BottomRightTitlesCardData">
              <img src={"/assets/Media/Logos/wydadLogos.png"} />
              <button>
                See all <ArrowForwardIosIcon fontSize="20" />
              </button>
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
  .TitlesCard {
    height: 350px;
    border-radius: 8px;
    position: relative;
    border: 1px solid #eeeeee;
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
        .LeftImgClub {
          height: 120%;
          position: absolute;
          bottom: 0;
          z-index: 2;
          left: 0;
        }

        .TopRightTitlesCardData {
          width: 70%;
          height: 20%;
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .MiddleRightTitlesCardData {
          width: 70%;
          height: 60%;
          align-items: center;
          display: flex;
          justify-content: center;
          .SwiperHolder {
            height: 100%;
            max-width: 100%;
          }
          .TrophyHolder.Actif {
            filter: none;
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
            margin: 8px;
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
