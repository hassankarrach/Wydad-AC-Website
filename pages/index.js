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

export default function Home() {
  return (
    <>
      <Header />
      <Matches />
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
