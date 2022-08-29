import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header.js";

function fantasy() {
  return (
    <StyledFantasy>
      <StyledBanner>
        <img src="./assets/Media/Extras/fantasy.jpg"></img>
        <h1></h1>
      </StyledBanner>
    </StyledFantasy>
  );
}

const StyledFantasy = styled.div`
  height: 100vh;
  padding: 100px 10%;
`;

const StyledBanner = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 70px;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  img {
    width: 100%;
  }
`;

export default fantasy;
