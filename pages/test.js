import React from "react";
import styled from "styled-components";
import cheerio from "cheerio";
import axios from "axios";
import Loader from "../components/Loader/Loader";

function test({ data }) {
  return <StyledTest>{data}</StyledTest>;
}

// export async function getStaticProps() {
//   const { data } = await axios.get(
//     "https://www.transfermarkt.com/cheick-comara/leistungsdaten/spieler/566687/saison//plus/1#gesamt"
//   );
//   const $ = cheerio.load(data);
//   const title = $(
//     "#main > main > header > div.data-header__headline-container > h1"
//   ).text();
//   const lastScraped = new Date().toISOString();

//   return {
//     props: { title, lastScraped },
//     revalidate: 1000, // rerun after 10 seconds
//   };
// }

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.sofascore.com/api/v1/tournament/3640/season/38546/standings/total",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "if-none-match": 'W/"5247f0da07"',
        "sec-ch-ua":
          '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://www.sofascore.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );

  const data = await res.json();

  return {
    props: { data },
    revalidate: 1000, // rerun after 10 seconds
  };
}

const StyledTest = styled.div``;

export default test;
