import styled from "styled-components";

export default function MainCard({ title, desc, img, date }) {
  return (
    <StyledMainCard>
      <div className="ImgPrev">
        <img src={img} />
      </div>

      <div className="Content">
        <h1>{title}</h1>
        <p>{desc}</p>

        <div className="Bottom">
          <span>{date}</span>
          <div className="Line"></div>
          <span>News</span>
        </div>
      </div>
    </StyledMainCard>
  );
}

const StyledMainCard = styled.div`
  height: 350px;
  width: 50%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin: 1px 10px;
  border: 3px solid white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  display: flex;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0px;
    flex-direction: column;
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .ImgPrev {
    background-color: #2b2b2b;
    height: 100%;
    overflow: hidden;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: #2b2b2b;
      background-image: url("/assets/Media/Logos/LogoWhite.png");
      background-position: center;
      background-repeat: no-repeat;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 60%;
    }
    img {
      height: 100%;
      transition: 1.1s ease-in-out;
      z-index: 2;
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .Content {
    width: 60%;
    display: flex;
    text-align: left;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
      height: 200px;
    }

    h1 {
      font-size: 1.4rem;
      margin-bottom: 0px;
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
    .Bottom {
      display: flex;
      margin-top: auto;
      span {
        font-weight: 100;
      }
      .Line {
        width: 1px;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(150, 150, 150, 0) 0%,
          rgba(150, 150, 150, 1) 50%,
          rgba(150, 150, 150, 0) 100%
        );
        opacity: 0.5;
        margin: 0px 10px;
      }
    }
  }
`;
