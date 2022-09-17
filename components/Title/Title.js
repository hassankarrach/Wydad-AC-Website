import styled from "styled-components";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
//Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SectionTitle({ text, show, href, hrefText, locale }) {
  return (
    <StyledSectionTitle
      className={`TtleSectionAnimation ${locale === "ar" ? "AR_" : ""}`}
    >
      <h1 className={`${styles.ArTitle}`}>{text}</h1>
      {show ? (
        <Link href={href}>
          <div className={`ViewMore ${locale === "ar" ? "AR_" : ""}`}>
            <span className={`${styles.ArText}`}>{hrefText}</span>
            <ArrowForwardIosIcon
              className={`IconView ${locale === "ar" ? "AR_" : ""}`}
              fontSize={"20"}
            />
          </div>
        </Link>
      ) : (
        ""
      )}
    </StyledSectionTitle>
  );
}

const StyledSectionTitle = styled.div`
  padding: 0px 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.AR_ {
    flex-direction: row-reverse;
    h1 {
      font-family: var(--Arabic);
      font-weight: 400;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 5%;
  }

  h1 {
    font-family: "Lemon/Milk light", sans-serif;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 2rem;
    padding: 20px 0px;
    color: #2a2a2a;
    @media (max-width: 768px) {
      font-size: 1.9rem;
    }
  }

  .ViewMore {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      color: var(--Red);
    }
    &.AR_ {
      flex-direction: row-reverse;
    }
    span {
      white-space: nowrap;
      margin-right: 5px;
      font-weight: 100;
      transition: 0.2s ease-in-out;
      &:hover {
        color: var(--Red);
      }
    }

    .IconView.AR_ {
      transform: rotate(3.142rad);
    }
  }

  /* h1:after {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 20%;
   }
   h1:after {
    left: 0.5em;
    margin-right: -50%;
   } */
`;

export default SectionTitle;
