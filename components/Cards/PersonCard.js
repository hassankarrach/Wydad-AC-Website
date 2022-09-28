import React from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import { Router, useRouter } from "next/router";

function ManagementCard({ name, sub, img }) {
  //GetCurrentLocale
  const router = useRouter();
  const CurrentLocale = router.locale;
  return (
    <StyledManagementCard>
      <div className="ImgHolder">
        <img
          src={img}
          onError={(e) => (
            (e.target.onerror = null), (e.target.src = "./assets/Media/Pre.png")
          )}
        />
      </div>
      <div className="CardContent">
        <h1 className={`${CurrentLocale === "ar" ? styles.ArTitle : ""}`}>
          {name}
        </h1>
        <h2 className={`${CurrentLocale === "ar" ? styles.ArTitle : ""}`}>
          {sub}
        </h2>
      </div>
    </StyledManagementCard>
  );
}

const StyledManagementCard = styled.div`
  width: 250px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ebebeb;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  .ImgHolder {
    width: 100%;
    height: 65%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      position: relative;
      filter: grayscale(100%);
      transition: 0.4s ease-in-out;

      &:hover {
        filter: none;
      }
    }
  }
  .CardContent {
    padding: 0px 20px;
    height: 35%;
    text-align: left;
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-family: var(--font-secondary);
      font-size: 1.1rem;
      color: var(--grey);
    }
  }
`;

export default ManagementCard;
