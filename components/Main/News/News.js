import styled from "styled-components";
import NewsCard from "./NewsCard";
import MainCard from "./MainCard";

const NewsData = [
  {
    id: 0,
    title: "Wydad Athletic Club Signs Houcine Ammouta as New Head Coach",
    desc: "Wydad Athletic Club (WAC) has announced today the signing of Houcine Ammouta as its new head coach... ",
    img: "https://www.moroccoworldnews.com/wp-content/uploads/2022/08/wydad-athletic-club-signs-houcine-ammouta-as-new-head-coach-800x533.jpg",
    date: "1d",
    imp: "true",
  },

  {
    id: 1,
    title: "Morocco's Wydad AC Wins its 3rd CAF Champions League Title",
    desc: " The biggest news from the conclusion of the Caf African Champions League final at the Stade Mohammed V stadium in Casablanca, Morocco was that it did not end in a farce... ",
    img: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1216x446:1218x444)/origin-imgresizer.eurosport.com/2022/05/30/3384604-69172348-2560-1440.jpg",
    date: "12W",
    imp: "true",
  },

  {
    id: 2,
    title: "RS Berkane Beats Wydad AC to Win its 2nd Throne Cup Title",
    desc: " Rabat - Football club Renaissance Sportive de Berkane today won the Moroccan Throne Cup final after beating Wydad Athletic Club (WAC) 2-3 in penalty kicks... ",
    img: "https://www.moroccoworldnews.com/wp-content/uploads/2022/07/rs-berkane-beats-wydad-ac-to-win-its-2nd-throne-cup-title-800x450.jpeg",
    date: "2W",
    imp: "FALSE",
  },

  {
    id: 3,
    title: "Holders Wydad Casablanca among 58 CAF",
    desc: " JOHANNESBURG, South Africa — Title-holders Wydad Casablanca from Morocco are among 58 clubs who have entered the 2022–2023 CAF Champions League, with the qualifying rounds draw to be made in Cairo on Tuesday... ",
    img: "https://imgy.pro/jordannews/960x588/8202290218865418488.jpg",
    date: "3W",
    imp: "FALSE",
  },

  {
    id: 4,
    title: "Holders Wydad Casablanca among 58 CAF",
    desc: " JOHANNESBURG, South Africa — Title-holders Wydad Casablanca from Morocco are among 58 clubs who have entered the 2022–2023 CAF Champions League, with the qualifying rounds draw to be made in Cairo on Tuesday... ",
    img: "https://e1.hespress.com/wp-content/uploads/2022/05/wac-raja.webp",
    date: "3W",
    imp: "FALSE",
  },

  {
    id: 5,
    title: "Holders Wydad Casablanca among 58 CAF",
    desc: " JOHANNESBURG, South Africa — Title-holders Wydad Casablanca from Morocco are among 58 clubs who have entered the 2022–2023 CAF Champions League, with the qualifying rounds draw to be made in Cairo on Tuesday... ",
    img: "https://mapsport.ma/wp-content/uploads/2020/10/RCA_WAC.jpg",
    date: "3W",
    imp: "FALSE",
  },
];

function News() {
  return (
    <StyledNews>
      <div className="MainNews">
        <MainCard
          title={NewsData[0].title}
          desc={NewsData[0].desc}
          img={NewsData[0].img}
          date={NewsData[0].date}
        />
        <MainCard
          title={NewsData[1].title}
          desc={NewsData[1].desc}
          img={NewsData[1].img}
          date={NewsData[1].date}
        />
      </div>
      <div className="SecNews">
        <NewsCard
          title={NewsData[2].title}
          desc={NewsData[2].desc}
          img={NewsData[2].img}
          date={NewsData[2].date}
        />
        <NewsCard
          title={NewsData[3].title}
          desc={NewsData[3].desc}
          img={NewsData[3].img}
          date={NewsData[3].date}
        />
        <NewsCard
          title={NewsData[4].title}
          desc={NewsData[4].desc}
          img={NewsData[4].img}
          date={NewsData[4].date}
        />
        <NewsCard
          title={NewsData[5].title}
          desc={NewsData[5].desc}
          img={NewsData[5].img}
          date={NewsData[5].date}
        />
      </div>
    </StyledNews>
  );
}

const StyledNews = styled.div`
  padding: 0px 10%;
  height: auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 5%;
  }
  /* --auto-grid-min-size: 22rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  column-gap: 10px;
  row-gap: 10px;
  grid-auto-flow: row; */

  .MainNews {
    display: flex;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .SecNews {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export default News;
