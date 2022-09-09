import { useState, useEffect } from "react";
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
  return (
    <>
      <Header />
      <Matches NextGameData={NextGame} LastGameData={Lastgame} />
      <Title text="Wydad News" show href="news" />
      <News />
      <Title text="the most titled in morocco" />
      <Titles />
      <Title text={"Wydad Shop"} />
      <Shop />
      <Title text="Wydad Players" show href="football/players" />
      <Players />
      <Sponsors />
    </>
  );
}
