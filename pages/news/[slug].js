import React, { useEffect, useState } from "react";
import styled from "styled-components";
//Sanity
import createImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

function NewsContainer({ post }) {
  const [imageUrl, setImageUrl] = useState("");
  const [AuthorImg, setAuthorImg] = useState("");

  const image = post.mainImage;
  const AuthorImg_ = post.author.image;

  useEffect(() => {
    const imgBuilder = createImageUrlBuilder({
      projectId: "fr34sbmn",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
    setAuthorImg(imgBuilder.image(AuthorImg_));
  }, [image]);

  function timeConverter(Date) {
    var a = Date;
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + " " + month + " " + year + " | " + hour + ":" + min;
    return time;
  }

  return (
    <NewsItem>
      <div
        className="NewsBanner"
        style={{ backgroundImage: `url(${imageUrl && imageUrl})` }}
      >
        <h1>{post.title}</h1>
      </div>
      <div className="AuthorAndPostDate">
        <div className="Author">
          <div
            className="AuthorImg"
            style={{ backgroundImage: `url(${AuthorImg})` }}
          ></div>
          <span className="AuthorName">By {post.author.name}</span>
        </div>
        <span>{timeConverter(new Date(post._createdAt))}</span>
      </div>

      <div className="NewsDesc">
        <BlockContent blocks={post.body} />
      </div>

      <div className="RelatedNews"></div>
      <div className="RelatedKeywords"></div>
    </NewsItem>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]{
      title,
      _createdAt,
      mainImage,
      body[],
      author->
    }`
  );

  const url = `https://fr34sbmn.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post,
      },
    };
  }
};

const NewsItem = styled.div`
  height: auto;
  .NewsBanner {
    width: 100%;
    background-color: red;
    height: 80vh;
    padding: 20px 25%;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    color: white;
    @media (max-width: 768px) {
      padding: 20px 5%;
    }

    h1 {
      z-index: 2;
    }

    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      content: "";
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
  .AuthorAndPostDate {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25%;
    @media (max-width: 768px) {
      padding: 20px 5%;
    }
    span {
      font-weight: 100;
    }

    .Author {
      z-index: 2;
      color: black;
      padding: 4px 10px;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      .AuthorImg {
        background-color: red;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }

  .NewsDesc {
    padding: 20px 25%;

    @media (max-width: 768px) {
      padding: 20px 5%;
    }
  }
`;

export default NewsContainer;
