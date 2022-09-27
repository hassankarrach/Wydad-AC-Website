import { useEffect, useState } from "react";
import Image from "next/future/image";
import styled from "styled-components";
import styles from "../../../styles/Home.module.css";
import { useTransition, animated } from "@react-spring/web";
//Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const LastThreeNews = [
  {
    id: 0,
    title: "Said naciri Answers your Questions #WACTalk",
    arTitle: "#WACTalk سعيد الناصري يجيب على أسئلتك",
    img: "https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-6/306359121_5817968878265098_790139753703801729_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGouOagQ9j7Bu62Dvn5w1Wz06bR1EDRXU3TptHUQNFdTXawGeP-B41ABytqts9cOIsYhXJPA8u1pklzXjPC3tZd&_nc_ohc=upeIJLjmh5wAX_-_26m&_nc_zt=23&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT_JcPqIakYjgbHCJ_qYRplE2YGzDlRJIv3yqv3psKcLtQ&oe=6334E4C5",
    Date: "12-02-2022",
  },
  {
    id: 1,
    title: "Pictures from today's win against FC Saint Éloi Lupopo",
    arTitle: "صور من فوز اليوم على إف سي سانت إلوي لوبوبو",
    img: "https://scontent.fcmn5-2.fna.fbcdn.net/v/t39.30808-6/307487784_5845646285497357_4926266484943855725_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGC5Tars9yIqhUqwg-kvGEsUbCncmJOCsRRsKdyYk4KxOCuihT-Z1cgXWrOwF_a1DaIRZLZRvg4Z9CMfukngklV&_nc_ohc=eFEnnsg2w0oAX-uyoqQ&_nc_zt=23&_nc_ht=scontent.fcmn5-2.fna&oh=00_AT9eVKpM5wUuhJ7qULMN26LtOSZ0En4o1d84DCbPpQenNA&oe=6334FF0E",
    Date: "12-02-2022",
  },
  {
    id: 2,
    title: "Haj mohammed benjelloun ...",
    arTitle: "...الحاج محمد بنجلون",
    img: "https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-6/306942332_5833513310043988_885819983185652640_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHXQdwVcuJQq_vB64WbYwrQop3pbft3QAOinelt-3dAA43ID_PSnE5bU7dEk5aJoduyqGyX0GEAUFnCmgb4W4v3&_nc_ohc=H1ORZL6pYVkAX8TnXvl&_nc_zt=23&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT_OSPvfirkoGlviTusKIOkOcp98Qa4_WEMjNkJtkUAuzw&oe=633576F6",
    Date: "12-02-2022",
  },
];

function Header({ locale }) {
  const [CurrentBg, setCurrentBg] = useState(0);

  const HandleSliderChange = (currentSlid) => {
    setCurrentBg(currentSlid);
  };

  const transitions = useTransition(CurrentBg, {
    key: CurrentBg,
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(1.1)" },
    config: { duration: 300 },

    exitBeforeEnter: true,
  });
  return (
    <StyledHeader>
      {transitions((style, i) => (
        <div className={`Slide ${locale === "ar" ? "Ar_" : ""}`}>
          <div className="LeftHeader">
            <animated.img
              key={LastThreeNews[i].id}
              style={{ ...style }}
              src={LastThreeNews[i].img}
            />
          </div>

          <div className="RightHeader">
            <h1
              style={{ ...style }}
              className={`title ${locale === "ar" ? styles.ArTitle : ""}`}
            >
              {locale === "ar"
                ? LastThreeNews[CurrentBg].arTitle
                : LastThreeNews[CurrentBg].title}
            </h1>

            <div className="NewsCards">
              <div className="Container">
                <Swiper
                  // style={{ direction: "rtl" }}
                  initialSlide={CurrentBg}
                  act
                  // slidesPerGroup={1}
                  slidesPerView={3}
                  spaceBetween={0}
                  centeredSlides={true}
                  className="mySwiper"
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  onSlideChange={(swiper) => {
                    HandleSliderChange(swiper.realIndex);
                  }}
                  // loop={true}
                >
                  {LastThreeNews.map((Item) => {
                    return (
                      <SwiperSlide className="Slide" key={Item.id}>
                        {({ isActive }) => (
                          <div className={`Card ${isActive ? "actif" : ""}`}>
                            <img src={Item.img} />
                            <span className="Date">1d</span>
                            <span className="Ctg">Category</span>
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="Pagination">
            <div className="Dots">
              {LastThreeNews.map((Item) => {
                return (
                  <div
                    key={Item.id}
                    onClick={() => {
                      setCurrentBg(Item.id);
                    }}
                    className={`Dot ${CurrentBg === Item.id ? "actif" : ""}`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 70vh;
  @media (max-width: 768px) {
    height: 100vh;
  }

  .Slide {
    background-color: var(--Red);
    height: 70vh;
    width: 100%;
    color: white;
    display: flex;
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    .RightHeader {
      width: 50%;
      background-color: var(--Red);
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        width: 100%;
      }
      .title {
        position: absolute;
        left: -20%;
        top: 20%;
        width: 80%;
        @media (max-width: 768px) {
          left: 5%;
          top: -35%;
          width: 80%;
          font-size: 1.7rem;
        }
      }
      .NewsCards {
        width: 100%;
        height: 240px;
        position: relative;
        .Container {
          padding: 10px 0px;
          left: -20%;
          width: auto;
          height: 100%;
          position: absolute;
          display: flex;
          margin-top: 30px;
          @media (max-width: 768px) {
            left: 0;
          }

          .mySwiper {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .Slide {
              max-width: 260px;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: transparent;
              @media (max-width: 768px) {
                max-width: 100%;
              }
              .Card {
                width: 260px;
                margin-right: 10px;
                height: 200px;
                background-color: white;
                border-radius: 8px;
                cursor: pointer;
                opacity: 0.5;
                overflow: hidden;
                position: relative;
                &:before {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                  background: linear-gradient(
                    180deg,
                    rgba(220, 5, 45, 0) 0%,
                    rgba(220, 5, 45, 0.7) 100%
                  );
                }
                img {
                  width: 100%;
                  transition: 1s ease-in-out;
                }
                .Date {
                  position: absolute;
                  z-index: 2;
                  bottom: 5px;
                  right: 5px;
                  font-weight: 100;
                }
                .Ctg {
                  position: absolute;
                  bottom: 5px;
                  left: 5px;
                  font-weight: 100;
                  z-index: 2;
                }
              }
              .Card.actif {
                opacity: 1;
                /* transform: scale(1.05); */
                transition: 0.2s ease-in-out;
                &:hover {
                  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
                  img {
                    transform: scale(1.2);
                  }
                }
              }
            }
          }
        }
      }
    }
    .LeftHeader {
      will-change: opacity;
      width: 50%;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: left;
      align-items: center;
      position: relative;
      background-position: center;
      background-size: cover;
      @media (max-width: 768px) {
        width: 100%;
      }
      img {
        min-width: 100%;
        /* transition: 3s all;
        transform: scale(1.2); */
      }
      img.Active {
        /* animation: scale 3s ease forwards; */
      }

      &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        background: linear-gradient(
          90deg,
          rgba(220, 5, 45, 0) 0%,
          rgba(220, 5, 45, 1) 100%
        );
        @media (max-width: 768px) {
          background: linear-gradient(
            180deg,
            rgba(220, 5, 45, 0) 0%,
            rgba(220, 5, 45, 1) 100%
          );
        }
      }
    }

    .Pagination {
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      display: flex;
      justify-content: center;
      bottom: 130px;
      @media (max-width: 768px) {
        bottom: 60px;
        z-index: 8;
      }

      .Dots {
        display: flex;
        .Dot {
          width: 12px;
          height: 12px;
          border: 2px solid white;
          border-radius: 50%;
          margin: 0px 3px;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            background-color: white;
          }
        }
        .Dot.actif {
          background-color: white;
        }
      }
    }

    @media (max-width: 768px) {
      height: 80vh;
    }
  }
  .Slide.Ar_ {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .LeftHeader {
      &:after {
        background: linear-gradient(
          270deg,
          rgba(220, 5, 45, 0) 0%,
          rgba(220, 5, 45, 1) 100%
        );

        @media (max-width: 768px) {
          background: linear-gradient(
            180deg,
            rgba(220, 5, 45, 0) 0%,
            rgba(220, 5, 45, 1) 100%
          );
        }
      }
    }
    .RightHeader {
      .title {
        left: unset;
        right: -20%;
        @media (max-width: 768px) {
          right: 5%;
          top: -35%;
          width: 80%;
          font-size: 1.7rem;
          line-height: 40px;
        }
      }
      .NewsCards {
        .Container {
          left: unset;
          right: -20%;
        }
      }
    }
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.2);
    }
  }
`;

export default Header;
