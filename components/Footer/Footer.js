import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "../../styles/Home.module.css";
//
//I18N
import { Router, useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

function Footer() {
  //GetCurrentLocale
  const router = useRouter();
  const CurrentLocale = router.locale;
  //I18N
  let { t } = useTranslation();

  return (
    <StyledFooter CurrentLocale={CurrentLocale}>
      <div className="FooterTop">
        <img src={"/assets/Media/Logos/WydadFull.png"} />
      </div>

      <div className="FooterBottom">
        <p>{t("main:Copyright")}</p>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: black;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url("/assets/Media/Textures/footer.webp");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .FooterTop {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
    }
  }

  .FooterBottom {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: white;
      font-size: 0.9rem;
      font-family: ${(props) =>
        props.CurrentLocale === "ar"
          ? "'Cairo', sans-serif;"
          : "var(--font-secondary)"};
    }
  }
`;

export default Footer;
