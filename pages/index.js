import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
//Import Components
import Head from "next/head";
import Header from "../components/Main/Header/Header";
import News from "../components/Main/News/News.js";
import Titles from "../components/Main/Titles/Titles";
import Players from "../components/Main/Players/Players";
import Title from "../components/Title/Title";
import styles from "../styles/Home.module.css";
import Sponsors from "../components/Sponsors/Sponsors";
import TopNav from "../components/Navbar/TopNav";
import Matches from "../components/Main/Matches/Matches";
import UpComingGames from "../components/Main/UpCommingGames/UpComingGames";
import Shop from "../components/Main/Shop/Shop";

//I18N
import useTranslation from "next-translate/useTranslation";

export const getStaticProps = async () => {
  //GettingNextGameData
  const NextGameData = await fetch(
    `https://api.sofascore.com/api/v1/team/36268/events/next/0`
  )
    .then((response) => response.json())
    .then((data) => {
      return fetch(
        `https://api.sofascore.com/api/v1/event/${data.events[0].id}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  //GettingLastGameData
  const LastGameData = await fetch(
    "https://api.sofascore.com/api/v1/team/36268/events/last/0"
  )
    .then((response) => response.json())
    .then((data) => {
      return fetch(
        `https://api.sofascore.com/api/v1/event/${
          data.events[data.events.length - 1].id
        }`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return {
    props: { NextGame: NextGameData, Lastgame: LastGameData },
  };
};

export default function Home({ NextGame, Lastgame }) {
  const [isNextGameLive, setisNextGameLive] = useState(false);
  const [DisplayedGame, setDisplayedGame] = useState();

  //GetCurrentLocale
  const router = useRouter();
  const CurrentLocale = router.locale;

  //I18N
  let { t } = useTranslation();

  useEffect(() => {
    const HandleShowedGame = async () => {
      const currentTimeStamp = new Date(Date.now());
      //GetNextAndLastGame
      const NextGame_ = NextGame;
      const LastGame_ = Lastgame;
      //CalcTime;
      const GameStartTime = TimeStampToDate(LastGame_.event.startTimestamp);
      const GameEndTime = TimeStampToDate(
        LastGame_.event.startTimestamp + 3 * 3600
      );
      if (
        currentTimeStamp >= GameStartTime &&
        currentTimeStamp <= GameEndTime
      ) {
        setisNextGameLive(true);
        setDisplayedGame(LastGame_);
      } else {
        setDisplayedGame(NextGame_);
      }
    };
    HandleShowedGame();
  }, []);

  const TimeStampToDate = (TimeStamp_) => {
    var timestamp = TimeStamp_;
    var date = new Date(timestamp * 1000 + 60 * 60); //60*60 =360
    return date;
  };

  return (
    <>
      <Header />
      <Matches
        DisplayedGame={DisplayedGame}
        isLive={isNextGameLive}
        locale={CurrentLocale}
        NextMatchText={t("main:NextMatchText")}
        StandingText={t("main:StandingText")}
      />
      <Title
        text={t("main:NewsTitle")}
        show
        href="news"
        hrefText={t("main:HrefText")}
        locale={CurrentLocale}
      />
      <News />
      <Title text={t("main:HonoursTitle")} locale={CurrentLocale} />
      <Titles locale={CurrentLocale} />
      <Title text={t("main:StoreTitle")} locale={CurrentLocale} />
      <Shop />
      <Title
        text={t("main:WydadPlayersTitle")}
        show
        href="football/players"
        hrefText={t("main:HrefText")}
        locale={CurrentLocale}
      />
      <Players locale={CurrentLocale} />
      <Sponsors locale={CurrentLocale} Title={t("main:Our Partners")} />
    </>
  );
}
