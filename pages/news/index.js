import React from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import NewsCard from "../../components/Main/News/NewsCard";
import MainCard from "../../components/Main/News/MainCard";
import createImageUrlBuilder from "@sanity/image-url";
import { Router, useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://fr34sbmn.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};

function index({ posts }) {
  const imgBuilder = createImageUrlBuilder({
    projectId: "fr34sbmn",
    dataset: "production",
  });

  //GetCurrentLocale
  const router = useRouter();
  const CurrentLocale = router.locale;

  return (
    <StyledNews>
      <div className="Header">
        <h1 className={`${CurrentLocale === "ar" ? styles.ArTitle : ""}`}>
          {CurrentLocale === "en"
            ? "Wydad Ac latest News"
            : CurrentLocale === "fr"
            ? "Actualités du club"
            : "أخبار نادي الوداد الرياضي"}
        </h1>
      </div>
      <div className="NewsContainer">
        {posts.map((post) => {
          return (
            <NewsCard
              key={post._id}
              title={post.title}
              img={imgBuilder.image(post.mainImage)}
              date={post._createdAt}
              slug={post.slug.current}
            />
          );
        })}
      </div>
    </StyledNews>
  );
}

const StyledNews = styled.div`
  width: 100%;

  .NewsContainer {
    padding: 60px 10%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0rem;

    @media (max-width: 1140px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .Header {
    margin-top: 50px;
    width: 100%;
    height: 280px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 5%;
  }
`;

export default index;
